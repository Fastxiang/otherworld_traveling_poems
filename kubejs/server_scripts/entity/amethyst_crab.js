// priority: 400
BossEntitySpawn.addStrategy("cataclysm:amethyst_crab", BossAmethystCrabSpawnEvent, AmethystCrabFirst)
BossEntityHurt.addStrategy("cataclysm:amethyst_crab", BossAmethystCrabHurtEvent)

function BossAmethystCrabSpawnEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = AmethystCrabEventList.length
    let uuid = entity.uuid
    let level = entity.level
    let mobType = entity.type
    let BossPersistentData = entity.persistentData
    let BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), Text.translatable(`entity.${mobType.replace(':', '.')}`), 50, 'kubejs:eroded_pilz', 1)
    if (!BossPersistentData.BossEvent) {
        BossPersistentData.BossEvent = 1
        BossPersistentData.cooldown = 60
    }
    let BossEventWave = BossPersistentData.BossEvent
    let CoolDown = BossPersistentData.cooldown
    
    let BossEvent = AmethystCrabEventList[BossEventWave - 1]
    
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event])
}

function BossAmethystCrabHurtEvent(model, event) {
    let entity = event.entity
    let server = entity.server
    let BossEventWaveMax = AmethystCrabEventList.length
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
    BossBar = newBossBar(level, uuid, server, entity.getX(), entity.getY(), entity.getZ(), mobName, 50, 'kubejs:eroded_pilz', 1)
    }
    let player = event.source.player
    if (player) {
    BossBar.addPlayer(player)
    }
    let newDamage = event.amount
    BossBar.setProgress((EntityHp - newDamage) / (EntityMaxHp));
}

let AmethystCrabEventList = [
AmethystCrabFirst,
AmethystCrabPrelude,
AmethystCrabAwakening
]

function AmethystCrabFirst(entity, event) {
    let server = entity.server
    let BossEventWaveMax = AmethystCrabEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = AmethystCrabEventList[BossEventWave - 1];
    BossPersistentData.cooldown = 300;
    MoboverLimitSpellCast("irons_spellbooks:earthquake", entity, 50)
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}

function AmethystCrabPrelude(entity, event) {
    let server = entity.server
    let BossEventWaveMax = AmethystCrabEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = AmethystCrabEventList[BossEventWave - 1];
    BossPersistentData.cooldown = 400;
    MoboverLimitSpellCast("irons_spellbooks:root", entity, 1)
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}

function AmethystCrabAwakening(entity, event) {
    let server = entity.server
    let BossEventWaveMax = AmethystCrabEventList.length;
    let level = entity.level
    let BossPersistentData = entity.persistentData;
    BossPersistentData.BossEvent += 1;
    let BossEventWave = BossPersistentData.BossEvent;
    let BossEvent = AmethystCrabEventList[BossEventWave - 1];
    BossPersistentData.cooldown = 300;
    MoboverLimitSpellCast("irons_spellbooks:stomp", entity, 40)
    let CoolDown = BossPersistentData.cooldown;
    BossEntitySpawn.startBoss(entity, BossEventWave, BossEventWaveMax, CoolDown, server, BossEvent, [event]);
}