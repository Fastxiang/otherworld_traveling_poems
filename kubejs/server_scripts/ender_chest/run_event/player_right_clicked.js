// priority: 1000

const EnderBonusOnPlayerRightClick = new EnderBonusHandler()
const PlayerItemRightClickEvent = new EnderBonusHandler()

const coinMoneyList = {
    "money:coin_copper": 1,
    "money:coin_iron": 10,
    "money:coin_gold": 100,
    "money:coin_diamond": 1000,
    "money:coin_emerald": 10000,
    "money:coin_netherite": 100000
};

registerItemMaidBauble("fast:spell_storage_sphere")

// 右键事件
ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    let itemId = item.id;
    let uuid = player.uuid
    let MainItem = player.getMainHandItem();
    let hand = event.getHand();
    if (!player) return;
    if (hand === "main_hand") {
    if (itemId === "fast:ender_pouch") {
    if (player.isShiftKeyDown()) {
    EnderPouchPlayerisShift(player, hand, item)
    }
    return;
    }
    }
    if (itemId === "fast:reversal_book") {
    resetPlayerSkills(player)
    event.item.count--;
    return;
    }
    if (itemId === "fast:the_hero_shield") {
        let thisNbt = item.orCreateTag
        if (thisNbt.close) {
            thisNbt.close = false
        } else {
            thisNbt.close = true
        }
        return
    }
    if (itemId === "fast:dirt_platform") {
    event.item.count--
    placePlatform(player, "minecraft:dirt", 15, 1)
    return
    }
    if (itemId === "fast:blue_realm") {
    blueRealmEvent(player)
    return
    }
    if (MainItem.id === "fast:sword_soul" && hand !== "main_hand") {
    SwordSoulRightEvent(player, hand, MainItem, item)
    return
    }
    if (itemId === "money:magic_transformation_coin") {
    MagicTransformationCoinEvent(player)
    return
    }
    if (hasSpecialProperty(item, "waystones:warp_dust")) {
    SpecialPropertyGloriousYearsEvent(event, player, item)
    return
    }
    let PlayerPersistentData = player.persistentData;
    if (itemId === "fast:deepblue_crystal") {
    DeepblueCrystalEvent(player, item, PlayerPersistentData)
    return
    }
    if (itemId == "minecraft:compass") {
        OpenHomeGuiEvent(player)
        return
    }
    if (itemId === "fast:maid_food_auto_sell_token" && hand === "main_hand") {
    MaidFoodAutoSellTokenRightEvent(player, item)
    return
    }
    
    PlayerItemRightClickEvent.runKey(itemId, [event])
    
    let obj = EntityEnderBonus[uuid]
    if (obj) {
    let itemIds = Object.keys(obj)
    EnderBonusOnPlayerRightClick.run(itemIds, [event], player)
    }
    
    // sunCardEffectFlamingEvent(player, persistentData)
    
    // if (coinSpellLevels[itemId]) {
            // if (global.PlayerUseMagicPlus(player, coinSpellLevels[event.item.id], persistentData)) {
                // event.item.count--;
            // }
    // }
    
    if (itemId === 'fast:spell_storage_sphere') {
    SpellStorageSphereEvent(player, item)
    }
    
})

function MaidFoodAutoSellTokenRightEvent(player, item) {
    let uuid = player.uuid
    openGuiPlayer[uuid] = true
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
                        MaidFoodAutoSellTokenRight2Event(player, item)
                    });
             });
        });
}

function MaidFoodAutoSellTokenRight2Event(player, item) {
    MaidFoodAutoSellTokenRight2EventopenPage(player, item, 0)
}

function MaidFoodAutoSellTokenRight2EventopenPage(player, item, pageIndex) {
        let itemsPerPage = 54;
        let totalPages = Math.ceil(SdmShopBuyEntryList.length / itemsPerPage);
        let start = pageIndex * itemsPerPage;
        let end = Math.min(start + itemsPerPage, SdmShopBuyEntryList.length);
        let entries = SdmShopBuyEntryList.slice(start, end);
        let uuid = player.uuid
        openNewGuiPlayer[uuid] = true
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
                        MaidFoodAutoSellTokenRight3Event(player, item, EntryItem)
                    });
                });
            });

            // 上一页
            if (pageIndex > 0) {
                gui.slot(0, 5, slot => {
                    slot.setItem(Item.of("minecraft:arrow").withName("§e上一页"));
                    slot.setLeftClicked(() => MaidFoodAutoSellTokenRight2EventopenPage(player, item, pageIndex - 1));
                });
            }

            // 下一页
            if (pageIndex < totalPages - 1) {
                gui.slot(8, 5, slot => {
                    slot.setItem(Item.of("minecraft:arrow").withName("§e下一页"));
                    slot.setLeftClicked(() => MaidFoodAutoSellTokenRight2EventopenPage(player, item, pageIndex + 1));
                });
            }
        });
}

