// priority: 1100

const $RenderNameTagEvent = Java.loadClass("net.minecraftforge.client.event.RenderNameTagEvent")
const $Font = Java.loadClass("net.minecraft.client.gui.Font")
const $Component = Java.loadClass("net.minecraft.network.chat.Component")
const $FastRenderUtil = Java.loadClass("com.main.fast.util.FastRenderUtil")

NativeEvents.onEvent($RenderNameTagEvent, event => {
    let entity = event.entity;
    if (!entity || !entity.isLiving()) return;
    
    let player = Client.player;
    if (!player) return;
    
    let hit = player.rayTrace(10, false);
    if (!hit || hit.entity !== entity) return;
    
    // 获取 items
    let list = global.getMobEntityEnderBonusItemList(entity);
    if (!list || list.length === 0) return;
    
    let lines = ["§f末影饰品:"];

    // 9 色循环
    const colors = ["§b","§c","§e","§a","§d","§9","§6","§3","§5"];
    
    let current = "";
    list.forEach((stack, idx) => {
        let color = colors[idx % 9];
        let langId = stack.getItem().getDescriptionId();
        let name = color + Text.translatable(langId).getString();

        if (idx % 3 === 0 && idx !== 0) {
            lines.push(current.trim());
            current = "";
        }
        current += name + " ";
    });

    if (current.trim().length > 0) lines.push(current.trim());

    // ---------- 渲染 ----------
    let pose = event.getPoseStack();
    let renderer = event.getEntityRenderer();
    let font = renderer.getFont();
    let offset = entity.getNameTagOffsetY() + 0.4;

    pose.pushPose();
    pose.translate(0, offset, 0);

    let dispatcher = renderer.entityRenderDispatcher;
    pose.mulPose(dispatcher.cameraOrientation());
    pose.scale(-0.025, -0.025, 0.025);

    let matrix = pose.last().pose();
    let light = event.getPackedLight();

    let alpha = Client.options.getBackgroundOpacity(0.25);
    let background = ((alpha * 255) << 24);
    let buffer = event.getMultiBufferSource();
    
    let lineHeight = 10;
    
    let totalLines = lines.length;
    let startY = - (totalLines - 1) * lineHeight;

    let y = startY;

    for (let line of lines) {
        let half = -font.width(line) / 2;

        $FastRenderUtil.FontdrawString(
            font,
            line,
            half,
            y,
            -1,
            false,
            matrix,
            buffer,
            $Font.DisplayMode.NORMAL,
            background,
            light
        );

        y += lineHeight;
    }

    pose.popPose();
});
