    // 为所有物品添加统一格式的提示信息
const Enderitems = [
        "fast:iron_ring",
        "fast:gold_ring", 
        "fast:diamond_ring",
        //"fast:brass_ring",
        "fast:iron_head",
        "fast:endless_battery1",
        "fast:endless_battery2",
        "fast:endless_battery3",
        "fast:endless_battery4",
        "fast:endless_battery5",
        "fast:blaze_shard",
        "fast:uma_factor_item",
        "fast:primal_fire",
        "fast:base_damage",
        "fast:count",
        "fast:damage_up",
        "fast:delay",
        "fast:explosion_radius",
        "fast:straight_projectile",
        "fast:firebolt",
        "fast:icicle",
        "fast:magic_missile",
        "fast:fireball",
        "fast:branch",
        "fast:blaze_scroll",
        "fast:blaze_necklace",
        "fast:the_hero_shield",
        "fast:the_hero_sword",
        "fast:the_hero_bow",
        "fast:the_hero_staff",
        "fast:wooden_craftsman_hammer",
        "fast:frost_staff",
        "fast:magic_arrow",
        "fast:megumin_magic_staff",
        "fast:magic_quiver",
        "fast:charge",
      //"fast:sword_technique_fury_charge",
        "fast:sword_technique_decisive_strike",
        "fast:magic_shield",
        "irons_spellbooks:fire_upgrade_orb",
        "irons_spellbooks:ice_upgrade_orb",
        "irons_spellbooks:lightning_upgrade_orb",
        "irons_spellbooks:holy_upgrade_orb",
        "irons_spellbooks:ender_upgrade_orb",
        "irons_spellbooks:blood_upgrade_orb",
        "irons_spellbooks:evocation_upgrade_orb",
        "irons_spellbooks:nature_upgrade_orb",
        "fast:godspeed_wield",
        "fast:spell_storage_sphere",
        "fast:shadow_dagge",
        "fast:ender_necklace",
        "fast:bule_gem",
        "fast:str_gem",
        "fast:agi_gem",
        "fast:int_gem",
        "fast:vit_gem",
        "fast:ice_scroll",
        "fast:iron_craftsman_hammer",
        "fast:gold_craftsman_hammer",
        "fast:diamond_craftsman_hammer",
        "fast:brass_craftsman_hammer",
        "fast:netherite_ingot_craftsman_hammer",
        "fast:iron_heart",
        "fast:ender_pouch",
        "fast:sword_technique_four_strike",
        "fast:iron_precision_mechanism",
        "fast:water_precision_mechanism",
        "fast:rose_quartz_gauntlets",
        "fast:rose_quartz_gauntlets_sequenced_assembly",
        "touhou_little_maid:fall_protect_bauble",
        "fast:ender_scroll",
        "fast:overcharged_mana_flask",
        "cataclysm:necklace_of_the_desert",
        "cataclysm:abyssal_sacrifice",
        "cataclysm:burning_ashes",
        "cataclysm:flame_eye",
        "cataclysm:void_eye",
        "cataclysm:abyss_eye",
        "cataclysm:mech_eye",
        "cataclysm:monstrous_eye",
        "cataclysm:cursed_eye",
        "cataclysm:desert_eye",
        "money:magic_transformation_coin",
        "irons_spellbooks:amethyst_resonance_charm",
        "fast:lethal_shutter",
        "fast:picture_me",
        "fast:grimoire_of_mana_reaping",
        "fast:fire_magic_shard",
        "fast:ice_magic_shard",
        "fast:nature_magic_shard",
        "fast:lightning_magic_shard",
        "fast:blood_magic_shard",
        "fast:holy_magic_shard",
        "fast:ender_magic_shard",
        "fast:evocation_magic_shard",
        "fast:blazing_judgement",
        "fast:riftsong_edge",
        "hmag:fortune_crystal_plus",
        "hmag:fortune_crystal",
        "fast:ender_brass_hand",
        "fast:maid_food_auto_sell_token",
        "fast:apprentice_staff",
        "fast:compassionate_heart",
        "fast:shining_beacon",
        "fast:shimmering_diamond",
        "fast:ammo_drive",
        "fast:thunderbrand_magazine",
        "fast:precision_pouch",
        "fast:custom_spell",
        "fast:resonance_crystal",
        "fast:daedalus_stormbow",
        "fast:justice_staff",
        "fast:magic_sword",
        "fast:berserker_bow",
        "fast:the_hero_dice",
        "cataclysm:storm_eye",
        "cataclysm:strange_key",
        "fast:dirt_platform",
        "fast:potential_reverter",
        "fast:blood_pact",
        "fast:blood_brand",
        "fast:blood_tally",
        "fast:blood_vitality",
        "fast:blood_oath",
        "fast:pot_pot",
        "fast:fate_gem_strength",
        "fast:fate_gem_vitality",
        "fast:fate_gem_intelligence",
        "fast:fate_gem_agility",
        "fast:sword_soul",
        "fast:shadow_chaser",
        "fast:soul_pact",
        "fast:realm_splitter",
        "fast:spirit_surge",
        "fast:demon_caller",
        "fast:sword_technique_flying_sword_guard",
        "minecraft:compass",
        "minecraft:sea_lantern",
        "fast:blue_realm", 
        "hmag:evil_crystal_fragment",
        "fast:treasure_hoarder",
]

