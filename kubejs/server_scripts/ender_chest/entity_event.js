// priority: 400
EntityEvents.spawned(event => {
       let entity = event.entity;
       let persistentData = entity.persistentData;
       let type = entity.type
       SmallMagicArrow(entity, persistentData, type);
       ThrowWeaponProjectile(event, entity, type)
       MaidSpawn(entity, persistentData, type);
       MagicQuiverEvent(event, entity, type);
       HolyMagicShardEvent(entity)
       ItemDisplayAngleEvent(event, entity, persistentData, type)
       RogueLikeMaidEvent(event, entity, persistentData, type)
})

function RogueLikeMaidEvent(event, entity, persistentData, type) {
    if (type !== "touhou_little_maid:maid") return
    if (!persistentData.RogueLike) return
    let uuid = persistentData.RogueLike
    let ChatBubbleManager = entity.getChatBubbleManager()
    ChatBubbleManager.addTextChatBubble("fast.maid.tooltip.roguelike.1")
    if (RogueLikeShopRewardObj[uuid]) return
    event.cancel();
}

function ItemDisplayAngleEvent(event, entity, persistentData, type) {
    if (type !== "minecraft:item_display") return
    if (!persistentData.RogueLike) return
    let uuid = persistentData.RogueLike
    if (!RoguelikeDungeonManager.hasDungeonByUuid(uuid)) {
    event.cancel();
    return
    }
      entity.server.scheduleRepeatingInTicks(1, c => {
      if (!entity) c.clear()
      const time = Date.now();
      const angle = (time / 10) % 360;
      entity.setRotation(angle, 0)
      })
}

function ThrowWeaponProjectile(event, entity, type) {
    if (type !== "weaponmaster:throw_weapon_projectile") return;
    let player = getEntityOwner(entity)
    if (!player || !player.isPlayer()) return
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (!persistentData.RiftsongEdge) return;
     let str = player.getAttribute(`fast:str`).getValue();
     let agi = player.getAttribute(`fast:agi`).getValue();
     let int = player.getAttribute(`fast:int`).getValue();
     let vit = player.getAttribute(`fast:vit`).getValue();
    let CountMax = 4
    let pos = player.position();
    let radius = 50;
    CountMax += Math.floor((str + agi + int + vit) / 100)
    let level = entity.level;
    let aabb = createCenteredPosAABB(pos, radius);
    let ProList = level.getEntitiesWithin(aabb);
    
    ProList = ProList.filter(e => e.type === "weaponmaster:throw_weapon_projectile" && e !== entity && e.getOwner() === player);
    
    if (ProList.length >= CountMax) {
        event.cancel();
    }
}

function SmallMagicArrow(entity, persistentData, type) {
       if (type != "irons_spellbooks:small_magic_arrow") return;
       let config = persistentData.Tracking;
       if (!config) return;
       let x = config.arrowx;
       let y = config.arrowy;
       let z = config.arrowz;
       let pos = new $Vec3(x, y, z);
       let radius = 5;
       let level = entity.level;
    entity.server.scheduleInTicks(8, () => {
       let entitypos = entity.position();
       let directionVector = getTrackingEntityVector(entitypos, pos, radius, level);
       entity.shoot(directionVector);
    })
}

// 魔法箭袋
function MagicQuiverEvent(event, entity, type) {
    if (type != "minecraft:arrow") return
    let Owner = getEntityOwner(entity)
    if (!Owner || !Owner.isPlayer) return
    let PlayerPersistentData = Owner.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (!persistentData) return
    if (!persistentData.MagicQuiver) return;
    let entitypos = entity.position();
    let x = entitypos.x();
    let y = entitypos.y();
    let z = entitypos.z();
    let lookAngle = Owner.getLookAngle();
    let spawn = Owner.getEyePosition().add(lookAngle.scale(1.5)); 
    let targetPos = lookAngle.scale(32).add(spawn); 
    let direction = targetPos.subtract(spawn).normalize().scale(2.0);
    let thispowerModifier = Owner.getAttributeValue('irons_spellbooks:evocation_spell_power');
    let agi = Owner.getAttribute(`fast:agi`).getValue();
    let Damage = 50;
    Damage += agi;
    Damage *= thispowerModifier;
    let Count = 1;
    if (persistentData.MagicArrow) {
    Count += persistentData.MagicArrow;
    }
    for (let i = 0; i < Count; i++) {
    Owner.server.scheduleInTicks((5 * i), () => {
    let arrow = Owner.level.createEntity("irons_spellbooks:small_magic_arrow");
    arrow.setPosition(x, y, z)// 生成位置
    arrow.shoot(direction)// 移动方向
    arrow.setDamage(Damage)
    arrow.setOwner(Owner)
    arrow.spawn()
    })
    }
    event.cancel();
}

function MaidSpawn(entity, persistentData, type) {
         if (type !== 'touhou_little_maid:maid') return;
         let Owner = entity.getOwner();
         if (!Owner) return
         let server = entity.server
         server.scheduleInTicks(1, () => {
         if (!entity) return;
         updatePlayerEnderBonus(Owner);
         })
}

function HolyMagicShardEvent(entity) {
            if (typeof entity.getSummoner === 'function') {
            let Owner = entity.getSummoner();
            if (Owner.isPlayer()) {
            let PlayerPersistentData = Owner.persistentData;
            let persistentData = PlayerPersistentData.enderBonus;
            if (!persistentData.HolyMagicShard) return;
            let int = Owner.getAttribute(`fast:int`).getValue();
            let vit = Owner.getAttribute(`fast:vit`).getValue();
            let Hp = (vit + int) || 1
            entity.setAttributeBaseValue('minecraft:generic.max_health', Hp);
            entity.setHealth(entity.getMaxHealth());
        }
    }
}