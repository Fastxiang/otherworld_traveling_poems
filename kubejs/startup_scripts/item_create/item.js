// priority: 900

StartupEvents.registry("item", event => {
    // 创建教程图标物品
    event.create("nv_pu_jiao_cheng", "basic");
    event.create("fast:closegui", "basic")
        .texture('minecraft:item/stick');
        
    event.create("fast:roguelike_reward", "basic")
    event.create("fast:roguelike_shop", "basic")
    event.create("fast:roguelike_boss", "basic")
    event.create("fast:potential_reverter", "basic")
    
    event.create("fast:blue_realm", "basic")
        .tag('fast:right_clickable_item');
    
    
    event.create("fast:initial_item", "basic")
    
for (let i = 1; i <= 50; i++) {
    event.create(`fast:instance_pass${i}`, 'basic')
        .texture('fast:item/instance_pass')
        .tag('fast:instance_pass');
}

for (let i = 1; i <= 12; i++) {
    if (i !== 2 || i !== 3) {
    event.create(`fast:the_card${i}`, 'basic')
        .tag('fast:ender_item')
        .tag('fast:card')
        .unstackable();
    } else {
    event.create(`fast:the_card${i}`, 'basic')
        .tag('fast:card')
        .unstackable();
        }
}

const getKeyTexture = (i) => {
    if (
        (i >= 1 && i <= 5) ||
        i === 9 ||  // 1-5
        i === 20 ||            // 20
        (i >= 28 && i <= 33) ||
        (i >= 35 && i <= 38)  //28-33
    ) {
        return 'fast:item/key2';
    }
    return 'fast:item/key4';
};

for (let i = 1; i <= 50; i++) {
    event.create(`fast:key${i}`, 'basic')
        .texture(getKeyTexture(i))
}
         
    event.create("fast:bule_gem", "basic")
        .unstackable();
        
    event.create("fast:str_gem", "basic")
        .tag('fast:maid_bauble')
        .unstackable();
        
    event.create("fast:agi_gem", "basic")
        .tag('fast:maid_bauble')
        .unstackable();
        
    event.create("fast:int_gem", "basic")
        .tag('fast:maid_bauble')
        .unstackable();
        
    event.create("fast:vit_gem", "basic")
        .tag('fast:maid_bauble')
        .unstackable(); 
         
    event.create("fast:treasure_bait", "basic")
        .unstackable();
        
    event.create("fast:treasure_hoarder", "basic")
        .unstackable();
        
    event.create("fast:the_hero_fishing_rod", "basic")
        .tag('fast:maid_bauble')
        .unstackable();
         
    // 铁戒指
    event.create("fast:iron_ring")
        .unstackable()
        .tag('curios:ring')
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
                .modifyAttribute("fast:str", 'fast:iron_ring', 10, 'addition')
        );
    
    // 金戒指
    event.create("fast:gold_ring")
        .unstackable()
        .tag('curios:ring')
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
                .modifyAttribute("fast:str", 'fast:gold_ring', 20, 'addition')
        );
    
    // 钻石戒指
    event.create("fast:diamond_ring")
        .unstackable()
        .tag('curios:ring')
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
                .modifyAttribute("fast:str", 'fast:diamond_ring', 30, 'addition')
        );
    
    // 黄铜戒指
    event.create("fast:brass_ring")
        .unstackable()
        .tag('curios:ring')
        .tag('fast:mechanic')
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
                .modifyAttribute("minecraft:generic.attack_damage", 'fast:brass_ring', 0.1, 'multiply_base')
        );
        
    event.create("fast:riftsong_edge", "basic")
         .tag('fast:ender_item')
         .tag('fast:spirit_blade')
         .unstackable();
         
    event.create("fast:resonance_crystal", "basic")
         .tag('fast:right_clickable_item')
         .unstackable();
         
    event.create("fast:card_box", "basic")
    
    event.create("fast:deepblue_shard", "basic")
         .unstackable();
    
    event.create("fast:deepblue_crystal", "basic")
         .unstackable();
         
    event.create("fast:ammo_drive", "basic")
         .tag('fast:mechanic')
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:compassionate_heart", "basic")
         .tag('fast:ender_item')
         .unstackable();
    
    event.create("fast:justice_shield", "basic")
         .tag('fast:maid_bauble')
         .unstackable();
         
    event.create("fast:recoil_musket", "basic")
         .unstackable();
         
    event.create("fast:magic_sword", "basic")
         .unstackable();
         
    event.create("fast:berserker_bow", "basic")
         .unstackable();
         
    event.create("fast:justice_staff", "basic")
         .unstackable();
         
    event.create("fast:shining_beacon", "basic")
         .tag('fast:mechanic')
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:maid_food_auto_sell_token", "basic")
         .tag('fast:maid_bauble')
         .tag('fast:right_clickable_item')
         .unstackable();
         
    event.create("fast:apprentice_staff", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:raffle_blind_box", "basic");
    event.create("fast:instance_blind_box", "basic");
        
    event.create("fast:lethal_shutter", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:thunderbrand_magazine", "basic")
         .tag('fast:mechanic')
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:precision_pouch", "basic")
         .tag('fast:mechanic')
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:picture_me", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:blazing_judgement", "basic")
         .tag('fast:blaze')
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:phantom_halberd", "basic")
         .unstackable();
         
    event.create("fast:grimoire_of_mana_reaping", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:fire_magic_shard", "basic")
         .tag('fast:ender_item')
         .tag('fast:blaze')
         .unstackable();
         
    event.create("fast:ice_magic_shard", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:nature_magic_shard", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:lightning_magic_shard", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:source_of_venom", "basic")
         .unstackable();
         
    event.create("fast:blood_magic_shard", "basic")
         .tag('fast:ender_item')
         .tag('fast:blood_rite')
         .unstackable();
         
    event.create("fast:holy_magic_shard", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:ender_magic_shard", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:evocation_magic_shard", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:fate_gem_strength", "basic")
         .unstackable();
         
    event.create("fast:fate_gem_agility", "basic")
         .unstackable();
         
    event.create("fast:fate_gem_vitality", "basic")
         .unstackable();
         
    event.create("fast:fate_gem_intelligence", "basic")
         .unstackable();
        
    event.create("fast:shadow_assassin_cloak", "basic")
         .tag('fast:ender_item')
         .unstackable()
         .tag('fast:shadow');
         
    event.create("fast:shadow_dagge", "basic")
         .tag('fast:ender_item')
         .unstackable()
         .tag('fast:shadow');
         
    event.create("fast:branch", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:potential_paper", "basic");
         
    event.create("fast:the_hero_shield", "basic")
         .unstackable()
         .tag('fast:ender_item')
         .tag('fast:maid_bauble')
         .tag('fast:hero');
         
    event.create("fast:the_hero_sword", "basic")
         .unstackable()
         .tag('fast:ender_item')
         .tag('fast:maid_bauble')
         .tag('fast:hero');
         
    event.create("fast:the_hero_bow", "basic")
         .unstackable()
         .tag('fast:ender_item')
         .tag('fast:maid_bauble')
         .tag('fast:hero');
         
    event.create("fast:the_hero_staff", "basic")
         .unstackable()
         .tag('fast:ender_item')
         .tag('fast:maid_bauble')
         .tag('fast:hero');
         
    event.create("fast:the_hero_dice", "basic")
         .unstackable()
         .tag('fast:hero');
         
    event.create("fast:the_hero_card", "basic")
         .unstackable()
         .tag('fast:card')
         .tag('fast:ender_item')
         .tag('fast:hero');
         
    event.create("fast:overcharged_mana_flask", "basic")
         .tag('fast:ender_item')
         .unstackable();
         
    event.create("fast:wooden_craftsman_hammer", "basic")
         .tag('fast:ender_item')
         .tag('fast:mechanic')
         .unstackable();
         
    event.create("fast:craftsman_hammer_cast", "basic")
         .unstackable();
         
    event.create("fast:bowl_cast", "basic")
         .unstackable();
         
    // 烈焰碎片
    event.create("fast:blaze_shard", "basic")
        .unstackable()
        .tag('fast:blaze');
        
    event.create("fast:blaze_scroll", "basic")
        .unstackable()
        .tag('fast:blaze');
        
    event.create("fast:ender_scroll", "basic")
        .unstackable();
    
    event.create("fast:blaze_necklace", "basic")
        .unstackable()
        .tag('fast:blaze');
        
    event.create("fast:ice_scroll", "basic")
        .unstackable()
        
    event.create("fast:sword_soul", "basic")
        .tag('fast:spirit_blade')
        .unstackable()
        
    event.create("fast:shadow_chaser", "basic")
        .tag('fast:spirit_blade')
        .unstackable()

    event.create("fast:soul_pact", "basic") 
        .tag('fast:spirit_blade')
        .unstackable()

    event.create("fast:realm_splitter", "basic") 
        .tag('fast:spirit_blade')
        .unstackable()

    event.create("fast:spirit_surge", "basic") 
        .tag('fast:spirit_blade')
        .unstackable()

    event.create("fast:demon_caller", "basic") 
        .tag('fast:spirit_blade')
        .unstackable()
        
    event.create("fast:sword_technique_decisive_strike", "basic")
        .unstackable()
        .tag('fast:sword_technique');
        
    event.create("fast:sword_technique_flying_sword_guard", "basic")
        .unstackable()
        .tag('fast:sword_technique');
        
    event.create("fast:sword_technique_fury_charge", "basic")
        .unstackable()
        .tag('fast:sword_technique');
        
    event.create("fast:sword_technique_four_strike", "basic")
        .unstackable()
        .tag('fast:sword_technique');
        
    // 原初之火
    event.create("fast:primal_fire", "basic")
        .unstackable()
        .tag('fast:blaze');
        
    event.create("fast:magic_shield", "basic")
        .unstackable();
        
    event.create("fast:godspeed_wield", "basic")
        .unstackable();
        
    event.create("fast:ender_necklace", "basic")
        .unstackable();
        
    event.create("fast:frost_staff", "basic")
        .unstackable();
        
    event.create("fast:iron_heart", "basic")
        .unstackable();
        
    event.create("fast:ender_brass_hand_sequenced_assembly", 'create:sequenced_assembly')
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:ender_brass_hand", 'basic')
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:diamond_craftsman_hammer", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:gold_craftsman_hammer", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:diamond_craftsman_hammer_cast", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:diamond_craftsman_hammer_cast_sequenced_assembly", 'create:sequenced_assembly')
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:gold_craftsman_hammer_cast", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:iron_craftsman_hammer", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:netherite_ingot_craftsman_hammer", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:brass_craftsman_hammer", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:netherite_ingot_craftsman_hammer_cast", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:netherite_ingot_craftsman_hammer_cast_sequenced_assembly", 'create:sequenced_assembly')
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:brass_craftsman_hammer_cast", "basic")
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:brass_craftsman_hammer_cast_sequenced_assembly", 'create:sequenced_assembly')
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:rose_quartz_gauntlets", "basic")
        .tag('fast:mechanic')
        .tag('fast:ender_item')
        .unstackable();
        
    event.create("fast:rose_quartz_gauntlets_sequenced_assembly", 'create:sequenced_assembly')
        .tag('fast:mechanic')
        .tag('fast:ender_item')
        .unstackable();
        
    event.create("fast:water_precision_mechanism", 'basic')
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:iron_precision_mechanism", 'basic')
        .tag('fast:mechanic')
        .unstackable();
        
    event.create("fast:spell_storage_sphere", "basic")
        .tag('fast:maid_bauble')
        .tag('fast:right_clickable_item')
        .unstackable();
        
    event.create("fast:magic_arrow", "basic")
        .unstackable();
        
    event.create("fast:magic_quiver", "basic")
        .unstackable();
        
    event.create("fast:megumin_magic_staff", "basic")
        .unstackable();
        
    event.create("fast:charge", "basic")
        .unstackable();
        
    event.create("fast:the_dice_of_fate", "basic")
        .unstackable();
        
    event.create("fast:iron_bowl", "basic")
        .tag('forge:bowl');
        
    event.create("fast:unfired_iron_bowl", "basic");
    
    event.create("fast:gold_bowl", "basic")
        .tag('forge:bowl');
        
    event.create("fast:unfired_gold_bowl", "basic");
    
    event.create("fast:blood_pact", "basic")
        .tag('fast:blood_rite')
        .unstackable();
    
    event.create("fast:blood_brand", "basic")
        .tag('fast:blood_rite')
        .unstackable();
        
    event.create("fast:blood_tally", "basic")
        .tag('fast:blood_rite')
        .unstackable();
        
    event.create("fast:blood_vitality", "basic")
        .tag('fast:blood_rite')
        .unstackable();
        
    event.create("fast:blood_oath", "basic")
        .tag('fast:blood_rite')
        .unstackable();
        
    event.create("fast:pot_pot", "basic")
        .unstackable();
    
    event.create("fast:dirt_platform", "basic")
        .tag('fast:right_clickable_item')
        .texture('minecraft:block/dirt');
    
    event.create("fast:uma_factor_item", "basic")
        .unstackable()
        .texture('umapyoi:item/uma_factor_item');
        
    event.create("fast:raffle_ticket");
         
    event.create("fast:fast_boots", "boots")
        .unstackable()
        .maxDamage(1500)
        .modifyAttribute(
            'minecraft:generic.movement_speed', 
            'add_speed', 
            0.5, 
            'multiply_base' 
        );
        
    event.create("fast:ender_pouch")
        .unstackable()
        .useAnimation('bow')
        .tag('fast:right_clickable_item')
        .useDuration(itemstack => 30)
        .use((level, player, hand) => {
        if (hand === "main_hand" && !player.isShiftKeyDown()) { 
        return true
        } else { 
        return false 
        }
        })
        .finishUsing((itemstack, level, entity) => {
            if (entity.player) {
                let player = entity
                global.EnderPouchEvent(player, itemstack)
            }
            return itemstack;
        });
        
    event.create("fast:daedalus_stormbow")
        .unstackable()
        .useAnimation('bow')
        .maxDamage(1500)
        .tag('forge:tools/bows')
        .tag('fast:right_clickable_item')
        .useDuration(itemstack => 10)
        .use((level, player, hand) => {
        if (hand === "main_hand") { 
        return true
        } else { 
        return false 
        }
        })
        .finishUsing((itemstack, level, entity) => {
        let ray = entity.rayTrace(64, false)
        if (ray.hit) {
        if (!level.isClientSide()) {
        global.DaedalusStormbowEvent(itemstack, level, entity, ray.hit)
        }
        }
            return itemstack;
        });
});