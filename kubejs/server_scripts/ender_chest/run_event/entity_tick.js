// priority: 1000

const EnderBonusOnEntityTick = new EnderBonusHandler()
    .setInit((handler, event) => {
                let entity = event.entity;
                if (!entity) return;
                let age = entity.age
                if (age % 20 === 0) {
                Rpg(entity)
                }
            });
            
NativeEvents.onEvent($LivingTickEvent, event => {
    let entity = event.entity;
    if (!entity) return;
    let age = entity.age
    if (age % 10 === 0) {
    let uuid = entity.uuid
    let obj = EntityEnderBonus[uuid]
    if (!obj) return
    let itemIds = Object.keys(obj)
    EnderBonusOnEntityTick.run(itemIds, [event], entity)
    }
    if (entity.age % 1200 === 0) {
    if (entity.type !== "touhou_little_maid:maid") return
    let Owner = entity.getOwner();
    if (!Owner) return;
    MaidFoodAutoSellTokenEvent(entity, Owner);
    }
})

let ItemMaidBaubleMaidFoodAutoSellToken = MaidRegister.BAUBLE.bind("fast:maid_food_auto_sell_token")

function MaidFoodAutoSellTokenEvent(maid, Owner) {
    let MaidFoodAutoSellTokenBaubleslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleMaidFoodAutoSellToken)
    let NeedItem = null
    if (MaidFoodAutoSellTokenBaubleslot >= 0) {
    NeedItem = maid.getMaidBauble().getStackInSlot(MaidFoodAutoSellTokenBaubleslot)
    }
    if (!NeedItem) return
    let ItemNbt = NeedItem.nbt
    if (!ItemNbt) return
    let ItemMaidData = ItemNbt.MaidData
    let NeedType = ItemMaidData.type
    let GetNeedItem = ItemMaidData.item
    let Task = maid.getTask().getUid()
    if (Task !== "fast:sales_assistant") return
    let MaidInv = maid.getAvailableInv(false)
    if (NeedType === "sell") MaidFoodAutoSellTokenSellEvent(Owner, MaidInv)
    if (NeedType === "buy") MaidFoodAutoSellTokenBuyEvent(maid, Owner, MaidInv, GetNeedItem)
}

function MaidFoodAutoSellTokenSellEvent(Owner, MaidInv) {
    for (let i = 0; i < MaidInv.getSlots() - 2; i++) {
     let item = MaidInv.getStackInSlot(i)
     let itemId = item.id
     let count = item.count
     SdmShopSellEntryList.forEach(entry => {
     let EntryType = entry.getEntryType()
     let EntryItem = EntryType.itemStack;
     let EntryItemId = EntryItem.id
     if (itemId === EntryItemId) {
     $KubeJSHelper.postEvent(Owner, entry, count, $KubeJSHelper.EventType.SELL)
     MaidInv.setStackInSlot(i, Item.of("air"))
     $SDMShopR.addMoney(Owner, entry.entryPrice * count)
     }
     })
     }
}

function MaidFoodAutoSellTokenBuyEvent(maid, Owner, MaidInv, GetNeedItem) {
    let { level, x, y, z } = maid
    let NeedItem = GetNeedItem.item
    let NeedCount = GetNeedItem.count
    let NeedNbt = GetNeedItem.nbt
    let NeedMaxCount = GetNeedItem.maxcount

    let HaveCount = 0
    for (let i = 0; i < MaidInv.getSlots() - 2; i++) {
        let item = MaidInv.getStackInSlot(i)
        if (item.id === NeedItem) {
            HaveCount += item.count
        }
    }

    let ThisNeedCount = NeedMaxCount - HaveCount
    if (ThisNeedCount < 1) return

    SdmShopBuyEntryList.forEach(entry => {
        let EntryType = entry.getEntryType()
        let EntryItem = EntryType.itemStack
        let BaseItem = NeedNbt ? Item.of(NeedItem, NeedCount, NeedNbt) : Item.of(NeedItem, NeedCount)
        let EntryItemId = EntryItem.id
        let EntryItemNbt = EntryItem.nbt
        if (EntryItemId !== NeedItem) return
        if (NeedNbt) {
        if (EntryItemNbt !== NeedNbt) return
        }

        let ThisMoney = $SDMShopR.getMoney(Owner)
        let EntryPrice = entry.entryPrice

        for (let i = 0; i < ThisNeedCount; i++) {
            if (ThisMoney < EntryPrice) break

            let BuyItem = NeedNbt ? Item.of(NeedItem, NeedCount, NeedNbt) : Item.of(NeedItem, NeedCount)

            let result = $ItemHandlerHelper.insertItemStacked(MaidInv, BuyItem, false)
            if (!result.isEmpty()) {
                NewItemEntity(level, x, y, z, result)
            }

            $SDMShopR.setMoney(Owner, ThisMoney - EntryPrice)
            ThisMoney -= EntryPrice

            $KubeJSHelper.postEvent(Owner, entry, NeedCount, $KubeJSHelper.EventType.BUY)
        }
    })
}