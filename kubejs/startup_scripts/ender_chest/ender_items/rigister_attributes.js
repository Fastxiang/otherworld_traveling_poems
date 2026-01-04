// priority: 500

registerItemToolTips("fast:iron_ring")
registerItemToolTips("fast:gold_ring")
registerItemToolTips("fast:diamond_ring")
registerAttribute("fast:iron_ring", [
  { attr: "fast:str", value: 2, op: "addition" },
])
registerAttribute("fast:gold_ring", [
  { attr: "fast:str", value: 4, op: "addition" },
])
registerAttribute("fast:diamond_ring", [
  { attr: "fast:str", value: 6, op: "addition" },
  { attr: "generic.armor", value: -2, op: "addition" },
  { attr: "l2damagetracker:crit_damage", value: 0.05, op: "multiply_base" },
  { attr: "l2damagetracker:crit_rate", value: 0.05, op: "multiply_base" },
])

registerItemToolTips("fast:branch")
registerAttribute('fast:branch', [
  { attr: "fast:str", value: 2, op: "addition" },
  { attr: "fast:agi", value: 2, op: "addition" },
  { attr: "fast:int", value: 2, op: "addition" },
  { attr: "fast:vit", value: 2, op: "addition" },
])

registerItemToolTips("cataclysm:monstrous_eye")
registerItemToolTips("fast:wooden_craftsman_hammer")
registerItemToolTips("fast:iron_craftsman_hammer")
registerItemToolTips("fast:gold_craftsman_hammer")
registerItemToolTips("fast:diamond_craftsman_hammer")
registerItemToolTips("fast:netherite_ingot_craftsman_hammer")
registerItemToolTips("fast:brass_craftsman_hammer")

registerAttribute("fast:wooden_craftsman_hammer", [
  { attr: "fast:tec", value: 2, op: "addition" },
])
registerAttribute("fast:iron_craftsman_hammer", [
  { attr: "fast:tec", value: 4, op: "addition" },
])
registerAttribute("fast:gold_craftsman_hammer", [
  { attr: "fast:tec", value: 6, op: "addition" },
])
registerAttribute("fast:diamond_craftsman_hammer", [
  { attr: "fast:tec", value: 8, op: "addition" },
])
registerAttribute("fast:netherite_ingot_craftsman_hammer", [
  { attr: "fast:tec", value: 10, op: "addition" },
])

