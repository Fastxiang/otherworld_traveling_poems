const $ItemAttributeModifierEvent = Java.loadClass('net.minecraftforge.event.ItemAttributeModifierEvent')
const $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

NativeEvents.onEvent($AnvilUpdateEvent, event => {
    PlayerAnvilUpdateEvent(event);
})

NativeEvents.onEvent($AnvilRepairEvent, event => {
    PlayerAnvilRepairEvent(event);
})

const augmentations = [
    {
        item: "minecraft:emerald", // 绿宝石
        attribute: "attack",
        value: 1,
        potentialCost: 4,
        baseMax: 10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_attack_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92187",
            attributeName: 'generic.attack_damage',
            operation: 'ADDITION'
        },
        opposite: "negative_attack" // 添加对立属性
    },
    {
        item: "minecraft:diamond", // 钻石
        attribute: "attack_percentage",
        value: 1,
        potentialCost: 6,
        baseMax: 5,
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 27)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_attack_percentage_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92189",
            attributeName: 'generic.attack_damage',
            operation: 'MULTIPLY_BASE'
        },
        opposite: "negative_attack_percentage"
    },
    {
        item: "irons_spellbooks:arcane_essence", // 奥术源质
        attribute: "spell_power_percentage",
        value: 1,
        potentialCost: 6,
        baseMax: 5,
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 27)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_spell_power_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9218a",
            attributeName: 'irons_spellbooks:spell_power',
            operation: 'MULTIPLY_BASE'
        },
        opposite: "negative_spell_power_percentage"
    },
    {
        item: "minecraft:amethyst_shard", // 紫水晶
        attribute: "int",
        value: 1,
        potentialCost: 4,
        baseMax: 10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_fast_int_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9218b",
            attributeName: 'fast:int',
            operation: 'ADDITION'
        },
        opposite: "negative_int"
    },
    {
        item: "minecraft:copper_ingot", // 铜锭
        attribute: "str",
        value: 1,
        potentialCost: 4,
        baseMax: 10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_fast_str_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9218c",
            attributeName: 'fast:str',
            operation: 'ADDITION'
        },
        opposite: "negative_str"
    },
    {
        item: "minecraft:iron_ingot", //铁锭
        attribute: "vit",
        value: 1,
        potentialCost: 4,
        baseMax: 10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 9)
        },
        modifier: {
            type: 'defense',
            name: 'weapon_fast_vit_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9218d",
            attributeName: 'fast:vit',
            operation: 'ADDITION'
        },
        opposite: "negative_vit"
    },
    {
        item: "minecraft:gold_ingot",  //金锭
        attribute: "agi",
        value: 1,
        potentialCost: 4,
        baseMax: 10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_fast_agi_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9218e",
            attributeName: 'fast:agi',
            operation: 'ADDITION'
        },
        opposite: "negative_agi"
    },
    {
        item: "minecraft:quartz",  //石英
        attribute: "max_health",
        value: 1,
        potentialCost: 4,
        baseMax: 15, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 6)
        },
        modifier: {
            type: 'defense',
            name: 'weapon_max_health_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92190",
            attributeName: 'generic.max_health',
            operation: 'ADDITION'
        },
        opposite: "negative_max_health"
    },
    {
        item: "create:iron_sheet",  // 铁板
        attribute: "crit_rate_percentage",
        value: 1,
        potentialCost: 2,
        baseMax: 5,
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 27)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_crit_rate_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92198",
            attributeName: 'l2damagetracker:crit_rate',
            operation: 'ADDITION'
        },
        opposite: "negative_crit_rate_percentage"
    },
    {
        item: "create:brass_sheet",  // 黄铜板
        attribute: "crit_damage_percentage",
        value: 1,
        potentialCost: 6,
        baseMax: 10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_crit_damage_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92199",
            attributeName: 'l2damagetracker:crit_damage',
            operation: 'ADDITION'
        },
        opposite: "negative_crit_damage_percentage"
    },
    // 负面效果
    {
        item: "minecraft:coal",  //煤炭
        attribute: "negative_attack_percentage",
        value: -1,
        potentialCost: -3,
        baseMax: -5, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 27)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_attack_percentage',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92191",
            attributeName: 'generic.attack_damage',
            operation: 'MULTIPLY_BASE'
        },
        opposite: "attack_percentage"
    },
    {
        item: "minecraft:flint", //燧石
        attribute: "negative_attack",
        value: -1,
        potentialCost: -2,
        baseMax: -10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_attack',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92192",
            attributeName: 'generic.attack_damage',
            operation: 'ADDITION'
        },
        opposite: "attack"
    },
    {
        item: "minecraft:lapis_lazuli", //青金石
        attribute: "negative_spell_power_percentage",
        value: -1,
        potentialCost: -3,
        baseMax: -5, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 27)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_spell_power',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92193",
            attributeName: 'irons_spellbooks:spell_power',
            operation: 'MULTIPLY_BASE'
        },
        opposite: "spell_power_percentage"
    },
    {
        item: "minecraft:redstone",  //红石
        attribute: "negative_int",
        value: -1,
        potentialCost: -2,
        baseMax: -10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_int',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92194",
            attributeName: 'fast:int',
            operation: 'ADDITION'
        },
        opposite: "int"
    },
    {
        item: "minecraft:blaze_rod",  //烈焰棒
        attribute: "negative_str",
        value: -1,
        potentialCost: -2,
        baseMax: -10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_str',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92195",
            attributeName: 'fast:str',
            operation: 'ADDITION'
        },
        opposite: "str"
    },
    {
        item: "minecraft:slime_ball", //粘液球
        attribute: "negative_agi",
        value: -1,
        potentialCost: -2,
        baseMax: -10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_agi',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92196",
            attributeName: 'fast:agi',
            operation: 'ADDITION'
        },
        opposite: "agi"
    },
    {
        item: "minecraft:bone", //骨头
        attribute: "negative_vit",
        value: -1,
        potentialCost: -2,
        baseMax: -10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 9)
        },
        modifier: {
            type: 'defense',
            name: 'weapon_negative_vit',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e92197",
            attributeName: 'fast:vit',
            operation: 'ADDITION'
        },
        opposite: "vit"
    },
     {
        item: "minecraft:clay_ball",  // 黏土球
        attribute: "negative_crit_rate_percentage",
        value: -1,
        potentialCost: -1,
        baseMax: -5, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 27)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_crit_rate',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9219A",
            attributeName: 'l2damagetracker:crit_rate',
            operation: 'ADDITION'
        },
        opposite: "crit_rate_percentage"
    },
    {
        item: "minecraft:stick",  // 木棍
        attribute: "negative_crit_damage_percentage",
        value: -1,
        potentialCost: -3,
        baseMax: -10, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 9)
        },
        modifier: {
            type: 'attack',
            name: 'weapon_negative_crit_damage',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9219B",
            attributeName: 'l2damagetracker:crit_damage',
            operation: 'ADDITION'
        },
        opposite: "crit_damage_percentage"
    },
    {
        item: "minecraft:leather",  // 皮革
        attribute: "negative_max_health",
        value: -1,
        potentialCost: -2,
        baseMax: -15, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 6)
        },
        modifier: {
            type: 'defense',
            name: 'weapon_negative_max_health',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9219C",
            attributeName: 'generic.max_health',
            operation: 'ADDITION'
        },
        opposite: "max_health"
    },
    {
        item: "minecraft:cobblestone",  // 圆石
        attribute: "defense",
        value: 1,
        potentialCost: 2,
        baseMax: 20, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax + Math.floor(tec / 2)
        },
        modifier: {
            type: 'defense',
            name: 'weapon_defense_bonus',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9219E",
            attributeName: 'fast:defense',
            operation: 'ADDITION'
        },
        opposite: "negative_defense"
    },
    {
        item: "minecraft:paper",  // 纸
        attribute: "negative_defense",
        value: -1,
        potentialCost: -1,
        baseMax: -20, // 基础上限
        getMax: (player, weaponConfig, augmentation, tec) => {
    return augmentation.baseMax - Math.floor(tec / 2)
        },
        modifier: {
            type: 'defense',
            name: 'weapon_negative_defense',
            attributeId: "b9753367-1689-4e98-a08e-4690a7e9219F",
            attributeName: 'fast:defense',
            operation: 'ADDITION'
        },
        opposite: "defense"
    }
];

