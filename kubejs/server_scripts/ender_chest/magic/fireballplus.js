global.fireballplusCast = (ctx) => {
    let player = ctx.entity;
    if (!player) return;
    let level = player.level;
    let spellLevel = ctx.getSpellLevel();
    let powerModifier = player.getAttribute('irons_spellbooks:spell_power').getValue();
    let thispowrModifier = player.getAttribute('irons_spellbooks:fire_spell_power').getValue();
    let lookAngle = player.getLookAngle();
    let spawn = player.getEyePosition().add(lookAngle.scale(1.5)); 
    let damage = (5 + spellLevel * 5) * 2.5 * powerModifier * thispowrModifier;
    let targetPos = lookAngle.scale(32).add(spawn); 
    let direction = targetPos.subtract(spawn).normalize();
    
    let fireball = new $SmallMagicFireball(level, player);
    fireball.setNoGravity(true);
    fireball.setDamage(damage);
    fireball.setOwner(player);
    fireball.moveTo(spawn);
    fireball.shoot(direction, 0); 
    level.addFreshEntity(fireball);
};