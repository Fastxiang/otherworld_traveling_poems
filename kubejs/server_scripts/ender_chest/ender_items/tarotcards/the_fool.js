// priority: 500

registerItemMaidBauble("tarotcards:the_fool")
EnderBonusOnLivingDamageByEntity.addBonus("tarotcards:the_fool", TheFoolEvent, -1)

function TheFoolEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    if (isInCooldown("the_fool", uuid, level)) return
    let str = EventEntity.getAttribute(`fast:str`).getValue();
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    let vit = EventEntity.getAttribute(`fast:vit`).getValue();
    if (hasEntityEnderBonus(EventEntity, "fast:the_hero_staff")) {
     int *= 1.5;
     }
    let damage = (str + agi + int + vit);
    event.amount = damage;
    addCooldown("the_fool", uuid, 10, level)
}