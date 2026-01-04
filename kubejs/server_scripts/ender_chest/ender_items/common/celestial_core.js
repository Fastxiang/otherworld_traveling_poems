// priority: 500

PlayerItemRightClickEvent.addBonus("celestisynth:solaris", SkilledAxeItemEvent, 1)
PlayerItemRightClickEvent.addBonus("celestisynth:crescentia", SkilledAxeItemEvent, 1)
PlayerItemRightClickEvent.addBonus("celestisynth:breezebreaker", SkilledAxeItemEvent, 1)
PlayerItemRightClickEvent.addBonus("celestisynth:poltergeist", SkilledAxeItemEvent, 1)
PlayerItemRightClickEvent.addBonus("celestisynth:aquaflora", SkilledAxeItemEvent, 1)
PlayerItemRightClickEvent.addBonus("celestisynth:frostbound", SkilledAxeItemEvent, 1)
PlayerItemRightClickEvent.addBonus("celestisynth:keres", SkilledAxeItemEvent, 1)
EnderBonusOnLivingHurtByEntity.addBonus("celestisynth:celestial_core", SkilledAxeItemDamageEvent, 1)
    
function SkilledAxeItemDamageEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    let item = getEntityEnderBonusItem(EventEntity, "celestisynth:celestial_core")
    if (!item) return
    let nbt = item.nbt
    if (!nbt) return
    let DataItem = nbt.item
    let count = CelestisynthItems[DataItem]
    if (!count) return
    handler.addIndependentMultiplier(-count)
}

function SkilledAxeItemEvent(handler, event) {
    let EventEntity = event.player
    let item = event.item
    let DataItem = getEntityEnderBonusItem(EventEntity, "celestisynth:celestial_core")
    if (DataItem) {
    let DataNbt = DataItem.nbt
    if (DataNbt) {
    if (DataNbt.item === item) return
    }
    }
    EventEntity.getCooldowns().addCooldown(item, 1)
}