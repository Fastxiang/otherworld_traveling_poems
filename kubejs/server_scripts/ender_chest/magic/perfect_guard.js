
global.PerfectGuardCanUse = (ctx) => {
    let entity = ctx.entity
    let uuid = entity.uuid
    let level = entity.level
    let mainItem = entity.getMainHandItem();
    let offItem  = entity.getOffhandItem();
    let isPlayer = entity.isPlayer();
    let mainHasShield = mainItem && mainItem.id.includes('shield');
    let offHasShield  = offItem && offItem.id.includes('shield');
    if (!mainHasShield && !offHasShield) {
    if (isPlayer) {
        entity.displayClientMessage("§c主手或副手必须手持盾牌才能释放技能", true);
    }
    return false;
    }
    if (isInCooldown("PerfectGuardCd", uuid, level)) {
    if (isPlayer) {
    entity.displayClientMessage(("§c技能正在冷却中"), true);
    }
    return false
    }
    return true
}

let PerfectGuardData = {}

global.PerfectGuard = (ctx) => {
    let player = ctx.entity;
    let thisPlayerUuid = player.uuid
    let { x, y, z, level, server } = player
    
    PerfectGuardData[thisPlayerUuid] = true
    addCooldown("PerfectGuardCd", thisPlayerUuid, 30, level)
    
    server.scheduleInTicks(20, () => {
    PerfectGuardData[thisPlayerUuid] = false
    })
}