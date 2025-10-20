// priority: 900

function MaidTickEvent(event) {
    let maid = event.maid
    let Owner = maid.getOwner();
    if (!Owner) return;
    if (maid.age % 1200 === 0) {
    MaidFoodAutoSellTokenEvent(maid, Owner)
    }
    let PlayerPersistentData = Owner.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let MaidPersistentData = maid.persistentData;
    if (maid.age % 60 === 0) {
    MaidHeroShieldTickEvent(maid)
    }
    if (MaidPersistentData.MoveAttackDamage) {
    PlayerMoveAttackDamageEvent(maid, persistentData);
    }
}

function MaidHeroShieldTickEvent(maid) {
        let ItemMaidBaubleHeroShieldslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroShield)
        if (ItemMaidBaubleHeroShieldslot < 0) return
        let thisItem = maid.getMaidBauble().getStackInSlot(ItemMaidBaubleHeroShieldslot)
        if (thisItem && thisItem.nbt && thisItem.nbt.close) return
        maid.potionEffects.add('fast:taunt_effect', 100, 0, false, false);
}

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