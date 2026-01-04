// priority: 500

registerItemMaidBauble("fast:ender_necklace")
EnderBonusOnLivingHurtByEntity.addBonus("fast:ender_necklace", EnderNecklaceEvent, 1)
registerItemTag("fast:ender_necklace", "fast:magic")

let EnderNecklaceXYZ = {}

function EnderNecklaceEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes('ender')) return;
    if (!EnderNecklaceXYZ[uuid]) {
    EnderNecklaceXYZ[uuid] = {};
    }
    let pos = EventEntity.position();
    let x = pos.x();
    let y = pos.y();
    let z = pos.z();
    let Data = EnderNecklaceXYZ[uuid];
    if (Data.x) {
        let dx = x - Data.x;
        let dy = y - Data.y;
        let dz = z - Data.z;
        let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (hasEntityEnderBonus(EventEntity, "fast:ender_magic_shard")) {
        distance += 20
        }
        if (distance > 60) {
        distance = 60;
        }
        let thispowerModifier = EventEntity.getAttributeValue('irons_spellbooks:ender_spell_power');
        let DamageUp = (distance * 0.01 * thispowerModifier);
        EnderNecklaceXYZ[uuid].distance = distance
        handler.addExtraDamage(distance)
        handler.addDamageMultiplier(DamageUp)
    }
    EnderNecklaceXYZ[uuid].x = x;
    EnderNecklaceXYZ[uuid].y = y;
    EnderNecklaceXYZ[uuid].z = z;
}