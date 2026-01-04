// priority: 1000

const EnderBonusOnKillLootByEntity = new EnderBonusHandler()
const EnderBonusOnChestLootByPlayer = new EnderBonusHandler()
const EnderBonusOnBlockLootByPlayer = new EnderBonusHandler()
const EnderBonusOnFishingLootByEntity = new EnderBonusHandler()

const MagicShardsItemList = [
            'fast:fire_magic_shard',
            'fast:ice_magic_shard',
            'fast:nature_magic_shard',
            'fast:lightning_magic_shard',
            'fast:blood_magic_shard',
            'fast:holy_magic_shard',
            'fast:ender_magic_shard',
            'fast:evocation_magic_shard'
];

LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .apply(event => {
            let entity = event.killerEntity;
            if (!entity) return
            let uuid = entity.uuid
            let obj = EntityEnderBonus[uuid]
            if (obj) {
            let itemIds = Object.keys(obj)
            EnderBonusOnKillLootByEntity.run(itemIds, [event], entity)
            }
            
            if (Math.random() < 0.001) { 
            event.addLoot("tarotcards:death");
            }
            let deadEntity = event.entity
            if (deadEntity) {
            if (deadEntity.type === "grimoireofgaia:mimic") {
            if (Math.random() < 0.25) {
            event.addLoot("fast:daedalus_stormbow");
            }
            }
            }
            
        });
        
    event.addLootTypeModifier(LootType.CHEST)
        .apply(event => {
            let player = event.player
            if (!player) return;
            
            let uuid = player.uuid
            let obj = EntityEnderBonus[uuid]
            if (obj) {
            let itemIds = Object.keys(obj)
            EnderBonusOnChestLootByPlayer.run(itemIds, [event], player)
            }
            
            if (Math.random() < 0.2) {
            let randomIndex = Math.floor(Math.random() * MagicShardsItemList.length);
            let selectedShard = MagicShardsItemList[randomIndex];
            let item = Item.of(selectedShard);
            event.addLoot(item)
            }
        });
        
            event.addLootTypeModifier(LootType.BLOCK)
        .apply(event => {
            let player = event.player
            if (!player) return;
            let block = event.getDestroyedBlock();
            let uuid = player.uuid
            let obj = EntityEnderBonus[uuid]
            if (obj) {
            let itemIds = Object.keys(obj)
            EnderBonusOnBlockLootByPlayer.run(itemIds, [event], player)
            }
            })
            
            
            
            
    event.addLootTypeModifier(LootType.FISHING)
        .apply(event => {
            let entity = event.killerEntity;
            if (!entity) return
            let uuid = entity.uuid
            let obj = EntityEnderBonus[uuid]
            if (obj) {
            let itemIds = Object.keys(obj)
            EnderBonusOnFishingLootByEntity.run(itemIds, [event], entity)
            }
            })
            
});

