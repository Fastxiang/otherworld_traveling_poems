
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

function LivingGetArrowByPlayer(event, player) {
    let level = player.level
    let bow = event.projectileWeaponItemStack
    let ammo = event.projectileItemStack
    let ammoItem = ammo.id
    let ArrowEvent = {}
    if (!ItemisBowsOfCrossbows(bow)) return
    if (!level.isClientSide()) {
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if ((!persistentData.theEmperorPresent || persistentData.theEmperorPresentData != "HeroBow") && persistentData.HeroBow) {
    ArrowEvent.HeroBow = true
    }
    }
    if (ArrowEvent.HeroBow) {
    HeroBowGetArrowEvent(event, player, ammoItem)
    }
}

function HeroBowGetArrowEvent(event, player, ammoItem) {
    if (ItemisArrow(ammoItem)) {
    event.setProjectileItemStack(new Item.of('minecraft:arrow'))
    }
}