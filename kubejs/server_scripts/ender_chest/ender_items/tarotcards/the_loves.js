// priority: 500

registerItemMaidBauble("tarotcards:the_lovers")
EnderBonusOnLivingHurtByEntity.addBonus("tarotcards:the_lovers", TheLoversEvent, 2)
PlayerItemRightClickOnInteractMaidEvent.addBonus("tarotcards:the_lovers", TheLoversRightClickEvent, 1)

const AllowedDamageType = [
    'holy_magic',
    'fire_magic',
    'ice_magic',
    'lightning_magic',
    'ender_magic',
    'blood_magic',
    'evocation_magic',
    'eldritch_magic',
    'nature_magic',
    'blood_cauldron',
    'heartstop',
    'dragon_breath_pool',
    'fire_field',
    'poison_cloud',
    'player',
    'arrow',
    'exposure',
    'share',
    'mob'
];

function TheLoversEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let level = EventEntity.level
    let server = EventEntity.server
    let player = resolvePlayerFromEntity(EventEntity)
    if (!player) return
    let uuid = player.uuid
    if (isInCooldown("the_lovers", uuid, level)) return
    let data = handler.customData
    let damagetype = data.damageType
    if (EventEntity.isPlayer()) {
    let item = getEntityEnderBonusItem(EventEntity, "tarotcards:the_lovers")
    let nbt = item.nbt
    if (!nbt) return
    let MaidUuid = nbt.TheLovers
    if (MaidUuid) {
    let MaidList = getPlayerMaidList(EventEntity, 30)
    MaidList.forEach(maid => {
    if (maid.uuid.toString() !== MaidUuid) return
    if (!AllowedDamageType.includes(damagetype)) return;
    let Damageneed = event.amount * 0.75
    server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(maid, entity, `fast:${damagetype}`, Damageneed)
        }
    });
    addCooldown("the_lovers", uuid, 10, level)
    })
    }
    } else {
    if (!player) return
    let item = getEntityEnderBonusItem(player, "tarotcards:the_lovers")
    if (!item) return
    let nbt = item.nbt
    if (!nbt) return
    let MaidUuid = nbt.TheLovers
    if (!MaidUuid) return
    if (EventEntity.uuid.toString() !== MaidUuid) return
    let x = EventEntity.getX()
    let z = EventEntity.getZ()
    if (!thisXZHavePlayer(player, x, z, 30)) return
    if (!AllowedDamageType.includes(damagetype)) return;
    let Damageneed = event.amount * 0.75
    server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(player, entity, `fast:${damagetype}`, Damageneed)
        }
    });
    addCooldown("the_lovers", uuid, 10, level)
    }
}

function TheLoversRightClickEvent(handler, event) {
    let player = event.player;
    let level = player.level
    let maid = event.maid;
    let item = player.getMainHandItem();
    let itemId = item.id;
    let Owner = maid.getOwner();
    if (!Owner) return;
    if (Owner !== player) return;
    let FavoLevel = maid.getFavorabilityManager().getLevel();
    if (FavoLevel >= 3) {
    let nbt = item.orCreateTag
    nbt.TheLovers = maid.uuid.toString();
    player.tell("成功绑定女仆")
    event.setCanceled(true);
    }
}