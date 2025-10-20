let CelestisynthItems = {
    'celestisynth:solaris': 0.2,
    'celestisynth:crescentia': 0.1,
    'celestisynth:breezebreaker': 1,
    'celestisynth:poltergeist': 1,
    'celestisynth:aquaflora': 0.1,
    'celestisynth:frostbound': 0.7,
    'celestisynth:keres': 0.1,
    }

ItemEvents.tooltip((event) => {

        event.addAdvanced("celestisynth:celestial_core", (item, advanced, text) => {
            // 将物品ID中的":"转换为"."以匹配lang文件格式
            let nbt = item.nbt
            let texthave = 1
            // 第一行显示属性和类型
            let itemId = item.id
            let langId = itemId.replace(":", ".")
            text.add(texthave++, Text.translate(`item.${langId}.type`))
            if (event.shift) {
                // 按住shift时显示详细描述
                if (nbt && nbt.item) {
                let DataItem = nbt.item
                let count = CelestisynthItems[DataItem]
                if (count) {
                count *= 100
                let DataItemlangId = DataItem.replace(":", ".")
                let DataItemName = Text.translatable(`item.${DataItemlangId}`).getString()
                text.add(texthave++, Text.translatable(`item.${langId}.tooltip3`, DataItemName, count).getString() + "%")
                }
                } else {
                let keywordKeys = KeywordReplacements[itemId]
             if (keywordKeys) {
             let hoverableTexts = buildHoverableKeywordTexts(keywordKeys);
             let tooltipLine = Text.translatable.apply(null, [`item.${langId}.tooltip2`].concat(hoverableTexts));
             text.add(texthave++, tooltipLine);
             }
                }
            } else {
                // 未按shift时显示基础描述
                text.add(texthave++, Text.translate(`item.${langId}.tooltip`))
                text.add(texthave++, Text.translate("item.fast.tooltips.shift"))
            }
        })
    

});