const SpecialPropertyItemList = {
"collectorsreap:lime_popsicle": 100,
"waystones:warp_dust": 20,
"youkaishomecoming:assorted_dango": 100,
"youkaishomecoming:big_popsicle": 100,
"irons_spellbooks:divine_pearl": 100,
"lavafishing:quartz_fish": 100,
"lavafishing:arowana_fish": 100,
"hmag:greedy_crystal": 100,
"fast:recoil_musket": 100,
"minecraft:bedrock": 100,
}

function PlayerAnvilRepairEvent(event) {
    const { left, right, player } = event;
    event.setBreakChance(0)
}

function PlayerAnvilUpdateEvent(event) {
    const { left, right, player } = event;
    if (left.count > 1) return;
    let RightId = right.id;
    let LeftId = left.id
    if (LeftId === "fast:potential_paper") return
    if (LeftId === "touhou_little_maid:ultramarine_orb_elixir") return
    
    if (RightId === "fast:potential_paper") {
        let rightNbt = right.getNbt();
        if (rightNbt && rightNbt.weapon && rightNbt.weapon.potential) {
            let weaponNbt = left.nbt;
            if (weaponNbt && weaponNbt.weapon && weaponNbt.weapon.potential != null) {
                return;
            }
            let NewWeapon = Item.of(left, left.count, left.orCreateTag);
            let NewWeaponNbt = NewWeapon.nbt;
            NewWeaponNbt.weapon = {};
            NewWeaponNbt.weapon.potential = rightNbt.weapon.potential;
            event.setMaterialCost(1);
            event.setCost(0);
            event.setOutput(NewWeapon);
        }
    }
    
    if (RightId === "fast:potential_reverter") {
        let nbt = left.getNbt();
        if (nbt && nbt.weapon) {
            let weaponConfig = nbt.weapon;
            let NewWeapon = Item.of(left, left.count, nbt)
            let NewNbt = NewWeapon.getNbt();
            if (weaponConfig.SpecialProperty && weaponConfig.SpecialProperty === "minecraft:bedrock") {
            if (NewNbt.Unbreakable) {
            NewNbt.remove("Unbreakable")
            }
            }
            NewNbt.remove("weapon")
            NewWeapon.setNbt(NewNbt)
            event.setMaterialCost(1);
            event.setCost(0);
            event.setOutput(NewWeapon)
            }
    }
    
    const SpecialProperty = SpecialPropertyItemList[RightId];
    if (SpecialProperty) {
        let nbt = left.getNbt();
        if (nbt && nbt.weapon) {
            let weaponConfig = nbt.weapon;
            
            if (weaponConfig.SpecialProperty || weaponConfig.potential <= 0) return;
            if ((weaponConfig.potential - SpecialProperty) < -5) return;
            let attributeCount = Object.keys(weaponConfig)
                .filter(k => k !== 'potential' && k !== 'SpecialProperty').length;
            
            if (attributeCount > 4) return;

            let NewWeapon = Item.of(left, left.count, left.nbt);
            let NewWeaponNbt = NewWeapon.nbt;
            let NewWeaponConfig = NewWeaponNbt.weapon;
            NewWeaponConfig.potential -= SpecialProperty;
            NewWeaponConfig.SpecialProperty = RightId;
            if (RightId === "minecraft:bedrock") {
            let thisItem = NewWeapon.withNBT({Unbreakable:1})
            NewWeapon = thisItem
            }
            event.setMaterialCost(1);
            event.setCost(0);
            event.setOutput(NewWeapon);
        }
    }
    
    const augmentation = augmentations.find(aug => aug.item === RightId);
    if (!augmentation) return;

    let nbt = left.getNbt();
    if (nbt && nbt.weapon) {
        let weaponConfig = nbt.weapon;
        let tec = player.getAttribute('fast:tec').getValue();
        let rightCount = right.count; // 获取右物品的数量
        
        if (weaponConfig.potential <= 0) return;
        
        let attributeCount = Object.keys(weaponConfig).length - 1;
        if (weaponConfig.SpecialProperty) {
            attributeCount += 1;
        }
        if (attributeCount >= 6 && !weaponConfig.hasOwnProperty(augmentation.attribute)) return;
        
        let currentAttributeValue = weaponConfig[augmentation.attribute] || 0;
        
        // 计算属性上限
        if (!augmentation.getMax) return;

        let attributeMax = augmentation.getMax(player, weaponConfig, augmentation, tec);
        
        // 计算可用的最大物品数量
        let maxPossibleCount = 0;
        if (augmentation.value > 0) {
            maxPossibleCount = Math.floor((attributeMax - currentAttributeValue) / augmentation.value);
        } else if (augmentation.value < 0) {
            maxPossibleCount = Math.floor((currentAttributeValue - attributeMax) / Math.abs(augmentation.value));
        }
        if (maxPossibleCount < 0) maxPossibleCount = 0;
        
        // 取右物品数量和可用最大数量的较小值
        let actualCount = Math.min(rightCount, maxPossibleCount);
        if (actualCount <= 0) return;
        
        // 计算根据数量调整后的属性值
        let newValue = currentAttributeValue + (augmentation.value * actualCount);
        
        // 检查调整后的属性值是否仍然超过上限（可能由于浮点数精度问题）
        if ((augmentation.value > 0 && newValue > attributeMax) || (augmentation.value < 0 && newValue < attributeMax)) {
            // 精确调整到刚好达到上限
            if (augmentation.value > 0) {
                actualCount = Math.floor((attributeMax - currentAttributeValue) / augmentation.value);
            } else {
                actualCount = Math.floor((currentAttributeValue - attributeMax) / Math.abs(augmentation.value));
            }
            if (actualCount <= 0) return;
            newValue = currentAttributeValue + (augmentation.value * actualCount);
        }
        
        let totalPotentialCost = augmentation.potentialCost * actualCount; // 根据实际数量计算总潜力消耗
        
        if ((weaponConfig.potential - totalPotentialCost) <= -5) return;
        
        if (augmentation.opposite && weaponConfig.hasOwnProperty(augmentation.opposite)) return;
        
        let NewWeapon = Item.of(left, left.count, left.nbt);
        let NewWeaponNbt = NewWeapon.nbt;
        let NewWeaponConfig = NewWeaponNbt.weapon;
        NewWeaponConfig.potential -= totalPotentialCost;
        NewWeaponConfig[augmentation.attribute] = newValue; // 应用新的属性值
        event.setMaterialCost(actualCount); // 设置实际消耗的右物品数量
        event.setCost(0);
        event.setOutput(NewWeapon);
    }
}