const NeedDeleteItem = [
        //"mokels_bossfight_saphyra:nameless_gatekeeper_remembrance",
        //"mokels_bossfight_saphyra:saphyra_remembrance",
        "tarotcards:the_hanged_man",
        "tarotcards:the_fool",
        "tarotcards:the_emperor",
        "tarotcards:the_chariot",
        "tarotcards:the_high_priestess",
        "tarotcards:the_devil",
        "tarotcards:strength",
        "tarotcards:the_lovers",
        "tarotcards:the_empress",
        "tarotcards:the_hermit",
        "tarotcards:wheel_of_fortune",
        "tarotcards:temperance",
        "tarotcards:the_tower",
        "tarotcards:the_moon",
        "tarotcards:the_sun",
        "tarotcards:the_magician",
        "tarotcards:death",
        "tarotcards:the_star",
        "tarotcards:the_world",
        "tarotcards:the_hierophant",
        "tarotcards:justice",
        "tarotcards:judgement",
        "fast:shadow_assassin_cloak",
        "tconstruct:encyclopedia",
]

const percentAttributes = [
    'SpellPower',
    'FireSpellPower',
    'IceSpellPower',
    'NatureSpellPower',
    'LightningSpellPower',
    'EvocationSpellPower',
    'HolySpellPower',
    'EnderSpellPower',
    'BloodSpellPower',
    'CastTimeReduction'
];

const MaidAttributeOrder = [
    'Str', 'Agi', 'Int', 'Vit',
    'MaxHealth', 'Defense', 'Attack',
    'CastTimeReduction',
    'SpellPower',
    'FireSpellPower', 'IceSpellPower', 'NatureSpellPower',
    'LightningSpellPower', 'EvocationSpellPower', 'HolySpellPower',
    'EnderSpellPower', 'BloodSpellPower'
];

const tagList = {
    "fast:ender_item": "item.type.ender_item",
    "fast:maid_bauble": "item.type.maid_bauble",
    "fast:mechanic": "item.type.mechanic",
    "fast:blaze": "item.type.blaze",
    "fast:hero": "item.type.hero",
    "fast:right_clickable_item": "item.type.right_clickable_item",
    "fast:spirit_blade": "item.type.spirit_blade",
    "fast:blood_rite": "item.type.blood_rite",
}

const KeywordReplacements = {
    "fast:fire_magic_shard": [
    "tooltip.keyword.blazing_effect",
    ],
    "fast:blaze_scroll": [
    "fast.type.damagetype.fire_magic",
    "tooltip.keyword.blazing_effect",
    ],
    "fast:blaze_necklace": [
    "tooltip.keyword.blazing_effect",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    ],
    "fast:primal_fire": [
    "fast.type.damagetype.fire_magic",
    "tooltip.keyword.blazing_effect",
    ],
    "fast:the_hero_sword": [
    "tooltip.keyword.anger_value",
    "fast.type.damagetype.player",
    "tooltip.keyword.percent.e",
    "fast.type.damagetype.holy_magic",
    "tooltip.keyword.percent.6",
    ],
    "fast:the_hero_staff": [
    "fast.type.damagetype.player",
    "fast.type.damagetype.ender_magic",
    ],
    "fast:ice_magic_shard": [
    "fast.type.damagetype.ice_magic",
    ],
    "fast:the_hero_shield": [
    "tooltip.keyword.defensive",
    "fast.type.damagetype.ender_magic",
    "tooltip.keyword.taunt_effect",
    ],
    "fast:the_hero_bow": [
    "fast.type.damagetype.arrow",
    ],
    "tarotcards:the_hanged_man": [
    "tooltip.keyword.the_hanged_man",
    ],
    "cataclysm:necklace_of_the_desert": [
    "fast.type.damagetype.player",
    ],
    "fast:nature_magic_shard": [
    "fast.type.damagetype.poison_cloud",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    ],
    "cataclysm:burning_ashes": [
    "tooltip.keyword.blazing_effect",
    ],
    "cataclysm:cursed_eye": [
    "fast.type.damagetype.nature_magic",
    "tooltip.keyword.percent.e",
    "fast.type.damagetype.poison_cloud",
    "tooltip.keyword.percent.e",
    ],
    "fast:ender_scroll": [
    "fast.type.damagetype.ender_magic",
    ],
    "fast:frost_staff": [
    "fast.type.damagetype.ice_magic",
    ],
    "fast:ammo_drive": [
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    "fast.type.damagetype.tacz.bullet",
    "tooltip.keyword.percent.e",
    ],
    "fast:thunderbrand_magazine": [
    "fast.type.damagetype.tacz.bullet",
    ],
    "fast:ender_necklace": [
    "fast.type.damagetype.ender_magic",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    ],
    "fast:magic_quiver": [
    "fast.type.damagetype.evocation_magic",
    ],
    "fast:apprentice_staff": [
    "fast.type.damagetype.player",
    ],
    "fast:compassionate_heart": [
    "fast.type.damagetype.holy_magic",
    ],
    "fast:riftsong_edge": [
    "fast.type.damagetype.player",
    "fast.type.damagetype.mob",
    "fast.type.damagetype.ender_magic",
    "fast.type.damagetype.blood_magic",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    ],
    "fast:blazing_judgement": [
    "fast.type.damagetype.fire_magic",
    "tooltip.keyword.percent.e",
    ],
    "celestisynth:celestial_core": [
    "fast.type.damagetype.player",
    ],
    "fast:blaze_shard": [
    "item.type.blaze",
    ],
    "tarotcards:the_fool": [
    "tooltip.keyword.the_fool",
    ],
    "tarotcards:wheel_of_fortune": [
    "fast.type.damagetype.evocation_magic",
    "fast.type.damagetype.player",
    "fast.type.damagetype.fire_magic",
    "fast.type.damagetype.ice_magic",
    "fast.type.damagetype.nature_magic",
    "fast.type.damagetype.lightning_magic",
    "fast.type.damagetype.blood_magic",
    "fast.type.damagetype.holy_magic",
    "fast.type.damagetype.ender_magic",
    "fast.type.damagetype.arrow",
    ],
    "tarotcards:the_hierophant": [
    "fast.type.damagetype.holy_magic",
    "tooltip.keyword.percent.e",
    ],
    // "fast:sword_technique_four_strike": [
    // "tooltip.keyword.percent.e",
    // "fast.type.damagetype.player",
    // "tooltip.keyword.percent.e",
    // ],
    // "fast:sword_technique_decisive_strike": [
    // "fast.type.damagetype.player",
    // "tooltip.keyword.percent.e",
    // "tooltip.keyword.percent.e",
    // ],
    "fast:justice_staff": [
    "fast.type.damagetype.player",
    "tooltip.keyword.percent.e",
    ],
    "fast:magic_sword": [
    "tooltip.keyword.percent.e",
    "tooltip.keyword.the_hanged_man",
    "tooltip.keyword.percent.e",
    ],
    "fast:berserker_bow": [
    "fast.type.damagetype.player",
    ],
    "cataclysm:storm_eye": [
    "fast.type.damagetype.ice_magic",
    "fast.type.damagetype.lightning_magic",
    ],
    "cataclysm:strange_key": [
    "fast.type.damagetype.player",
    ],
    "fast:blood_pact": [
    "fast.type.damagetype.blood_magic",
    "tooltip.keyword.percent.e",
    ],
    "fast:blood_brand": [
    "fast.type.damagetype.blood_magic",
    "tooltip.keyword.percent.e",
    ],
    "fast:blood_oath": [
    "fast.type.damagetype.blood_magic",
    ],
    "fast:fate_gem_agility": [
    "fast.type.damagetype.tacz.bullet",
    ],
    "fast:sword_soul": [
    "fast.type.damagetype.mob",
    ],
    "fast:shadow_chaser": [
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
    "fast.type.damagetype.holy_magic",
    ],
    "fast:soul_pact": [
    "fast.type.damagetype.mob",
    ],
    "fast:realm_splitter": [
    "fast.type.damagetype.mob",
    "tooltip.keyword.percent.e",
    ],
    "fast:demon_caller": [
    "fast.type.damagetype.evocation_magic",
    ],
    "fast:source_of_venom": [
    "fast.type.damagetype.poison_cloud",
    "tooltip.keyword.toxic",
    ],
};

