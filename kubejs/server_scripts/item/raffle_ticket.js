// priority: 900
const basalItemList = [];

// 多元乐事列表
const culturalDelightsItemList = [];

// 下界乐事列表
const NethersDelightsItemList = [];

// 赛马娘列表
const UmaItemList = [];

// 低级副本列表
const lowLevelInstanceList = [];

// 中级副本列表
const mediumLevelInstanceList = [];

// 高级副本列表
const highLevelInstanceList = [];

// 抽奖券类型对象
let ticketTypeObject = {
    basal: basalItemList,
    ctdl: culturalDelightsItemList,
    ntdl: NethersDelightsItemList,
    smn: UmaItemList,
    lowInstance: lowLevelInstanceList,
    mediumInstance: mediumLevelInstanceList,
    highInstance: highLevelInstanceList
};

function addTicketTypeObject(key, list) {
    ticketTypeObject[key] = list
}

// 添加战利品
function addBasalItem(itemId, weight) {
    basalItemList.push({ itemId: itemId, weight: weight });
}

// 添加多元乐事战利品
function addCulturalDelightsItem(itemId, weight) {
    culturalDelightsItemList.push({ itemId: itemId, weight: weight });
}

// 添加下界乐事战利品
function addNethersDelightsItem(itemId, weight) {
    NethersDelightsItemList.push({ itemId: itemId, weight: weight });
}

// 添加赛马娘战利品
function addUmaItem(itemId, weight, count) {
    UmaItemList.push({ itemId: itemId, weight: weight, count: count });
}

// 添加低级副本战利品
function addLowLevelInstanceItem(instanceId, weight) {
    lowLevelInstanceList.push({ itemId: 'fast:instance_blind_box', weight: weight, nbt: { instance: instanceId } });
}

// 添加中级副本战利品
function addMediumLevelInstanceItem(instanceId, weight) {
    mediumLevelInstanceList.push({ itemId: 'fast:instance_blind_box', weight: weight, nbt: { instance: instanceId } });
}

// 添加高级副本战利品
function addHighLevelInstanceItem(instanceId, weight) {
    highLevelInstanceList.push({ itemId: 'fast:instance_blind_box', weight: weight, nbt: { instance: instanceId } });
}

// 添加妖怪们的归家模组的农作物
addBasalItem('youkaishomecoming:soybean', 1);
addBasalItem('youkaishomecoming:redbean', 1);
addBasalItem('youkaishomecoming:green_coffee_bean', 1);
addBasalItem('youkaishomecoming:tea_seeds', 1);
addBasalItem('youkaishomecoming:udumbara_seeds', 1);

// 添加多元乐事
addCulturalDelightsItem('culturaldelights:avocado_pit', 1);
addCulturalDelightsItem('culturaldelights:cucumber_seeds', 1);
addCulturalDelightsItem('culturaldelights:corn_kernels', 1);
addCulturalDelightsItem('culturaldelights:eggplant_seeds', 1);

// 添加赛马娘
addUmaItem('fast:uma_factor_item', 5, 1);
addUmaItem('umapyoi:jewel', 23, 4);
addUmaItem('umapyoi:jewel', 18, 5);
addUmaItem('umapyoi:jewel', 15, 6);
addUmaItem('umapyoi:jewel', 12, 7);
addUmaItem('umapyoi:jewel', 10, 8);
addUmaItem('umapyoi:jewel', 9, 9);
addUmaItem('umapyoi:jewel', 8, 10);

// 低级副本
const LowLevelInstanceList = [
  'fast1', 'fast2', 'fast3', 'fast4', 'fast5',
  'fast9', 'fast35', 'fast36', 'fast37', 'fast41', 'fast42', 'fast43'
];
LowLevelInstanceList.forEach(id => addLowLevelInstanceItem(id, 1));

// 中级副本
const MediumLevelInstanceList = [
  'fast6', 'fast8', 'fast10', 'fast11', 'fast12', 'fast13', 'fast14', 'fast15',
  'fast17', 'fast18', 'fast19', 'fast20', 'fast28', 'fast29', 'fast30',
  'fast31', 'fast32', 'fast33', 'fast39'
];
MediumLevelInstanceList.forEach(id => addMediumLevelInstanceItem(id, 1));

// 高级副本
const HighLevelInstanceList = [
  'fast7', 'fast16', 'fast21', 'fast22', 'fast23', 'fast24', 'fast25',
  'fast26', 'fast27', 'fast34', 'fast40'
];
HighLevelInstanceList.forEach(id => addHighLevelInstanceItem(id, 1));

// 导出对象，以便在其他脚本中使用
global.ticketTypeObject = ticketTypeObject;

