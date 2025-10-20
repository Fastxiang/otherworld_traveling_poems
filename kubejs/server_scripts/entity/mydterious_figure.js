// priority: 400
BossEntitySpawn.addStrategy("fast:mysterious_figure", BossMydteriousFigureSpawnEvent, MydteriousFigureFirst)
BossEntityHurt.addStrategy("fast:mysterious_figure", BossMydteriousFigureHurtEvent)

function BossMydteriousFigureSpawnEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length
    let uuid = entity.uuid
    let level = entity.level
    let mobType = entity.type
    let BossPersistentData = entity.persistentData
    let BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), Text.translatable(`entity.${mobType.replace(':', '.')}`), 50, 'kubejs:mydterious_figure1', 1)
    if (!BossPersistentData.BossEvent) {
        BossPersistentData.BossEvent = 1
        BossPersistentData.cooldown = 60
    }
    let BossEventWave = BossPersistentData.BossEvent
    let CoolDown = BossPersistentData.cooldown
    
    let BossEvent = MydteriousFigureEventList[BossEventWave - 1]
    
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

function BossMydteriousFigureHurtEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length
    let level = entity.level
    let BossPersistentData = entity.persistentData
    let EntityHp = entity.getHealth();
    let EntityMaxHp = entity.getAttribute('minecraft:generic.max_health').getValue()
    let AwakeningHp = EntityMaxHp/2
    let NeedHp = EntityHp - AwakeningHp
    let Damage = event.amount
    let mobType = entity.type
    let uuid = entity.uuid
    let mobName = Text.translatable(`entity.${mobType.replace(':', '.')}`).getString();
    let BossBar = BossEntitySpawn.BossBar[uuid]
    if (!BossBar) {
    BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), mobName, 50, 'kubejs:mydterious_figure1', 1)
    }
    let player = event.source.player
    if (player) {
    BossBar.addPlayer(player)
    }
    if (!BossPersistentData.Awakening && Damage >= NeedHp) {
    server.runCommandSilent(`stopsound @a * ${BossEntitySpawn.music[uuid]}`);
    event.amount = NeedHp
    entity.setItemSlot('mainhand', Item.of('minecraft:netherite_sword'));
    entity.setAttributeBaseValue('minecraft:generic.movement_speed', 0.16);
    entity.setAttributeBaseValue('minecraft:generic.knockback_resistance', 0.5);
    entity.triggerAnimation('exampleController1', 'inreload');
    MoboverLimitSpellCast("irons_spellbooks:ascension", entity, 10)
    BossPersistentData.Awakening = true
    server.scheduleInTicks((20), () => {
    level.playSound(null, entity.getX(), entity.getY(), entity.getZ(), 'kubejs:mydterious_figure2', $SoundSource.MUSIC, 1, 1);
    BossEntitySpawn.music[uuid] = 'kubejs:mydterious_figure2'
    })
    }
    let newDamage = event.amount
    if (BossPersistentData.Awakening){
    BossBar.setProgress((EntityHp - newDamage) / (EntityMaxHp - AwakeningHp));
    } else {
    BossBar.setProgress((EntityHp - newDamage - AwakeningHp) / (EntityMaxHp - AwakeningHp));
    }
}

let MydteriousFigureEventList = [
MydteriousFigureFirst,
MysteriousFigurePrelude,
MysteriousFigureAwakening,
MysteriousFigureInception,
MysteriousFigureEmergence,
MysteriousFigurePrologue
]

