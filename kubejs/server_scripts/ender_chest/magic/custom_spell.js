global.CustomSpell = (ctx) => {
    let player = ctx.entity;
    if (!player.isPlayer()) return;

    let uuid = player.uuid;
    let spellConfig = CustomSpellPlayerData[uuid];
    if (!spellConfig || !Array.isArray(spellConfig)) return
    
    let ray = player.rayTrace(64, false);
    if (!ray.hit) {
    player.tell("无选定目标");
    return;
    }

    let hitPos = ray.hit;
    let aabb = createCenteredPosAABB(hitPos, 15);
    
    let nearby = player.level.getEntitiesWithin(aabb)
    .filter(e => e.isLiving() && !e.isPlayer());
    
    if (nearby.length === 0) {
    player.tell("目标区域内没有可选择的生物");
    return;
    }
    nearby.sort((a, b) => a.distanceToSqr(hitPos) - b.distanceToSqr(hitPos));
    let target = nearby[0];
    
    let levelBonus = 0;
    let delayTicks = 0;
    let totalScheduledTime = 0;
    
    spellConfig.forEach(config => {
        let { type, value } = config;

        if (type === 'level') {
            levelBonus = value;  
        } else if (type === 'delay' || type === 'delayed') {
            delayTicks = value;  
        } else if (type === 'spell') {
            totalScheduledTime += delayTicks;
            player.server.scheduleInTicks(totalScheduledTime, () => {
            overLimitSpellOnCast(value, levelBonus, player, target)
            });
            
            levelBonus = 0;
            delayTicks = 0;
        }
    });
}
