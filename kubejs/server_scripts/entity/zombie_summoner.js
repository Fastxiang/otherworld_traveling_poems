// priority: 400
BossEntitySpawn.addStrategy("fast:zombie_summoner", BossZombieSummonerSpawnEvent, SummonZombieEvent)

function BossZombieSummonerSpawnEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = ZombieSummonerEventList.length
    let BossPersistentData = entity.persistentData
    if (!BossPersistentData.BossEvent) {
        BossPersistentData.BossEvent = 1
        BossPersistentData.cooldown = 60
    }
    let BossEventWave = BossPersistentData.BossEvent
    let CoolDown = BossPersistentData.cooldown
    
    let BossEvent = ZombieSummonerEventList[BossEventWave - 1]
    
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

let ZombieSummonerEventList = [
SummonZombieEvent
]

function SummonZombieEvent(entity, event) {
    let server = entity.server
    let BossEventWaveMax = ZombieSummonerEventList.length
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = ZombieSummonerEventList[BossEventWave - 1];
    BossPersistentData.cooldown = 300;
    entity.triggerAnimation('exampleController1', 'onattack');
    MoboverLimitSpellCast("irons_spellbooks:raise_dead", entity, 1)
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}