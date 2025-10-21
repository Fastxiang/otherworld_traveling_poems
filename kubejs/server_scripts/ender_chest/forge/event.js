// priority: 1100

const $MobEffectEvent$Added = Java.loadClass('net.minecraftforge.event.entity.living.MobEffectEvent$Added');
const $CriticalHitEvent = Java.loadClass('net.minecraftforge.event.entity.player.CriticalHitEvent');
const $LivingAttackEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingAttackEvent');
const $LivingHurtEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingHurtEvent');
const $LivingDamageEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingDamageEvent');
const $SpellHealEvent = Java.loadClass('io.redspace.ironsspellbooks.api.events.SpellHealEvent');
const $InteractMaidEvent = Java.loadClass('com.github.tartaricacid.touhoulittlemaid.api.event.InteractMaidEvent');
const $LivingGetProjectileEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingGetProjectileEvent');
const $AnvilUpdateEvent = Java.loadClass('net.minecraftforge.event.AnvilUpdateEvent');
const $AnvilRepairEvent = Java.loadClass('net.minecraftforge.event.entity.player.AnvilRepairEvent');
const $ShieldBlockEvent = Java.loadClass('net.minecraftforge.event.entity.living.ShieldBlockEvent');
const $ItemStackedOnOtherEvent = Java.loadClass('net.minecraftforge.event.ItemStackedOnOtherEvent');
const $GunShootEvent = Java.loadClass("com.tacz.guns.api.event.common.GunShootEvent")
const $StardewMinigameStartedEvent = Java.loadClass("com.bonker.stardewfishing.server.event.StardewMinigameStartedEvent")
const $StardewMinigameEndedEvent = Java.loadClass("com.bonker.stardewfishing.server.event.StardewMinigameEndedEvent")

NativeEvents.onEvent($StardewMinigameEndedEvent, event => {
    StardewMinigameEndedEvent(event);
})

NativeEvents.onEvent($StardewMinigameStartedEvent, event => {
    StardewMinigameStartedEvent(event);
})

NativeEvents.onEvent($GunShootEvent, event => {
    GunShootEvent(event);
})

NativeEvents.onEvent($ItemStackedOnOtherEvent, event => {
    PlayerItemStackedOnOtherEvent(event);
})

NativeEvents.onEvent($ShieldBlockEvent, event => {
    LivingShieldBlockEvent(event);
})

NativeEvents.onEvent($AnvilUpdateEvent, event => {
    PlayerAnvilUpdateEvent(event);
})

NativeEvents.onEvent($AnvilRepairEvent, event => {
    PlayerAnvilRepairEvent(event);
})

NativeEvents.onEvent($LivingGetProjectileEvent, event => {
    let entity = event.entity
    if (entity.isPlayer()) {
    LivingGetArrowByPlayer(event, entity);
    }
})

NativeEvents.onEvent($SpellHealEvent, event => {
     let targetEntity = event.targetEntity;
     let healAmount = event.healAmount;
     let entity = event.entity
     // if (targetEntity.isPlayer()) {
     // LivingHealByOthers(entity, targetEntity, healAmount);
     // }
     if (entity.isPlayer()) {
     LivingHealByPlayer(entity, targetEntity, healAmount);
     }
})

NativeEvents.onEvent($LivingAttackEvent, event => {
    if (event.entity) {
        AttackByOthers(event);
        LivingAttackRogueLikeMaid(event)
    }
    if (event.source.actual) {
        LivingHurtByPartnerAndMaid(event);
        LivingHurtByMaidAttack(event);
    }
    if (event.source.player) {
        AttackByPlayer(event);
    }
});

NativeEvents.onEvent($LivingHurtEvent, event => {
    let entity = event.entity;
    if (event.source.actual) {
        LivingHurt(event);
        LivingHurtByMaid(event);
    }
    if (event.source.player) {
        LivingHurtByPlayer(event);
    }
    if (entity.isPlayer()) {
        LivingHurtByOthers(event);
    }
    if (entity) {
        MaidHurt(event);
    }
})
    
NativeEvents.onEvent($LivingDamageEvent, event => {
    if (event.source.player) {
        LivingDamageByPlayer(event);
    }
    if (event.source.actual) {
        LivingDamageByMaid(event);
    }
    if (event.entity.isPlayer()) {
        LivingDamageByOthers(event);
    }
    if (event.entity) {
        BossHurtEvent(event);
    }
})

NativeEvents.onEvent($MobEffectEvent$Added, event => {
    let entity = event.entity;
    let effectInstance = event.effectInstance;
    let Effect = effectInstance.getEffect();
    let effectid = Effect.getDescriptionId();
    if (entity.isPlayer()) {
    let PlayerPersistentData = entity.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (effectid === "effect.irons_spellbooks.true_invisibility") {
    if (!persistentData.TrueItyEffect) {
    persistentData.TrueItyTime = 0;
    }
    }
    }
    if (effectid === "effect.irons_spellbooks.thunderstorm") {
    if (entity.type === "fast:mysterious_figure") return
    let effectlevel = effectInstance.getAmplifier();
    let NeedLevel = 34
    if (effectlevel === NeedLevel) return
    entity.server.scheduleInTicks(1, () => {
    entity.removeEffect(Effect);
        entity.potionEffects.add('irons_spellbooks:thunderstorm', effectInstance.getDuration(), NeedLevel, false, false)
    })
    }
})

NativeEvents.onEvent($CriticalHitEvent, event => {
         
            
         
})
// event.setResult('deny')
// allow
