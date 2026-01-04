// priority: 1000

const EnderBonusOnPlayerExposureModifyFrameData = new EnderBonusHandler()
const EnderBonusOnPlayerExposureShutterOpening = new EnderBonusHandler()

ExposureEvents.modifyFrameData(event => {
    let player = event.player;
    if (!player) return;
    let uuid = player.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerExposureModifyFrameData.run(itemIds, [event], player)
})

ExposureEvents.shutterOpening(event => {
    let player = event.player;
    let uuid = player.uuid
    if (!player) return;
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerExposureShutterOpening.run(itemIds, [event], player)
})
