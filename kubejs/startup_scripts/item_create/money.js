StartupEvents.registry("item", event => {
    // 铜币
    event.create("money:coin_copper", "basic");

    // 铁币
    event.create("money:coin_iron", "basic");

    // 金币
    event.create("money:coin_gold", "basic");

    // 钻石币
    event.create("money:coin_diamond", "basic");
    
    //绿宝石币
    event.create("money:coin_emerald", "basic");

    // 下界合金币
    event.create("money:coin_netherite", "basic");
    
    event.create("money:magic_transformation_coin", "basic")
    .tag('fast:right_clickable_item')
    .unstackable();
    
        // 魔法金币
    event.create("money:magic_coin_gold", "basic");

    // 魔法钻石币
    event.create("money:magic_coin_diamond", "basic");
    
    // 魔法绿宝石币
    event.create("money:magic_coin_emerald", "basic");

    // 魔法下界合金币
    event.create("money:magic_coin_netherite", "basic");
});