// priority: 500

registerItemMaidBauble("tarotcards:the_moon")
EnderBonusOnEntityTick.addBonus("tarotcards:the_moon", TheMoonTickEvent, 1)

function TheMoonTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let age = EventEntity.age
    if (age % 60 !== 0) return
    EventEntity.potionEffects.add('minecraft:night_vision', 280, 0, false, false);
}