
function SdmShopSellEvent(event) {
    let { player, count, entry } = event
    if (!player) return
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    FortuneCrystalPlusEvent(player, persistentData, entry, count)
}

function FortuneCrystalPlusEvent(player, persistentData, entry, count) {
    if (!persistentData.FortuneCrystalPlus) return;
    let Luck = player.getAttribute(`minecraft:generic.luck`).getValue(); 
    let { x, y, z, level } = player
    let type = entry.getEntryType();
    let item = type.itemStack;
    let itemId = item.id
    if (itemId.includes('money:coin')) return
    for (let i = 1; i <= count; i++) {
        let lowLuckBonus = Math.min(Luck, 20) * 0.02; // 计算低级抽奖券概率提升（最大20*2%）
        let highLuckBonus = Math.max(Luck - 20, 0) * 0.01; // 计算中级抽奖券概率提升（超过20的幸运值*1%）
        
        let lowTicketChance = 0.1 + lowLuckBonus;
        let highTicketChance = 0.1 + highLuckBonus;
        let luckyItemChance = 0.01; 
        
        if (Math.random() < lowTicketChance) {
        NewItemEntity(level, x, y, z, Item.of("fast:raffle_ticket", 1, {RaffleTicket:"lowInstance"}))
        }
        

        if (Luck >= 20 && Math.random() < highTicketChance) {
        NewItemEntity(level, x, y, z, Item.of("fast:raffle_ticket", 1, {RaffleTicket:"mediumInstance"}))
        }
        
        if (Math.random() < luckyItemChance) {
        NewItemEntity(level, x, y, z, Item.of("hmag:fortune_crystal"))
        }
    }
}