registerItemToolTips("fast:charge")
registerAttribute('fast:charge', [
  { attr: "irons_spellbooks:spell_power", value: 0.2, op: "multiply_base" },
  { attr: "irons_spellbooks:mana_regen", value: -0.2, op: "multiply_base" },
])
registerItemToolTips("fast:overcharged_mana_flask")
registerAttribute('fast:overcharged_mana_flask', [
  { attr: 'minecraft:generic.max_health', value: -0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:mana_regen', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:max_mana', value: 500, op: 'addition' },
])
registerItemToolTips("irons_spellbooks:fire_upgrade_orb")
registerAttribute('irons_spellbooks:fire_upgrade_orb', [
  { attr: 'irons_spellbooks:cast_time_reduction', value: -0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:fire_spell_power', value: 0.2, op: 'multiply_base' },
])
registerItemToolTips("irons_spellbooks:nature_upgrade_orb")
registerAttribute('irons_spellbooks:nature_upgrade_orb', [
  { attr: 'irons_spellbooks:nature_spell_power', value: 0.2, op: 'multiply_base' },
  { attr: 'minecraft:generic.movement_speed', value: -0.1, op: 'multiply_base' },
])
registerItemToolTips("irons_spellbooks:lightning_upgrade_orb")
registerAttribute('irons_spellbooks:lightning_upgrade_orb', [
  { attr: 'minecraft:generic.max_health', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:lightning_spell_power', value: 0.1, op: 'multiply_base' },
  { attr: 'fast:defense', value: -0.05, op: 'multiply_base' },
])
registerItemToolTips("irons_spellbooks:evocation_upgrade_orb")
registerAttribute('irons_spellbooks:evocation_upgrade_orb', [
  { attr: 'irons_spellbooks:cast_time_reduction', value: 0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:evocation_spell_power', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:cooldown_reduction', value: -0.1, op: 'multiply_base' },
])
registerItemToolTips("irons_spellbooks:holy_upgrade_orb")
registerAttribute('irons_spellbooks:holy_upgrade_orb', [
  { attr: 'irons_spellbooks:mana_regen', value: 0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:holy_spell_power', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:cooldown_reduction', value: -0.1, op: 'multiply_base' },
])
registerItemToolTips("irons_spellbooks:ender_upgrade_orb")
registerAttribute('irons_spellbooks:ender_upgrade_orb', [
  { attr: 'irons_spellbooks:cooldown_reduction', value: 0.1, op: 'multiply_base' },
  { attr: 'irons_spellbooks:ender_spell_power', value: 0.05, op: 'multiply_base' },
  { attr: 'irons_spellbooks:mana_regen', value: -0.1, op: 'multiply_base' },
])
registerItemToolTips("irons_spellbooks:blood_upgrade_orb")
registerAttribute('irons_spellbooks:blood_upgrade_orb', [
  { attr: 'irons_spellbooks:blood_spell_power', value: 0.15, op: 'multiply_base' },
])
registerItemToolTips("irons_spellbooks:ice_upgrade_orb")
registerAttribute('irons_spellbooks:ice_upgrade_orb', [
  {
    attr: 'fast:int',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let icePower = entity.getAttribute('irons_spellbooks:ice_spell_power').getValue()
        let count = entry.count
        return 10 * icePower * count * multiplier
    }
  },
  { attr: 'irons_spellbooks:max_mana', value: -300, op: 'addition' }
])

registerItemToolTips("fast:godspeed_wield")
registerAttribute('fast:godspeed_wield', [
  { attr: "irons_spellbooks:cast_time_reduction", value: 0.5, op: "multiply_base" },
  { attr: "minecraft:generic.attack_speed", value: 1.5, op: "multiply_base" },
  { attr: "minecraft:generic.movement_speed", value: 1.0, op: "multiply_base" },
  { attr: "fast:dodge_chance", value: 0.2, op: "addition" },
], true)

registerItemToolTips("cataclysm:mech_eye")
registerAttribute('cataclysm:mech_eye', [
  { attr: 'l2damagetracker:crit_damage', value: 1, op: 'addition' },
], true)

registerItemToolTips("cataclysm:abyss_eye")
registerAttribute('cataclysm:abyss_eye', [
  { attr: 'fast:int', value: -100, op: 'addition' },
  { attr: 'irons_spellbooks:max_mana', value: -1000, op: 'addition' },
], true)

registerItemToolTips("cataclysm:void_eye")
registerAttribute('cataclysm:void_eye', [
  { attr: 'fast:agi', value: 50, op: 'addition' },
], true)

registerItemToolTips("fast:giant_fount")
registerAttribute('fast:giant_fount', [
  { attr: 'fast:str', value: 50, op: 'addition' },
], true)

registerItemToolTips("fast:breath_of_life")
registerAttribute('fast:breath_of_life', [
  { attr: 'fast:vit', value: 50, op: 'addition' },
], true)

registerItemToolTips("fast:sage_relic")
registerAttribute('fast:sage_relic', [
  { attr: 'fast:int', value: 50, op: 'addition' },
], true)

registerItemToolTips("cataclysm:abyssal_sacrifice")
registerAttribute('cataclysm:abyssal_sacrifice', [
  { attr: 'minecraft:generic.max_health', value: -50, op: 'addition' },
  { attr: 'irons_spellbooks:spell_power', value: -0.2, op: 'addition' },
  { attr: 'minecraft:generic.attack_damage', value: -0.2, op: 'multiply_base' }
], true)

registerItemToolTips("cataclysm:desert_eye")
registerAttribute('cataclysm:desert_eye', [
  { attr: 'kubejs:generic.attack_invulnerable_frames', value: 0.2, op: 'multiply_base' },
], true)

registerItemToolTips("hmag:evil_crystal")
registerAttribute("hmag:evil_crystal", [
  { attr: "minecraft:generic.attack_damage", op: "multiply_base", value: -0.2 },
  { attr: "kubejs:generic.attack_invulnerable_frames", op: "multiply_base", value: -0.2 }
], true)
registerItemToolTips("hmag:soul_powder")
registerAttribute("hmag:soul_powder", [
  { attr: "irons_spellbooks:fire_spell_power", op: "addition", value: 0.15 },
  { attr: "irons_spellbooks:ice_spell_power", op: "addition", value: 0.15 },
  { attr: "irons_spellbooks:nature_spell_power", op: "addition", value: 0.15 },
  { attr: "irons_spellbooks:lightning_spell_power", op: "addition", value: 0.15 },
  { attr: "irons_spellbooks:holy_spell_power", op: "addition", value: 0.15 },
  { attr: "irons_spellbooks:ender_spell_power", op: "addition", value: 0.15 },
  { attr: "irons_spellbooks:blood_spell_power", op: "addition", value: 0.15 },
  { attr: "fast:vit", op: "addition", value: -20 }
], true)
registerItemToolTips("hmag:ender_plasm")
registerAttribute("hmag:ender_plasm", [
  { attr: "irons_spellbooks:ender_spell_power", op: "addition", value: 1.0 },
  { attr: "fast:int", op: "addition", value: -20 }
], true)
registerItemToolTips("hmag:ancient_stone")
registerAttribute("hmag:ancient_stone", [
  { attr: "fast:str", op: "addition", value: 8 },
  { attr: "fast:agi", op: "addition", value: 8 },
  { attr: "fast:vit", op: "addition", value: -8 },
  { attr: "fast:int", op: "addition", value: -8 }
], true)
registerItemToolTips("hmag:lightning_particle")
registerAttribute("hmag:lightning_particle", [
  { attr: "irons_spellbooks:lightning_spell_power", op: "addition", value: 0.2 },
  { attr: "fast:vit", op: "addition", value: -10 }
], true)
registerItemToolTips("hmag:insomnia_fruit")
registerAttribute("hmag:insomnia_fruit", [
  { attr: "irons_spellbooks:evocation_spell_power", op: "addition", value: 0.5 },
  { attr: "fast:agi", op: "addition", value: -10 }
], true)
registerItemToolTips("hmag:insomnia_sword")
registerAttribute("hmag:insomnia_sword", [
  { attr: "kubejs:generic.attack_invulnerable_frames", op: "multiply_base", value: 0.5 },
  { attr: "fast:str", op: "addition", value: 10 },
  { attr: "fast:vit", op: "addition", value: 10 },
  { attr: "fast:agi", op: "addition", value: -15 },
  { attr: "fast:int", op: "addition", value: -15 }
], true)
registerItemToolTips("hmag:reinforcing_chain")
registerAttribute("hmag:reinforcing_chain", [
  { attr: "fast:defense", op: "multiply_base", value: 0.5 },
  { attr: "minecraft:generic.max_health", op: "multiply_base", value: -0.5 }
], true)
registerItemToolTips("hmag:purification_cloth")
registerAttribute("hmag:purification_cloth", [
  { attr: "irons_spellbooks:holy_spell_power", op: "addition", value: 0.5 },
  { attr: "irons_spellbooks:spell_power", op: "addition", value: -0.1 }
], true)
registerItemToolTips("hmag:endless_pearl")
registerAttribute("hmag:endless_pearl", [
  { attr: "irons_spellbooks:ender_spell_power", op: "addition", value: 0.5 },
  { attr: "fast:vit", op: "addition", value: -20 },
  { attr: "fast:agi", op: "addition", value: 10 }
], true)
registerItemToolTips("hmag:fire_bottle")
registerAttribute("hmag:fire_bottle", [
  { attr: "irons_spellbooks:fire_spell_power", op: "addition", value: 0.5 },
  { attr: "fast:vit", op: "addition", value: -5 }
], true)
registerItemToolTips("hmag:greedy_crystal_plus")
registerAttribute("hmag:greedy_crystal_plus", [
  { attr: "minecraft:generic.attack_damage", op: "addition", value: 50 },
  { attr: "irons_spellbooks:spell_power", op: "addition", value: 0.2 },
  { attr: "fast:defense", op: "addition", value: -300 },
  { attr: "minecraft:generic.max_health", op: "addition", value: -20 }
], true)

registerAttribute('tarotcards:the_hierophant', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5
  }
], true)

