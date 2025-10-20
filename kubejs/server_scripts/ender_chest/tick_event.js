function applyHermitEffect(player, persistentData) {
    let currentX = player.x;
    let currentY = player.y;
    let currentZ = player.z;
    
    let lastX = persistentData.lastX;
    let lastY = persistentData.lastY;
    let lastZ = persistentData.lastZ;
    
    if (lastX === currentX && lastY === currentY && lastZ === currentZ) {
        // 坐标相同，应用药水效果
     //   player.potionEffects.add('minecraft:regeneration', 140, 1, false, false);
        player.potionEffects.add('irons_spellbooks:true_invisibility', 100, 0, false, false);
        persistentData.TrueItyEffect = true;
      //  player.potionEffects.add('minecraft:resistance', 140, 1, false, false);
        // 再次获取坐标，为下次判断做准备
        persistentData.lastX = player.x;
        persistentData.lastY = player.y;
        persistentData.lastZ = player.z;
    } else {
        // 坐标不同，更新坐标
        persistentData.lastX = currentX;
        persistentData.lastY = currentY;
        persistentData.lastZ = currentZ;
        persistentData.TrueItyEffect = false;
    }
}

function applymoonCardEffect(player) {
        player.potionEffects.add('minecraft:night_vision', 280, 0, false, false);
}

function applyworldCardEffect(player) {
    let level = player.getLevel();
    let pos = player.position();
    let radius = 20;
    let entitylist = getLivingWithinRadius(level, pos, radius);
    if (entitylist) {
    entitylist.forEach(entity => {
    let entityName = entity.type;
        if (!entity.isLiving()) return;
        let Owner = getEntityOwner(entity);
        if (Owner && Owner.isPlayer()) return;
        if (entity.isPlayer()) return;
        let Partner = getEntityPartner(entity)
        if (Partner && Partner.isPlayer()) return
        entity.potionEffects.add('irons_spellbooks:chilled', 200, 0, false, false);
        })
        }
}

function applyshadowAssassinCloak(player, persistentData) {
        persistentData.TrueItyTime += 2;
        if (persistentData.TrueItyTime >= 300) {
        persistentData.TrueItyTime = 300
       }
}

function AngerValueTick(player, persistentData, AngerValueData) {
    if (!persistentData.HeroSword) return;
    if (!AngerValueData) return;
    if (!AngerValueData.Value) return
    if (AngerValueData.Open >= 1) {
    AngerValueData.Open -= 1;
    AngerValue(player, persistentData, AngerValueData);
    } else {
    AngerValueData.Value -= 20;
    AngerValueMax(AngerValueData);
    AngerValue(player, persistentData, AngerValueData);
    }
}

function PlayerMoveAttackDamageEvent(player, persistentData) {
    let level = player.level;
    let pos = player.position();
    let radius = 2;
    let entitylist = getLivingWithinRadius(level, pos, radius);
    if(entitylist) {
    entitylist.forEach(entity => {
        if (entity.isPlayer()) return;
        if (entity === player) return
        let Owner = getEntityOwner(entity);
        if (Owner && Owner.isPlayer()) return;
        if (MoveAttackentitylist.includes(player.uuid + entity.uuid)) return;
            let Defense = player.getAttribute('fast:defense').getValue();
            let Damage = Defense * 1.2
            let lvl = 0;
    if (Defense >= 180) {
    lvl = Math.floor(0 + Defense/180);
    }
    if (lvl > 9) {
    lvl = 9;
    }
        persistentData.HeroShieldDamage = true;
        AttackEntity(player, entity, "irons_spellbooks:ender_magic", Damage);
        entity.potionEffects.add('irons_spellbooks:rend', 600, lvl, false, false);
        MoveAttackentitylist.push(player.uuid + entity.uuid)
        })
        }
}

function ChargeEvent(player, persistentData) {
     if (!persistentData.Charge) return;
     for (let i = 0; i < persistentData.Charge; i++) {
     checkPlayerManaCostPercentage(player, 0.01, true)
     }
}