const ItemBonusOnlyMap = {
    'tarotcards:the_fool': 'theFoolPresent',
    'tarotcards:the_hanged_man': 'theHangedManPresent',
    'tarotcards:the_lovers': 'theLoversPresent',
    'tarotcards:the_chariot': 'theChariotPresent',
    'tarotcards:the_high_priestess': 'theHighPriestessPresent',
    'fast:uma_factor_item': 'umaFactorItemPresent',
    'tarotcards:the_devil': 'theDevilPresent',
    'tarotcards:strength': 'theStrengthPresent',
    'tarotcards:the_emperor': 'theEmperorPresent',
    'tarotcards:the_empress': 'theEmpressPresent',
    'tarotcards:the_hermit': 'HermitEffect',
    'tarotcards:wheel_of_fortune': 'wheelOfFortuneEffect',
    'tarotcards:temperance': 'theTemperancePresent',
    'tarotcards:the_tower': 'theTowerPresent',
    'tarotcards:the_moon': 'moonCardEffect',
    'tarotcards:the_sun': 'sunCardEffect',
    'tarotcards:death': 'deathCardEffect',
    'tarotcards:the_magician': 'magicianCardEffect',
    'tarotcards:judgement': 'theJudgmentPresent',
    'tarotcards:the_star': 'starCardEffect',
    'tarotcards:the_world': 'worldCardEffect',
    'tarotcards:justice': 'Justice',
    'tarotcards:the_hierophant' :'TheHierophant',
    'fast:shadow_assassin_cloak': 'shadowAssassinCloakPresent',
    'fast:blaze_necklace': 'FireNecklace',
    'fast:blaze_scroll': 'FireScroll',
    'fast:the_hero_sword': 'HeroSword',
    'fast:magic_shield': 'MagicShield',
    'fast:sword_technique_decisive_strike': 'SwordTechniqueDecisiveStrike',
    'tconstruct:encyclopedia': 'Encyclopedia',
    'fast:the_hero_staff': 'HeroStaff',
    'fast:the_hero_bow': 'HeroBow',
    'fast:the_hero_shield': 'HeroShield',
    'fast:the_hero_card': 'HeroCard',
    'fast:sword_technique_fury_charge': 'SwordTechniqueFuryCharge',
    'fast:sword_technique_four_strike': 'SwordTechniqueFourStrike',
    'fast:ender_necklace': 'EnderNecklace',
    'fast:magic_quiver': 'MagicQuiver',
    'fast:megumin_magic_staff': 'MeguminMagicStaff',
    'fast:frost_staff': 'FrostStaff',
    'fast:shadow_dagge': 'ShadowDagge',
    'fast:iron_heart': 'IronHeart',
    'fast:godspeed_wield': 'GodspeedWield',
    'fast:ice_scroll': 'IceScroll',
    'fast:bule_gem': 'BuleGem',
    'fast:brass_craftsman_hammer': 'BrassCraftsmanHammer',
    'fast:iron_precision_mechanism': 'IronPrecisionMechanism',
    'fast:water_precision_mechanism': 'WaterPrecisionMechanism',
    'touhou_little_maid:fall_protect_bauble': 'FallProtectBauble',
    'fast:ender_scroll': 'EnderScroll',
    'cataclysm:necklace_of_the_desert': 'NecklaceOfTheDesert',
    'cataclysm:abyssal_sacrifice': 'AbyssalSacrifice',
    'cataclysm:burning_ashes': 'IsOnfire',
    'cataclysm:flame_eye': 'FlameEye',
    'cataclysm:void_eye': 'VoidEye',
    'cataclysm:abyss_eye': 'AbyssEye',
    'cataclysm:mech_eye': 'MechEye',
    'cataclysm:monstrous_eye': 'MonstrousEye',
    'cataclysm:cursed_eye': 'CursedEye',
    'cataclysm:desert_eye': 'DesertEye',
    'fast:lethal_shutter': 'LethalShutter',
    'fast:picture_me': 'PictureMe',
    'fast:grimoire_of_mana_reaping': 'GrimoireOfManaReaping',
    'fast:fire_magic_shard': 'FireMagicShard',
    'fast:ice_magic_shard': 'IceMagicShard',
    'fast:nature_magic_shard': 'NatureMagicShard',
    'fast:lightning_magic_shard': 'LightningMagicShard',
    'fast:blood_magic_shard': 'BloodMagicShard',
    'fast:holy_magic_shard': 'HolyMagicShard',
    'fast:ender_magic_shard': 'EnderMagicShard',
    'fast:evocation_magic_shard': 'EvocationMagicShard',
    'fast:blazing_judgement': 'BlazingJudgement',
    'fast:riftsong_edge': 'RiftsongEdge',
    'hmag:fortune_crystal_plus': 'FortuneCrystalPlus',
    'fast:ender_brass_hand': 'EnderBrassHand',
    'fast:shimmering_diamond': 'ShimmeringDiamond',
    'fast:the_card2': 'TheCard2',
    'fast:the_card3': 'TheCard3',
    'fast:apprentice_staff': 'ApprenticeStaff',
    'fast:compassionate_heart': 'CompassionateHeart',
    'fast:shining_beacon': 'ShiningBeacon',
    'celestisynth:celestial_core': 'CelestialCore',
    'fast:ammo_drive': 'AmmoDrive',
    'fast:thunderbrand_magazine': 'ThunderbrandMagazine',
    'fast:precision_pouch': 'PrecisionPouch',
    'fast:justice_staff': 'JusticeStaff',
    'fast:magic_sword': 'MagicSword',
    'fast:berserker_bow': 'BerserkerBow',
    'fast:the_hero_dice': 'HeroDice',
    'cataclysm:storm_eye': 'StormEye',
    'cataclysm:strange_key': 'StrangeKey',
    'fast:blood_pact': 'BloodPact',
    'fast:blood_brand': 'BloodBrand',
    'fast:blood_tally': 'BloodTally',
    'fast:blood_vitality': 'BloodVitality',
    'fast:blood_oath': 'BloodOath',
    'fast:pot_pot': 'PotPot',
    'fast:fate_gem_strength': 'FateGemStrength',
    'fast:fate_gem_agility': 'FateGemAgility',
    'fast:fate_gem_intelligence': 'FateGemIntelligence',
    'fast:fate_gem_vitality': 'FateGemVitality',
    'fast:sword_soul': 'SwordSoul',
    'fast:shadow_chaser': 'ShadowChaser',
    'fast:soul_pact': 'SoulPact',
    'fast:realm_splitter': 'RealmSplitter',
    'fast:spirit_surge': 'SpiritSurge',
    'fast:demon_caller': 'DemonCaller',
    'fast:sword_technique_flying_sword_guard': 'SwordTechniqueFlyingSwordGuard',
};