function ItemisHead(item) {
    return item.hasTag('forge:armors/helmets') || item.hasTag('forge:armor/helmets')
}

function ItemisChest(item) {
    return item.hasTag('forge:armors/chestplates') || item.hasTag('forge:armor/chestplates')
}

function ItemisLegs(item) {
    return item.hasTag('forge:armors/leggings') || item.hasTag('forge:armor/leggings')
}

function ItemisFeet(item) {
    return item.hasTag('forge:armors/boots') || item.hasTag('forge:armor/boots')
}

function ItemisArmor(item) {
    return ItemisHead(item) || ItemisChest(item) || ItemisLegs(item) || ItemisFeet(item)
}

const forcePercentAttributes = [
    'crit_rate_percentage',
    'crit_damage_percentage',
    'negative_crit_rate_percentage',
    'negative_crit_damage_percentage'
]

NativeEvents.onEvent($ItemAttributeModifierEvent, event => {
    let itemStack = event.getItemStack();
    let entity = event.player
    if (!itemStack) return;

    let slotType = event.getSlotType();
    if (!slotType) return;
    
    let isArmor = ItemisArmor(itemStack)
    
    if (isArmor) {
    let thisType = false
    if (slotType === 'FEET') {
    if (ItemisFeet(itemStack)) thisType = true
    }
    
    if (slotType === 'LEGS') {
    if (ItemisLegs(itemStack)) thisType = true
    }
    
    if (slotType === 'HEAD') {
    if (ItemisHead(itemStack)) thisType = true
    }
    
    if (slotType === 'CHEST') {
    if (ItemisChest(itemStack)) thisType = true
    }
    if (!thisType) return
    } else {
    if (slotType !== 'MAINHAND') return
    }

    let nbt = itemStack.getNbt();
    if (!nbt) return;

    let Cultivated = getModifierLevel(nbt, "tconstruct:cultivated");

    if (!nbt.weapon) return;
    let weaponConfig = nbt.weapon;

    for (let attribute in weaponConfig) {
        if (attribute === 'potential') continue;

        let augmentation = augmentations.find(
            aug => aug.attribute === attribute
        );
        if (!augmentation || !augmentation.modifier) continue;

        let value = weaponConfig[attribute];

        // Cultivated 增幅
        if (Cultivated) {
            value *= (1 + Cultivated * 0.15);
        }

        let type = augmentation.modifier.type;
        
        if (isArmor && type === 'attack') {
            value *= 0.5;
        }
        
        if (slotType === 'MAINHAND' && type === 'defense') {
            value *= 0.5;
        }
        
        if (forcePercentAttributes.includes(augmentation.attribute) || augmentation.modifier.operation !== 'ADDITION') {
        value /= 100
        }

        if (!value || value === 0) continue;

        event.addModifier(
            augmentation.modifier.attributeName,
            new $AttributeModifier(
                UUID.fromString(augmentation.modifier.attributeId),
                augmentation.modifier.name,
                value,
                augmentation.modifier.operation
            )
        );
    }
});

