// priority: 1100

let SdmShopSellEntryList = []
let SdmShopBuyEntryList = []
let HaveSdmShopSellEntryList = false

// 当玩家关闭背包界面时触发
PlayerEvents.inventoryClosed(event => {
    let player = event.player;
    if (!player || !player.isAlive()) return;
    event.server.scheduleInTicks(5, () => {
        updatePlayerEnderBonus(player);
        BountyItemEvent(player);
        CloseEnderPouchEvent(player)
        })
});

// 当玩家登录服务器时触发
PlayerEvents.loggedIn(event => {
    let player = event.player;
    event.server.scheduleInTicks(5, () => {
         if (!HaveSdmShopSellEntryList) {
     $ShopBase.SERVER.getShopTabs().forEach(tab => {
     tab.getTabEntry().forEach(entry => {
     let thistype = entry.getEntryType()
     let thisitem = thistype.itemStack;
     let thisitemId = thisitem.id
     if (thisitemId.includes('money:coin')) return
     if (entry.isSell) {
     SdmShopSellEntryList.push(entry)
     } else {
     SdmShopBuyEntryList.push(entry)
     }
     })
     })
     HaveSdmShopSellEntryList = true
     }    
        RemoveDataEvent(player);
        updatePlayerEnderBonus(player);
    });
});

// 当玩家重生时触发
PlayerEvents.respawned(event => {
    let player = event.player;
    event.server.scheduleInTicks(5, () => {
        RemoveDataEvent(player);
        updatePlayerEnderBonus(player);
    });
});

// 当玩家登出服务器时触发
PlayerEvents.loggedOut(event => {
    let player = event.player;
});

ExposureEvents.modifyFrameData(event => {
    let player = event.player;
    let EntityList = event.getEntitiesInFrame();
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let frame = event.frame;
    LethalShutterEvent(player, frame, EntityList, persistentData, PlayerPersistentData);
})

ExposureEvents.shutterOpening(event => {
    let player = event.player;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (PlayerPersistentData && PlayerPersistentData.LethalShutter && PlayerPersistentData.LethalShutter.Cd) {
    event.cancel()
    }
})

SDMShopEvents.sellEntry(event => {
    SdmShopSellEvent(event)
})

ItemEvents.foodEaten(event => {
    PlayerfoodEatenEvent(event)
})

//tick事件集合
PlayerEvents.tick(event => {
    let player = event.player;
    if (!player) return;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let age = player.age
    let thisPlayerUuid = player.uuid
    let AngerValueData = PlayerAngerValueData[thisPlayerUuid]
    if (PlayerPersistentData.MoveAttackDamage) {
    PlayerMoveAttackDamageEvent(player, persistentData);
    }
    
    // 每0.5秒执行的事件区域
    if (age % 10 === 0) {
    if (PlayerPersistentData.LethalShutter) {
    let LeShConfig = PlayerPersistentData.LethalShutter
    if (LeShConfig.Cd) {
    LeShConfig.Cd -= 0.5
    }
    if (LeShConfig.Cd < 0) {
    LeShConfig.Cd = 0
    }
    }
    EnderBrassHandTickEvent(player, persistentData)
    }
    
    // 每秒执行的事件区域
    if (age % 20 === 0) {
    Rpg(player, persistentData)
    ChargeEvent(player, persistentData)
    ShadowDaggeTickEvent(persistentData)
    }
    
    if (age % 40 === 0) {
    AngerValueTick(player, persistentData, AngerValueData, PlayerPersistentData)
    if(persistentData.shadowAssassinCloakPresent && player.hasEffect('irons_spellbooks:true_invisibility')) {
      applyshadowAssassinCloak(player, persistentData);
        }
    }
    
    // 每3秒执行的事件区域
    if (age % 60 === 0) {
            HeroShieldTickEvent(event, player, player, persistentData)
        if (persistentData.HermitEffect) {
            applyHermitEffect(player, persistentData);
        }
        if (persistentData.moonCardEffect) {
            applymoonCardEffect(player);
        }
        if (persistentData.worldCardEffect) {
            applyworldCardEffect(player);
        }
    }
});

MaidEvents.maidTick(event => {
    MaidTickEvent(event);
})

const coinSpellLevels = {
        "money:coin_gold": 3,
        "money:coin_diamond": 4,
        "money:coin_emerald": 5,
        "money:coin_netherite": 6,
        "money:magic_coin_gold": 6,
        "money:magic_coin_diamond": 8,
        "money:magic_coin_emerald": 10,
        "money:magic_coin_netherite": 12
};
    
let MoveAttackentitylist = [];

// 右键事件
ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    let itemId = item.id;
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
    let persistentData = PlayerPersistentData.enderBonus;
    if (itemId === "fast:deepblue_crystal") {
    DeepblueCrystalEvent(player, item, PlayerPersistentData, persistentData)
    return
    }
    if (itemId == "minecraft:compass") {
        OpenHomeGuiEvent(player, persistentData)
        return
    }
    if (itemId === "fast:maid_food_auto_sell_token" && hand === "main_hand") {
    MaidFoodAutoSellTokenRightEvent(player, item, persistentData)
    return
    }
    if (CelestisynthItems.hasOwnProperty(itemId)) {
    SkilledAxeItemEvent(player, item, persistentData)
    }
    let thisPlayerUuid = player.uuid
    
    sunCardEffectFlamingEvent(player, persistentData)
    
    if (coinSpellLevels[itemId]) {
            if (global.PlayerUseMagicPlus(player, coinSpellLevels[event.item.id], persistentData)) {
                event.item.count--;
            }
    }
    
    if (itemId === 'fast:spell_storage_sphere') {
    SpellStorageSphereEvent(player, item, PlayerPersistentData, persistentData)
    }
    
})

function RemoveDataEvent(player) {
   let PlayerPersistentData = player.persistentData;
   PlayerPersistentData.DiceCd = false
}

const coinMoneyList = {
    "money:coin_copper": 1,
    "money:coin_iron": 10,
    "money:coin_gold": 100,
    "money:coin_diamond": 1000,
    "money:coin_emerald": 10000,
    "money:coin_netherite": 100000
};

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