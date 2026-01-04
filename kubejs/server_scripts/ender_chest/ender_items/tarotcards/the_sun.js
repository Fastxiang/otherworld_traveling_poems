// priority: 500

registerItemMaidBauble("tarotcards:the_sun")
EnderBonusOnPlayerRightClick.addBonus("tarotcards:the_sun", TheSunEvent, 1)

function TheSunEvent(handler, event) {
        let player = event.player
        let firePower = player.getAttributeValue("irons_spellbooks:fire_spell_power")
        let fireLevel = 1
        fireLevel += Math.floor((firePower - 1) * 5)
        let Cast = overLimitSpellCast("irons_spellbooks:flaming_strike", fireLevel, player, false); 
}


