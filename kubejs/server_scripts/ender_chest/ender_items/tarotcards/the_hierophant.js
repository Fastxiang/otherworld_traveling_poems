// priority: 500

registerItemMaidBauble("tarotcards:the_hierophant")
EnderBonusOnLivingHurtByEntity.addBonus("tarotcards:the_hierophant", TheHierophantEvent, 1)

function TheHierophantEvent(handler, event) {
    let EventEntity = event.source.actual;
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('holy')) return;
    let level = EventEntity.level;
    let pos = EventEntity.position();
    let radius = 20;
    let entitylist = getLivingWithinRadius(level, pos, radius);
    if (entitylist) {
        let entitiesWithOwner = entitylist.filter(e => typeof e.getSummoner === 'function');
        entitiesWithOwner.forEach(entity => {
            let Owner = entity.getSummoner();
            if (EventEntity === Owner) {
            if (!entity.hasEffect('fast:faith_effect')) {
            entity.potionEffects.add('fast:faith_effect', 1200, 0, false, false);
            entity.setHealth(entity.getMaxHealth());
            }
            }
        });
    }
}