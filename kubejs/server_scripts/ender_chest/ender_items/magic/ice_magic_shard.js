// priority: 500

registerItemMaidBauble("fast:ice_magic_shard")
EnderBonusOnLivingAttackByEntity.addBonus("fast:ice_magic_shard", IceMagicShardEvent, 1)
registerItemTag("fast:ice_magic_shard", "fast:magic")

function IceMagicShardEvent(handler, event) {
    let EventEntity = event.source.actual;
    let uuid = EventEntity.uuid;
    let data = handler.customData
    let damagetype = data.oldDamageType
    if (damagetype.includes('ice')) return;
    event.setCanceled(true);
}