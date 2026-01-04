

EntityEvents.death(event => {
    let DeadEntity = event.entity
    if (!event.entity.lastHurtByMob) return
    let killer = event.entity.lastHurtByMob
    if (!killer.isPlayer()) return
})

function thisDebugEvent(player, DeadEntity) {
    let uuid = player.uuid
    let damagetype = PlayerDamageType.get(uuid)
    player.tell(damagetype)
    let level = player.getLevel();
    let DeadEntityPos = DeadEntity.position();
    let radius = 20;
    let entitylist = getLivingWithinRadius(level, DeadEntityPos, radius);
    if(entitylist) {
    entitylist.forEach(entity => {
        if (!entity.isLiving()) return;
        let Owner = getEntityOwner(entity);
        if (Owner && Owner.isPlayer()) return;
        if (entity.isPlayer()) return;
        let Partner = getEntityPartner(entity)
        if (Partner && Partner.isPlayer()) return
        let EntityPos = entity.position()
        let spawn = EntityPos.add(0, entity.getEyeHeight() / 2 + 5, 0)
        let direction = EntityPos.subtract(spawn).normalize();
        let needle = level.createEntity('irons_spellbooks:blood_needle');
    needle.setOwner(player)
    needle.moveTo(spawn)
    needle.shoot(direction)
    needle.setDamage(233)
    needle.spawn()
        })
        }
}