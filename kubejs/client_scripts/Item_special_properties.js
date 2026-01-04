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

const SpecialPropertyItemListInDelete = [
]

const KeywordReplacementSpecialPropertys = {
    "collectorsreap:lime_popsicle": [
    "tooltip.keyword.defensive_stance",
    "tooltip.keyword.shield_bash",
    "tooltip.keyword.offensive_stance",
    ]
};


ItemEvents.tooltip(event => {
    const processSpecialProperties = (text, itemId, isShift) => {
        let langId = itemId.replace(":", ".");
        let nameKey = `special.property.modifier.fast.${langId}.item.name`;
        let descKey = `special.property.modifier.fast.${langId}`;
        
        // 查找最后一个属性行的位置
        let lastAttributeIndex = text.findIndex(line => 
            line.getString().startsWith("§a") || // 属性行
            line.getString().startsWith("§b")    // 潜力值
        );

        // 确定插入位置（最后一个属性行之后）
        let insertIndex = 1
        
        if (isShift) {
            let keywordKeys = KeywordReplacementSpecialPropertys[itemId]
             if (keywordKeys) {
             let hoverableTexts = buildHoverableKeywordTexts(keywordKeys);
             let tooltipLine = Text.translatable.apply(null, [descKey].concat(hoverableTexts));
             text.add(insertIndex, tooltipLine);
             } else {
             text.add(insertIndex, Text.translatable(descKey));
             }
        } else {
            text.add(insertIndex, Text.translatable(nameKey, SpecialPropertyItemList[itemId]));
            text.add(insertIndex + 1, Text.translatable("special.property.modifier.fast.shift"));
        }
    };

    // 处理SpecialPropertyItemList中的物品
    Object.keys(SpecialPropertyItemList).forEach(itemId => {
        event.addAdvanced(itemId, (item, advanced, text) => {
            if (SpecialPropertyItemListInDelete.includes(itemId)) {
                while (text.length > 1) text.remove(1);
            }
            // 添加特性提示
            processSpecialProperties(text, itemId, event.shift);
        });
    });
});