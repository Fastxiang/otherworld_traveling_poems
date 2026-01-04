// priority: 500

registerItemMaidBauble("fast:iron_precision_mechanism")
EnderBonusOnLivingHurtByEntity.addBonus("fast:iron_precision_mechanism", IronPrecisionMechanismEvent, 1)
registerItemTag("fast:iron_precision_mechanism", "fast:magic")

function IronPrecisionMechanismEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!MagicDamageType.includes(damagetype)) return
    let Crt = EventEntity.getAttribute(`l2damagetracker:crit_rate`).getValue();
    let CrtDamage = EventEntity.getAttribute(`l2damagetracker:crit_damage`).getValue();
    if (Math.random() < Crt) {
    if (CrtDamage > 0) {
    event.amount *= (1 + CrtDamage)
    }
    }
}