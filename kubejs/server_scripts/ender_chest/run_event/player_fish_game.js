// priority: 1000

const EnderBonusOnPlayerMinigameStarted = new EnderBonusHandler()
    .setInit((handler, event) => {
                let player = event.player;
                let PlayerSize = player.getAttribute('fast:bar_size').getValue();
                let PlayerLineStrength = player.getAttribute('fast:line_strength').getValue();
                let BarSize = event.getBarSize()
                // let LineStrength = event.getLineStrength()
                event.setBarSize(BarSize + PlayerSize)
                // event.setLineStrength(LineStrength + PlayerLineStrength)
            });
            
const EnderBonusOnPlayerMinigameEnded = new EnderBonusHandler()

NativeEvents.onEvent($StardewMinigameStartedEvent, event => {
    let player = event.player
    let uuid = player.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerMinigameStarted.run(itemIds, [event], player)
})

NativeEvents.onEvent($StardewMinigameEndedEvent, event => {
    let player = event.player
    let uuid = player.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerMinigameEnded.run(itemIds, [event], player)
})