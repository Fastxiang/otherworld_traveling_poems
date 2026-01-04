// priority: 500

registerItemMaidBauble("fast:fire_magic_shard")
EnderBonusOnLivingDamageByOthers.addBonus("fast:fire_magic_shard", FireMagicShardEvent, 5)
registerItemTag("fast:fire_magic_shard", "fast:magic")

function FireMagicShardEvent(handler, event) {
     let EventEntity = event.entity
     let entity = event.source.actual;
     let uuid = EventEntity.uuid;
     let Damage = event.amount
     if (Damage >= 3 && EventEntity.hasEffect('fast:blazing_effect')) {
     let fireEffect = EventEntity.getEffect('fast:blazing_effect');
     EventEntity.removeEffect('fast:blazing_effect');
     EventEntity.potionEffects.add('fast:blazing_effect', fireEffect.getDuration() + 200, fireEffect.getAmplifier(), false, false)
     }
}