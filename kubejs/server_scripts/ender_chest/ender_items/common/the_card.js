// priority: 500

registerEnderBonusCustomDataModifier(TheCard1CustomDataEvent)
registerEnderBonusCustomDataModifier(TheCardNbtAttributeEvent)

registerItemMaidBauble("fast:the_card1")
registerItemMaidBauble("fast:the_card2")
registerItemMaidBauble("fast:the_card3")
registerItemMaidBauble("fast:the_card4")
registerItemMaidBauble("fast:the_card5")
registerItemMaidBauble("fast:the_card6")
registerItemMaidBauble("fast:the_card7")
registerItemMaidBauble("fast:the_card8")
registerItemMaidBauble("fast:the_card9")
registerItemMaidBauble("fast:the_card10")
registerItemMaidBauble("fast:the_card11")
registerItemMaidBauble("fast:the_card12")

function TheCard1CustomDataEvent(entity, item, slot, entry, customData) {

    if (customData.TheCard1has) return customData
    if (item.id !== "fast:the_card1") return customData

    let nbt = item.nbt
    if (!nbt) return customData

    let count = nbt.itemcarddata?.count || 0
    let NeedCount = count * 0.01
    
    if (!customData.TheCard1) customData.TheCard1 = {}
    
    if (!nbt.weapon) return customData

    for (let attributeName in nbt.weapon) {

        if (attributeName === "potential") continue

        let aug = augmentations.find(aug => aug.attribute === attributeName)
        if (!aug || !aug.modifier) continue

        let name = aug.modifier.attributeName
        let operation = aug.modifier.operation
        let value = nbt.weapon[attributeName] * NeedCount
        
        let key = name + "#" + operation
        
        
        if (!customData.TheCard1[key]) {
            customData.TheCard1[key] = { name: name, operation: operation, value: value }
        } else {
            customData.TheCard1[key].value += value
        }
    }
    
    customData.TheCard1has = true
    
    return customData
}

function TheCardNbtAttributeEvent(entity, item, slot, entry, customData) {
    let nbt = item.nbt
    if (!nbt || !nbt.itemcarddata) return customData

    let itemId = item.id
    if (!QualityHaveCountItemNeedList.hasOwnProperty(itemId)) return customData

    let ItemCardData = nbt.itemcarddata
    let ItemRarity = ItemCardData.rarity
    let ThisData = QualityHaveCountItemNeedList[itemId]
    let RarityData = ThisData[ItemRarity]
    
    let Count = RarityData.count
    let Count2 = RarityData.count2 || 0
    let Name = ThisData.name
    
    if (!customData[Name]) customData[Name] = { count: 0, count2: 0 }
    
    if (ThisData.only) {
        if (customData[Name].addedOnly) {
            return customData
        }
        customData[Name].count += Count
        customData[Name].count2 += Count2
        customData[Name].addedOnly = true
    } else {
        customData[Name].count += Count
        customData[Name].count2 += Count2
    }

    return customData
}

EnderBonusOnLivingHurtByEntity.addBonus("fast:the_card3", TheCard3Event, 1)

function TheCard3Event(handler, event) {
    let EventEntity = event.source.actual;
    let CardData = getEntityCustomData(EventEntity, "TheCard3")
    let count = CardData.count2
    handler.addIndependentMultiplier(count - 1)
}

EnderBonusOnEntityFoodEaten.addBonus("fast:the_ca8", TheCard8Event, 1)

function TheCard8Event(handler, event) {
    let EventEntity = event.player;
    let CardData = getEntityCustomData(EventEntity, "TheCard8")
    let count = CardData.count
    let item = event.item
    let fooditem = item.getFoodProperties(EventEntity);
    if (fooditem) {
    let nutrition = fooditem.getNutrition()
    let staturation = fooditem.getSaturationModifier() * nutrition
    if (EventEntity.hasEffect('fast:card_attack')) {
    EventEntity.removeEffect('fast:card_attack');
    }
    EventEntity.potionEffects.add('fast:card_attack', 400, staturation * (count - 1), false, false);
    }
}