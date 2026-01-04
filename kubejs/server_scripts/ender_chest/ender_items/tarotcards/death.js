// priority: 500

registerItemMaidBauble("tarotcards:death")
EnderBonusOnKillLootByEntity.addBonus("tarotcards:death", TarotCardDeathEvent, 1)

function TarotCardDeathEvent(handler, event) {
    let EventEntity = event.killerEntity;
    let entity = event.entity
    let uuid = EventEntity.uuid
    event.loot.forEach(loot => {
    loot.setCount(loot.getCount() * 2);
    });
}