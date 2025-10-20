
ItemEvents.rightClicked('stick', event => {
    let player = event.player;
    if (!player || !player.isAlive()) return;
    let { level, x, y, z } = player;
    let pos = player.position()
    let targetPos = null
    let ray = player.rayTrace(64, false)
})