function MydteriousFigureFirst(entity, event) {
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length
    let level = entity.level
    let BossPersistentData = entity.persistentData
    BossPersistentData.BossEvent += 1
    let BossEventWave = BossPersistentData.BossEvent
    let BossEvent = MydteriousFigureEventList[BossEventWave - 1]
    if (!BossPersistentData.Awakening) {
    BossPersistentData.cooldown = 160
    let entitypos = entity.position()
    let spawn = new $Vec3(entitypos.x(), entitypos.y()+10, entitypos.z())
    let direction = new $Vec3(0, -0.07, 0)
    let er = 15
    entity.triggerAnimation('exampleController1', 'inattack');
    let attackList = 1
    for (let i = 0; i < 5; i++) {
    server.scheduleInTicks((20 * i), () => {
    if (attackList === 2) {
    spawn = new $Vec3(entitypos.x()+15, entitypos.y()+10, entitypos.z()+15)
    }
    if (attackList === 3) {
    spawn = new $Vec3(entitypos.x()-15, entitypos.y()+10, entitypos.z()+15)
    }
    if (attackList === 4) {
    spawn = new $Vec3(entitypos.x()-15, entitypos.y()+10, entitypos.z()-15)
    }
    if (attackList === 5) {
    spawn = new $Vec3(entitypos.x()+15, entitypos.y()+10, entitypos.z()-15)
    }
    attackList++
    let fireball = level.createEntity('irons_spellbooks:fireball');
    fireball.setOwner(entity)
    fireball.moveTo(spawn)// 生成位置
    fireball.shoot(direction)// 移动方向
    fireball.setExplosionRadius(er)// 爆炸大小
    fireball.pehkui_getScaleData($ScaleTypes.BASE).setScale(6)
    fireball.pehkui_getScaleData($ScaleTypes.HITBOX_HEIGHT).setScale(0.05)
    fireball.setDamage(100)
    fireball.spawn()
    })
    }
    } else {
    BossPersistentData.cooldown = 60
    server.scheduleInTicks((5), () => {
    entity.triggerAnimation('exampleController1', 'flstattack');
    })
    MoboverLimitSpellCast("irons_spellbooks:flaming_strike", entity, 20)
    }
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

function MysteriousFigurePrelude(entity, event) {
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length
    let level = entity.level
    let BossPersistentData = entity.persistentData
    BossPersistentData.BossEvent += 1
    let BossEventWave = BossPersistentData.BossEvent
    let BossEvent = MydteriousFigureEventList[BossEventWave - 1]
    if (!BossPersistentData.Awakening) {
    BossPersistentData.cooldown = 60;
    entity.triggerAnimation('exampleController1', 'onattack');
    let lookAngle = entity.getLookAngle();
    let spawn = entity.getEyePosition().add(lookAngle.scale(1.5)); 
    let targetPos = lookAngle.scale(32).add(spawn); 
    let direction = targetPos.subtract(spawn).normalize().scale(1);
    let er = 6
    let magmaBomb = level.createEntity('irons_spellbooks:magma_ball');
    magmaBomb.setOwner(entity)
    magmaBomb.moveTo(spawn)// 生成位置
    magmaBomb.shoot(direction)// 移动方向
    magmaBomb.setExplosionRadius(er)// 爆炸大小
    magmaBomb.pehkui_getScaleData($ScaleTypes.BASE).setScale(6)
    magmaBomb.pehkui_getScaleData($ScaleTypes.HITBOX_HEIGHT).setScale(0.05)
    magmaBomb.setDamage(70)
    magmaBomb.spawn()
    } else {
    BossPersistentData.cooldown = 60
    entity.triggerAnimation('exampleController1', 'getbuff');
    MoboverLimitSpellCast("irons_spellbooks:charge", entity, 1)
    }
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

function MysteriousFigureAwakening(entity, event) {
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = MydteriousFigureEventList[BossEventWave - 1];
    if (!BossPersistentData.Awakening) {
    BossPersistentData.cooldown = 260;
    entity.triggerAnimation('exampleController1', 'inattack');
    
    MoboverLimitSpellCast("irons_spellbooks:ascension", entity, 10)
    server.scheduleInTicks((20), () => {
    MoboverLimitSpellCast("irons_spellbooks:thunderstorm", entity, 40)
       })
       } else {
       BossPersistentData.cooldown = 60
       entity.triggerAnimation('exampleController1', 'getbuff');
    MoboverLimitSpellCast("irons_spellbooks:frost_step", entity, 30)
       }
       let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}

function MysteriousFigureInception(entity, event) {
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = MydteriousFigureEventList[BossEventWave - 1];
    if (!BossPersistentData.Awakening) {
    BossPersistentData.cooldown = 60;
    entity.triggerAnimation('exampleController1', 'onattack');
    MoboverLimitSpellCast("irons_spellbooks:fang_strike", entity, 3)
    } else {
    BossPersistentData.cooldown = 60
    server.scheduleInTicks((5), () => {
    entity.triggerAnimation('exampleController1', 'dismattack');
    })
    MoboverLimitSpellCast("irons_spellbooks:divine_smite", entity, 30)
    }
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}

function MysteriousFigureEmergence(entity, event) {
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = MydteriousFigureEventList[BossEventWave - 1];
    if (!BossPersistentData.Awakening) {
    BossPersistentData.cooldown = 120;
    entity.triggerAnimation('exampleController1', 'onattack');
    MoboverLimitSpellCast("irons_spellbooks:acid_orb", entity, 1)
    server.scheduleInTicks((30), () => {
    entity.triggerAnimation('exampleController1', 'onattack');
    MoboverLimitSpellCast("irons_spellbooks:blood_needles", entity, 50)
       })
       } else {
       BossPersistentData.cooldown = 60
       entity.triggerAnimation('exampleController1', 'getbuff');
    MoboverLimitSpellCast("irons_spellbooks:haste", entity, 10)
       }
       let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}

function MysteriousFigurePrologue(entity, event) {
    let server = entity.server
    let BossEventWaveMax = MydteriousFigureEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = MydteriousFigureEventList[BossEventWave - 1];
    if (!BossPersistentData.Awakening) {
    BossPersistentData.cooldown = 90;
    entity.triggerAnimation('exampleController1', 'onattack');
    MoboverLimitSpellCast("irons_spellbooks:frostwave", entity, 50)
    server.scheduleInTicks((30), () => {
    entity.triggerAnimation('exampleController1', 'onattack');
    MoboverLimitSpellCast("irons_spellbooks:starfall", entity, 50)
    })
    } else {
    BossPersistentData.cooldown = 60
    entity.triggerAnimation('exampleController1', 'getbuff');
    MoboverLimitSpellCast("irons_spellbooks:burning_dash", entity, 3)
    }
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}
