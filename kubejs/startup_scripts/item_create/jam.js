StartupEvents.registry("item", event => {
    event.create('mixed_salad_jam')
        .texture('farmersdelight:item/mixed_salad')
        .food(food => food.hunger(8).saturation(0.5))
        
    event.create('cooked_rice_jam')
        .texture('farmersdelight:item/cooked_rice')
        .food(food => food.hunger(8).saturation(0.6))
        
    event.create('salmon_roll_jam')
        .texture('farmersdelight:item/salmon_roll')
        .food(food => food.hunger(7).saturation(0.8))
        
    event.create('cod_roll_jam')
        .texture('farmersdelight:item/cod_roll')
        .food(food => food.hunger(7).saturation(0.8))
        
    event.create('kelp_roll_slice_jam')
        .texture('farmersdelight:item/kelp_roll_slice')
        .food(food => food.hunger(6).saturation(0.6))

    // 2铜币食物组的果酱版本
    event.create('barbecue_stick_jam')
        .texture('farmersdelight:item/barbecue_stick')
        .food(food => food.hunger(10).saturation(0.8))
        
    event.create('vegetable_soup_jam')
        .texture('farmersdelight:item/vegetable_soup')
        .food(food => food.hunger(8).saturation(0.8))
        
    event.create('fruit_salad_jam')
        .texture('farmersdelight:item/fruit_salad')
        .food(food => food.hunger(8).saturation(0.6))
        
    event.create('eggplant_burger_jam')
        .texture('culturaldelights:item/eggplant_burger')
        .food(food => food.hunger(10).saturation(0.8))
        
    event.create('dumplings_jam')
        .texture('farmersdelight:item/dumplings')
        .food(food => food.hunger(8).saturation(0.8))
        
    event.create('cabbage_rolls_jam')
        .texture('farmersdelight:item/cabbage_rolls')
        .food(food => food.hunger(8).saturation(0.7))
        
    event.create('bone_broth_jam')
        .texture('farmersdelight:item/bone_broth')
        .food(food => food.hunger(6).saturation(0.7))
        
    event.create('ratatouille_jam')
        .texture('farmersdelight:item/ratatouille')
        .food(food => food.hunger(10).saturation(0.8))

    // 3铜币食物组的果酱版本
    event.create('egg_sandwich_jam')
        .texture('farmersdelight:item/egg_sandwich')
        .food(food => food.hunger(10).saturation(0.8))
        
    event.create('bacon_sandwich_jam')
        .texture('farmersdelight:item/bacon_sandwich')
        .food(food => food.hunger(12).saturation(0.9))
        
    event.create('chicken_sandwich_jam')
        .texture('farmersdelight:item/chicken_sandwich')
        .food(food => food.hunger(12).saturation(0.9))
        
    event.create('hamburger_jam')
        .texture('farmersdelight:item/hamburger')
        .food(food => food.hunger(12).saturation(0.9))
        
    event.create('mushroom_rice_jam')
        .texture('farmersdelight:item/mushroom_rice')
        .food(food => food.hunger(11).saturation(0.8))
        
    event.create('grilled_salmon_jam')
        .texture('farmersdelight:item/grilled_salmon')
        .food(food => food.hunger(10).saturation(0.9))

    // 4铜币食物组的果酱版本
    event.create('mutton_wrap_jam')
        .texture('farmersdelight:item/mutton_wrap')
        .food(food => food.hunger(14).saturation(1.0))
        
    event.create('stuffed_potato_jam')
        .texture('farmersdelight:item/stuffed_potato')
        .food(food => food.hunger(14).saturation(1.0))
        
    event.create('beef_stew_jam')
        .texture('farmersdelight:item/beef_stew')
        .food(food => food.hunger(14).saturation(0.9))
        
    event.create('chicken_soup_jam')
        .texture('farmersdelight:item/chicken_soup')
        .food(food => food.hunger(14).saturation(0.9))
        
    event.create('fried_rice_jam')
        .texture('farmersdelight:item/fried_rice')
        .food(food => food.hunger(13).saturation(0.9))

    // 5铜币食物组的果酱版本
    event.create('noodle_soup_jam')
        .texture('farmersdelight:item/noodle_soup')
        .food(food => food.hunger(16).saturation(1.0))
        
    event.create('squid_ink_pasta_jam')
        .texture('farmersdelight:item/squid_ink_pasta')
        .food(food => food.hunger(16).saturation(1.0))
        
    event.create('roast_chicken_block_jam')
        .texture('farmersdelight:item/roast_chicken')
        .food(food => food.hunger(16).saturation(1.0))
        
    event.create('shepherds_pie_block_jam')
        .texture('farmersdelight:item/shepherds_pie')
        .food(food => food.hunger(16).saturation(1.0))

    // 6铜币食物组的果酱版本
    event.create('steak_and_potatoes_jam')
        .texture('farmersdelight:item/steak_and_potatoes')
        .food(food => food.hunger(18).saturation(1.2))
        
    event.create('pasta_with_meatballs_jam')
        .texture('farmersdelight:item/pasta_with_meatballs')
        .food(food => food.hunger(18).saturation(1.2))
        
    event.create('pasta_with_mutton_chop_jam')
        .texture('farmersdelight:item/pasta_with_mutton_chop')
        .food(food => food.hunger(18).saturation(1.2))
        
    event.create('honey_glazed_ham_block_jam')
        .texture('farmersdelight:item/honey_glazed_ham')
        .food(food => food.hunger(18).saturation(1.2))

    // 9铜币食物的果酱版本
    event.create('rice_roll_medley_block_jam')
        .texture('farmersdelight:item/rice_roll_medley_block')
        .food(food => food.hunger(22).saturation(1.4))
})