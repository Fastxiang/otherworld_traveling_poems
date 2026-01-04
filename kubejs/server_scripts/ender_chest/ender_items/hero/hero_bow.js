// priority: 500

registerItemMaidBauble("fast:the_hero_bow")
EnderBonusOnLivingHurtByEntity.addBonus("fast:the_hero_bow", HeroBowEvent, 1)
EnderBonusOnLivingGetProjectile.addBonus("fast:the_hero_bow", HeroBowGetProjectileEvent, 1)

// 勇者弓
function HeroBowEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    let level = EventEntity.level
    if (isInCooldown("the_hero_bow", uuid, level)) return
    let CanDamage = false
    if (hasEntityEnderBonus(EventEntity, "fast:berserker_bow")) {
    let Olddamagetype = data.oldDamageType
    if (isDamageTypePhysical(Olddamagetype, EventEntity)) CanDamage = true
    }
    if (damagetype.includes("arrow")) CanDamage = true
    if (!CanDamage) return
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    handler.addExtraDamage(agi * 3)
    addCooldown("the_hero_bow", uuid, 20, level)
}

let isArrowList = {
"minecraft:arrow": true,
"minecraft:air": true,
}

function ItemisArrow(itemId) {
    return isArrowList[itemId] || false
}

function ItemisBowsOfCrossbows(Item) {
    return Item.hasTag("forge:tools/bows") || Item.hasTag("forge:tools/crossbows")
}

function HeroBowGetProjectileEvent(handler, event) {
    let EventEntity = event.entity;
    let bow = event.projectileWeaponItemStack
    let ammo = event.projectileItemStack
    let ammoItem = ammo.id
    if (!ItemisBowsOfCrossbows(bow)) return
    if (ItemisArrow(ammoItem)) {
    event.setProjectileItemStack(new Item.of('minecraft:arrow'))
    }
}