function MaidFoodAutoSellTokenRight3Event(player, item, NeedItem) {
    let uuid = player.uuid
    openNewGuiPlayer[uuid] = true
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
                        openNewGuiPlayer[uuid] = false
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
                        openNewGuiPlayer[uuid] = false
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
                        openNewGuiPlayer[uuid] = false
                        player.closeMenu();
                                     });
                               });
                          });
}

function MagicTransformationCoinEvent(player) {
    let level = player.level
    const Inventory = player.getInventory();
    
    if (player.isShiftKeyDown()) {
        let currentMoney = $SDMShopR.getMoney(player);
        if (currentMoney <= 0) return;
        
        $SDMShopR.setMoney(player, 0);
        
        let sortedCoins = Object.entries(coinMoneyList)
            .sort((a, b) => b[1] - a[1]);
        
        let remaining = currentMoney;
        for (let [itemId, value] of sortedCoins) {
            if (remaining <= 0) break;
            
            // 计算当前面值的硬币数量
            let count = Math.floor(remaining / value);
            if (count > 0) {
                // 生成物品实体
                let coinItem = Item.of(itemId, count);
                let itemEntity = level.createEntity('item');
                
                itemEntity.setPos(player.x, player.y, player.z);
                itemEntity.item = coinItem;
                itemEntity.spawn();
                
                remaining -= count * value;
            }
        }
        player.tell(Text.translatable('fast.magic_transformation_coin.event.1', currentMoney))
    } else {
        let total = 0;
        for (let i = 0; i < Inventory.getContainerSize(); i++) {
            let item = Inventory.getItem(i);
            if (item.isEmpty()) continue;
            
            let itemId = String(item.getId());
            if (coinMoneyList[itemId]) {
                total += item.getCount() * coinMoneyList[itemId];
                Inventory.setItem(i, Item.of("air"));
            }
        }
        if (total > 0) {
            $SDMShopR.addMoney(player, total);
            player.tell(Text.translatable('fast.magic_transformation_coin.event.2', total))
        }
    }
}

function SpecialPropertyGloriousYearsEvent(event, player, item) {
    let itemId = item.id
    if (player.isShiftKeyDown()) {
    let nbt = item.nbt
    if (nbt) {
	let Iteminstance = nbt.instance
	if (Iteminstance) {
	if (Iteminstance.type != "instance") return
	let x = Iteminstance.x
	let y = Iteminstance.y
	let z = Iteminstance.z
	player.setPosition(x, y, z);
    player.level.playSound(null, player.getX(), player.getY(), player.getZ(), 'minecraft:entity.enderman.teleport', player.getSoundSource(), 1, 1);
	}
	}
    }
}

function blueRealmEvent(player) {
    let { level, x, y, z } = player
   let PlayerPersistentData = player.persistentData;
    let dimension = level.dimension
    if (dimension === "fast:fast_flat_world") {
    if (PlayerPersistentData.blueRealm) {
    let blueRealmData = PlayerPersistentData.blueRealm
    player.teleportTo(blueRealmData.dimension, blueRealmData.x, blueRealmData.y, blueRealmData.z, player.getYaw(), player.getPitch())
    } else {
    player.runCommand("spawn");
    }
    } else {
    PlayerPersistentData.blueRealm = {}
    let blueRealmData = PlayerPersistentData.blueRealm
    blueRealmData.x = x
    blueRealmData.y = y
    blueRealmData.z = z
    blueRealmData.dimension = dimension.toString()
    player.teleportTo("fast:fast_flat_world", 0, 0, 0, player.getYaw(), player.getPitch())
    }
}

function SwordSoulRightEvent(player, hand, MainItem, item) {
    let nbt = MainItem.orCreateTag
        if (!item.isEmpty()) {
            nbt.SwordSpirit = {
                item: item.getId(),
                count: item.getCount(),
                nbt: item.nbt
            };
            player.tell("剑灵已更换外观")
        }
}