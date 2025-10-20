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
        
            if (!(event.killerEntity && event.killerEntity.isPlayer())) {
                return;
            }
            
            let player = event.killerEntity;
            let PlayerPersistentData = player.persistentData;
            let persistentData = PlayerPersistentData.enderBonus;
            if (!persistentData) return
            if (persistentData.deathCardEffect) {
                event.loot.forEach(loot => {
                    loot.setCount(loot.getCount() * 2);
                });
            }
            
            if (Math.random() < 0.001) { 
            event.addLoot("tarotcards:death");
            }
            let entity = event.entity
            if (entity) {
            if (entity.type === "grimoireofgaia:mimic") {
            if (Math.random() < 0.25) {
            event.addLoot("fast:daedalus_stormbow");
            }
            }
            }
            
            //if (event.entity.persistentData.FastZombieLoot) {
            //event.addLoot("fast:fast_boots");
            //}
        });
        
    event.addLootTypeModifier(LootType.CHEST)
        .apply(event => {
            let player = event.player
            if (!player) return;
            
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
            let PlayerPersistentData = player.persistentData;
            let persistentData = PlayerPersistentData.enderBonus;
            event.loot.forEach(loot => {
            let ItemId = loot.id
                  // if (ItemId.includes("kaleidoscope_doll")) {
                  // player.tell(ItemId)           
                  // }
                  
                  if (ItemId.includes("minecraft:decorated_pot")) {
                  if (persistentData.PotPot) {
                      if (block) {
                      event.removeLoot(loot)
                      let roll = Math.random()
                      if (roll < 0.05) {
                      let mob = player.level.createEntity("minecraft:wither_skeleton")
                      mob.setPosition(block.getX() + 0.5, block.getY() - 1, block.getZ() + 0.5)
                      mob.spawn()
                      } else if (roll < 0.10) {
                      event.addLoot(Item.of("fast:raffle_ticket", 1, { RaffleTicket: "lowInstance" }))
                    } else if (roll < 0.45) {
                    event.addLoot(Item.of("minecraft:bone", 1))
                    } else if (roll < 0.8) {
                    let mob = player.level.createEntity("minecraft:zombie")
                      mob.setPosition(block.getX() + 0.5, block.getY() - 1, block.getZ() + 0.5)
                      mob.spawn()
                    }
                   }
                  }
                 }
              })
            })
            
            
            
            
    event.addLootTypeModifier(LootType.FISHING)
        .apply(event => {   
            let entity = event.killerEntity;
            if (!entity) return
            
            let EntityPersistentData = entity.persistentData;
            
            let TheHeroFishingRod = false
            if (entity.type === "touhou_little_maid:maid") {
     let ItemMaidBaubleHeroFishingRodslot = MaidItemsUtil.getBaubleSlotInMaid(entity, ItemMaidBaubleHeroFishingRod)
     if (ItemMaidBaubleHeroFishingRodslot >= 0) TheHeroFishingRod = true
            }
            
            if (entity.isPlayer()) {
            let persistentData = EntityPersistentData.enderBonus;
            if (persistentData.TheHeroFishingRod) {
            TheHeroFishingRod = true
            }
            }
            
            if (TheHeroFishingRod) {
                event.loot.forEach(loot => {
                    loot.setCount(loot.getCount() * 2);
                });
            }
            
            })
            
});

