// priority: 500

registerItemMaidBauble("fast:blood_brand")
EnderBonusOnLivingDamageByOthers.addBonus("fast:blood_brand", BloodBrandEvent, 1)
registerItemTag("fast:blood_brand", "fast:magic")

let EntityBloodValueData = {}

function BloodBrandEvent(handler, event) {
    let EventEntity = event.entity
    let entity = event.source.actual;
    let uuid = EventEntity.uuid;
    let Damage = event.amount
    if (Damage >= 5) {
    let Data = EntityBloodValueData[uuid]
    if (!Data) {
    EntityBloodValueData[uuid] = {}
    Data = EntityBloodValueData[uuid]
    Data.Value = 0
    }
    Data.Value += 1
    BloodBrandAttackEvent(EventEntity, Data)
    }
}

function BloodBrandAttackEvent(EventEntity, Data) {
    if (!hasEntityEnderBonus(EventEntity, "fast:blood_brand")) return;
    if (Data.Value >= 10) {
    let level = EventEntity.level
    Data.Value = 0
    let pos = EventEntity.position()
    let entitylist = getLivingWithinRadius(level, pos, 5);
    let str = EventEntity.getAttribute(`fast:str`).getValue();
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    if (hasEntityEnderBonus(EventEntity, "fast:the_hero_staff")) {
    int *= 1.5;
    }
    let thispowerModifier = EventEntity.getAttribute('irons_spellbooks:blood_spell_power').getValue();
    let Damage = (str + int) * thispowerModifier
    entitylist.forEach(entity => {
        let Owner = getEntityOwner(entity);
        if (Owner && Owner.isPlayer()) return;
        if (entity.isPlayer()) return;
        let Partner = getEntityPartner(entity)
        if (Partner && Partner.isPlayer()) return
        let EntityPos = entity.position()
        let spawn = EntityPos.add(0, entity.getEyeHeight() / 2 + 5, 0)
        let direction = EntityPos.subtract(spawn).normalize();
        let needle = level.createEntity('irons_spellbooks:blood_needle');
    needle.setOwner(EventEntity)
    needle.moveTo(spawn)
    needle.shoot(direction)
    needle.setDamage(Damage)
    needle.spawn()
    })
    }
}