registerAttribute('tarotcards:the_hermit', [
  {
    attr: 'minecraft:generic.attack_damage',
    op: 'multiply_base',
    value: 0.1
  }
], true)

registerAttribute("tarotcards:the_star", [
  { attr: 'minecraft:generic.attack_damage', value: 1, op: 'multiply_total' },
], true)

registerAttribute('tarotcards:judgement', [
  {
    attr: 'irons_spellbooks:lightning_spell_power',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let maxHealth = entity.getAttribute('minecraft:generic.max_health').getValue();
        let lightningPower = maxHealth * 0.7 * 0.01;
        return lightningPower
    }
  },
  {
    attr: 'minecraft:generic.max_health',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
        let maxHealth = entity.getAttribute('minecraft:generic.max_health').getValue();
        let NeedHp = (maxHealth - 10) / maxHealth
        return -NeedHp
    }
  }
], true)

registerAttribute('tarotcards:temperance', [
  { attr: 'minecraft:generic.attack_damage', value: 1, op: 'multiply_total' },
  { attr: 'kubejs:generic.attack_invulnerable_frames', value: 1, op: 'multiply_base' },
], true)

registerAttribute('tarotcards:strength', [
  {
    attr: 'fast:extra_damage',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let speed = entity.getAttribute('minecraft:generic.movement_speed').getValue();
        if (speed > 0.1) {
            let damageBonus = (speed - 0.1) * 500;
            return damageBonus * multiplier * 0.05
            }
        return 0
    }
  },
  {
    attr: 'minecraft:generic.attack_damage',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let speed = entity.getAttribute('minecraft:generic.movement_speed').getValue();
        if (speed > 0.1) {
            let damageBonus = (speed - 0.1) * 500;
            return damageBonus * multiplier * 0.5
            }
        return 0
    }
  },
  {
    attr: 'minecraft:generic.max_health',
    op: 'addition',
    calculate: (entity, entry, multiplier) => {
        let speed = entity.getAttribute('minecraft:generic.movement_speed').getValue();
        if (speed > 0.1) {
            let damageBonus = (speed - 0.1) * 500;
            return damageBonus * multiplier * 0.02
            }
        return 0
    }
  },
  {
    attr: 'irons_spellbooks:max_mana',
    op: 'addition',
    calculate: (entity, entry, multiplier) => {
        let speed = entity.getAttribute('minecraft:generic.movement_speed').getValue();
        if (speed > 0.1) {
            let damageBonus = (speed - 0.1) * 500;
            return damageBonus * multiplier * 0.38 * 1.5
            }
        return 0
    }
  },
  {
    attr: 'irons_spellbooks:spell_power',
    op: 'addition',
    calculate: (entity, entry, multiplier) => {
        let speed = entity.getAttribute('minecraft:generic.movement_speed').getValue();
        if (speed > 0.1) {
            let damageBonus = (speed - 0.1) * 500;
            return damageBonus * multiplier * 0.05 * 0.01
            }
        return 0
    }
  },
  {
    attr: 'minecraft:generic.movement_speed',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier) => {
        let speed = entity.getAttribute('minecraft:generic.movement_speed').getValue();
        if (speed > 0.1) {
            let speedReductionPercentage = (speed - 0.1) / speed;
            return -speedReductionPercentage
            }
        return 0
    }
  },
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('tarotcards:the_high_priestess', [
  { attr: 'l2damagetracker:crit_rate', value: -0.5, op: 'addition' },
  { attr: 'l2damagetracker:crit_damage', value: 3, op: 'addition' },
], true)

