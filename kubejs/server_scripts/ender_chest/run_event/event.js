// priority: 1000


NativeEvents.onEvent($ProjectileImpactEvent, event => {
})

NativeEvents.onEvent($ItemStackedOnOtherEvent, event => {
})






NativeEvents.onEvent($SpellHealEvent, event => {
     let targetEntity = event.targetEntity;
     let healAmount = event.healAmount;
     let entity = event.entity
     // if (targetEntity.isPlayer()) {
     // LivingHealByOthers(entity, targetEntity, healAmount);
     // }
})

