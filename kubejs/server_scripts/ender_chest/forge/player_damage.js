// priority: 700

function ItemNbtWeAnEvent(event, player, EventEntity, item, modifier) {
        if (!item) return
        const modifierlevel = getModifierLevel(item, modifier)
        if(modifierlevel) {
        let Crt = player.getAttribute(`l2damagetracker:crit_rate`).getValue();
        let CrtDamage = player.getAttribute(`l2damagetracker:crit_damage`).getValue();
        let Damage = modifierlevel * 3 * Crt * CrtDamage
        event.amount += Damage
        }
}