let bonusConfig = []

const noopEnderItem = [
    "hmag:evil_crystal",
    "hmag:soul_powder",
    "hmag:ender_plasm",
    "hmag:ancient_stone",
    "hmag:lightning_particle",
    "hmag:insomnia_fruit",
    "hmag:insomnia_sword",
    "hmag:reinforcing_chain",
    "hmag:purification_cloth",
    "hmag:endless_pearl",
    "hmag:fire_bottle",
    "hmag:greedy_crystal_plus",
]

function NewItemBonusOnlyMap(item, key, modifiers) {
    ItemBonusOnlyMap[item] = key
    addEnderBonusAttribute(key, modifiers)
}

function addEnderBonusAttribute(key, modifiers) {
    bonusConfig.push({ key:key, modifiers:modifiers })
}

function registerItemBonusOnlyMap(item, modifiers) {
    let itemName = item.includes(':') ? item.split(':')[1] : item;
    
    let key = itemName
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    
    ItemBonusOnlyMap[item] = key;
    Enderitems.push(item)
    
    if (modifiers) {
        addEnderBonusAttribute(key, modifiers);
    }
    
}

registerItemBonusOnlyMap("fast:treasure_bait")
registerItemBonusOnlyMap("fast:the_hero_fishing_rod")
registerItemBonusOnlyMap("fast:source_of_venom")
registerItemBonusOnlyMap("fast:justice_shield")
addEnderBonusAttribute('GodspeedWield', [
  { attr: "irons_spellbooks:cast_time_reduction", value: 0.5, op: "multiply_base" },
  { attr: "minecraft:generic.attack_speed", value: 1.5, op: "multiply_base" },
  { attr: "minecraft:generic.movement_speed", value: 1.0, op: "multiply_base" },
])
addEnderBonusAttribute('AbyssalSacrifice', [
  { attr: 'minecraft:generic.max_health', value: -50, op: 'addition' },
  { attr: 'irons_spellbooks:spell_power', value: -0.2, op: 'multiply_base' },
  { attr: 'minecraft:generic.attack_damage', value: -0.2, op: 'multiply_base' }
])
addEnderBonusAttribute('Charge', [
  { attr: "irons_spellbooks:spell_power", value: 0.2, op: "multiply_base" },
  { attr: "irons_spellbooks:mana_regen", value: -0.2, op: "multiply_base" },
])
addEnderBonusAttribute('genericAttackBonus', [
  { attr: "minecraft:generic.attack_damage", value: 1, op: "addition" },
])
addEnderBonusAttribute('genericCritBonus', [
  { attr: "l2damagetracker:crit_rate", value: 0.01, op: "addition" },
])
addEnderBonusAttribute('genericStrBonus', [
  { attr: 'fast:str', value: 1, op: 'addition' },
])
addEnderBonusAttribute('genericIntBonus', [
  { attr: 'fast:int', value: 1, op: 'addition' },
])
addEnderBonusAttribute('genericAgiBonus', [
  { attr: 'fast:agi', value: 1, op: 'addition' },
])
addEnderBonusAttribute('genericVitBonus', [
  { attr: 'fast:vit', value: 1, op: 'addition' },
])
addEnderBonusAttribute('genericTecBonus', [
  { attr: 'fast:tec', value: 1, op: 'addition' },
])
addEnderBonusAttribute('genericAttackSpeedBonus', [
  { attr: 'minecraft:generic.attack_speed', value: 0.01, op: 'multiply_base' },
])
addEnderBonusAttribute('genericMaxHealthBonus', [
  { attr: 'minecraft:generic.max_health', value: 1, op: 'addition' },
])
addEnderBonusAttribute('genericPhysicalMasteryBonus', [
    { attr: 'fast:physical_mastery', value: 0.01, op: 'multiply_base' } 
])
addEnderBonusAttribute('genericSpellPowerBonus', [
    { attr: 'irons_spellbooks:spell_power', value: 0.01, op: 'multiply_base' } 
])
addEnderBonusAttribute('genericEvocationSpellBonus', [
    { attr: 'irons_spellbooks:evocation_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericFireSpellBonus', [
    { attr: 'irons_spellbooks:fire_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericHolySpellBonus', [
    { attr: 'irons_spellbooks:holy_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericEnderSpellBonus', [
    { attr: 'irons_spellbooks:ender_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericLightningSpellBonus', [
    { attr: 'irons_spellbooks:lightning_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericBloodSpellBonus', [
    { attr: 'irons_spellbooks:blood_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericIceSpellBonus', [
    { attr: 'irons_spellbooks:ice_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericNatureSpellBonus', [
    { attr: 'irons_spellbooks:nature_spell_power', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericDefenseBonus', [
    { attr: 'fast:defense', value: 1, op: 'addition' }
])
addEnderBonusAttribute('genericMoveBonus', [
    { attr: 'minecraft:generic.movement_speed', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('genericAttackInvincibleBonus', [
    { attr: 'kubejs:generic.attack_invulnerable_frames', value: 0.01, op: 'multiply_base' }
])
addEnderBonusAttribute('OverchargedManaFlask', [
  { attr: 'minecraft:generic.max_health', value: -0.3, op: 'multiply_base' },
  { attr: 'irons_spellbooks:mana_regen', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:max_mana', value: 500, op: 'addition' },
])
addEnderBonusAttribute('theTemperancePresent', [
  { attr: 'minecraft:generic.attack_damage', value: 1, op: 'multiply_total' },
  { attr: 'kubejs:generic.attack_invulnerable_frames', value: 1, op: 'multiply_base' },
])
addEnderBonusAttribute('theTowerPresent', [
  { attr: 'fast:extra_damage', value: -50, op: 'addition' },
  { attr: 'fast:vit', value: -50, op: 'addition' },
  { attr: 'minecraft:generic.max_health', value: -20, op: 'addition' },
  { attr: 'kubejs:generic.attack_invulnerable_frames', value: 0.1, op: 'multiply_base' },
])
addEnderBonusAttribute('starCardEffect', [
  { attr: 'minecraft:generic.attack_damage', value: 1, op: 'multiply_total' },
])
addEnderBonusAttribute('FireUpgradeOrb', [
  { attr: 'irons_spellbooks:cast_time_reduction', value: -0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:fire_spell_power', value: 0.2, op: 'multiply_base' },
])
addEnderBonusAttribute('NatureUpgradeOrb', [
  { attr: 'irons_spellbooks:nature_spell_power', value: 0.2, op: 'multiply_base' },
  { attr: 'minecraft:generic.movement_speed', value: -0.1, op: 'multiply_base' },
])
addEnderBonusAttribute('LightningUpgradeOrb', [
  { attr: 'minecraft:generic.max_health', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:lightning_spell_power', value: 0.1, op: 'multiply_base' },
  { attr: 'fast:defense', value: -0.05, op: 'multiply_base' },
])
addEnderBonusAttribute('EvocationUpgradeOrb', [
  { attr: 'irons_spellbooks:cast_time_reduction', value: 0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:evocation_spell_power', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:cooldown_reduction', value: -0.1, op: 'multiply_base' },
])
addEnderBonusAttribute('HolyUpgradeOrb', [
  { attr: 'irons_spellbooks:mana_regen', value: 0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:holy_spell_power', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:cooldown_reduction', value: -0.1, op: 'multiply_base' },
])
addEnderBonusAttribute('EnderUpgradeOrb', [
  { attr: 'irons_spellbooks:cooldown_reduction', value: 0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:ender_spell_power', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:mana_regen', value: -0.1, op: 'multiply_base' },
])
addEnderBonusAttribute('BloodUpgradeOrb', [
  { attr: 'irons_spellbooks:blood_spell_power', value: 0.15, op: 'multiply_base' },
])
addEnderBonusAttribute('RoseQuartzGauntletsStep', [
  { attr: 'l2damagetracker:crit_rate', value: 0.04, op: 'addition' },
  { attr: 'l2damagetracker:crit_damage', value: 0.1, op: 'addition' },
])
addEnderBonusAttribute('EnderScroll', [
  { attr: 'irons_spellbooks:ender_spell_power', value: 3, op: 'multiply_base' },
])
addEnderBonusAttribute('VoidEye', [
  { attr: 'fast:agi', value: 50, op: 'addition' },
])
addEnderBonusAttribute('AbyssEye', [
  { attr: 'fast:int', value: -100, op: 'addition' },
  { attr: 'irons_spellbooks:max_mana', value: -1000, op: 'addition' },
])
addEnderBonusAttribute('MechEye', [
  { attr: 'l2damagetracker:crit_damage', value: 1, op: 'addition' },
])
addEnderBonusAttribute('DesertEye', [
  { attr: 'kubejs:generic.attack_invulnerable_frames', value: 0.2, op: 'multiply_base' },
])
addEnderBonusAttribute('theHighPriestessPresent', [
  { attr: 'l2damagetracker:crit_rate', value: -0.5, op: 'addition' },
  { attr: 'l2damagetracker:crit_damage', value: 3, op: 'addition' },
])
addEnderBonusAttribute('umaSpeedBonus', [
  { attr: 'minecraft:generic.movement_speed', value: 1, op: 'addition' },
])
addEnderBonusAttribute('theDevilPresent', [
  { attr: 'minecraft:generic.attack_damage', value: -0.6, op: 'multiply_base' },
  { attr: 'minecraft:generic.max_health', value: 0.9, op: 'multiply_base' },
  { attr: 'minecraft:generic.attack_speed', value: -0.1, op: 'addition' },
])
addEnderBonusAttribute('theEmpressPresent', [
  { attr: 'minecraft:generic.max_health', value: 0.5, op: 'multiply_total' },
])
addEnderBonusAttribute('FortuneCrystal', [
  { attr: 'minecraft:generic.luck', value: 1, op: 'addition' },
])
addEnderBonusAttribute('IceMagicShard', [
  { attr: 'irons_spellbooks:ice_spell_power', value: 1, op: 'multiply_base' },
])
addEnderBonusAttribute('blazeShardCount', [
  { 
    attr: 'fast:str', 
    value: 1,
    op: 'addition',
    calculate: (player, enderBonus, multiplier) => {
      if (enderBonus.blazeShardCount && enderBonus.blazeItemCount) {
        return enderBonus.blazeShardCount * enderBonus.blazeItemCount * multiplier
      }
      return 0
    }
  }
])
addEnderBonusAttribute('Encyclopedia', [
  {
    attr: 'minecraft:generic.attack_damage',
    value: 1,
    op: 'addition',
    calculate: (player, enderBonus, multiplier) => {
      if (enderBonus.Encyclopedia && enderBonus.TicAttackDamage) {
        return enderBonus.TicAttackDamage * multiplier
      }
      return 0
    }
  }
])
addEnderBonusAttribute('theChariotPresent', [
  {
    attr: 'l2damagetracker:crit_rate',
    op: 'addition',
    calculate: (player, enderBonus, multiplier) => {
      if (enderBonus.theChariotPresent && enderBonus.mechanicItemCount) {
        return 0.04 * enderBonus.mechanicItemCount * multiplier
      }
      return 0
    }
  }
])
addEnderBonusAttribute('theFoolPresent', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: -6
  },
  {
    attr: 'fast:agi',
    op: 'addition',
    value: -6
  },
  {
    attr: 'fast:int',
    op: 'addition',
    value: -6 
  },
  {
    attr: 'fast:vit',
    op: 'addition',
    value: -6 
  }
])
addEnderBonusAttribute('BlazingJudgement', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 10
  }
])
addEnderBonusAttribute('PotPot', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5 
  }
])
addEnderBonusAttribute('BloodPact', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('BloodBrand', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('BloodTally', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('BloodVitality', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('BloodOath', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('RiftsongEdge', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2 
  }
])
addEnderBonusAttribute('StormEye', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 10
  }
])
addEnderBonusAttribute('StrangeKey', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 15
  }
])
addEnderBonusAttribute('IceScroll', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('JusticeStaff', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 30
  }
])
addEnderBonusAttribute('BerserkerBow', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: -5
  }
])
addEnderBonusAttribute('BuleGem', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5
  },
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('LethalShutter', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('NecklaceOfTheDesert', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('GrimoireOfManaReaping', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 4
  }
])
addEnderBonusAttribute('HeroDice', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 1
  },
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 1
  },
  {
    attr: 'fast:int',
    op: 'addition',
    value: 1
  },
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('FireMagicShard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 3
  }
])
addEnderBonusAttribute('HolyMagicShard', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 4
  }
])
addEnderBonusAttribute('BloodMagicShard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('NatureMagicShard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('LightningMagicShard', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('EvocationMagicShard', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('EnderMagicShard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('CursedEye', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 10
  }
])
addEnderBonusAttribute('HeroStaff', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 4
  }
])
addEnderBonusAttribute('HeroBow', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('HeroShield', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('HeroSword', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('IsOnfire', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 6
  }
])
addEnderBonusAttribute('FortuneCrystalPlus', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('ThunderbrandMagazine', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 4
  }
])
addEnderBonusAttribute('EnderNecklace', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('CompassionateHeart', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5
  },
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('magicianCardEffect', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('TheHierophant', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('theEmperorPresent', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5
  }
])
addEnderBonusAttribute('theStrengthPresent', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('theLoversPresent', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 2
  },
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
])
addEnderBonusAttribute('HermitEffect', [
  {
    attr: 'minecraft:generic.attack_damage',
    op: 'multiply_base',
    value: 0.1
  }
])
addEnderBonusAttribute('FateGemStrength', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: -10
  }
])
addEnderBonusAttribute('FateGemIntelligence', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: -10
  }
])
addEnderBonusAttribute('FateGemVitality', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: -10
  }
])
addEnderBonusAttribute('FateGemAgility', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: -10
  }
])
addEnderBonusAttribute('SwordSoul', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 1
  }
])
addEnderBonusAttribute('ShadowChaser', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
])
addEnderBonusAttribute('SoulPact', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
])
addEnderBonusAttribute('RealmSplitter', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
])
addEnderBonusAttribute('SpiritSurge', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
])
addEnderBonusAttribute('DemonCaller', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
])
NewItemBonusOnlyMap("hmag:evil_crystal", "EvilCrystal", [
  { attr: "minecraft:generic.attack_damage", op: "multiply_base", value: -0.2 },
  { attr: "kubejs:generic.attack_invulnerable_frames", op: "multiply_base", value: -0.2 }
])
NewItemBonusOnlyMap("hmag:soul_powder", "SoulPowder", [
  { attr: "irons_spellbooks:fire_spell_power", op: "multiply_base", value: 0.15 },
  { attr: "irons_spellbooks:ice_spell_power", op: "multiply_base", value: 0.15 },
  { attr: "irons_spellbooks:nature_spell_power", op: "multiply_base", value: 0.15 },
  { attr: "irons_spellbooks:lightning_spell_power", op: "multiply_base", value: 0.15 },
  { attr: "irons_spellbooks:holy_spell_power", op: "multiply_base", value: 0.15 },
  { attr: "irons_spellbooks:ender_spell_power", op: "multiply_base", value: 0.15 },
  { attr: "irons_spellbooks:blood_spell_power", op: "multiply_base", value: 0.15 },
  { attr: "fast:vit", op: "addition", value: -20 }
])
NewItemBonusOnlyMap("hmag:ender_plasm", "EnderPlasm", [
  { attr: "irons_spellbooks:ender_spell_power", op: "multiply_base", value: 1.0 },
  { attr: "fast:int", op: "addition", value: -20 }
])
NewItemBonusOnlyMap("hmag:ancient_stone", "AncientStone", [
  { attr: "fast:str", op: "addition", value: 8 },
  { attr: "fast:agi", op: "addition", value: 8 },
  { attr: "fast:vit", op: "addition", value: -8 },
  { attr: "fast:int", op: "addition", value: -8 }
])
NewItemBonusOnlyMap("hmag:lightning_particle", "LightningParticle", [
  { attr: "irons_spellbooks:lightning_spell_power", op: "multiply_base", value: 0.2 },
  { attr: "fast:vit", op: "addition", value: -10 }
])
NewItemBonusOnlyMap("hmag:insomnia_fruit", "InsomniaFruit", [
  { attr: "irons_spellbooks:evocation_spell_power", op: "multiply_base", value: 0.5 },
  { attr: "fast:agi", op: "addition", value: -10 }
])
NewItemBonusOnlyMap("hmag:insomnia_sword", "InsomniaSword", [
  { attr: "kubejs:generic.attack_invulnerable_frames", op: "multiply_base", value: 0.5 },
  { attr: "fast:str", op: "addition", value: 10 },
  { attr: "fast:vit", op: "addition", value: 10 },
  { attr: "fast:agi", op: "addition", value: -15 },
  { attr: "fast:int", op: "addition", value: -15 }
])
NewItemBonusOnlyMap("hmag:reinforcing_chain", "ReinforcingChain", [
  { attr: "fast:defense", op: "multiply_base", value: 0.5 },
  { attr: "minecraft:generic.max_health", op: "multiply_base", value: -0.5 }
])
NewItemBonusOnlyMap("hmag:purification_cloth", "PurificationCloth", [
  { attr: "irons_spellbooks:holy_spell_power", op: "multiply_base", value: 0.5 },
  { attr: "irons_spellbooks:spell_power", op: "multiply_base", value: -0.1 }
])
NewItemBonusOnlyMap("hmag:endless_pearl", "EndlessPearl", [
  { attr: "irons_spellbooks:ender_spell_power", op: "multiply_base", value: 0.5 },
  { attr: "fast:vit", op: "addition", value: -20 },
  { attr: "fast:agi", op: "addition", value: 10 }
])
NewItemBonusOnlyMap("hmag:fire_bottle", "FireBottle", [
  { attr: "irons_spellbooks:fire_spell_power", op: "multiply_base", value: 0.5 },
  { attr: "fast:vit", op: "addition", value: -5 }
])
NewItemBonusOnlyMap("hmag:greedy_crystal_plus", "GreedyCrystalPlus", [
  { attr: "minecraft:generic.attack_damage", op: "addition", value: 50 },
  { attr: "irons_spellbooks:spell_power", op: "multiply_base", value: 0.2 },
  { attr: "fast:defense", op: "addition", value: -300 },
  { attr: "minecraft:generic.max_health", op: "addition", value: -20 }
])