registerAttribute('tarotcards:the_lovers', [
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
], true)

registerAttribute('tarotcards:the_empress', [
  { attr: 'minecraft:generic.max_health', value: 0.5, op: 'multiply_total' },
], true)

registerAttribute('tarotcards:the_magician', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
], true)

registerAttribute('tarotcards:the_devil', [
  { attr: 'minecraft:generic.attack_damage', value: -0.6, op: 'multiply_base' },
  { attr: 'minecraft:generic.max_health', value: 0.9, op: 'multiply_base' },
  { attr: 'minecraft:generic.attack_speed', value: -0.1, op: 'addition' },
], true)

registerAttribute('tarotcards:the_fool', [
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
], true)

registerAttribute('tarotcards:the_tower', [
  { attr: 'fast:extra_damage', value: -50, op: 'addition' },
  { attr: 'fast:vit', value: -50, op: 'addition' },
  { attr: 'minecraft:generic.max_health', value: -20, op: 'addition' },
  { attr: 'kubejs:generic.attack_invulnerable_frames', value: 0.1, op: 'multiply_base' },
], true)

registerAttribute('tarotcards:the_emperor', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5
  }
], true)

registerAttribute('fast:blaze_shard', [
  { 
    attr: 'fast:str', 
    op: 'addition',
    calculateToBase: true,
    calculate: (entity, entry, multiplier, customData) => {
    let blaze = customData.blazeTag || 0
    let count = entry.count
    return entry.count * blaze * multiplier
    },
    calculateToBase: true
  },
])

