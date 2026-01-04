// priority: 1000

let EnderBonusEffectMap = {}

function EnderBonusOnLivingHurtHasEffectByEntity(effect, fun) {
    EnderBonusEffectMap[effect] = fun;
}
    
const EnderBonusOnLivingHurtByEntity = new EnderBonusHandler()
    .setInit((handler, event) => {
            let damagetype = event.source.getType();
            let entity = event.entity
            entity.invulnerableTime = 20;
            handler.initDamageType(damagetype)
            })
    .setDefer((handler, event) => {
           let entity = event.entity
           if (typeof entity.hasEffect === 'function') {
            for (let effect in EnderBonusEffectMap) {
            if (entity.hasEffect(effect)) {
                let fn = EnderBonusEffectMap[effect];
                if (typeof fn === 'function') {
                    fn(handler, event);
                }
              }
            }
           }
           let source = event.source
           let actual = source.actual
           let data = handler.customData

           let extraDamage = data.extraDamage || 0
           let additiveBonus = data.additiveBonus || 0
           let independentMultiplier = data.independentMultiplier || 1
           let damagetype = data.damageType
    
           let EntityExtraDamage = actual.getAttribute('fast:extra_damage')
           let EntityExtraDamageValue = EntityExtraDamage ? EntityExtraDamage.getValue() : 0
           let AttackInvulnerableFrames = actual.getAttribute('kubejs:generic.attack_invulnerable_frames')
           let AttackInvulnerableFramesValue = AttackInvulnerableFrames ? AttackInvulnerableFrames.getValue() : 1
           let attacktime = 10 + (10 * AttackInvulnerableFramesValue)
    
           event.amount = event.amount * (1 + additiveBonus) * independentMultiplier
    
           if (!excludedTypes.includes(damagetype) && !damagetype.includes('magic')) {
               if (AttackInvulnerableFramesValue <= 0) {
               entity.invulnerableTime = 0;
               } else {
               entity.invulnerableTime = attacktime;
               }
               event.amount += extraDamage + EntityExtraDamageValue
           } else {
               event.amount += extraDamage
           }
           });
const EnderBonusOnLivingHurtByOthers = new EnderBonusHandler()
    .setInit((handler, event) => {
            let damagetype = event.source.getType();
            handler.initDamageType(damagetype)
            if (damagetype === "lightningBolt") {
            let entity = event.entity
            if (entity.isPlayer()) {
            let currentHealth = entity.getHealth();
            let maxHealth = entity.getAttribute('minecraft:generic.max_health').getValue();
            if (currentHealth <= (maxHealth * 0.2)) {
            entity.give(Item.of('tarotcards:judgement',))
            }
            }
            }
            })
    .setDefer((handler, event) => {
        let EventEntity = event.entity;
        let level = EventEntity.level
        let uuid = EventEntity.uuid
        let pos = EventEntity.position();
        let x = pos.x();
        let y = pos.y();
        let z = pos.z();
        let DefenseEffect = EventEntity.getAttribute('fast:defense');
        let Defense = DefenseEffect ? DefenseEffect.getValue() : 0;
        
        let reductionFactor = 0;
        if (Defense <= 200) {
            reductionFactor = Defense / 10 / 100;
        } else if (Defense <= 1000) {
            let baseReduction = 200 / 10 / 100;
            let extraReduction = (Defense - 200) / 30 / 100;
            reductionFactor = baseReduction + extraReduction;
        } else {
            let baseReduction1 = 200 / 10 / 100;
            let baseReduction2 = (1000 - 200) / 30 / 100;
            let extraReduction = (Defense - 1000) / 100 / 100;
            reductionFactor = baseReduction1 + baseReduction2 + extraReduction;
        }
        
        let CloseDamage = false;
        if (EventEntity.hasEffect('fast:offensive_stance')) CloseDamage = true;
        
        if (!CloseDamage) {
            event.amount = event.amount * (1 - Math.min(reductionFactor, 0.65));
        }
        
        let blockChanceAttr = EventEntity.getAttribute('fast:block_chance');
        let blockChance = blockChanceAttr ? blockChanceAttr.getValue() : 0;
        
        let PerfectGuard = PerfectGuardData[uuid]
        
        if ((blockChance > 0 && Math.random() < blockChance) || PerfectGuard) {
            let blockValueAttr = EventEntity.getAttribute('fast:block_value');
            let blockValue = blockValueAttr ? blockValueAttr.getValue() : 0;
            
            if (PerfectGuard) {
            let EventEntityHp = EventEntity.getAttribute('minecraft:generic.max_health').getValue();
            let healHp = EventEntityHp * 0.1
            if (healHp > 100) healHp = 100
            EventEntity.heal(healHp)
            }
            
            level.playSound(
                null,
                x, y, z,
                'minecraft:item.shield.block',
                EventEntity.getSoundSource(),
                1, 1
            );
            event.amount = Math.max(0, event.amount - blockValue);
        }
    });

            