// ––––––––––––––––––––––––––
// 卡盒
    const rarityRates = {
        r:   [ { quality: "r", weight: 80 }, { quality: "sr", weight: 19 }, { quality: "ssr", weight: 1 } ],
        sr:  [ { quality: "r", weight: 40 }, { quality: "sr", weight: 45 }, { quality: "ssr", weight: 5 } ],
        ssr: [ { quality: "r", weight: 20 }, { quality: "sr", weight: 40 }, { quality: "ssr", weight: 40 } ]
    };

    const cardItemPool = {
        r:   [],
        sr:   [],
        ssr:   []
    };

    const cardCommonItemPool = [];
    
    const PlayerHaveCardItemList = {};
    
for (let i = 1; i <= 12; i++) {
    cardCommonItemPool.push(`fast:the_card${i}`)
}
// ––––––––––––––––––––––––––

// 抽奖券右键点击事件
ItemEvents.rightClicked(event => {
    let item = event.item;
    let itemId = item.id
    let player = event.player;
    if (itemId === 'fast:raffle_ticket') {
        // 获取玩家
        let { level, x, y, z } = player
        // 获取奖池类型，默认为 "basal"
        let ticketType = "basal";
        let nbt = item.nbt;
        
        if (nbt && nbt.RaffleTicket) {
            ticketType = nbt.RaffleTicket;
        }
        // 获取奖池列表
        let itemList;
        if (global.ticketTypeObject && global.ticketTypeObject[ticketType]) {
            itemList = global.ticketTypeObject[ticketType];
        } else {
            player.tell(Text.red("错误：奖池未正确初始化！"));
            return;
        }
        
        // 确保奖池不为空
        if (!itemList || itemList.length === 0) {
            player.tell(Text.red("抽奖券奖池为空！"));
            return;
        }
        
        // 从奖池中随机抽取一个物品
        let totalWeight = 0;
        for (let i = 0; i < itemList.length; i++) {
            totalWeight += itemList[i].weight;
        }
        
        let randomNumber = Math.random() * totalWeight;
        let selectedItem = null;
        
        for (let i = 0; i < itemList.length; i++) {
            randomNumber -= itemList[i].weight;
            if (randomNumber <= 0) {
                selectedItem = itemList[i];
                break;
            }
        }
        
        if (selectedItem) {
            // 创建物品
            let stack;
            
            if (selectedItem.nbt) {
                stack = Item.of(selectedItem.itemId, selectedItem.count || 1, selectedItem.nbt);
            } else {
                stack = Item.of(selectedItem.itemId, selectedItem.count || 1);
            }
            
        NewItemEntity(level, x, y, z, stack)
            
            item.count--;
            
            let itemIdString = selectedItem.itemId.toString(); // 将 Java 对象转换为 JavaScript 字符串
            let langId = stack.getItem().getDescriptionId()
            let ItemlangId = Text.translatable(`${langId}`).getString();
            
            player.tell(Text.of(`你抽到了：${ItemlangId}`).gold());
        }
        else {
            player.tell(Text.red("抽取失败，请重试！"));
        }
    }
    
    
    if (itemId === "fast:instance_blind_box") {
    let nbt = item.nbt
    if (nbt && nbt.instance) {
    let rewardConfig = dungeonConfig[nbt.instance]
    if (!rewardConfig) return
    let RewardItemList = []
        let { level, x, y, z } = player
    
    // 设置上限
    let maxItems = 1
    let Luck = player.getAttribute(`minecraft:generic.luck`).getValue();
    maxItems += Math.floor(Luck / 10)
    let availableRewards = rewardConfig.reward.filter(itemconfig => 
        !itemconfig.item.includes('instance_pass') && !itemconfig.item.includes('money:coin')
    )
    
    // 随机选择不超过上限的物品
    let selectedRewards = []
    if (availableRewards.length <= maxItems) {
        selectedRewards = availableRewards
    } else {
        // 随机选择maxItems个物品
        let indices = new Set()
        while (indices.size < maxItems && indices.size < availableRewards.length) {
            indices.add(Math.floor(Math.random() * availableRewards.length))
        }
        selectedRewards = Array.from(indices).map(i => availableRewards[i])
    }
    
    selectedRewards.forEach(itemconfig => {
        let thisItem = generateInstanceItem(itemconfig)
        RewardItemList.push(thisItem)
        let langId = itemconfig.item.replace(':', '.')
        let ItemlangId = Text.translatable(`item.${langId}`).getString()
        if (ItemlangId === `item.${langId}`) {
            ItemlangId = Text.translatable(`block.${langId}`).getString()
        }
        notifyPlayers(level, x, y, z, 50, 
            Text.translatable('ender_bonus.instance.reward_item', ItemlangId).getString()
        )
    })
    
    spawnPackage(level, x, y + 3, z, RewardItemList)
    item.count--;
    }
    }
    
    
    
    if (itemId === "fast:card_box") {
    let nbt = item.nbt;
    if (!nbt || !nbt.carddata || !nbt.carddata.rarity) {
        player.tell(Text.red("错误：卡盒缺少品质信息！"));
        return;
    }

    let CardData = nbt.carddata;
    let { rarity } = CardData;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let PlayerUuid = player.uuid;
    let NewUuid = PlayerUuid + rarity;
    let { level, x, y, z } = player;

    // 卡盒数量
    let total = item.count;

    // 普通右键 = 打开GUI
    if (!player.isShiftKeyDown()) {
        let itemList = [];

        if (!PlayerHaveCardItemList[NewUuid]) {
            let drawnItems = new Set();
            for (let i = 0; i < 3; i++) {
                let quality = rollQuality(rarityRates[rarity] || rarityRates.r);
                let pool = (cardItemPool[quality] || []).concat(cardCommonItemPool);

                let availableItems = pool.filter(id => !drawnItems.has(id));
                if (availableItems.length === 0) {
                    availableItems = pool;
                    drawnItems.clear();
                }

                let selectedId = availableItems[Math.floor(Math.random() * availableItems.length)];
                drawnItems.add(selectedId);

                let newItem = Item.of(selectedId, 1, { itemcarddata: { rarity: quality } });
                TheCard1Event(newItem);
                itemList.push(newItem);
            }
        } else {
            itemList = PlayerHaveCardItemList[NewUuid];
        }

        PlayerHaveCardItemList[NewUuid] = itemList;
        OpenCardGuiEvent(player, "fast.ender.hero.card", NewUuid, persistentData, itemList, item);
        return;
    }

    // ---------------------------
    // Shift+右键 = 批量生成逻辑
    // ---------------------------
    player.tell(Text.of(`§6正在批量开启 ${total} 个卡盒...`).gold());

    for (let t = 0; t < total; t++) {
        // 为每个卡盒生成三张候选卡
        let candidates = [];
        let drawnItems = new Set();

        for (let i = 0; i < 3; i++) {
            let quality = rollQuality(rarityRates[rarity] || rarityRates.r);
            let pool = (cardItemPool[quality] || []).concat(cardCommonItemPool);

            let availableItems = pool.filter(id => !drawnItems.has(id));
            if (availableItems.length === 0) {
                availableItems = pool;
                drawnItems.clear();
            }

            let selectedId = availableItems[Math.floor(Math.random() * availableItems.length)];
            drawnItems.add(selectedId);

            let newItem = Item.of(selectedId, 1, { itemcarddata: { rarity: quality } });
            TheCard1Event(newItem);
            candidates.push(newItem);
        }
        
        let bestList = [];
        let highestQuality = -999;
        let rarityValue = { r: 1, sr: 2, ssr: 3 };

        for (let c of candidates) {
            let q = c.nbt.itemcarddata.rarity;
            let val = rarityValue[q] || 0;
            if (val > highestQuality) highestQuality = val;
        }

        for (let c of candidates) {
            let q = c.nbt.itemcarddata.rarity;
            let val = rarityValue[q] || 0;
            if (val === highestQuality) bestList.push(c);
        }

        let chosen = bestList[Math.floor(Math.random() * bestList.length)];

        // 掉落物品
        NewItemEntity(level, x, y, z, chosen);
    }

    // 扣除卡盒
    item.count = 0;

    player.tell(Text.of(`§a批量抽取完成！共开启 ${total} 个卡盒！`).green());
    }
    
});

function rollQuality(rateList) {
        let total = rateList.reduce((sum, r) => sum + r.weight, 0);
        let rand = Math.random() * total;
        for (let i = 0; i < rateList.length; i++) {
            rand -= rateList[i].weight;
            if (rand <= 0) return rateList[i].quality;
        }
        return rateList[rateList.length - 1].quality;
}

function TheCard1Event(item) {
    let itemId = item.id;
    if (itemId !== "fast:the_card1") return
    let CardData = QualityItemNeedList[itemId];
    let nbt = item.nbt;

    if (nbt) {
        let ItemCardData = nbt.itemcarddata;
        if (ItemCardData.count) return
        let ItemRarity = ItemCardData.rarity;
        let ItemThisData = CardData[ItemRarity];
        let max = ItemThisData.max;
        let min = ItemThisData.min;
        
        ItemCardData.count = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}