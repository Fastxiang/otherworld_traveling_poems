// priority: 500

registerItemMaidBauble("tarotcards:the_emperor")
EnderBonusOnPlayerLeftClick.addBonus("tarotcards:the_emperor", TheEmperorEvent, 1)

function TheEmperorEvent(handler, event) {
    let player = event.player
    let pos = player.position()
    let level = player.level
    let entitylist = getLivingWithinRadius(level, pos, 20)
    let targetPos = null
    let ray = player.rayTrace(64, false)
    if (ray.entity) {
    targetPos = ray.entity.position()
    }
    if (!targetPos) return
    let NeedEntity = null
    if (entitylist) {
        let entitiesWithOwner = entitylist.filter(e => typeof e.getSummoner === 'function');
        entitiesWithOwner.forEach(entity => {
            let Owner = entity.getSummoner();
            if (player === Owner) {
            NeedEntity = entity
            }
        });
    }
    if (NeedEntity) {
    let int = player.getAttribute(`fast:int`).getValue();
    if (persistentData.HeroStaff) {
    int *= 1.5;
    }
    let vit = player.getAttribute(`fast:vit`).getValue();
    let SpellLevel = 1
    SpellLevel += Math.floor((int + vit) / 30)
    NeedEntity.setPosition(targetPos.x(), targetPos.y(), targetPos.z());
    overLimitSpellOnCast("irons_spellbooks:sacrifice", SpellLevel, player, NeedEntity)
    }
}