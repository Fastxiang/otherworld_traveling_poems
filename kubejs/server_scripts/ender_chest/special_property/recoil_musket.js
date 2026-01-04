// priority: 500

EnderBonusOnEntityGunShoot.addSpecialProperty("fast:recoil_musket", RecoilMusketEvent, 1)

function RecoilMusketEvent(handler, event) {
    let EventEntity = event.getShooter()
    let item = event.getGunItemStack();
    let lookAngle = EventEntity.getLookAngle();
    let spawn = EventEntity.getEyePosition().add(lookAngle.scale(1.5)); 
    let targetPos = lookAngle.scale(32).add(spawn); 
    let direction = targetPos.subtract(spawn).normalize();
    let x = -direction.x() * 0.5;
    let z = -direction.z() * 0.5;
    let y = -direction.y() * 0.5;
    if (EventEntity.isPlayer()) {
    EventEntity.sendData("Motion",{
    motionx:x,
    motiony:y,
    motionz:z
    });
    } else {
    EventEntity.setMotion(x,y,z)
    }
}
