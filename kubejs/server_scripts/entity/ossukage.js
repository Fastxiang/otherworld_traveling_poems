// priority: 400
BossEntitySpawn.addStrategy("remnant_ossukage:ossukage", BossOssukageSpawnEvent, OssukageFirst)

function BossOssukageSpawnEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = MydteriousBlackCloakedEventList.length
    let uuid = entity.uuid
    let level = entity.level
    let mobType = entity.type
    let BossPersistentData = entity.persistentData
    if (!BossPersistentData.BossEvent) {
        BossPersistentData.BossEvent = 1
        BossPersistentData.cooldown = 60
    }
    let BossEventWave = BossPersistentData.BossEvent
    let CoolDown = BossPersistentData.cooldown
    
    let BossEvent = OssukageEventList[BossEventWave - 1]
    
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

let OssukageEventList = [
OssukageFirst,
]

function OssukageFirst(entity, event) {
    let { level, server, x, y, z } = entity
    let BossEventWaveMax = OssukageEventList.length
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = OssukageEventList[BossEventWave - 1];
    
    BossPersistentData.cooldown = 400;
    
    if (entity.target) {
    spawnFlySwordEntity(level, entity, entity.target, 20, 0.5, 5, Item.of('remnant_ossukage:ossukage_sword'))
    }
    
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}
