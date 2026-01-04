// priority: 500

registerItemMaidBauble("fast:the_hero_shield")
EnderBonusOnLivingHurtByEntity.addBonus("fast:the_hero_shield", HeroShieldDamageEvent, 10)
EnderBonusOnLivingHurtByOthers.addBonus("fast:the_hero_shield", HeroShieldEvent, 2)
EnderBonusOnEntityTick.addBonus("fast:the_hero_shield", HeroShieldTickEvent, 1)

let HeroShieldCanDamage = {}

function HeroShieldDamageEvent(handler, event) {
     let EventEntity = event.source.actual
     let entity = event.entity
     let uuid = EventEntity.uuid
     let canDamage = HeroShieldCanDamage[uuid]
     if (!canDamage && !hasEntityEnderBonus(EventEntity, "fast:justice_shield")) {
     if (hasEntityEnderBonus(EventEntity, "vit_talent5")) {
     event.amount = 50
     } else {
     event.amount = 1
     handler.cancel()
     }
     } else if (canDamage) {
     HeroShieldCanDamage[uuid] = false
     }
}

function HeroShieldEvent(handler, event) {
     let EventEntity = event.entity
     let entity = event.source.actual;
     let uuid = EventEntity.uuid
     let PlayerTags = EventEntity.getTags();
     if (!entity || !entity.isLiving()) return;
     let server = EventEntity.server
     let Defense = EventEntity.getAttribute('fast:defense');
     let DefenseValue = 0
     if (Defense) {
     DefenseValue = Defense.getValue();
     }
     if (entity.isAlive()) {
     let AttackDamage = 10
     AttackDamage += DefenseValue / 2
     if (PlayerTags) {
     if (PlayerHasTag(EventEntity, PlayerTags, "vit_talent1")) {
     AttackDamage *= 1.5
     }
     }
     if (hasEntityEnderBonus(EventEntity, "fast:justice_shield")) {
     AttackDamage *= 0.3
     }
     server.scheduleInTicks(1, () => {
     if (entity.isAlive()) {
     HeroShieldCanDamage[uuid] = true
     AttackEntity(EventEntity, entity, "fast:ender_magic", AttackDamage);
     }
     })
     }
}

function HeroShieldTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let age = EventEntity.age
    if (age % 60 !== 0) return
    let nbt = getEntityEnderBonusNbt(EventEntity, "fast:the_hero_shield")
    if (nbt && nbt.close) return
    EventEntity.potionEffects.add('fast:taunt_effect', 100, 0, false, false);
}