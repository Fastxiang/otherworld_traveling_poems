// priority: 500

registerItemMaidBauble("fast:ammo_drive")
EnderBonusOnEntityGunShoot.addBonus("fast:ammo_drive", AmmoDriveEvent, 1)
EnderBonusOnLivingHurtByEntity.addBonus("fast:ammo_drive", AmmoDriveDamageEvent, 2)

function AmmoDriveEvent(handler, event) {
    let EventEntity = event.getShooter()
    let item = event.getGunItemStack();
    if (EventEntity.type !== "touhou_little_maid:maid") return
    let Vehicle = EventEntity.getVehicle()
    let Owner = EventEntity.getOwner()
    if (!Vehicle || !Owner) return
    if (Owner !== Vehicle) return
    let nbt = item.nbt
    let Ammo = nbt.GunCurrentAmmoCount + 1
    nbt.putInt("GunCurrentAmmoCount", Ammo)
    // if (Math.random() < 0.2) {
    // if (!Owner.hasEffect('fast:full_throttle')) {
    // Owner.potionEffects.add('fast:full_throttle', 300, 0, false, false);
    // } else {
    // let FullThrottle = Owner.getEffect('fast:full_throttle');
    // let EffectLevel = FullThrottle.getAmplifier();
    // Owner.removeEffect('fast:full_throttle');
    // Owner.potionEffects.add('fast:full_throttle', 300, Math.min((EffectLevel + 1), 99), false, false)
    // }
    // }
}

function AmmoDriveDamageEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    let level = EventEntity.level
    if (EventEntity.type !== "touhou_little_maid:maid") return
    let Vehicle = EventEntity.getVehicle()
    let Owner = EventEntity.getOwner()
    if (!Vehicle || !Owner) return
    if (Owner !== Vehicle) return
    if (!damagetype.includes("arrow")) return
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    let vit = EventEntity.getAttribute(`fast:vit`).getValue();
    let str = EventEntity.getAttribute(`fast:str`).getValue();
    let Damage = (str + vit + agi) / 0.5
    event.amount = Damage
}