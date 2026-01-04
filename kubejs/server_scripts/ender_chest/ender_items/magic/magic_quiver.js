// priority: 500

registerItemMaidBauble("fast:magic_quiver")
registerItemMaidBauble("fast:magic_arrow")
EnderBonusOnEntitySpawnByEntity.addBonus("fast:magic_quiver", MagicQuiverEvent, 1)
registerItemTag("fast:magic_quiver", "fast:magic")

function MagicQuiverEvent(handler, event) {
    let entity = event.entity;
    let type = entity.getType()
    if (type !== "minecraft:arrow") return
    let EventEntity = getEntityOwner(entity)
    if (!EventEntity) return
    let entitypos = entity.position();
    let x = entitypos.x();
    let y = entitypos.y();
    let z = entitypos.z();
    let lookAngle = EventEntity.getLookAngle();
    let spawn = EventEntity.getEyePosition().add(lookAngle.scale(1.5)); 
    let targetPos = lookAngle.scale(32).add(spawn); 
    let direction = targetPos.subtract(spawn).normalize().scale(2.0);
    let thispowerModifier = EventEntity.getAttributeValue('irons_spellbooks:evocation_spell_power');
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    let Damage = 50;
    Damage += agi;
    Damage *= thispowerModifier;
    let Count = 1;
    let MagicArrowCount = getEntityEnderBonusCount(EventEntity, "fast:magic_arrow")
    if (MagicArrowCount) {
    Count += MagicArrowCount;
    }
    for (let i = 0; i < Count; i++) {
    EventEntity.server.scheduleInTicks((5 * i), () => {
    let arrow = EventEntity.level.createEntity("irons_spellbooks:small_magic_arrow");
    arrow.setPosition(x, y, z)// 生成位置
    arrow.shoot(direction)// 移动方向
    arrow.setDamage(Damage)
    arrow.setOwner(EventEntity)
    arrow.spawn()
    })
    }
    event.cancel();
}