function buildHoverableKeywordTexts(keywordKeys) {
    return keywordKeys.map(key => {
        let name = Text.translate(key);
        let desc = Text.translate(`${key}.desc`);
        return desc.getString() !== `${key}.desc` ? name.hover(desc) : name;
    });
}

ItemEvents.tooltip((event) => {
    // 定义通用的提示信息处理函数
    const addTooltip = (itemId) => {
        event.addAdvanced(itemId, (item, advanced, text) => {
            // 将物品ID中的":"转换为"."以匹配lang文件格式
            const langId = itemId.replace(":", ".")
            if (NeedDeleteItem.includes(itemId)) {
                while (text.length > 1) text.remove(1);
            }
            
            if (itemId === "fast:the_hero_shield") {
           text.remove(0)
        let thisNbt = item.nbt
        if (thisNbt && thisNbt.close) {
            text.add(0, Text.translatable(`item.${langId}.close`))
        } else {
            text.add(0, Text.translatable(`item.${langId}.open`))
        }
            }
            let texthave = 1
            // 第一行显示属性和类型
            let typeLine = Text.empty()
            for (let tag in tagList) {
            if (item.hasTag(tag)) {
            let key = tagList[tag]
            let translated = Text.translate(key).hover(Text.translate(`${key}.desc`))
            typeLine.append(translated).append(" ")
            }
            }
            if (!typeLine.getString().isEmpty()) {
              text.add(texthave++, typeLine)
            }
            let nbt = item.nbt
            let NewText = false
            if (event.shift) {
            if (itemId === "fast:custom_spell" && nbt && nbt.spellConfig) {
            NewText = true
            let spellConfig = nbt.spellConfig
            let thisType = spellConfig.type
            let Value = spellConfig.value
            if (thisType === "spell") {
            let spellLang = Value.replace(":", ".")
            Value = Text.translatable(`spell.${spellLang}`).getString()
            }
            if (thisType === "delay") {
            Value = Value / 20
            }
            text.add(texthave++, Text.translatable(`item.${langId}.tooltip2.${thisType}`, Value).getString())
            }
            if (!NewText) {
            if (!noopEnderItem.includes(itemId)) {
            let keywordKeys = KeywordReplacements[itemId]
             if (keywordKeys) {
             let hoverableTexts = buildHoverableKeywordTexts(keywordKeys);
             let tooltipLine = Text.translatable.apply(null, [`item.${langId}.tooltip2`].concat(hoverableTexts));
             text.add(texthave++, tooltipLine);
             } else {
             text.add(texthave++, Text.translate(`item.${langId}.tooltip2`));
             }
             } else {
             text.add(texthave++, Text.translate(`item.genric.tooltip2`));
             }
            }
            if (itemId === "fast:resonance_crystal" && nbt && nbt.MaidAttributes) {
    let MaidAttributes = nbt.MaidAttributes;

    for (let key of MaidAttributeOrder) {
        if (MaidAttributes.hasOwnProperty(key)) {
            let value = MaidAttributes[key];
            if (percentAttributes.includes(key)) {
                value = Math.round(value * 100) + '%';
            } else {
                value = Math.round(value * 10) / 10;
            }
            text.add(texthave++, Text.translate(`item.${langId}.${key}`, value));
            }
            }
            }
            
            let attributes = false
            for (let bonus of bonusConfig) {
            let { key, modifiers } = bonus;
            if (key === ItemBonusOnlyMap[itemId]) {
            modifiers.forEach(modifier => {
            if (modifier.calculate) return
            let attr = modifier.attr;
            let translated = Text.translatable(`attribute.name.${attr.split(":").pop()}`).getString()
            if (translated === `attribute.name.${attr.split(":").pop()}`) {
            translated = Text.translatable(`attribute.${attr.replace(":", ".")}`).getString()
            }
            let value = modifier.value;
            let isAdd = true
            
            if (modifier.value < 0) {
            isAdd = false
            }
            
            let Add = "§c"
            let NotAdd = "§9"
            
            if (attr === "kubejs:generic.attack_invulnerable_frames") {
            Add = "§9"
            NotAdd = "§c"
            }
            
            
            
            if ((modifier.op === "multiply_base") || (modifier.op === "multiply_total")) {
            if (isAdd) {
            value = `+${value * 100}%`;
            } else {
            value = `${value * 100}%`;
            }
             } else if (modifier.op === "addition") {
            if (isAdd) {
            value = `+${value}`;
            } else {
            value = `${value}`;
            }
            }
            if (!attributes) {
            attributes = true
            text.add(texthave++, Text.translatable("item.fast.tooltip.base_attributes"));
            }
            if (modifier.op === "multiply_total") {
            if (isAdd) {
            text.add(texthave++, Text.translatable(`${Add}最终${translated}: ${value}`));
            } else {
            text.add(texthave++, Text.translatable(`${NotAdd}最终${translated}: ${value}`));
            }
            } else {
            if (isAdd) {
            text.add(texthave++, Text.translatable(`${Add}${translated}: ${value}`));
            } else {
            text.add(texthave++, Text.translatable(`${NotAdd}${translated}: ${value}`));
            }
            }
                        });
                        }
                    }
            
            } else {
                // 未按shift时显示基础描述
                text.add(texthave++, Text.translate(`item.${langId}.tooltip`))
                text.add(texthave++, Text.translate("item.fast.tooltips.shift"))
            }
            if (nbt && nbt.Roguelike) {
            let uuid = nbt.Roguelike
            text.remove(0)
            text.add(0,Text.translatable(`item.${langId}`).getString()+Text.translatable(`item.fast.rouguelike.needuuid`).getString())
            text.add(texthave++, Text.translatable(`item.fast.rouguelike.uuid`, uuid).getString())
            }
        })
    }

    Enderitems.forEach(item => addTooltip(item))
    NeedDeleteItem.forEach(item => addTooltip(item))
    noopEnderItem.forEach(item => addTooltip(item))

});