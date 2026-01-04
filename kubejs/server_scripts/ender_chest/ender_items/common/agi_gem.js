// priority: 500

registerItemMaidBauble("fast:agi_gem")
EnderBonusOnEntitySpawnByEntity.addBonus("fast:agi_gem", AgiGemEvent, 1)

function AgiGemEvent(handler, event) {
    let entity = event.entity;
    let type = entity.getType()
    if (type !== "minecraft:arrow") return
    let EventEntity = getEntityOwner(entity)
    if (!EventEntity) return
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    if (isInCooldown("agi_gem", uuid, level)) return
    let MagicData = $MagicData.getPlayerMagicData(EventEntity)
    let target = null
    if (MagicData) {
    let thisData = MagicData.getAdditionalCastData()
    if (thisData) {
    if (typeof thisData.getTarget === 'function') {
    target = thisData.getTarget(level)
    }
    }
    }
    let server = EventEntity.server
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    let spellLevel = 5 + Math.floor(agi / 2)
    let spellId = "irons_spellbooks:poison_arrow"
    if (EventEntity.isPlayer()) {
    server.scheduleInTicks((12), () => {
    overLimitSpellOnCast(spellId, spellLevel, EventEntity, target)
    })
    } else {
    if (!EventEntity.isCasting()) {
    MoboverLimitSpellCast(spellId, EventEntity, spellLevel);
    }
    }
    addCooldown("agi_gem", uuid, 14, level)
}