function ShadowDaggeTickEvent(persistentData) {
    if (!persistentData.ShadowDagge) return;
    if (!persistentData.ShadowDaggeTime) return;
    persistentData.ShadowDaggeTime -= 1;
}

function HeroShieldTickEvent(event, player, EventEntity, persistentData) {
    if (!persistentData.HeroShield) return;
    let data = persistentData.HeroShield
    if (data.close) return
    player.potionEffects.add('fast:taunt_effect', 100, 0, false, false);
}

global.TauntEffectEvent = (mob, lvl) => {
            if (!mob || mob.level.isClientSide()) return
            if (mob.age % 20 != 0) return
            let mobAABB = mob.boundingBox.inflate(16)
            mob.level.getEntitiesWithin(mobAABB).forEach(entity => {
                if (!entity) return
	            let Owner = getEntityOwner(entity)
                let Partner = getEntityPartner(entity)
                if (Owner && Owner.isPlayer() || Partner && Partner.isPlayer()) return
                if (!entity.isLiving() || !entity.isAlive()) return;
                if (typeof entity.setTarget === 'function') {
                let thisTarget = entity.target
                if (thisTarget && thisTarget.hasEffect('fast:taunt_effect')) return
                    entity.setTarget(mob);
                }
            })
}

global.DaedalusStormbowEvent = (item, level, entity, hitPos) => {
    let baseX = hitPos.x();
    let baseY = hitPos.y();
    let baseZ = hitPos.z();
    let arrowsPerTick = 3;
    
    for (let i = 0; i < arrowsPerTick; i++) {
        let offsetX = (Math.random() - 0.5) * 4
        let offsetZ = (Math.random() - 0.5) * 4
        
        if (Math.random() < 0.75) {
            baseX += (Math.random() - 0.5) * 4
            baseZ += (Math.random() - 0.5) * 4
        }
        
        let spawnX = baseX + offsetX;
        let spawnY = baseY + 16 + Math.random() * 4; 
        let spawnZ = baseZ + offsetZ;
        
        let dirX = baseX - spawnX;
        let dirY = baseY - spawnY;
        let dirZ = baseZ - spawnZ;
        
        let arrow = $ProjectileUtil.getMobArrow(entity, Item.of("minecraft:arrow"), 1);

        arrow.setPosition(spawnX, spawnY, spawnZ);
        
        arrow.shoot(dirX, dirY, dirZ, 1.6, 0)

        arrow.spawn();
    }
    PlayersPlaySound(level, baseX, baseY, baseZ, 50, 'minecraft:entity.arrow.shoot')
    item.hurtAndBreak(1, entity, e => {});
}


global.BlazingEffectEvent = (entity, lvl) => {
            if (!entity || entity.level.isClientSide()) return
            if (entity.age % 60 == 0) {
            let fireEffect = entity.getEffect('fast:blazing_effect');
            let PlayerPersistentData = entity.persistentData;
            let persistentData = PlayerPersistentData.enderBonus;
            let lvldamage = (lvl + 1);
            if (isEntityOnFire(entity, persistentData)) {
      entity.removeEffect('fast:blazing_effect');
      entity.potionEffects.add('fast:blazing_effect', fireEffect.getDuration(), (lvl + 1), false, false)
        }
           if (persistentData && persistentData.FireNecklace) {
        let thispowerModifier = entity.getAttributeValue('irons_spellbooks:fire_spell_power') || 1;
        let thispowerModifierNeed = (thispowerModifier - 1)
        thispowerModifierNeed = thispowerModifierNeed / 5
        let modifier = 0.5
        modifier -= thispowerModifierNeed
    if(modifier <= 0.05) {
    modifier = 0.05;
    }
    lvldamage = Math.round(lvldamage * modifier);
        }
            entity.attack(lvldamage);
            }
}

function EnderBrassHandTickEvent(player, persistentData) {
    if (!persistentData.EnderBrassHand) return;
    if (!persistentData.EnderBrassHandWeapon) return
    let Weapon = Item.of(persistentData.EnderBrassHandWeapon)
    NewCounterslashProj(player, Weapon, player.x, player.y, player.z)
}