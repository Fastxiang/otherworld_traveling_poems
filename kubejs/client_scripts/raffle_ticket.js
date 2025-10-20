// priority: 900

const rarityRates = {
        r:   [ { quality: "r", weight: 80 }, { quality: "sr", weight: 19 }, { quality: "ssr", weight: 1 } ],
        sr:  [ { quality: "r", weight: 40 }, { quality: "sr", weight: 45 }, { quality: "ssr", weight: 5 } ],
        ssr: [ { quality: "r", weight: 20 }, { quality: "sr", weight: 40 }, { quality: "ssr", weight: 40 } ]
};

const cardCommonItemPool = [
'fast:the_hero_card'
];

for (let i = 1; i <= 12; i++) {
    cardCommonItemPool.push(`fast:the_card${i}`)
}

ItemEvents.tooltip((event) => {
    // 抽奖券物品ID
    const raffleTicketId = 'fast:raffle_ticket';

    event.addAdvanced(raffleTicketId, (item, advanced, text) => {


        // 默认的langId
        let langId = 'item.fast.raffle_ticket.tooltip';
        let langId2 = 'item.fast.raffle_ticket.tooltip2';
        let nbt = item.nbt

        // 检查是否存在ctdl NBT标签
        if (item.nbt && item.nbt.RaffleTicket) {
        let type = nbt.RaffleTicket
            langId = `item.fast.raffle_ticket.tooltip.${type}` // 切换到 tooltip2
            langId2 = `item.fast.raffle_ticket.tooltip.${type}2`
        }
            

        // 添加描述信息
        text.add(1, Text.translatable('item.fast.raffle_ticket.type'))
        text.add(2, Text.translatable(langId))
        text.add(3, Text.translatable(langId2));
    });
    
    event.addAdvanced('fast:instance_blind_box', (item, advanced, text) => {
    let nbt = item.nbt
    if (nbt && nbt.instance) {
    text.add(1, Text.translatable('item.fast.instance_blind_box.type'))
    text.add(2, Text.translatable('item.fast.instance_blind_box.tooltip'))
    text.add(3, `§6§l${Text.translatable(`instance.${nbt.instance}.name`).getString()}`);
    }
    })
    
    event.addAdvanced('fast:initial_item', (item, advanced, text) => {
    text.add(1, Text.translatable('item.fast.initial_item.tooltip'))
    })
    
    
const getRarityPoolInfo = (rarityType) => {
    const pool = rarityRates[rarityType];
    return pool.map(item => ({
        quality: item.quality,
        weight: item.weight,
        percentage: (item.weight / pool.reduce((sum, i) => sum + i.weight, 0)) * 100
    }));
};

event.addAdvanced('fast:card_box', (item, advanced, text) => {
    let nbt = item.nbt;
    if (nbt && nbt.carddata) {
        let carddata = nbt.carddata;
        let ItemRarity = carddata.rarity;
        if (ItemRarity) {
            let poolInfo = getRarityPoolInfo(ItemRarity);
            
            text.add(2,Text.translatable(`item.fast.the_card.rarity`, ItemRarity).getString())
            text.add(3,Text.translatable(`item.fast.the_card.rarity.rates`).getString())
            text.add(4, Text.literal('┌───────────┬───────────┐'));
            poolInfo.forEach((info, index) => {
                text.add(5 + index, Text.literal(`│ ${info.quality} │ ${info.percentage.toFixed(1)}% │`));
            });
            text.add(5 + poolInfo.length, Text.literal('└───────────┴───────────┘'));
        }
    }
});

    
        const addTooltip = (itemId) => {
        event.addAdvanced(itemId, (item, advanced, text) => {
const langId = itemId.replace(":", ".")
            if (NeedDeleteItem.includes(itemId)) {
                while (text.length > 1) text.remove(1);
            }
            // 第一行显示属性和类型
            let nbt = item.nbt
            let ItemCardData = null
            let ItemRarity = null;
            let ItemCount = null
            if (nbt) {
            ItemCardData = nbt.itemcarddata;
            ItemRarity = ItemCardData.rarity;
            ItemCount = ItemCardData.count;
            }
            if (ItemRarity) {
            text.remove(0)
            text.add(0,Text.translatable(`item.${langId}`).getString()+`(${ItemRarity})`)
            }
            if (itemId === 'fast:the_hero_card') {
            text.add(1,Text.translate(`item.${langId}.type`))
            } else {
            text.add(1,Text.translate(`item.fast.the_card.type`))
            }
            let int = 2
            if (event.shift) {
                // 按住shift时显示详细描述
                text.add(int++,Text.translate(`item.${langId}.tooltip2`))
            } else {
                // 未按shift时显示基础描述
                text.add(int++,Text.translate(`item.${langId}.tooltip`))
            }
            if (ItemRarity) {
                text.add(int++,Text.translatable(`item.fast.the_card.rarity`, ItemRarity).getString())
                }
                if (ItemCount) {
                text.add(int++,Text.translatable(`item.fast.the_card.count`, ItemCount).getString()+"％")
                }
                if (!event.shift) {
                text.add(int++,Text.translate("item.fast.tooltips.shift"))
                }
        })
        }
        cardCommonItemPool.forEach(item => addTooltip(item))
});