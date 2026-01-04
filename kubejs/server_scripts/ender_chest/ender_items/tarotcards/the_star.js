// priority: 500

registerItemMaidBauble("tarotcards:the_star")
EnderBonusOnLivingHurtByEntity.addBonus("tarotcards:the_star", TheStarEvent, 1)

function TheStarEvent(handler, event) {
    handler.addIndependentMultiplier(-0.8)
}