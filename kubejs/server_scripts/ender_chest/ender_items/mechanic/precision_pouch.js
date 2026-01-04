// priority: 500

registerItemMaidBauble("fast:precision_pouch")
EnderBonusOnEntityGunShoot.addBonus("fast:precision_pouch", PrecisionPouchEvent, 1)

function PrecisionPouchEvent(handler, event) {
    let EventEntity = event.getShooter()
    let item = event.getGunItemStack();
    let tec = EventEntity.getAttribute(`fast:tec`).getValue();
    let NeedRandom = Math.min(Math.floor(tec / 7) * 0.1, 1)
    if (Math.random() < NeedRandom) {
    let nbt = item.nbt
    let Ammo = nbt.GunCurrentAmmoCount + 1
    nbt.putInt("GunCurrentAmmoCount", Ammo)
    }
}