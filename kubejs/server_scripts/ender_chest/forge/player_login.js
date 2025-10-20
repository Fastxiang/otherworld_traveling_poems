PlayerEvents.loggedIn(event => {
    let player = event.player

    event.server.scheduleInTicks(40, (callback) => {
        if (player.persistentData.getInt('firstJoin') != 1) {
            player.inventory.clear()
            player.give(Item.of('ftbquests:book',))
            player.persistentData.putInt('firstJoin', 1)
        }
    })
})