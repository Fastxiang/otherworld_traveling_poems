// priority: 400
BossEntitySpawn.addStrategy("fast:mysterious_black_cloaked_swordsman", BossMydteriousBlackCloakedSpawnEvent, MydteriousBlackCloakedFirst)
BossEntityHurt.addStrategy("fast:mysterious_black_cloaked_swordsman", BossMydteriousBlackCloakedHurtEvent)

function BossMydteriousBlackCloakedSpawnEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = MydteriousBlackCloakedEventList.length
    let uuid = entity.uuid
    let level = entity.level
    let mobType = entity.type
    let BossPersistentData = entity.persistentData
    //entity.setItemSlot($EquipmentSlot.MAINHAND, Item.of('minecraft:netherite_sword'));
    entity.setItemSlot('mainhand', Item.of('minecraft:netherite_sword'));
    let BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), Text.translatable(`entity.${mobType.replace(':', '.')}`), 50, 'kubejs:felien', 1)
    if (!BossPersistentData.BossEvent) {
        BossPersistentData.BossEvent = 1
        BossPersistentData.cooldown = 60
    }
    let BossEventWave = BossPersistentData.BossEvent
    let CoolDown = BossPersistentData.cooldown
    
    let BossEvent = MydteriousBlackCloakedEventList[BossEventWave - 1]
    
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

function BossMydteriousBlackCloakedHurtEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = MydteriousBlackCloakedEventList.length
    let uuid = entity.uuid
    let level = entity.level
    let BossPersistentData = entity.persistentData
    let EntityHp = entity.getHealth();
    let EntityMaxHp = entity.getAttribute('minecraft:generic.max_health').getValue()
    let Damage = event.amount
    let mobType = entity.type
    let mobName = Text.translatable(`entity.${mobType.replace(':', '.')}`).getString();
    let BossBar = BossEntitySpawn.BossBar[entity.uuid]
    if (!BossBar) {
    BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), mobName, 50, 'kubejs:felien', 1)
    }
    let player = event.source.player
    if (player) {
    BossBar.addPlayer(player)
    }
    let newDamage = event.amount
    BossBar.setProgress((EntityHp - newDamage) / (EntityMaxHp));
}

let MydteriousBlackCloakedEventList = [
MydteriousBlackCloakedFirst,
MydteriousBlackCloakedPrelude,
//MydteriousBlackCloakedAwakening,
//MydteriousBlackCloakedInception,
//MydteriousBlackCloakedEmergence,
//MydteriousBlackCloakedPrologue
]

function MydteriousBlackCloakedFirst(entity, event) {
    let { level, server, x, y, z } = entity
    let BossEventWaveMax = MydteriousBlackCloakedEventList.length
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = MydteriousBlackCloakedEventList[BossEventWave - 1];
    
    BossPersistentData.cooldown = 160;
    entity.triggerAnimation('exampleController1', 'AttackFirst');
    entity.modifyAttribute('minecraft:generic.movement_speed', 'boss_buff', -9, 'addition');
    entity.modifyAttribute('minecraft:generic.knockback_resistance', 'boss_buff', 1, 'addition');
    let Maxsize = 8
    BossNeedAttackSpawnCircularParticlesPlayers("minecraft:dust 1 0 0 1", level, x, y, z, 50, 1, 32, Maxsize, 100, 100)
    server.scheduleInTicks((80), () => {
    BossInAttackSpawnCircularParticlesPlayers("minecraft:lava", level, x, y, z, 50, 1, 32, Maxsize, 100)
    server.scheduleInTicks((20), () => {
entity.removeAttribute('minecraft:generic.movement_speed', 'boss_buff');
    entity.removeAttribute('minecraft:generic.knockback_resistance', 'boss_buff');
    FerroBossAttackEntitys(entity, 233, level, x, y, z, Maxsize/2)
    })
    })
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}

function MydteriousBlackCloakedPrelude(entity, event) {
    let { level, server, x, y, z } = entity
    let BossEventWaveMax = MydteriousBlackCloakedEventList.length
    let pos = entity.position();
    let target = entity.target
    let targetPos = null
    if (target) {
    targetPos = target.position();
    }
    let radius = 30;
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = MydteriousBlackCloakedEventList[BossEventWave - 1];
    BossPersistentData.cooldown = 160;
    entity.triggerAnimation('exampleController1', 'AttackTwo');
    entity.modifyAttribute('minecraft:generic.movement_speed', 'boss_buff', -9, 'addition');
    entity.modifyAttribute('minecraft:generic.knockback_resistance', 'boss_buff', 1, 'addition');
    let Maxsize = 20
    let Minsize = 8
    BossNeedAttackSpawnCircularParticlesPlayers("minecraft:dust 1 0 0 1", level, x, y, z, 50, Minsize, 100, Maxsize, 200, 100)
    server.scheduleInTicks((80), () => {
    BossInAttackSpawnCircularParticlesPlayers("minecraft:lava", level, x, y, z, 50, Minsize, 100, Maxsize, 200)
    server.scheduleInTicks((20), () => {
    entity.removeAttribute('minecraft:generic.movement_speed', 'boss_buff');
    entity.removeAttribute('minecraft:generic.knockback_resistance', 'boss_buff');
    LunarBossAttackEntitys(entity, 233, level, x, y, z, 50, Minsize/2)
    })
    })
    
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}