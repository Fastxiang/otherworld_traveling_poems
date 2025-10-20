// priority: 700

function SkilledAxeItemEvent(player, item, persistentData) {
    if (persistentData.CelestialCore) {
    let enderChest = player.enderChestInventory;
    let data = persistentData.CelestialCore
    let i = data.i
    let DataItem = enderChest.getItem(i);
    let DataNbt = DataItem.nbt
    if (DataNbt) {
    if (DataNbt.item === item) return
    }
    }
    player.getCooldowns().addCooldown(item, 1)
}

function MaidFoodAutoSellTokenRightEvent(player, item, persistentData) {
    persistentData.OpenMenuGui = true
    player.openChestGUI(Text.of("出售还是购买？"), 1, gui => {
        gui.slot(2, 0, slot => {
                    let SlotItem = Item.of("fast:roguelike_shop").withName("§f出售")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                        let nbt = item.orCreateTag
                        nbt.MaidData = {}
                        let MaidData = nbt.MaidData
                        MaidData.type = "sell"
                        player.closeMenu();
                    });
             });
             
        gui.slot(6, 0, slot => {
                    let SlotItem = Item.of("fast:roguelike_shop").withName("§f购买")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                        MaidFoodAutoSellTokenRight2Event(player, item, persistentData)
                    });
             });
        });
}

function MaidFoodAutoSellTokenRight2Event(player, item, persistentData) {
    MaidFoodAutoSellTokenRight2EventopenPage(player, item, 0, persistentData)
}

function MaidFoodAutoSellTokenRight2EventopenPage(player, item, pageIndex, persistentData) {
        let itemsPerPage = 54;
        let totalPages = Math.ceil(SdmShopBuyEntryList.length / itemsPerPage);
        let start = pageIndex * itemsPerPage;
        let end = Math.min(start + itemsPerPage, SdmShopBuyEntryList.length);
        let entries = SdmShopBuyEntryList.slice(start, end);
        let Playeruuid = player.uuid
        openGuiPlayer[Playeruuid] = true
        player.openChestGUI(Text.of(`选择物品 - 第 ${pageIndex + 1} 页`), 6, gui => {
            // 设置物品展示
            entries.forEach((entry, index) => {
                const EntryType = entry.getEntryType();
                const EntryItem = EntryType.itemStack;
                            if (pageIndex < totalPages - 1) {
                        if (index % 9 === 8 && Math.floor(index / 9) === 5) return
                            }
                            if (pageIndex > 0) {
                            if (index % 9 === 0 && Math.floor(index / 9) === 5) return
                            }
                gui.slot(index % 9, Math.floor(index / 9), slot => {
                    slot.setItem(EntryItem);
                    slot.setLeftClicked(() => {
                    let nbt = item.orCreateTag
                        nbt.MaidData = {}
                        let MaidData = nbt.MaidData
                        MaidData.type = "buy"
                        MaidFoodAutoSellTokenRight3Event(player, item, EntryItem, persistentData)
                    });
                });
            });

            // 上一页
            if (pageIndex > 0) {
                gui.slot(0, 5, slot => {
                    slot.setItem(Item.of("minecraft:arrow").withName("§e上一页"));
                    slot.setLeftClicked(() => MaidFoodAutoSellTokenRight2EventopenPage(player, item, pageIndex - 1, persistentData));
                });
            }

            // 下一页
            if (pageIndex < totalPages - 1) {
                gui.slot(8, 5, slot => {
                    slot.setItem(Item.of("minecraft:arrow").withName("§e下一页"));
                    slot.setLeftClicked(() => MaidFoodAutoSellTokenRight2EventopenPage(player, item, pageIndex + 1, persistentData));
                });
            }
        });
}

function MaidFoodAutoSellTokenRight3Event(player, item, NeedItem, persistentData) {
    let Playeruuid = player.uuid
    openGuiPlayer[Playeruuid] = true
    player.openChestGUI(Text.of("购买多少个？"), 1, gui => {
        gui.slot(4, 0, slot => {
                    let SlotItem = Item.of("fast:roguelike_shop").withName("§f每分钟购买32个，且上限32个")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                        let nbt = item.orCreateTag
                        let MaidData = nbt.MaidData
                        MaidData.item = {}
                        MaidData.item.item = NeedItem.id
                        MaidData.item.count = NeedItem.count
                        if (NeedItem.nbt) {
                        MaidData.item.nbt = NeedItem.nbt
                        }
                        MaidData.item.maxcount = 32
                        openGuiPlayer[Playeruuid] = false
                        player.closeMenu();
                                     });
                               });
        gui.slot(2, 0, slot => {
                    let SlotItem = Item.of("fast:roguelike_shop").withName("§f每分钟购买1个，且上限1个")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                        let nbt = item.orCreateTag
                        let MaidData = nbt.MaidData
                        MaidData.item = {}
                        MaidData.item.item = NeedItem.id
                        MaidData.item.count = NeedItem.count
                        if (NeedItem.nbt) {
                        MaidData.item.nbt = NeedItem.nbt
                        }
                        MaidData.item.maxcount = 1
                        openGuiPlayer[Playeruuid] = false
                        player.closeMenu();
                                     });
                               });
        gui.slot(6, 0, slot => {
                    let SlotItem = Item.of("fast:roguelike_shop").withName("§f每分钟购买64个，且上限最多64个")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                        let nbt = item.orCreateTag
                        let MaidData = nbt.MaidData
                        MaidData.item = {}
                        MaidData.item.item = NeedItem.id
                        MaidData.item.count = NeedItem.count
                        if (NeedItem.nbt) {
                        MaidData.item.nbt = NeedItem.nbt
                        }
                        MaidData.item.maxcount = 64
                        openGuiPlayer[Playeruuid] = false
                        player.closeMenu();
                                     });
                               });
                          });
}