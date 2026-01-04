

ItemEvents.tooltip((event) => {
        event.addAdvanced("fast:deepblue_crystal", (item, advanced, text) => {
        let itemId = item.id
        let langId = itemId.replace(":", ".")
        let texthave = 1
        text.add(texthave++, Text.translate(`item.${langId}.type`))
        if (event.shift) {
        text.add(texthave++, Text.translate(`item.${langId}.tooltip2`))
        } else {
        text.add(texthave++, Text.translate(`item.${langId}.tooltip`))
        text.add(texthave++, Text.translate("item.fast.tooltips.shift"))
        }
        let nbt = item.nbt
        
        if (nbt && nbt.RougueLike) {
        let ItemData = nbt.RougueLike
        if (ItemData.stage) {
        let { remove, stage, floor } = ItemData
        text.add(texthave++, Text.translate(`item.${langId}.remove`))
        text.add(texthave++, Text.translatable(`item.${langId}.stage`, stage).getString())
        text.add(texthave++, Text.translatable(`item.${langId}.floor`, floor).getString())
        if (!ItemData.GetItem) {
        if (stage >= 3) {
        text.add(texthave++, Text.translate(`item.${langId}.can`))
        } else {
        text.add(texthave++, Text.translate(`item.${langId}.not`))
        }
        } else {
        text.add(texthave++, Text.translate(`item.${langId}.get`))
        }
        } else {
        let { uuid } = ItemData
        text.add(texthave++, Text.translate(`item.${langId}.open`))
        text.add(texthave++, Text.translatable(`item.${langId}.uuid`, uuid).getString())
        }
        }
            
    });
})