registerAttribute('fast:energy_core', [
  {
    attr: 'l2damagetracker:crit_rate',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let mechanicCount = customData.mechanicTag || 0
        return 0.04 * mechanicCount * multiplier
    },
    calculateToBase: true
  }
], true)

registerAttribute('fast:blazing_judgement', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 10
  }
], true)

registerAttribute('cataclysm:burning_ashes', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 6
  }
], true)

registerAttribute('hmag:fortune_crystal_plus', [
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
], true)

registerAttribute('fast:thunderbrand_magazine', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 4
  }
], true)

registerAttribute('cataclysm:storm_eye', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 10
  }
], true)

registerAttribute('fast:ice_scroll', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
], true)

registerAttribute('fast:ice_magic_shard', [
  { attr: 'irons_spellbooks:ice_spell_power', value: 1, op: 'addition' },
], true)

registerAttribute('fast:grimoire_of_mana_reaping', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 4
  }
], true)

registerAttribute('fast:holy_magic_shard', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 4
  }
], true)

registerAttribute('fast:blood_magic_shard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
], true)

registerAttribute('fast:compassionate_heart', [
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
], true)

registerAttribute('fast:ender_necklace', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
], true)

registerAttribute('fast:ender_magic_shard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 2
  }
], true)

registerAttribute('cataclysm:cursed_eye', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 10
  }
], true)

registerAttribute('fast:nature_magic_shard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 5
  }
], true)

registerAttribute('fast:iron_precision_mechanism', [
  { attr: 'l2damagetracker:crit_damage', value: -0.5, ignoreInvert: true, op: 'multiply_total' },
], true)

registerAttribute('fast:evocation_magic_shard', [
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
], true)

registerAttribute('fast:water_precision_mechanism', [
  {
    attr: 'l2damagetracker:crit_rate',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
        let Crt = entity.getAttribute(`l2damagetracker:crit_rate`)
        let CrtValue = Crt ? Crt.getValue() : 0
        if (CrtValue) {
        WaterPrecisionMechanismDamage[uuid] = 50 * CrtValue
        }
        return -1
    }
  },
], true)

registerAttribute('fast:magic_sword', [
  {
    attr: 'minecraft:generic.attack_damage',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
      return multiplier === 1 ? -0.7 : 0
    },
    calculateToBase: true
  },
  {
    attr: 'irons_spellbooks:spell_power',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
      return multiplier === -1 ? -0.7 : 0
    },
    calculateToBase: true
  }
], true)

