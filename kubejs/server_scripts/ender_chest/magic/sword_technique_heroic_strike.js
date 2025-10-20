
global.SwordTechniqueHeroicStrike = (ctx) => {
    let player = ctx.entity;
    if (!player.isPlayer()) return;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let thisPlayerUuid = player.uuid
    let AngerValueData = PlayerAngerValueData[thisPlayerUuid]
    AngerValue(player, persistentData, AngerValueData);
        let Damage = player.getAttribute('fast:defense').getValue();
        let powerModifier = player.getAttribute('fast:physical_mastery').getValue();
        Damage *= 0.3 * powerModifier
        let { x, y, z, level, server } = player
        let pos = player.position();
        let lookAngle = player.getLookAngle();
        let spawn = player.getEyePosition().add(lookAngle.scale(2));
        let direction = lookAngle.subtract(spawn).normalize();
        PlayersPlaySound(level, x, y, z, 50, 'kubejs:sword2')
        player.triggerAnimation("fast:sword3", 1, "linear", true, false, [], parts => {
                    parts.rightArm.setEnabled(true);
                    parts.leftArm.setEnabled(true);
                    parts.leftLeg.setEnabled(true);
                    parts.rightLeg.setEnabled(false);
                    parts.head.setEnabled(false);
                    parts.torso.setEnabled(false);
                });
        server.scheduleInTicks(10, () => {
        let haveEntity = false
        let entitylist = getcreateChargePathAABBEntity(pos, direction, 3, 4, level);
                if (entitylist) {
                    entitylist.forEach(entity => {
                        if (!entity.isLiving()) return;
                        let Owner = getEntityOwner(entity);
                        if (Owner && Owner.isPlayer()) return;
                        if (entity.isPlayer()) return;
                        persistentData.HeroShieldDamage = true;
                        AttackEntity(player, entity, "fast:player", Damage);
                        haveEntity = true
                        AngerValue(player, persistentData, AngerValueData);
                        })
                    if (haveEntity) {
                    player.potionEffects.add('fast:taunt_effect', 200, 0, false, false);
                    }
                }
                    });
                
        
                
        addCooldown("SwordTechniqueCd", thisPlayerUuid, 20, level)
        AngerValueData.SwordTechniqueTime = true;
        AngerValueData.Value -= 20;
        AngerValueMax(AngerValueData);
        AngerValue(player, persistentData, AngerValueData);
        
        server.scheduleInTicks(20, () => {
            AngerValueData.SwordTechniqueTime = false;
            AngerValue(player, persistentData, AngerValueData);
        });
}