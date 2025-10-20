
global.SwordTechniqueFourStrike = (ctx) => {
    let player = ctx.entity;
    if (!player.isPlayer()) return;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let thisPlayerUuid = player.uuid
    let AngerValueData = PlayerAngerValueData[thisPlayerUuid]
    AngerValue(player, persistentData, AngerValueData);
        let Damage = player.getAttribute('minecraft:generic.attack_damage').getValue();
        let powerModifier = player.getAttribute('fast:physical_mastery').getValue();
        let AttackSpeed = player.getAttribute(`minecraft:generic.attack_speed`).getValue();
        let server = player.server
        Damage *= powerModifier
        let level = player.getLevel();
        let pos = player.position();
        let lookAngle = player.getLookAngle();
        let spawn = player.getEyePosition().add(lookAngle.scale(2));
        let direction = lookAngle.subtract(spawn).normalize();
        
        let strikeInterval = 30;
        
        if (player.hasEffect('fast:sword_combo')) {
        let SwordCombo = player.getEffect('fast:sword_combo');
        let EffectLevel = SwordCombo.getAmplifier();
        strikeInterval -= (EffectLevel + 1) * 5
        if (EffectLevel < 2) {
        player.removeEffect('fast:sword_combo');
        player.potionEffects.add('fast:sword_combo', SwordCombo.getDuration(), (EffectLevel + 1), false, false)
        }
        } else {
        player.potionEffects.add('fast:sword_combo', 600, 0, false, false)
        }
        
        let baseAttackSpeed = 1.6;
        let attackSpeedBonusRatio = (AttackSpeed - baseAttackSpeed) / baseAttackSpeed;
        let intervalReductionByAS = Math.floor(attackSpeedBonusRatio / 0.1 * 0.3);

        strikeInterval -= intervalReductionByAS;
        if (strikeInterval < 5) strikeInterval = 5
        
        for (let i = 0; i < 4; i++) {
            let animation = (i % 2 === 0) ? "fast:sword_attack1" : "fast:sword_attack2";

            server.scheduleInTicks(10 + i * strikeInterval, () => {
                // 播放当前动画
                player.triggerAnimation(animation, 1, "linear", true, false, [], parts => {
                    parts.rightArm.setEnabled(true);
                    parts.leftArm.setEnabled(true);
                    parts.leftLeg.setEnabled(false);
                    parts.rightLeg.setEnabled(false);
                    parts.head.setEnabled(false);
                    parts.torso.setEnabled(false);
                });

                let entitylist = getcreateChargePathAABBEntity(pos, direction, 3, 4, level);
                if (entitylist) {
                    entitylist.forEach(entity => {
                        if (!entity.isLiving()) return;
                        let Owner = getEntityOwner(entity);
                        if (Owner && Owner.isPlayer()) return;
                        if (entity.isPlayer()) return;
                        AttackEntity(player, entity, "fast:player", Damage);
                    });
                    AngerValue(player, persistentData, AngerValueData);
                }
            });
        }
        
        addCooldown("SwordTechniqueCd", thisPlayerUuid, (10 + 4 * strikeInterval), level)
        AngerValueData.SwordTechniqueTime = true;
        AngerValueData.Value -= 50;
        AngerValueMax(AngerValueData);
        AngerValue(player, persistentData, AngerValueData);
        
        server.scheduleInTicks(10 + 4 * strikeInterval, () => {
            AngerValueData.SwordTechniqueTime = false;
            player.stopAnimation("fast:sword_attack1");
            player.stopAnimation("fast:sword_attack2");
            AngerValue(player, persistentData, AngerValueData);
        });
}