registerAttribute('fast:ender_scroll', [
  { attr: 'irons_spellbooks:ender_spell_power', value: 3, op: 'addition' },
], true)

registerAttribute('fast:lightning_magic_shard', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:megumin_magic_staff', [
  {
    attr: 'irons_spellbooks:cast_time_reduction',
    op: 'multiply_base',
    calculate: (entity, entry, multiplier, customData) => {
    let inst = entity.getAttribute('irons_spellbooks:cast_time_reduction')
    if (!inst) return 0
    let current = inst.getValue()
    let wantAdd = -1.5 * multiplier
    let result = current + wantAdd
    if (result < -1) {
        return (-1) - current
    }
    return wantAdd
    },
    calculateToBase: true
  },
  { attr: "irons_spellbooks:fire_spell_power", value: 1, op: "multiply_total" },
], true)

registerAttribute('fast:fire_magic_shard', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 3
  }
], true)

registerAttribute('fast:realm_splitter', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
], true)

registerAttribute('fast:demon_caller', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
], true)

registerAttribute('fast:sword_soul', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:spirit_surge', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2  
  }
], true)

registerAttribute('fast:riftsong_edge', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 2 
  }
], true)

registerAttribute('tconstruct:encyclopedia', [
  {
    attr: 'minecraft:generic.attack_damage',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let NeedAttack = customData.ticAttack || 0
        return NeedAttack
    },
    calculateToBase: true
  }
], true)

registerAttribute('fast:blood_pact', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:blood_brand', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:blood_vitality', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:blood_tally', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:blood_oath', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:justice_staff', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 30
  }
], true)

registerAttribute('cataclysm:strange_key', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 15
  }
], true)

registerAttribute('fast:berserker_bow', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: -5
  }
], true)

registerAttribute('cataclysm:necklace_of_the_desert', [
  {
    attr: 'fast:str',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:rose_quartz_gauntlets_sequenced_assembly', [
  {
    attr: 'l2damagetracker:crit_rate',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let nbt = entry.nbt
        let Step = global.getSequencedAssemblyStep(nbt)
        return 0.04 * Step * multiplier
    }
  },
  {
    attr: 'l2damagetracker:crit_damage',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let nbt = entry.nbt
        let Step = global.getSequencedAssemblyStep(nbt)
        let TotalSteps = (10 - Step)
        return 0.1 * TotalSteps * multiplier
    }
  },
], true)

