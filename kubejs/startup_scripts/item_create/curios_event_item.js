StartupEvents.registry("item", event => {
        // 铁之生命头饰
    event.create("fast:iron_head")
        .unstackable()
        .tag('curios:head')
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
        .onEquip((item1, contest, item2) => {
        const player = contest.entity()
        player.tell('穿上头饰')
        })
                .modifyAttribute("minecraft:generic.max_health", 'fast:iron_head', 10, 'addition')
        );
        
})