const EnderBonusOnLivingDamageByEntity = new EnderBonusHandler()
    .setInit((handler, event) => {
            let damagetype = event.source.getType();
            handler.initDamageType(damagetype)
            handler.setDamageType(EnderBonusOnLivingHurtByEntity.customData.damageType)
            })
    .setDefer((handler, event) => {
           let source = event.source
           let actual = source.actual
           let entity = event.entity
           let data = handler.customData
           let damagetype = data.damageType
           
           let player = resolvePlayerFromEntity(actual)
           if (player) {
           DamageTypeMessage(player, event.amount, damagetype)
           FastServerDamageRenderEvent(event, player, entity, event.amount, damagetype)
           }
            });
const EnderBonusOnLivingDamageByOthers = new EnderBonusHandler()
    .setInit((handler, event) => {
            let damagetype = event.source.getType();
            handler.initDamageType(damagetype)
            });
            
const EnderBonusOnLivingAttackByEntity = new EnderBonusHandler()
    .setInit((handler, event) => {
            let damagetype = event.source.getType();
            handler.initDamageType(damagetype)
            });         
const EnderBonusOnLivingAttackByOthers = new EnderBonusHandler()
    .setInit((handler, event) => {
            let damagetype = event.source.getType();
            handler.initDamageType(damagetype)
            })
    .setDefer((handler, event) => {
        let EventEntity = event.entity;
        if (!EventEntity) return;
        
        let dodgeAttr = EventEntity.getAttribute('fast:dodge_chance');
        let dodgeChance = dodgeAttr ? dodgeAttr.getValue() : 0;
        
        if (dodgeChance <= 0) return;
        if (dodgeChance > 1) dodgeChance = 1;
        
        if (Math.random() < dodgeChance) {
            event.setCanceled(true);
    let level = EventEntity.level;
    let pos = EventEntity.position();
    let x = pos.x();
    let y = pos.y();
    let z = pos.z();
    let dimension = level.dimension;

    const MAX_TRIES = 16;

    for (let i = 0; i < MAX_TRIES; i++) {
        let randomX = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 3) + 1);
        let randomZ = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 3) + 1);

        let targetX = x + randomX;
        let targetY = y;
        let targetZ = z + randomZ;

        if (EventEntity.randomTeleport(targetX, targetY, targetZ, true)) {
            level.playSound(
                null,
                x, y, z,
                'minecraft:entity.enderman.teleport',
                EventEntity.getSoundSource(),
                1, 1
            );
            break;
        }
    }
        }
    });

const EnderBonusOnPlayerCirtHit = new EnderBonusHandler()

const EnderBonusOnPlayerLeftClick = new EnderBonusHandler()

NativeEvents.onEvent($LivingHurtEvent, event => {
    let source = event.source
    let entity = event.entity
    let actual = source.actual
    let damagetype = source.getType();
    if (actual) {
        let uuid = actual.uuid
        let obj = EntityEnderBonus[uuid]
        if (obj) {
        let itemIds = Object.keys(obj)
        EnderBonusOnLivingHurtByEntity.run(itemIds, [event], actual)
        }
    }
    if (entity) {
        let uuid = entity.uuid
        let obj = EntityEnderBonus[uuid]
        if (obj) {
        let itemIds = Object.keys(obj)
        EnderBonusOnLivingHurtByOthers.run(itemIds, [event], entity)
        }
    }
    BossHurtEvent(event)
    LivingHurtEffect(event)
    LivingHurtByMaidTask(event)
})

function BossHurtEvent(event) {
       let entity = event.entity;
       let Spawntype = entity.type
       //entity.server.tell(Spawntype)
       let BossEntitylist = BossEntityHurt.BossEntityList
       let BossEntitys = []
       BossEntitylist.forEach(type => {
       if (Spawntype === type) {
       BossEntitys.push(Spawntype)
       }
        })
       BossEntityHurt.run(BossEntitys, [event])
}

function LivingHurtByMaidTask(event) {
    let actual = event.source.actual
    if (!actual) return
    let entity = event.entity
    if (!entity) return
    if (!entity.isLiving()) return
    if (!actual.isLiving()) return
    if (actual.getType() !== "touhou_little_maid:maid") return
    let uuid = actual.uuid
    let damagetype = event.source.getType();
    let task = actual.getTask()
         let TaskUid = task.getUid()
         if (TaskUid === "maid_sword_soaring:sword_soaring") {
         if (damagetype.includes("mob")) {
         event.amount *= 0.25
         }
         }
}