registerAttribute('fast:the_card2', [
  { attr: 'minecraft:generic.attack_damage', op: 'multiply_total',
    calculate: (e, entry, m, d) => (d.TheCard2?.count ?? 0) * m,
    calculateToBase: true },
  { attr: 'minecraft:generic.max_health', op: 'multiply_total',
    calculate: (e, entry, m, d) => -(d.TheCard2?.count2 ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card3', [
  { attr: 'fast:defense', op: 'multiply_total',
    calculate: (e, entry, m, d) => (d.TheCard3?.count ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card4', [
  { attr: 'fast:str', op: 'addition',
    calculate: (e, entry, m, d) => (d.TheCard4?.count ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card5', [
  { attr: 'fast:defense', op: 'multiply_base',
    calculate: (e, entry, m, d) => (d.TheCard5?.count ?? 0) * m,
    calculateToBase: true },
  { attr: 'minecraft:generic.max_health', op: 'multiply_base',
    calculate: (e, entry, m, d) => -(d.TheCard5?.count2 ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card6', [
  { attr: 'fast:int', op: 'addition',
    calculate: (e, entry, m, d) => (d.TheCard6?.count ?? 0) * m,
    calculateToBase: true },
  { attr: 'irons_spellbooks:max_mana', op: 'addition',
    calculate: (e, entry, m, d) => (d.TheCard6?.count2 ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card7', [
  { attr: 'fast:agi', op: 'addition',
    calculate: (e, entry, m, d) => (d.TheCard7?.count ?? 0) * m,
    calculateToBase: true },
  { attr: 'irons_spellbooks:evocation_spell_power', op: 'addition',
    calculate: (e, entry, m, d) => -(d.TheCard7?.count2 ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card9', [
  { attr: 'fast:vit', op: 'multiply_base',
    calculate: (e, entry, m, d) => (d.TheCard9?.count ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card10', [
  { attr: 'fast:str', op: 'multiply_base',
    calculate: (e, entry, m, d) => (d.TheCard10?.count ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card11', [
  { attr: 'fast:agi', op: 'multiply_base',
    calculate: (e, entry, m, d) => (d.TheCard11?.count ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:the_card12', [
  { attr: 'fast:int', op: 'multiply_base',
    calculate: (e, entry, m, d) => (d.TheCard12?.count ?? 0) * m,
    calculateToBase: true }
], true)

registerAttribute('fast:pot_pot', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 5 
  }
], true)

registerAttribute('fast:lethal_shutter', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 5
  }
], true)

registerAttribute('fast:uma_factor_item', [
  {
    attr: 'minecraft:generic.movement_speed',
    op: 'addition',
    calculateToBase: true,
    calculate: (entity, entry, multiplier, customData) => {
        let Count = customData.UmaCount || 0
        return Count
    }
  },
], true)

registerAttribute('fast:the_hero_bow', [
  {
    attr: 'fast:agi',
    op: 'addition',
    value: 1
  }
], true)

registerAttribute('fast:the_hero_dice', [
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
], true)

registerAttribute("fast:the_hero_staff", [
  { attr: "forge:entity_reach", value: 12, ignoreInvert: true, op: "addition" },
  {
    attr: 'fast:int',
    op: 'addition',
    value: 4
  }
], true)

registerAttribute('fast:the_hero_shield', [
  {
    attr: 'fast:vit',
    op: 'addition',
    value: 2
  }
], true)

registerAttribute('hmag:fortune_crystal', [
  { attr: 'minecraft:generic.luck', value: 1, op: 'addition' },
])

registerAttribute('int_talent4', [
  {
    attr: 'irons_spellbooks:max_mana',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
        return -1
    },
    calculateToBase: true
  }
], true)

registerAttribute('agi_talent3', [
  {
    attr: 'minecraft:generic.attack_speed',
    op: 'multiply_base',
    calculate: (entity, entry, multiplier, customData) => {
        let speed = entity.getAttribute('minecraft:generic.movement_speed').getValue();
        let value = 0
        if (speed >= 0.1) {
        let value = (speed - 0.1) / 0.1
        }
        return value
    }
  }
], true)

registerItemToolTips("fast:ancient_ignitium_ingot")
registerAttribute("fast:ancient_ignitium_ingot", [
  { attr: "fast:str", value: 11, op: "addition" },
  { attr: "fast:vit", value: -5, op: "addition" }
])

registerItemToolTips("fast:ancient_brass_ingot")
registerAttribute("fast:ancient_brass_ingot", [
  { attr: "fast:agi", value: 11, op: "addition" },
  { attr: "fast:vit", value: -5, op: "addition" }
])

registerItemToolTips("fast:ancient_arcane_ingot")
registerAttribute("fast:ancient_arcane_ingot", [
  { attr: "fast:int", value: 11, op: "addition" },
  { attr: "fast:vit", value: -5, op: "addition" }
])

registerItemToolTips("fast:holy_cup")
registerAttribute('fast:holy_cup', [
  {
    attr: 'fast:str',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let value = 30
        if (multiplier < 0) value = 0
        return value
    },
    calculateToBase: true
  },
  {
    attr: 'fast:vit',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let value = 30
        if (multiplier < 0) value = 0
        return value
    },
    calculateToBase: true
  },
  {
    attr: 'fast:agi',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let value = 30
        if (multiplier > 0) value = 0
        return value
    },
    calculateToBase: true
  },
  {
    attr: 'fast:int',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let value = 30
        if (multiplier > 0) value = 0
        return value
    },
    calculateToBase: true
  }
], true)