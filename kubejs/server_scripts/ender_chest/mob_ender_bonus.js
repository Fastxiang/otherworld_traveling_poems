
function MobUpdateEnderBonusEvent(entity) {
    if (!entity || !entity.isAlive()) return;
    let uuid = entity.uuid;
    let EnderBonusItemList = MobEntityEnderBonusItemList[uuid]
    if (!EnderBonusItemList) return
    
    let EntityEnderBonusData = {}
    let TagsData = {}
    let genericBonusKeysList = [];
    let customData = {}
    EntityEnderBonusCustomData[uuid] = {}
    
    let EntityTags = entity.getTags();
    
    EntityTags.forEach(tag => {
        let entry = EntityEnderBonusData[tag]
        if (entry) {
                entry.count += 1
                EntityEnderBonusData[tag] = entry
            } else {
                EntityEnderBonusData[tag] = {
                    count: 1
                   }
                }
    })
    
    for (let i = 0; i < EnderBonusItemList.length; i++) {
    let item = EnderBonusItemList[i]
    let Oldresult = { customData: customData, EntityEnderBonusData: EntityEnderBonusData, genericBonusKeysList: genericBonusKeysList }
    let result = handleEnderBonusItem(
        entity,
        item,
        i,
        Oldresult
    )
    customData = result.customData
    EntityEnderBonusData = result.EntityEnderBonusData
    genericBonusKeysList = result.genericBonusKeysList
    }
    
    if (customData.NewEnderBonus) {
    let extraList = customData.NewEnderBonus

    for (let i = 0; i < extraList.length; i++) {
        let item = extraList[i]

    let Oldresult = { customData: customData, EntityEnderBonusData: EntityEnderBonusData, genericBonusKeysList: genericBonusKeysList }
    let result = handleEnderBonusItem(
        entity,
        item,
        i,
        Oldresult
    )
    customData = result.customData
    EntityEnderBonusData = result.EntityEnderBonusData
    genericBonusKeysList = result.genericBonusKeysList
    }
    }
    
    EntityEnderBonus[uuid] = EntityEnderBonusData
    
    applyEnderBonusAttributes(entity, EntityEnderBonusData, customData)
    
    EnderBonusOnUpdate.runCheck([entity])
    
    let EntityHp = entity.getHealth();
    let EntityMaxHp = entity.getAttribute('minecraft:generic.max_health').getValue()
    if (EntityHp > EntityMaxHp) {
    entity.setHealth(EntityMaxHp);
    }
    
}