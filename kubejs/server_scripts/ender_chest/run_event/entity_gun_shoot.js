// priority: 1000

const EnderBonusOnEntityGunShoot = new EnderBonusHandler()

NativeEvents.onEvent($GunShootEvent, event => {
    let entity = event.getShooter()
    let item = event.getGunItemStack();
    let type = getGunType(item)
    if (entity.isPlayer()) {
    entity.tell(type)
    }
    let uuid = entity.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnEntityGunShoot.run(itemIds, [event], entity)
})

function ShiningBeaconEvent(player, persistentData, item) {
    if (!persistentData.ShiningBeacon) return
    if (!persistentData.ShimmeringDiamond) return
    let nbt = item.nbt
    let GunFireMode = nbt.GunFireMode
    let Count = 0
    if (GunFireMode === "AUTO") {
    Count = 233
    } else if (GunFireMode === "SEMI") {
    Count = 5833
    }
    if (!Count) return
    let enderChest = player.enderChestInventory;
    let data = persistentData.ShimmeringDiamond
    let i = data.i
    let ShimmeringDiamond = enderChest.getItem(i);
    let OldValue = ShimmeringDiamond.damageValue
    let thisValue = OldValue + Count
    if (thisValue > 23333) return
    ShimmeringDiamond.damageValue = thisValue
    let NewValue = ShimmeringDiamond.damageValue
    let Ammo = nbt.GunCurrentAmmoCount + 1
    FEValue(player, persistentData, NewValue)
    nbt.putInt("GunCurrentAmmoCount", Ammo)
}