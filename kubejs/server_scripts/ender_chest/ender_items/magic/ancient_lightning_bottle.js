// priority: 500

registerItemMaidBauble("fast:ancient_lightning_bottle")
registerItemTag("fast:ancient_lightning_bottle", "fast:magic")
EnderBonusOnLivingHurtByEntity.addBonus("fast:ancient_lightning_bottle", AncientLightningBottleEvent, 1)

function AncientLightningBottleEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = entity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes("lightning")) return
    if (isInCooldown("ancient_lightning_bottle", uuid, level)) return
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    let vit = EventEntity.getAttribute(`fast:vit`).getValue();
    let EventEntityPower = EventEntity.getAttribute('irons_spellbooks:spell_power').getValue();
    let EventEntityThisPower = EventEntity.getAttribute('irons_spellbooks:lightning_spell_power').getValue();
    if (entity.isLiving()) {
    let Damage = (int + vit) * EventEntityPower * EventEntityThisPower
    let lightningStrike = new $LightningStrike(level);
    lightningStrike.setOwner(EventEntity);
    lightningStrike.setDamage(Damage);
    lightningStrike.setPos(entity.position());
    level.addFreshEntity(lightningStrike);
    addCooldown("ancient_lightning_bottle", uuid, 30, level)
    }
}