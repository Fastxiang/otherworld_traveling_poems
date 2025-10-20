const genericBonusKeys = [
    'genericStrBonus',
    'genericIntBonus',
    'genericAgiBonus',
    'genericVitBonus',
    'genericTecBonus',
    'genericAttackBonus',
    'genericCritBonus',
    'genericAttackSpeedBonus',
    'genericMaxHealthBonus',
    'genericSpellPowerBonus',
    'genericEvocationSpellBonus',
    'genericFireSpellBonus',
    'genericHolySpellBonus',
    'genericEnderSpellBonus',
    'genericLightningSpellBonus',
    'genericBloodSpellBonus',
    'genericIceSpellBonus',
    'genericNatureSpellBonus',
    'genericDefenseBonus',
    'genericMoveBonus',
    'genericPhysicalMasteryBonus',
    'genericAttackInvincibleBonus',
];

const needtooltipitem = [
                'fast:the_dice_of_fate',
                'fast:deepblue_shard',
]

ItemEvents.tooltip(event => {
    event.addAdvanced("*", (item, advanced, text) => {
        // 获取物品的NBT数据
        let nbt = item.getNbt();
        let itemId = item.id;
        // 检查NBT是否存在，以及是否存在weapon属性
        if (!nbt && !needtooltipitem.includes(itemId)) return;
        if (nbt && nbt.weapon) {
            let weaponConfig = nbt.weapon;
            
            let index = 1; // 初始化索引

            // 检查是否存在潜力值, 并在最前面添加
            if (weaponConfig.potential) {
                text.add(index, Text.of(`§b潜力值: §f${weaponConfig.potential}`)); // 使用 text.add, 插入到指定位置
                index++; // 增加索引
            }
            let SpecialProperty = null
            // 遍历weaponConfig中的所有属性（除了potential）
            if (event.shift && weaponConfig.SpecialProperty) {
            let thisSpecialProperty = weaponConfig.SpecialProperty
            let SpecialPropertylangId = thisSpecialProperty.replace(":", ".")
            
             let keywordKeys = KeywordReplacementSpecialPropertys[thisSpecialProperty]
             if (keywordKeys) {
             let hoverableTexts = buildHoverableKeywordTexts(keywordKeys);
             let tooltipLine = Text.translatable.apply(null, [`special.property.modifier.fast.${SpecialPropertylangId}`].concat(hoverableTexts));
             text.add(index, tooltipLine);
             } else {
             text.add(index, Text.translatable(`special.property.modifier.fast.${SpecialPropertylangId}`))
             }
            } else {
            for (let attribute in weaponConfig) {
                if (attribute === 'potential') continue;
                if (attribute ==='SpecialProperty') {
                SpecialProperty = weaponConfig[attribute]
                continue
                }
                let value = weaponConfig[attribute];
                let attributeName = Text.translatable(`attribute.modifier.fast.${attribute}`).string; // 获取字符串

                // 直接根据属性名判断是否为百分比属性
                if (attribute.includes("percentage")) {
                    let percentageValue = Math.round(value * 100); // 转换为百分比并取整
                    text.add(index, Text.of(`§a${attributeName}: §2${percentageValue > 0 ? '+' : ''}${percentageValue}%`));
                } else {
                    text.add(index, Text.of(`§a${attributeName}: §2${value > 0 ? '+' : ''}${value}`)); // 使用 text.add, 插入到指定位置
                }
                index++; // 增加索引
            }
            if (SpecialProperty) {
            let SpecialPropertylangId = SpecialProperty.replace(":", ".")
            let SpecialPropertyName = Text.translatable(`special.property.modifier.fast.${SpecialPropertylangId}.name`).string;
                    text.add(index++, Text.of(`${SpecialPropertyName}`));
                    text.add(index, Text.translatable(`special.property.modifier.fast.shift`));
            }
            }
         }
         
         if ((nbt && nbt.enderbonus) || needtooltipitem.includes(itemId)) {
    let NbtEnderbonus = nbt?.enderbonus || {};
    let langId = itemId.replace(":", ".");
    let texthave = 1
    text.add(texthave++, Text.translate(`${langId}.genric.type`));

    if (event.shift) {
        let bonusNames = [];
        
        bonusConfig.forEach(bonus => {
            if (!NbtEnderbonus[bonus.key]) return;

            bonus.modifiers.forEach(modifier => {
                let valueRaw = Math.round(NbtEnderbonus[bonus.key]);
                let value = valueRaw;
                let display = "";
                let isAdd = valueRaw >= 0;

                // 根据 op 判断显示格式
                if (modifier.op === "multiply_base" || modifier.op === "multiply_total") {
                    display = isAdd ? `+${value}%` : `${value}%`;
                } else if (modifier.op === "addition") {
                    display = isAdd ? `+${value}` : `${value}`;
                }
                let attr = modifier.attr
                // 颜色逻辑
                let color = "§c";
                if (!isAdd) color = "§9";
                if (attr === "kubejs:generic.attack_invulnerable_frames") {
                    color = isAdd ? "§9" : "§c";
                }

                // 翻译键直接从 modifier.attr 拿
                
                let translated = Text.translatable(`attribute.name.${attr.split(":").pop()}`).getString()
                if (translated === `attribute.name.${attr.split(":").pop()}`) {
            translated = Text.translatable(`attribute.${attr.replace(":", ".")}`).getString()
            }

                bonusNames.push(`${color}${translated}: ${display}`);
            });
        });

        let formattedBonusNames = bonusNames.join(" ");
        
        let NotTooltpis = false
        
        if (NbtEnderbonus.SwordSoulCount) {
        text.add(texthave++, Text.translate(`${langId}.genric.tooltip2`));
        NotTooltpis = true
        }
        
        if (!NotTooltpis) {
        
        if (needtooltipitem.includes(itemId)) {
            if (NbtEnderbonus.only) {
                text.add(texthave++, Text.translate(`${langId}.genric.tooltip2_only`).append(" ").append(formattedBonusNames));
            } else {
                text.add(texthave++, Text.translate(`${langId}.genric.tooltip2`).append(" ").append(formattedBonusNames));
            }
        } else if (NbtEnderbonus.only) {
            text.add(texthave++, Text.translate(`genric.tooltip2_only`).append(" ").append(formattedBonusNames));
        } else {
            text.add(texthave++, Text.translate(`genric.tooltip2`).append(" ").append(formattedBonusNames));
        }
        
        }
        
    } else {
        // 未按 shift 显示基础描述
        text.add(texthave++, Text.translate(`${langId}.genric.tooltip`));
        text.add(texthave++, Text.translate("item.fast.tooltips.shift"));
    }
    
                if (nbt && nbt.Roguelike) {
            let uuid = nbt.Roguelike
            text.remove(0)
            text.add(0,Text.translatable(`item.${langId}`).getString()+Text.translatable(`item.fast.rouguelike.needuuid`).getString())
            text.add(texthave++, Text.translatable(`item.fast.rouguelike.uuid`, uuid).getString())
            }
    }

        if (itemId === 'irons_spellbooks:scroll') {
        let spells = nbt?.ISB_Spells?.data; 
        if (spells && Array.isArray(spells)) {
            spells.forEach((spell) => {
                let spellIds = spell.id;
                if (spellIds === "irons_spellbooks:thunderstorm") {
                let player = Client.player
                let Damage = 27
                if (player) {
                let attrMap = player.getAttributes();
                let power = attrMap.getValue('irons_spellbooks:spell_power');
                let lightningPower = attrMap.getValue('irons_spellbooks:lightning_spell_power');
                if (lightningPower != null && power != null) {
                Damage *= power * lightningPower;
                }
                }
                Damage += 7
                text.remove(2)
                text.add(2,Text.translate(`irons_spellbooks.thunderstorm.tooltip`, "§2" + Damage))
                }
            })
            }
            }
});
})