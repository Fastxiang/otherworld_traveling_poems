// priority: 500

registerItemMaidBauble("fast:uma_factor_item")
registerEnderBonusCustomDataModifier(UmaFactorItemEvent)

function UmaFactorItemEvent(EventEntity, item, slot, entry, customData) {
    if (!customData.UmaCount) customData.UmaCount = 0

    if (item.id === 'umapyoi:uma_soul') {
        let nbt = item.nbt
        if (nbt && nbt.ranking) {
            switch (nbt.ranking) {
                case "ssr":
                    customData.UmaCount += 0.1
                    break
                case "sr":
                    customData.UmaCount += 0.04
                    break
                case "r":
                    customData.UmaCount += 0.02
                    break
            }
        }
    }
    return customData
}