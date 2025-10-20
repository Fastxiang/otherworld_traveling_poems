

function GunShootEvent(event){
    if (event.logicalSide.isClient()) return;
    let entity = event.getShooter()
    let item = event.getGunItemStack();
    let PlayerPersistentData = entity.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (persistentData) {
    ShiningBeaconEvent(entity, persistentData, item)
    PrecisionPouchEvent(entity, persistentData, item)
    }
    RecoilMusketEvent(entity, item)
    AmmoDriveEvent(entity, item)
}

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

function RecoilMusketEvent(entity, item) {
    if (!hasSpecialProperty(item, "fast:recoil_musket")) return
    let lookAngle = entity.getLookAngle();
    let spawn = entity.getEyePosition().add(lookAngle.scale(1.5)); 
    let targetPos = lookAngle.scale(32).add(spawn); 
    let direction = targetPos.subtract(spawn).normalize();
    let x = -direction.x() * 0.5;
    let z = -direction.z() * 0.5;
    let y = -direction.y() * 0.5;
    if (entity.isPlayer()) {
    entity.sendData("Motion",{
    motionx:x,
    motiony:y,
    motionz:z
    });
    } else {
    entity.setMotion(x,y,z)
    }
}

function AmmoDriveEvent(maid, item) {
    if (maid.type !== "touhou_little_maid:maid") return
    let Vehicle = maid.getVehicle()
    let Owner = maid.getOwner()
    if (!Vehicle || !Owner) return
    if (Owner !== Vehicle) return
    let PlayerPersistentData = Owner.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (!persistentData.AmmoDrive) return
    let nbt = item.nbt
    let Ammo = nbt.GunCurrentAmmoCount + 1
    nbt.putInt("GunCurrentAmmoCount", Ammo)
    if (Math.random() < 0.2) {
    if (!Owner.hasEffect('fast:full_throttle')) {
    Owner.potionEffects.add('fast:full_throttle', 300, 0, false, false);
    } else {
    let FullThrottle = Owner.getEffect('fast:full_throttle');
    let EffectLevel = FullThrottle.getAmplifier();
    Owner.removeEffect('fast:full_throttle');
    Owner.potionEffects.add('fast:full_throttle', 300, Math.min((EffectLevel + 1), 99), false, false)
    }
    }
}

function PrecisionPouchEvent(player, persistentData, item) {
    if (!persistentData.PrecisionPouch) return
    let tec = player.getAttribute(`fast:tec`).getValue();
    let NeedRandom = Math.min(Math.floor(tec / 7) * 0.1, 1)
    if (Math.random() < NeedRandom) {
    let nbt = item.nbt
    let Ammo = nbt.GunCurrentAmmoCount + 1
    nbt.putInt("GunCurrentAmmoCount", Ammo)
    }
}