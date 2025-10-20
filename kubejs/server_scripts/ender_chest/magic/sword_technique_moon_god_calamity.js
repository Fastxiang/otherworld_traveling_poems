
let SwordTechniqueMoonGodCalamityHave = {}

global.SwordTechniqueMoonGodCalamity = (ctx) => {
    let player = ctx.entity;
    if (!player.isPlayer()) return;
    let level = player.level
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let thisPlayerUuid = player.uuid
    let ray = player.rayTrace(64, false);
    if (!ray.hit) {
    player.tell("无选定目标"); return
    }
    let hitPos = ray.hit;
    
    let entity = getNearestEntity(hitPos, 20, level)
    
    if (!entity) return
    let AngerValueData = PlayerAngerValueData[thisPlayerUuid]
    AngerValue(player, persistentData, AngerValueData);
    let Damage = player.getAttribute('minecraft:generic.attack_damage').getValue();
    let powerModifier = player.getAttribute('fast:physical_mastery').getValue();
    Damage *= powerModifier
    
    let dimension = level.dimension
    let look = player.getLookAngle();
    let server = player.server
    
    let distance = 1.5;
    
    let targetX = entity.getX() - look.x() * distance;
    let targetY = entity.getY();
    let targetZ = entity.getZ() - look.z() * distance;

    player.teleportTo(dimension, targetX, targetY, targetZ, player.getYaw(), player.getPitch());
    
    AttackEntity(player, entity, "fast:player", Damage * 0.5);
    server.scheduleInTicks(1, () => {
    if (entity.isAlive()) {
    AttackEntity(player, entity, "fast:player", Damage * 0.5);
    }
    })
    
    AngerValueData.SwordTechniqueTime = true;
    AngerValueData.Value -= 40;
    AngerValueMax(AngerValueData);
    AngerValue(player, persistentData, AngerValueData);
    addCooldown("SwordTechniqueMoonGodCalamityHave", thisPlayerUuid, 20, level)
    
    addCooldown("SwordTechniqueCd", thisPlayerUuid, 12, level)
    
    server.scheduleInTicks(12, () => {
    AngerValueData.SwordTechniqueTime = false;
    AngerValue(player, persistentData, AngerValueData);
    })
}

function SwordTechniqueMoonGodCalamityEvent(player) {
    let level = player.level
    let thisPlayerUuid = player.uuid
    if (!isInCooldown("SwordTechniqueMoonGodCalamityHave", thisPlayerUuid, level)) return
    clearCooldown("SwordTechniqueMoonGodCalamityHave", thisPlayerUuid)
    let dimension = level.dimension
    let lookVec = player.getLookAngle(); 
    let backPos = player.position().subtract(lookVec.scale(9)); 
    let SpellLevel = 5
    let str = player.getAttribute('fast:str').getValue()
    SpellLevel += Math.floor(str / 10)
    player.teleportTo(dimension, backPos.x(), player.y, backPos.z(), player.getYaw(), player.getPitch());
    overLimitSpellCast("irons_spellbooks:starfall", SpellLevel, player, false)
}