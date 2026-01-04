// priority: 500

registerItemMaidBauble("fast:godspeed_wield")
EnderBonusOnLivingHurtByOthers.addBonus("fast:godspeed_wield", GodspeedWieldEvent, 2)

function GodspeedWieldEvent(handler, event) {
     let EventEntity = event.entity
     let entity = event.source.actual;
     let uuid = EventEntity.uuid
     event.amount *= 2
     if (Math.random() < 0.2) {
     event.amount = 0
     }
}