    // 为所有物品添加统一格式的提示信息

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
    "fast:magic": "item.type.magic",
    "fast:dragon": "item.type.dragon",
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
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
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
    "tooltip.keyword.percent.e",
    "tooltip.keyword.percent.e",
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
    "fast:limit_break_staff": [
    "fast.type.damagetype.ender_magic",
    ],
    "fast:ancient_lightning_particle": [
    "fast.type.damagetype.lightning_magic",
    ],
    "fast:ancient_lightning_bottle": [
    "fast.type.damagetype.lightning_magic",
    ],
    "fast:ancient_misc_soul_fire": [
    "fast.type.damagetype.fire_magic",
    ],
    "fast:str_gem": [
    "fast.type.damagetype.player",
    ],
};


const NeedDeleteItem = [
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

const percentAttrList = [
    "fast:dodge_chance",
    "fast:block_chance",
    "l2damagetracker:crit_rate",
    "l2damagetracker:crit_damage",
    "irons_spellbooks:spell_power",
    "irons_spellbooks:evocation_spell_power",
    "irons_spellbooks:fire_spell_power",
    "irons_spellbooks:ice_spell_power",
    "irons_spellbooks:nature_spell_power",
    "irons_spellbooks:lightning_spell_power",
    "irons_spellbooks:holy_spell_power",
    "irons_spellbooks:ender_spell_power",
    "irons_spellbooks:blood_spell_power",
];


function buildHoverableKeywordTexts(keywordKeys) {
    return keywordKeys.map(key => {
        let name = Text.translate(key);
        let desc = Text.translate(`${key}.desc`);
        return desc.getString() !== `${key}.desc` ? name.hover(desc) : name;
    });
}

function formatTimeMS(totalSeconds) {
    let min = Math.floor(totalSeconds / 60)
    let sec = totalSeconds % 60
    return min > 0
        ? `${min}分${sec}秒`
        : `${sec}秒`
}

let PlayerDeceiverMaskData = {}

NetworkEvents.dataReceived("DeceiverMask", event => {
    let { data, player } = event;
    if (data) {
    let DeceiverMaskData = data[`DeceiverMaskData`]
    if (DeceiverMaskData) {
    PlayerDeceiverMaskData = DeceiverMaskData
    }
    } else {
    PlayerDeceiverMaskData = {}
    }
})

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
            
            
            if (itemId === "fast:deceiver_mask") {
            let player = Client.player
            let DeceiverMaskData = PlayerDeceiverMaskData
            let HaveDeceiverMask = false
            if (DeceiverMaskData) {
            let items = DeceiverMaskData.Items
    if (items && items.length !== 0) {
    HaveDeceiverMask = true

    text.add(texthave++, Text.of("§6假面正在伪装以下命运："))

    items.forEach(thisstack => {
        let stack = Item.of(thisstack.id, thisstack.count || 1, thisstack.nbt)
        let langId = stack.getItem().getDescriptionId()
        text.add(texthave++, 
            Text.of("§7- ")
                .append(Text.translatable(langId).getString())
        )
    })
    
    let level = player.level
    let timeSec = HeroCardTimeLeftSecondsByEndTick(level, DeceiverMaskData.cd)

         text.add(texthave++,
             Text.of(
               "§e伪装将于 §e" 
               + formatTimeMS(timeSec)
               + "§e 后破碎"
               )
            )
    }
            }
            
            if (!HaveDeceiverMask) {
            text.add(texthave++, Text.of("§6假面没有伪装任何命运"))
            }
            }
            
            
            let attributes = false
            for (let bonus of global.EnderBonusAttributes) {
            let { key, modifiers } = bonus;
    modifiers.forEach(modifier => {
    if (modifier.calculate) return;
    if (itemId !== key) return
    let attr = modifier.attr;
    let translated = Text.translatable(`attribute.name.${attr.split(":").pop()}`).getString();
    if (translated === `attribute.name.${attr.split(":").pop()}`) {
        translated = Text.translatable(`attribute.${attr.replace(":", ".")}`).getString();
    }

    let value = modifier.value;
    let isAdd = modifier.value >= 0;
    let Add = "§c";
    let NotAdd = "§9";

    // 特殊反转属性颜色
    if (attr === "kubejs:generic.attack_invulnerable_frames") {
        Add = "§9";
        NotAdd = "§c";
    }

    // 百分比或数值格式化
    let forcePercent = percentAttrList.includes(attr);
    
    if (
        modifier.op === "multiply_base" ||
        modifier.op === "multiply_total" ||
        forcePercent
    ) {
        value = `${isAdd ? "+" : ""}${value * 100}%`;
    } else {
        value = `${isAdd ? "+" : ""}${value}`;
    }


    if (!attributes) {
        attributes = true;
        text.add(texthave++, Text.translatable("item.fast.tooltip.base_attributes"));
    }
    
    let invertNote = modifier.ignoreInvert ? " §7(无视反转)" : "";

    // 输出行
    if (modifier.op === "multiply_total") {
        text.add(
            texthave++,
            Text.translatable(
                `${isAdd ? Add : NotAdd}最终${translated}: ${value}${invertNote}`
            )
        );
    } else {
        text.add(
            texthave++,
            Text.translatable(
                `${isAdd ? Add : NotAdd}${translated}: ${value}${invertNote}`
            )
        );
    }
    });
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

    global.EnderBonusTooltpisItems.forEach(item => addTooltip(item))
    
});