// priority: 400
BossEntitySpawn.addStrategy("fast:alex", BossAlexSpawnEvent, AlexFirst)

function BossAlexSpawnEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = AlexEventList.length
    let uuid = entity.uuid
    let level = entity.level
    let mobType = entity.type
    let BossPersistentData = entity.persistentData
    if (!BossPersistentData.BossEvent) {
        BossPersistentData.BossEvent = 1
        BossPersistentData.cooldown = 100
    }
    let BossEventWave = BossPersistentData.BossEvent
    let CoolDown = BossPersistentData.cooldown
    
    let BossEvent = AlexEventList[BossEventWave - 1]
    
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

let AlexEventList = [
AlexFirst,
]

function AlexFirst(entity, event) {
    let server = entity.server
    let BossEventWaveMax = AlexEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = AlexEventList[BossEventWave - 1];
    BossPersistentData.cooldown = 100;
    let CoolDown = BossPersistentData.cooldown;

    // 启动Boss事件
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
    
    let target = entity.target;
    if (target) {
    let pos = entity.position();
    let arrow = level.createEntity("irons_spellbooks:small_magic_arrow");
    let spawn = new $Vec3(pos.x() + 1, pos.y() + 3, pos.z() + 1);
    arrow.moveTo(spawn)
    arrow.setOwner(entity);
    arrow.setDamage(40);
    arrow.setNoGravity(true);
    arrow.spawn();
    server.scheduleInTicks(40, () => {
        if (target.isAlive()) {
            let targetPos = target.position();
            let dir = targetPos.subtract(spawn).normalize();
            let speed = 0.6
            arrow.shoot(dir.scale(speed));
        }
    });
    }
}
