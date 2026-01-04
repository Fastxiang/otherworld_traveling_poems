// priority: 500

registerItemMaidBauble("fast:the_hero_fishing_rod")
EnderBonusOnPlayerMinigameEnded.addBonus("fast:the_hero_fishing_rod", HeroFishingRodEvent, 1)
EnderBonusOnFishingLootByEntity.addBonus("fast:the_hero_fishing_rod", HeroFishingRodLootEvent, 1)

function HeroFishingRodEvent(handler, event) {
    let player = event.player
    addPlayerXp(player, 30)
}

function HeroFishingRodLootEvent(handler, event) {
    let entity = event.killerEntity;
    event.loot.forEach(loot => {
    loot.setCount(loot.getCount() * 2);
    });
}

