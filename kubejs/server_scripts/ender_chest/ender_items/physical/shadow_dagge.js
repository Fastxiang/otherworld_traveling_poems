// priority: 500

registerItemMaidBauble("fast:shadow_dagge")
EnderBonusOnLivingHurtByEntity.addBonus("fast:shadow_dagge", ShadowDaggeEvent, 1)
EnderBonusOnEntityTick.addBonus("fast:shadow_dagge", ShadowDaggeTickEvent, 1)

let ShadowDaggeTime = {}

function ShadowDaggeEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let server = EventEntity.server
    let data = handler.customData
    let damagetype = data.damageType
    if (!ShadowDaggeTime[uuid]) ShadowDaggeTime[uuid] = 0
    if (ShadowDaggeTime[uuid] <= 0) {
    handler.addDamageMultiplier(1)
    }
    ShadowDaggeTime[uuid] = 10;
}

function ShadowDaggeTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let uuid = EventEntity.uuid 
    let age = EventEntity.age
    if (age % 20 !== 0) return
    if (ShadowDaggeTime[uuid]) {
    ShadowDaggeTime[uuid] -= 1
    if (ShadowDaggeTime[uuid] <= 0) {
    ShadowDaggeTime[uuid] = 0;
    }
    }
}