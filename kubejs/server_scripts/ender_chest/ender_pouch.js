// priority: 5
 
global.EnderPouchEvent = (player, openitem) => {
    if (!openitem.hasNBT()) openitem.setNbt({ items: [] })
    let nbt = openitem.getNbt();
    let openitemnbt = nbt['items'];
    let level = player.level;
    let openitemlist = [];
    let enderChestList = [];
    let enderChest = player.enderChestInventory;
    for (let i = 0; i < enderChest.getContainerSize(); i++) {
        let item = enderChest.getItem(i);
        if (item.id === "fast:ender_pouch") {
        NewItemEntity(level, player.x, player.y, player.z, Item.of(item.id, item.count, item.nbt))
        continue;
        }
        if (item.isEmpty()) continue;
        enderChestList.push({ item: item.id, count: item.count, slot: i, nbt: item.nbt })
    }
    enderChest.clearContent();
            if (openitemnbt) {
            openitemnbt.forEach(itemData => {
            let itemStack = Item.of(itemData.item, itemData.count); 
                if (itemData.nbt) {
                    itemStack = Item.of(itemData.item, itemData.count, itemData.nbt);
                    } 
                    let slot = itemData.slot; 
                        enderChest.setItem(slot, itemStack);
                
            });
        }
    openitem.nbt.merge({ "items": enderChestList })
    level.playSound(null, player.getX(), player.getY(), player.getZ(), 'block.ender_chest.open', player.getSoundSource(), 1, 1);
    updatePlayerEnderBonus(player);
}

function EnderPouchPlayerisShift(player, hand, openitem) {
    ItemUIFactory.INSTANCE.openUI(player, hand, "ender_pouch")
}


LDLibUI.item("ender_pouch", e => {
    let ui = createUI("fast_slot_27");
    let ItemStackTransfer = new $ItemStackTransfer();
    ItemStackTransfer.setSize(27)
    ItemStackTransfer.setFilter(stack => {
    return !stack.is("fast:ender_pouch")
    })
    
    let held = e.held;
    
    let nbt = held.orCreateTag
    nbt.OpenGui = true
    if (nbt && nbt.items) {
        nbt.items.forEach(itemData => {
            let slot = itemData.slot ?? -1;
            if (slot >= 0 && slot < ItemStackTransfer.getSlots()) {
                let itemStack = Item.of(itemData.item, itemData.count, itemData.nbt ?? {});
                ItemStackTransfer.setStackInSlot(slot, itemStack);
            }
        });
    }
    
    let slots = ui.getWidgetsById("slot_.*");
    for (let i = 0; i < slots.length; i++) {
        let slot = slots[i];
        slot.setHandlerSlot(ItemStackTransfer, i);
        
        slot.setChangeListener(() => {
        
            let itemsNBT = [];

            for (let j = 0; j < ItemStackTransfer.getSlots(); j++) {
                let stack = ItemStackTransfer.getStackInSlot(j);
                if (!stack.isEmpty()) {
                    itemsNBT.push({
                        slot: j,
                        item: stack.getId(),
                        count: stack.getCount(),
                        nbt: stack.nbt ?? {}
                    });
                }
            }
            held.nbt = { items: itemsNBT };
        });
    }
    
    e.success(ui);
});

function CloseEnderPouchEvent(player) {
    let item = player.mainHandItem;
    let itemId = item.id
    let nbt = item.nbt
    if (nbt && nbt.OpenGui) {
    nbt.OpenGui = false
    }
}

function PlayerItemStackedOnOtherEvent(event) {
    const player = event.player;
    if (!player) return
    let held = player.mainHandItem;
    let OnItem = event.getStackedOnItem() //手持物品
    let CarItem = event.getCarriedItem() // 被点击的物品
    let nbt = CarItem.nbt
    if (nbt && nbt.OpenGui) {
    event.setCanceled(true);
    }
}