
global.SwordTechniqueCanUse = (ctx, value) => {
    let entity = ctx.entity
    let PlayerPersistentData = entity.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let uuid = entity.uuid
    let level = entity.level
    let AngerValueData = PlayerAngerValueData[uuid]
    let MainItem = entity.getMainHandItem();
    let isPlayer = entity.isPlayer()
    if (MainItem) {
    if (!MainItem.id.includes('sword')) {
    if (isPlayer) {
    entity.displayClientMessage(("§c主手必须手持剑类武器才能释放剑技"), true);
    return false
    }
    }
    }
    if (persistentData) {
    if (!persistentData.HeroSword) {
    if (isPlayer) {
    entity.displayClientMessage(("§c未装备勇者之剑，无法使用剑技"), true);
    return false
    }
    }
    if (isInCooldown("SwordTechniqueCd", uuid, level)) {
    if (isPlayer) {
    entity.displayClientMessage(("§c剑技正在冷却中"), true);
    return false
    }
    }
    if (AngerValueData.Value >= value) {
    return true
    }
    }
    if (isPlayer) {
    entity.displayClientMessage((`§c怒气值不足，需要${value}怒气值`), true);
    }
    return false
}