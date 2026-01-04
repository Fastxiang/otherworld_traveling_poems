// priority: 500

EnderBonusOnLivingHurtByEntity.addSpecialProperty("lavafishing:quartz_fish", SpecialPropertyMagicBookEvent, 1)

function SpecialPropertyMagicBookEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    let player = resolvePlayerFromEntity(EventEntity)
    if (player) {
    let MaxMana = player.getAttribute(`irons_spellbooks:max_mana`)
    let MaxManaValue = MaxMana ? MaxMana.getValue() : 0
    if (!MaxManaValue) return
    let NeedMana = Math.floor(MaxManaValue * 0.05)
    if (checkPlayerManaCost(player, NeedMana, false)) {
    handler.addExtraDamage(NeedMana)
    }
    }
}