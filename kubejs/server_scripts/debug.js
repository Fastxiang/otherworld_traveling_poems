
ItemEvents.rightClicked('stick', event => {
    let player = event.player;
    if (!player || !player.isAlive()) return;
    let { level, x, y, z } = player;
    let pos = player.position()
    let targetPos = null
    let ray = player.rayTrace(64, false)
    let NewItem = Item.of("fast:the_hero_card")
    if (!NewItem.nbt) NewItem.nbt = {};
    NewItem.nbt.HeroCardData = {
        startTick: level.getTime(),
        duration: 500
    };
    player.give(NewItem)
})

