// priority: 800

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

let BlazingEffectLevel = {}

global.BlazingEffectEvent = (entity, lvl) => {
            if (!entity || entity.level.isClientSide()) return
            if (entity.age % 60 == 0) {
            let uuid = entity.uuid
            let fireEffect = entity.getEffect('fast:blazing_effect');
            let lvldamage = BlazingEffectLevel[uuid]
            if (!lvldamage) return
            if (isEntityOnFire(entity)) {
      entity.removeEffect('fast:blazing_effect');
      let UpValue = 1
      entity.potionEffects.add('fast:blazing_effect', fireEffect.getDuration(), Math.min(lvl + UpValue, 254), false, false)
      BlazingEffectLevel[uuid] += UpValue
            }
            let AncientMiscCount = getEntityEnderBonusCount(entity, "fast:ancient_misc_soul_fiery")
            if (AncientMiscCount) {
            lvldamage -= 2 * AncientMiscCount
            }
            if (hasEntityEnderBonus(entity, "fast:blaze_necklace")) {
            let thispowerModifier = entity.getAttribute('irons_spellbooks:fire_spell_power') || 1;
            let thispowerModifierValue = thispowerModifier ? thispowerModifier.getValue() : 1
            let thispowerModifierNeed = (thispowerModifierValue - 1)
            thispowerModifierNeed = thispowerModifierNeed / 5
            let modifier = 0.5
            modifier -= thispowerModifierNeed
            if (modifier <= 0.05) {
            modifier = 0.05;
            }
            lvldamage = Math.round(lvldamage * modifier);
            }
            AttackEntity(null, entity, `irons_spellbooks:fire_magic`, lvldamage);
            }
}