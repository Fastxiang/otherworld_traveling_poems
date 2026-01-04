// priority: 1000

const EnderBonusOnPlayerSpellPreCast = new EnderBonusHandler()
const EnderBonusOnPlayerSpellOnCast = new EnderBonusHandler()
const EnderBonusOnPlayerChangeMana = new EnderBonusHandler()

PlayerEvents.spellPreCast(event => {
    // let spellId = event.spellId;
    // let spellLevel = event.spellLevel
    let entity = event.entity;
    let uuid = entity.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerSpellPreCast.run(itemIds, [event], entity)
})

PlayerEvents.spellOnCast(event => {
    let entity = event.entity;
    let uuid = entity.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerSpellOnCast.run(itemIds, [event], entity)
})

PlayerEvents.changeMana(event => {
    let entity = event.entity;
    let uuid = entity.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerChangeMana.run(itemIds, [event], entity)
})