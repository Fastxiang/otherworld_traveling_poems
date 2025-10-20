
global.SwordTechniqueDecisiveStrike = (ctx) => {
    let player = ctx.entity;
    if (!player.isPlayer()) return;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let thisPlayerUuid = player.uuid
    let AngerValueData = PlayerAngerValueData[thisPlayerUuid]
    AngerValue(player, persistentData, AngerValueData);
    let { x, y, z, level, server } = player
    AngerValueData.DecisiveStrikeTime = true;
    AngerValueData.SwordTechniqueTime = true;
    AngerValueData.Value -= 20;
    PlayersPlaySound(level, x, y, z, 50, 'kubejs:sword2')
    player.triggerAnimation("fast:sword1", 1, "linear", true, false, [], parts => {
  parts.rightArm.setEnabled(true);
  parts.leftArm.setEnabled(false);
  parts.leftLeg.setEnabled(false);
  parts.rightLeg.setEnabled(false);
  parts.head.setEnabled(false);
  parts.torso.setEnabled(false);
});
    AngerValueMax(AngerValueData)
    AngerValue(player, persistentData, AngerValueData);
    
    addCooldown("SwordTechniqueCd", thisPlayerUuid, 24, level)
    
    server.scheduleInTicks(14, () => {
    AngerValueData.DecisiveStrikeTime = false;
    AngerValueData.SwordTechniqueTime = false;
    player.stopAnimation("fast:sword1");
    AngerValue(player, persistentData, AngerValueData);
    })
}