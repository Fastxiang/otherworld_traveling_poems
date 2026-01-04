// priority: 1000

const EnderBonusOnEntitySpawnByEntity = new EnderBonusHandler()

EntityEvents.spawned(event => {
       let entity = event.entity;
       let persistentData = entity.persistentData;
       let type = entity.getType()
       let owner = getEntityOwner(entity)
       if (owner) {
       let uuid = owner.uuid
       let obj = EntityEnderBonus[uuid]
       if (obj) {
       let itemIds = Object.keys(obj)
       EnderBonusOnEntitySpawnByEntity.run(itemIds, [event], owner)
       }
       }
       SmallMagicArrow(entity, persistentData, type);
       MaidSpawn(entity, type);
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

function MaidSpawn(entity, type) {
         if (type !== 'touhou_little_maid:maid') return;
         let Owner = entity.getOwner();
         if (!Owner) return
         MaidUpdateEnderBonusEvent(entity)
}

