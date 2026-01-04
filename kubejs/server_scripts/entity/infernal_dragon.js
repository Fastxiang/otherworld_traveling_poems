// priority: 400
BossEntitySpawn.addStrategy("block_factorys_bosses:infernal_dragon", BossInfernalDragonSpawnEvent, BossInfernalDragonEvent)
BossEntityHurt.addStrategy("block_factorys_bosses:infernal_dragon", BossInfernalDragonHurtEvent)

function BossInfernalDragonSpawnEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let uuid = entity.uuid
    let level = entity.level
    let mobType = entity.type
    let BossEventWaveMax = BossInfernalDragonEventList.length
    let BossPersistentData = entity.persistentData
    if (!BossPersistentData.BossEvent) {
        BossPersistentData.BossEvent = 1
        BossPersistentData.cooldown = 60
    }
    let BossEventWave = BossPersistentData.BossEvent
    let CoolDown = BossPersistentData.cooldown
    
    // let BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), Text.translatable(`entity.${mobType.replace(':', '.')}`), 50, 'noop', 1)
    
    let BossEvent = BossInfernalDragonEventList[BossEventWave - 1]
    
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

function BossInfernalDragonHurtEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = BossInfernalDragonEventList.length
    let uuid = entity.uuid
    let level = entity.level
    let BossPersistentData = entity.persistentData
    let EntityHp = entity.getHealth();
    let EntityMaxHp = entity.getAttribute('minecraft:generic.max_health').getValue()
    let Damage = event.amount
    let mobType = entity.type
    // let mobName = Text.translatable(`entity.${mobType.replace(':', '.')}`).getString();
    // let BossBar = BossEntitySpawn.BossBar[entity.uuid]
    // if (!BossBar) {
    // BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), mobName, 50, 'noop', 1)
    // }
    // let player = event.source.player
    // if (player) {
    // BossBar.addPlayer(player)
    // }
    // let newDamage = event.amount
    // BossBar.setProgress((EntityHp - newDamage) / (EntityMaxHp));
}

let BossInfernalDragonEventList = [
BossInfernalDragonEvent
]

function BossInfernalDragonEvent(entity, event) {
    let server = entity.server
    let BossEventWaveMax = BossInfernalDragonEventList.length
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = BossInfernalDragonEventList[BossEventWave - 1];
    BossPersistentData.cooldown = 300;
    entity.triggerAnimation('exampleController1', 'onattack');
    MoboverLimitSpellCast("irons_spellbooks:dragon_breath", entity, 10)
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}