const TConstructModifierConfig = []

function applyTconstructModifiers(event, nbt) {

    for (let cfg of TConstructModifierConfig) {

        let level = getModifierLevel(nbt, cfg.id)
        if (!level) continue

        event.addModifier(
            cfg.attribute,
            new $AttributeModifier(
                UUID.fromString(cfg.uuid),
                cfg.id,
                cfg.amount(level),
                'ADDITION'
            )
        )
    }
}

function addTconstructModifier(id, attribute, uuid, amountFunc) {
    TConstructModifierConfig.push({
        id: id,
        attribute: attribute,
        uuid: uuid,
        amount: amountFunc
    });
}

// addTconstructModifier(
    // "kubejs:mechanical_heart",
    // "fast:agi",
    // "b9753367-1689-4e98-a08e-4690a7e92612",
    // level => level * 5
// )

// addTconstructModifier(
    // "tconstruct:magnetic",
    // "fast:vit",
    // "b9753367-1689-4e98-a08e-4690a7e92613",
    // level => level * 3
// )

// addTconstructModifier(
    // "tconstruct:jagged",
    // "fast:str",
    // "b9753367-1689-4e98-a08e-4690a7e92614",
    // level => level * 5
// )

// addTconstructModifier(
    // "tconstruct:stonebound",
    // "fast:int",
    // "b9753367-1689-4e98-a08e-4690a7e92615",
    // level => level * 5
// )

