// priority: 100

const MaidFoodNeedList = [
    "farmersdelight:mixed_salad",
    "farmersdelight:cooked_rice",
    "farmersdelight:salmon_roll",
    "farmersdelight:cod_roll",
    "farmersdelight:kelp_roll_slice",
    "farmersdelight:barbecue_stick",
    "farmersdelight:fruit_salad",
    "culturaldelights:eggplant_burger",
    "farmersdelight:dumplings",
    "farmersdelight:cabbage_rolls",
    "farmersdelight:bone_broth",
    "farmersdelight:vegetable_soup",
    "farmersdelight:ratatouille",
    "farmersdelight:egg_sandwich",
    "farmersdelight:bacon_sandwich",
    "farmersdelight:chicken_sandwich",
    "farmersdelight:hamburger",
    "farmersdelight:mushroom_rice",
    "farmersdelight:grilled_salmon",
    "farmersdelight:mutton_wrap",
    "farmersdelight:stuffed_potato",
    "farmersdelight:beef_stew",
    "farmersdelight:chicken_soup",
    "farmersdelight:fried_rice",
    "farmersdelight:pumpkin_soup",
    "farmersdelight:baked_cod_stew",
    "farmersdelight:bacon_and_eggs",
    "farmersdelight:roasted_mutton_chops",
    "farmersdelight:vegetable_noodles",
    "farmersdelight:stuffed_pumpkin_block",
    "farmersdelight:noodle_soup",
    "farmersdelight:squid_ink_pasta",
    "farmersdelight:roast_chicken_block",
    "farmersdelight:shepherds_pie_block",
    "farmersdelight:steak_and_potatoes",
    "farmersdelight:pasta_with_meatballs",
    "farmersdelight:pasta_with_mutton_chop",
    "farmersdelight:honey_glazed_ham_block",
    "farmersdelight:rice_roll_medley_block",
    "kubejs:mixed_salad_jam",
    "kubejs:cooked_rice_jam",
    "kubejs:salmon_roll_jam",
    "kubejs:cod_roll_jam",
    "kubejs:kelp_roll_slice_jam",
    "kubejs:barbecue_stick_jam",
    "kubejs:fruit_salad_jam",
    "kubejs:eggplant_burger_jam",
    "kubejs:dumplings_jam",
    "kubejs:cabbage_rolls_jam",
    "kubejs:bone_broth_jam",
    "kubejs:vegetable_soup_jam",
    "kubejs:ratatouille_jam",
    "kubejs:egg_sandwich_jam",
    "kubejs:bacon_sandwich_jam",
    "kubejs:chicken_sandwich_jam",
    "kubejs:hamburger_jam",
    "kubejs:mushroom_rice_jam",
    "kubejs:grilled_salmon_jam",
    "kubejs:mutton_wrap_jam",
    "kubejs:beef_stew_jam",
    "kubejs:chicken_soup_jam",
    "kubejs:fried_rice_jam",
    "kubejs:noodle_soup_jam",
    "kubejs:squid_ink_pasta_jam",
    "kubejs:roast_chicken_block_jam",
    "kubejs:shepherds_pie_block_jam",
    "kubejs:steak_and_potatoes_jam",
    "kubejs:pasta_with_meatballs_jam",
    "kubejs:honey_glazed_ham_block_jam",
    "kubejs:rice_roll_medley_block_jam"
];

NativeEvents.onEvent($InteractMaidEvent, event => {
    let player = event.player;
    let level = player.level
    let maid = event.maid;
    let item = player.getMainHandItem();
    let itemId = item.id;
    let Owner = maid.getOwner();
    if (!Owner) return;
    if (Owner != player) return;
    let MaidPersistentData = maid.persistentData;
    
    if (itemId === "fast:resonance_crystal") {
    if (!level.isClientSide()) {
    writeMaidAttributesToItem(item, maid)
    player.tell(Text.of("已共鸣女仆当前属性，可进行查看"))
    event.setCanceled(true);
    }
    }
    
    if (itemId === "minecraft:bowl") {
        if (!level.isClientSide()) {
        let randomIndex = Math.floor(Math.random() * MaidFoodNeedList.length);
        MaidPersistentData.FoodNeed = MaidFoodNeedList[randomIndex];
        item.count--;
        
        let langId = MaidPersistentData.FoodNeed.replace(':', '.')
        player.tell(Text.of("女仆现在想吃 ").append(Text.translatable(`item.${langId}`)));
        }
        event.setCanceled(true);
    }
    // 如果玩家拿着食物右键女仆
    else if (MaidPersistentData.FoodNeed && itemId === MaidPersistentData.FoodNeed) {
        if (!level.isClientSide()) {
        let langId = itemId.replace(':', '.')
        player.tell(Text.of("✓ 女仆很开心地吃掉了 ").append(Text.translatable(`item.${langId}`)));
        
        let Favorability = 2
        if (itemId.includes("jam")) {
        Favorability = 4
        }
        let ChatBubbleManager = maid.getChatBubbleManager()
        ChatBubbleManager.addTextChatBubble("fast.maid.tooltip.1")
        addMaidFavorability(maid, Favorability)
        
        item.count--;
        
        MaidPersistentData.FoodNeed = "noop"
        }
        event.setCanceled(true);
    }
});

function writeMaidAttributesToItem(item, maid) {
    let nbt = item.orCreateTag;
    nbt.MaidAttributes = {
        Str: maid.getAttribute('fast:str').getValue(),
        Agi: maid.getAttribute('fast:agi').getValue(),
        Int: maid.getAttribute('fast:int').getValue(),
        Vit: maid.getAttribute('fast:vit').getValue(),
        MaxHealth: maid.getAttribute('minecraft:generic.max_health').getValue(),
        Defense: maid.getAttribute('fast:defense').getValue(),
        Attack: maid.getAttribute('minecraft:generic.attack_damage').getValue(),
        CastTimeReduction: maid.getAttribute('irons_spellbooks:cast_time_reduction').getValue(),
        SpellPower: maid.getAttribute('irons_spellbooks:spell_power').getValue(),
        FireSpellPower: maid.getAttribute('irons_spellbooks:fire_spell_power').getValue(),
        IceSpellPower: maid.getAttribute('irons_spellbooks:ice_spell_power').getValue(),
        NatureSpellPower: maid.getAttribute('irons_spellbooks:nature_spell_power').getValue(),
        LightningSpellPower: maid.getAttribute('irons_spellbooks:lightning_spell_power').getValue(),
        EvocationSpellPower: maid.getAttribute('irons_spellbooks:evocation_spell_power').getValue(),
        HolySpellPower: maid.getAttribute('irons_spellbooks:holy_spell_power').getValue(),
        EnderSpellPower: maid.getAttribute('irons_spellbooks:ender_spell_power').getValue(),
        BloodSpellPower: maid.getAttribute('irons_spellbooks:blood_spell_power').getValue()
    };
}
