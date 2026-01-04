// priority: 500

registerItemMaidBauble("fast:deceiver_mask")
PlayerItemRightClickEvent.addBonus("fast:deceiver_mask", DeceiverMaskRightEvent, 1)
EnderBonusOnEntityTick.addBonus("fast:deceiver_mask", DeceiverMaskTickEvent, 1)
registerEnderBonusCustomDataModifier(DeceiverMaskCustomDataEvent)

function DeceiverMaskTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let age = EventEntity.age
    if (age % 80 !== 0) return
    let uuid = EventEntity.uuid
    let { level, server } = EventEntity
    let persistentData = EventEntity.persistentData
    if (!persistentData.DeceiverMask) return
    let Data = persistentData.DeceiverMask
    let cd = Data.cd
    if (Data.close) return
    if (!cd) return
    if (isInCooldownByValue(cd, level)) return
    persistentData.DeceiverMask.close = true
    if (EventEntity.isPlayer()) {
    PlayerUpdateEnderBonusEvent(EventEntity)
    EventEntity.tell("欺诈假面破碎了")
    } else if (EventEntity.getType() === "touhou_little_maid:maid") {
    MaidUpdateEnderBonusEvent(EventEntity)
    let Owner = maid.getOwner()
    if (Owner) {
    Owner.tell("女仆的欺诈假面破碎了")
    }
    } else {
    MobUpdateEnderBonusEvent(EventEntity)
    }
}


function DeceiverMaskCustomDataEvent(EventEntity, item, slot, entry, customData) {
    if (item.id !== "fast:deceiver_mask") return customData
    if (EventEntity.getType() === "touhou_little_maid:maid") {
    let Owner = maid.getOwner()
    if (Owner) {
    EventEntity = Owner
    } else {
    return customData
    }
    }
    let { level, server } = EventEntity
    let persistentData = EventEntity.persistentData
    if (!persistentData.DeceiverMask) return customData
    let Data = persistentData.DeceiverMask
    let cd = Data.cd
    if (cd) {
    if (isInCooldownByValue(cd, level)) {
    let Items = []
    Data.Items.forEach(stack => {
    Items.push(Item.of(stack.id, stack.count || 1, stack.nbt))
    })
    customData.NewEnderBonus = Items
    }
    }
    return customData
}

let DeceiverMaskItems = [
Item.of("fast:the_hero_dice"),
Item.of("fast:the_hero_bow"),
Item.of("fast:the_hero_shield"),
Item.of("fast:the_hero_staff"),
Item.of("fast:the_hero_sword"),
Item.of("fast:sword_soul"),
Item.of("tarotcards:the_lovers"),
]

function randomPick(list, count) {
  let pool = []
  let result = []
  
  for (let i = 0; i < list.length; i++) {
    pool.push(list[i])
  }

  if (count > pool.length) {
    count = pool.length
  }

  for (let i = 0; i < count; i++) {
    let index = Math.floor(Math.random() * pool.length)
    result.push(pool[index])
    pool.splice(index, 1)
  }

  return result
}

function DeceiverMaskRightEvent(handler, event) {
    let EventEntity = event.player
    let { level, x, y, z } = EventEntity
    let item = event.item
    let ItemList = randomPick(DeceiverMaskItems, 3)
    let persistentData = EventEntity.persistentData
    if (!persistentData.DeceiverMask) persistentData.DeceiverMask = {}
    let Data = persistentData.DeceiverMask
    let cd = Data.cd
    if (cd) {
    if (isInCooldownByValue(cd, level)) {
    return
    }
    }
    persistentData.DeceiverMask = {}
    DeceiverMaskEvent(EventEntity, ItemList, item, Data)
}

function DeceiverMaskEvent(player, ItemList, originalItem, Data) {
    let { level, x, y, z } = player
    let PlayerUuid = player.uuid
    if (!Data.value) Data.value = 0
    if (Data.value >= 2) {
    openNewGuiPlayer[PlayerUuid] = false
    player.closeMenu();
    return
    }
    openGuiPlayer[PlayerUuid] = true
    player.openChestGUI(Text.translatable("gui.fast.deceiver.mask", (1 + Data.value)), 1, gui => {
        let Length = ItemList.length
        let availablePositions = Cardpositions[Length];
        if (Length < 8) {
        let stickItem = Item.of("fast:closegui");
        gui.slot(0, 0, slot => {
            slot.setItem(stickItem)
            slot.setLeftClicked(() => {
                player.closeMenu();
                })
        });
        gui.slot(8, 0, slot => {
            slot.setItem(stickItem)
            slot.setLeftClicked(() => {
                player.closeMenu();
                })
        });
        }
        for (let index = 0; index < ItemList.length; index++) {
            gui.slot(availablePositions[index], 0, slot => {
            let Newitem = ItemList[index]
                slot.setItem(Newitem)
                slot.setLeftClicked(() => {
                Data.value += 1
                let thisItem = { id:Newitem.id, count: Newitem.count, nbt: Newitem.nbt }
                if (!Data.Items) Data.Items = []
                Data.Items.push(thisItem)
                if (Data.value >= 2) {
                Data.cd = getNewCooldownValue(12000, level)
    let persistentData = player.persistentData
    persistentData.DeceiverMask = Data
                openNewGuiPlayer[PlayerUuid] = false
                player.sendData("DeceiverMask",{
    DeceiverMaskData: Data,
                });
                player.closeMenu();
                return
                }
                openNewGuiPlayer[PlayerUuid] = true
                DeceiverMaskEvent(player, randomPick(DeceiverMaskItems, 3), originalItem, Data)
                })
            })
        }
    })
}