
global.SwordTechniqueFlyingSwordGuard = (ctx) => {
    let player = ctx.entity;
    if (!player.isPlayer()) return;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let thisPlayerUuid = player.uuid
    let AngerValueData = PlayerAngerValueData[thisPlayerUuid]
    AngerValue(player, persistentData, AngerValueData);
    
    let level = player.level
    let Attack = player.getAttribute('minecraft:generic.attack_damage').getValue();
    let powerModifier = player.getAttribute('fast:physical_mastery').getValue();
        let Damage = Attack * 0.3 * powerModifier
        let MainItem = player.getMainHandItem();
        let count = 8
        for (let i = 0; i < count; i++) {
        spawnOrbitingFastFlySwordEntity(level, player, player, 0, 0.7, 400, Damage, MainItem)
        }
        
    AngerValueData.SwordTechniqueTime = true;
    AngerValueData.Value -= 50;
    AngerValueMax(AngerValueData)
    AngerValue(player, persistentData, AngerValueData);
    
    addCooldown("SwordTechniqueCd", thisPlayerUuid, 20, level)
    
    player.server.scheduleInTicks(20, () => {
    AngerValueData.SwordTechniqueTime = false;
    player.stopAnimation("fast:sword1");
    AngerValue(player, persistentData, AngerValueData);
    })
}