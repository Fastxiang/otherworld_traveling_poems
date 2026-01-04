// priority: 500

registerItemMaidBauble("tarotcards:the_world")
EnderBonusOnEntityTick.addBonus("tarotcards:the_world", TheWorldTickEvent, 1)

function TheWorldTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let age = EventEntity.age
    if (age % 100 !== 0) return
    let level = EventEntity.getLevel();
    let pos = EventEntity.position();
    let radius = 20;
    let entitylist = getLivingWithinRadius(level, pos, radius);
    if (entitylist) {
    entitylist.forEach(entity => {
    let entityName = entity.type;
        if (!entity.isLiving()) return;
        let Owner = getEntityOwner(entity);
        if (Owner && Owner.isPlayer()) return;
        if (entity.isPlayer()) return;
        let Partner = getEntityPartner(entity)
        if (Partner && Partner.isPlayer()) return
        entity.potionEffects.add('irons_spellbooks:chilled', 200, 0, false, false);
        })
        }
}
