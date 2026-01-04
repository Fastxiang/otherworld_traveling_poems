
const $RenderLevelStageEvent = Java.loadClass("net.minecraftforge.client.event.RenderLevelStageEvent");
const $RenderLevelStageEvent$Stage = Java.loadClass("net.minecraftforge.client.event.RenderLevelStageEvent$Stage");
let $GuiGraphics = Java.loadClass("net.minecraft.client.gui.GuiGraphics");
const $Quaternionf = Java.loadClass("org.joml.Quaternionf")
const $Color = Java.loadClass("java.awt.Color")

// 五组固定偏移（相对 x/y/z 的偏移值）
const fixedOffsetList = [
  // 四个对称方向（对角线偏移，dx和dz绝对值相等）
  { dx:  0.7, dy: 0.4, dz:  0.7 },  // 右前
  { dx: -0.7, dy: 0.4, dz:  0.7 },  // 左前
  { dx: -0.7, dy: 0.4, dz: -0.7 },  // 左后
  { dx:  0.7, dy: 0.4, dz: -0.7 },  // 右后
  // 中心点（稍高位置）
  { dx:  0.0, dy: 0.7, dz:  0.0 }   // 中央
]

const ColorStringList = {
  "explosion": [255, 255, 255],
  "mob": [255, 255, 255],
  "player": [255, 255, 255],
  "exposure": [255, 170, 0],       // §6
  "fire_magic": [255, 85, 85],     // §c
  "ice_magic": [85, 85, 255],      // §9
  "nature_magic": [85, 255, 85],   // §a
  "lightning_magic": [85, 255, 255], // §b
  "blood_magic": [170, 0, 0],      // §4
  "holy_magic": [255, 255, 85],    // §e
  "ender_magic": [170, 85, 255],   // §5
  "evocation_magic": [0, 170, 170], // §3
  "arrow": [170, 170, 170],        // §7
  "fire_field": [255, 85, 85],     // §c
  "tacz.bullet": [85, 85, 85],     // §8
  "heartstop": [170, 0, 0],        // §4
  "poison_cloud": [0, 170, 0],     // §2
  "dragon_breath_pool": [255, 170, 0], // §6
  "danmaku": [255, 85, 255],       // §d
  "indirectMagic": [255, 85, 255], // §d
}

function checkNumberRange(number, min, max) {
    return Math.max(Math.min(number, max||1),min||0)
}

function rgbaColor(R, G, B, A) {
    return new $Color(checkNumberRange(R / 255), checkNumberRange(G / 255), checkNumberRange(B / 255), checkNumberRange(A / 100)).getRGB()
}

let damageList = {}
NetworkEvents.dataReceived("DamageRender", event => {
    let { data, player } = event
    let x = data[`x`];
    let y = data[`y`];
    let z = data[`z`];
    let bbHeight = data[`bbHeight`];
    let amount = data[`amount`];
    let uuid = data[`uuid`]
    let type = data[`color`]
    let color = ColorStringList[type] || [255, 255, 255]
    const offset = fixedOffsetList[Math.floor(Math.random() * fixedOffsetList.length)]
    damageList[uuid] = {
    x: x + offset.dx,
    y: y + bbHeight + offset.dy,
    z: z + offset.dz,
    life: 40,
    value: amount.toFixed(1),
    color: color
}
})

ClientEvents.tick(e => {
    let player = e.player
    for (let key in damageList) {
        if (!damageList[key].life-- > 0)
            delete damageList[key]
    }
})

NativeEvents.onEvent($RenderLevelStageEvent, e => {
    let { stage, camera, poseStack } = e
    let guiGraphics = new $GuiGraphics(Client, poseStack, Client.renderBuffers().bufferSource())
    if (stage != $RenderLevelStageEvent$Stage.AFTER_SOLID_BLOCKS) return
    poseStack.pushPose()
    poseStack.translate(-camera.position.x(), -camera.position.y(), -camera.position.z())
    for (let key in damageList) {
        let { x, y, z, value, life, color } = damageList[key]
        let [r, g, b] = color
        let alpha = 0
        alpha += ( life  + 1 ) * 4
        poseStack.pushPose()
        poseStack.translate(x, y, z)
        poseStack.mulPose(Client.entityRenderDispatcher.cameraOrientation())
        poseStack.scale(0.04, 0.04, 0.04)
        poseStack.mulPose(new $Quaternionf().rotateZ(JavaMath.PI))
        guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
            Client.font, String(value),
            -Client.font.width(String(value)) / 2, 0,
            rgbaColor(r, g, b, alpha),
            false
        )
        poseStack.popPose()
    }
    poseStack.popPose()
})