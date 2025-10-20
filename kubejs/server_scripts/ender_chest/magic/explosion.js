global.Explosion = (ctx) => {
    let player = ctx.entity;
    if (!player) return;
    let powerModifier = player.getAttribute('irons_spellbooks:spell_power').getValue();
    let thispowerModifier = player.getAttribute('irons_spellbooks:fire_spell_power').getValue();
    let CastTimeReduction = player.getAttribute('irons_spellbooks:cast_time_reduction').getValue();
    let up = 1;
    if (CastTimeReduction < -1) {
    CastTimeReduction = -1;
    }
    up += ((1 - CastTimeReduction) * 9);
    let level = player.level;
    let ray = player.rayTrace(64, false);
        if (!ray.hit) {
        player.tell("无选定目标"); return
        }
        let hitPos = ray.hit;
        let spawn = new $Vec3(hitPos.x(), hitPos.y() + 20, hitPos.z());
        let direction = getTrackingEntityVector(spawn, hitPos, 6, level);
        let er = 3 * up;
        let scalebase = 1 * up;
        let scalehitbox = 0.1 - up * 0.05;
        let damage = 70 * powerModifier * thispowerModifier * up;
        if (up < 0.1) {
        up = 0.1
        }
        direction = direction.scale(0.6 - up/60);
    let explosion = level.createEntity('irons_spellbooks:fireball');
    explosion.setOwner(player)
    explosion.moveTo(spawn)// 生成位置
    explosion.shoot(direction)// 移动方向
    explosion.setExplosionRadius(er)// 爆炸大小
    explosion.pehkui_getScaleData($ScaleTypes.BASE).setScale(scalebase)
    explosion.pehkui_getScaleData($ScaleTypes.HITBOX_HEIGHT).setScale(scalehitbox)
    explosion.setDamage(damage)
    explosion.spawn()
};