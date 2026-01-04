// priority: 1000

let SdmShopSellEntryList = []
let SdmShopBuyEntryList = []
let HaveSdmShopSellEntryList = false

// 当玩家关闭背包界面时触发
PlayerEvents.inventoryClosed(event => {
    let player = event.player;
    if (!player || !player.isAlive()) return;
    event.server.scheduleInTicks(10, () => {
        PlayerUpdateEnderBonusEvent(player)
        BountyItemEvent(player);
        CloseEnderPouchEvent(player)
        let uuid = player.uuid
        if (openNewGuiPlayer[uuid]) {
        openNewGuiPlayer[uuid] = false
        } else {
        openGuiPlayer[uuid] = false
        }
        })
});

// 当玩家登录服务器时触发
PlayerEvents.loggedIn(event => {
    let player = event.player;
    event.server.scheduleInTicks(20, () => {
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
        PlayerUpdateEnderBonusEvent(player);
    });
});

// 当玩家重生时触发
PlayerEvents.respawned(event => {
    let player = event.player;
    event.server.scheduleInTicks(15, () => {
        PlayerUpdateEnderBonusEvent(player);
    });
});

// 当玩家登出服务器时触发
PlayerEvents.loggedOut(event => {
    let player = event.player;
});
