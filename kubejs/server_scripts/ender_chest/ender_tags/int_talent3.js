// priority: 500

EnderBonusOnPlayerSpellOnCast.addBonus("int_talent3", IntTalent3Event, 1)

function IntTalent3Event(handler, event) {
    let EventEntity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    if (isInCooldown("int_talent3", uuid, level)) return
    let server = EventEntity.server
    let spellId = event.spellId;
    let spellLevel = event.spellLevel
    let MagicData = $MagicData.getPlayerMagicData(EventEntity)
    let thisData = MagicData.getAdditionalCastData()
    let target = null
    if (thisData) {
    if (typeof thisData.getTarget === 'function') {
    target = thisData.getTarget(level)
    }
    }
    server.scheduleInTicks((12), () => {
    overLimitSpellOnCast(spellId, spellLevel, EventEntity, target)
    })
    addCooldown("int_talent3", uuid, 120, level)
}