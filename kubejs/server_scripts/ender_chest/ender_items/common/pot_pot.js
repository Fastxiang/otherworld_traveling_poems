// priority: 500

registerItemMaidBauble("fast:pot_pot")
EnderBonusOnBlockLootByPlayer.addBonus("fast:pot_pot", PotPotLootEvent, 1)

function PotPotLootEvent(handler, event) {
            let player = event.player;
            let block = event.getDestroyedBlock();
            let level = player.level
            event.loot.forEach(loot => {
            let ItemId = loot.id
                  if (ItemId.includes("minecraft:decorated_pot")) {
                      if (block) {
                      event.removeLoot(loot)
                      let roll = Math.random()
                      if (roll < 0.05) {
                      let mob = level.createEntity("minecraft:wither_skeleton")
                      mob.setPosition(block.getX() + 0.5, block.getY() - 1, block.getZ() + 0.5)
                      mob.spawn()
                      } else if (roll < 0.10) {
                      event.addLoot(Item.of("fast:raffle_ticket", 1, { RaffleTicket: "lowInstance" }))
                    } else if (roll < 0.45) {
                    event.addLoot(Item.of("minecraft:bone", 1))
                    } else if (roll < 0.8) {
                    let mob = level.createEntity("minecraft:zombie")
                      mob.setPosition(block.getX() + 0.5, block.getY() - 1, block.getZ() + 0.5)
                      mob.spawn()
                    }
                   }
                 }
              })
}