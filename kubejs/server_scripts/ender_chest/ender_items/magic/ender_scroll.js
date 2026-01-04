// priority: 500

registerItemMaidBauble("fast:ender_scroll")
EnderBonusOnLivingHurtByEntity.addBonus("fast:ender_scroll", EnderScrollEvent, 1)
registerItemTag("fast:ender_scroll", "fast:magic")

function EnderScrollEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity;
    let uuid = EventEntity.uuid;
    let data = handler.customData;
    let damagetype = data.damageType;

    if (!damagetype.includes('ender')) return;

    let level = EventEntity.level;
    let pos = EventEntity.position();
    let x = pos.x();
    let y = pos.y();
    let z = pos.z();
    let dimension = level.dimension;

    const MAX_TRIES = 16;
    for (let i = 0; i < MAX_TRIES; i++) {
        let randomX = Math.floor(Math.random() * 21) - 10;
        let randomZ = Math.floor(Math.random() * 21) - 10;

        let targetX = x + randomX;
        let targetY = y;
        let targetZ = z + randomZ;
        
        if (EventEntity.randomTeleport(targetX, targetY, targetZ, true)) {
        
            let dx = entity.position().x() - targetX;
            let dy = (entity.position().y() + entity.getEyeHeight()) - (targetY + EventEntity.getEyeHeight());
            let dz = entity.position().z() - targetZ;
            
            let distanceXZ = Math.sqrt(dx * dx + dz * dz);
            let yaw = Math.atan2(dz, dx) * (180 / JavaMath.PI) - 90;
            let pitch = -(Math.atan2(dy, distanceXZ) * (180 / JavaMath.PI));
            
            EventEntity.teleportTo(dimension, targetX, targetY, targetZ, yaw, pitch);
            level.playSound(null, x, y, z, 'minecraft:entity.enderman.teleport', EventEntity.getSoundSource(), 1, 1);
            break;
        }
    }
}
