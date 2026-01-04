// priority: 500

registerItemMaidBauble("fast:compassionate_heart")
EnderBonusOnLivingAttackByEntity.addBonus("fast:compassionate_heart", CompassionateHeartEvent, 1)
EnderBonusOnPlayerLeftClick.addBonus("fast:compassionate_heart", CompassionateHeartAttackEvent, 1)
registerItemTag("fast:compassionate_heart", "fast:magic")

function CompassionateHeartEvent(handler, event) {
    let EventEntity = event.source.actual;
    let uuid = EventEntity.uuid;
    let data = handler.customData
    let damagetype = data.oldDamageType
    if (damagetype.includes('holy')) return
    event.setCanceled(true);
}

function CompassionateHeartAttackEvent(handler, event) {
    let player = event.player
    let int = player.getAttribute(`fast:int`).getValue();
    if (hasEntityEnderBonus(player, "fast:the_hero_staff")) {
    int *= 1.5;
    }
    let vit = player.getAttribute(`fast:vit`).getValue();
    let Level = 1
    Level += Math.floor((int + vit) / 30)
    let Cast = overLimitSpellCast("irons_spellbooks:blessing_of_life", Level, player, false); 
}