function LivingHurtEffect(event) {
    let actual = event.source.actual
    if (!actual) return
    let entity = event.entity
    if (!entity) return
    if (!entity.isLiving()) return
    if (!actual.isLiving()) return
    let uuid = actual.uuid
    let damagetype = event.source.getType();
    let obj = EntityEnderBonus[uuid]
    if (obj) {
    damagetype = EnderBonusOnLivingHurtByEntity.customData.damageType
    }
    if (entity.hasEffect('fast:vulnerable_effect')) {
    event.amount *= 1.5
    }
    if (actual.hasEffect('fast:toxic')) {
    let Roxic = actual.getEffect('fast:toxic');
    let EffectLevel = Roxic.getAmplifier();
    event.amount *= 1 + Math.floor(EffectLevel / 1000)
    }
    if (entity.hasEffect('fast:toxic')) {
    if (damagetype.includes('poison_cloud')) {
    let Roxic = entity.getEffect('fast:toxic');
    let EffectLevel = Roxic.getAmplifier();
    event.amount += EffectLevel
    }
    }
}

const excludedTypes = ["magic", "fire_field", "tacz.bullet", "heartstop", "poison_cloud","dragon_breath_pool","danmaku"];
const MagicDamageType = ["fire_magic","ice_magic","nature_magic","lightning_magic","blood_magic","holy_magic","ender_magic","evocation_magic","fire_field","poison_cloud","dragon_breath_pool","heartstop"]
const FastMagicDamageType = ["fire_magic","ice_magic","nature_magic","lightning_magic","blood_magic","holy_magic","ender_magic","evocation_magic"]

NativeEvents.onEvent($LivingDamageEvent, event => {
    let source = event.source
    let entity = event.entity
    let actual = source.actual
    let damagetype = source.getType();
    if (actual) {
        let uuid = actual.uuid
        let obj = EntityEnderBonus[uuid]
        if (obj) {
        let itemIds = Object.keys(obj)
        EnderBonusOnLivingDamageByEntity.run(itemIds, [event], actual)
        }
    }
    if (entity) {
        let uuid = entity.uuid
        let obj = EntityEnderBonus[uuid]
        if (obj) {
        let itemIds = Object.keys(obj)
        EnderBonusOnLivingDamageByOthers.run(itemIds, [event], entity)
        }
    MaidOathOfKnightEvent(event, entity)
    }
})

function MaidOathOfKnightEvent(event, maid) {
    if (maid.getType() !== "touhou_little_maid:maid") return
    if (!maid.hasEffect('fast:oath_of_knight')) return
    let Owner = getEntityOwner(maid)
    if (!Owner) return
    let entity = event.source.actual;
    if (!entity || !entity.isLiving()) return;
    let Damage = event.amount
    event.amount = 0
    AttackEntity(entity, Owner, "fast:share", Damage);
}

NativeEvents.onEvent($LivingAttackEvent, event => {
    let source = event.source
    let entity = event.entity
    let actual = source.actual
    let damagetype = source.getType();
    if (actual) {
        let uuid = actual.uuid
        let obj = EntityEnderBonus[uuid]
        if (obj) {
        let itemIds = Object.keys(obj)
        EnderBonusOnLivingAttackByEntity.run(itemIds, [event], actual)
        }
    }
    if (entity) {
        let uuid = entity.uuid
        let obj = EntityEnderBonus[uuid]
        if (obj) {
        let itemIds = Object.keys(obj)
        EnderBonusOnLivingAttackByOthers.run(itemIds, [event], entity)
        }
    }
    LivingHurtByPartnerAndMaid(event)
    LivingAttackRogueLikeMaid(event)
});

function LivingHurtByPartnerAndMaid(event) {
    let attacker = event.source.actual;
    if (!attacker) return;
    
    let victim = event.entity;
    if (!victim) return;
    
    let attackerOwner = getEntityOwner(attacker);
    let victimOwner = getEntityOwner(victim);
    
    if (attackerOwner && attackerOwner.isPlayer() &&
        victimOwner && victimOwner.isPlayer()) {
        event.setCanceled(true);
        return;
    }
    
    if (attackerOwner && attackerOwner.isPlayer() && victim.isPlayer()) {
        event.setCanceled(true);
        return;
    }
    
    if (attacker.isPlayer() && victimOwner && victimOwner.isPlayer()) {
        event.setCanceled(true);
        return;
    }
}

function LivingAttackRogueLikeMaid(event) {
         let maid = event.entity;
         if (!maid) return;
         if (maid.type != 'touhou_little_maid:maid') return;
         let MaidpersistentData = maid.persistentData;
         if (!MaidpersistentData.RogueLike) return
         event.setCanceled(true);
}

NativeEvents.onEvent($CriticalHitEvent, event => {
    let player = event.getEntity()
    let uuid = player.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerCirtHit.run(itemIds, [event], player)
})
// event.setResult('deny')
// allow

NetworkEvents.dataReceived("Attack", event => {
    let player = event.player
    let uuid = player.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerLeftClick.run(itemIds, [event], player)
})
