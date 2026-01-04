// priority: 1000

const EnderBonusOnLivingGetProjectile = new EnderBonusHandler()

NativeEvents.onEvent($LivingGetProjectileEvent, event => {
    let entity = event.entity
    let uuid = entity.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnLivingGetProjectile.run(itemIds, [event], entity)
})