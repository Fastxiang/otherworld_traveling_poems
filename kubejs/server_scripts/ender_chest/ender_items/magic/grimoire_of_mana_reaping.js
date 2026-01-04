// priority: 500

registerItemMaidBauble("fast:grimoire_of_mana_reaping")
EnderBonusOnLivingHurtByEntity.addBonus("fast:grimoire_of_mana_reaping", GrimoireOfManaReapingEvent, 1)
registerItemTag("fast:grimoire_of_mana_reaping", "fast:magic")

function GrimoireOfManaReapingEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!MagicDamageType.includes(damagetype)) return
    let player = resolvePlayerFromEntity(EventEntity)
    if (player) {
    let magicData = $MagicData.getPlayerMagicData(player);
    if (!magicData) return
    let thisMana = magicData.getMana() * 0.12 + 50;
    if (checkPlayerManaCost(player, thisMana, false)) {
    entity.invulnerableTime = 0
    }
    }
}