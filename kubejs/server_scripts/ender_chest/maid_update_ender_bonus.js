// priority: 1999

function MaidUpdateEnderBonusEvent(maid) {
    if (!maid || !maid.isAlive()) return;
    let MaidBauble = maid.getMaidBauble()
    let uuid = maid.uuid;
    
    let EntityTags = maid.getTags();
    
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
    
    let EntityEnderBonusData = {}
    let genericBonusKeysList = [];
    let customData = {}
    EntityEnderBonusCustomData[uuid] = {}
    
    for (let i = 0; i < MaidBauble.getSlots(); i++) {
    let item = MaidBauble.getStackInSlot(i);
    let Oldresult = { customData: customData, EntityEnderBonusData: EntityEnderBonusData, genericBonusKeysList: genericBonusKeysList }
    let result = handleEnderBonusItem(
        maid,
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
        maid,
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
    
    applyEnderBonusAttributes(maid, EntityEnderBonusData, customData)
    
    EnderBonusOnUpdate.runCheck([maid])
    
    let MaidHp = maid.getHealth();
    let MaidMaxHp = maid.getAttribute('minecraft:generic.max_health').getValue()
    if (MaidHp > MaidMaxHp) {
    maid.setHealth(MaidMaxHp);
    }
}