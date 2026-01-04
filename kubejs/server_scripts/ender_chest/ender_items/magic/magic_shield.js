// priority: 500

registerItemMaidBauble("fast:magic_shield")
EnderBonusOnLivingDamageByOthers.addBonus("fast:magic_shield", MagicShieldEvent, 3)
registerItemTag("fast:magic_shield", "fast:magic")

function MagicShieldEvent(handler, event) {
     let EventEntity = event.entity
     let entity = event.source.actual;
     let uuid = EventEntity.uuid;
     let NeedShieldDamage = event.amount;
     
     let MaxHp = EventEntity.getAttribute('minecraft:generic.max_health').getValue();
     let hp = EventEntity.getHealth();
     let NeedHeal = MaxHp - hp;
     let player = resolvePlayerFromEntity(EventEntity)
     if (player) {
     let magicData = $MagicData.getPlayerMagicData(player);
     if (!magicData) return
     let mana = magicData.getMana();
     let manaShield = Math.floor(mana / 60);
     let actualShield = Math.min(manaShield, NeedShieldDamage);
     magicData.setMana(mana - (actualShield * 60));
     $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
    
     event.amount -= actualShield;
    
     let NewMana = magicData.getMana();
     if (event.amount === 0 && NewMana >= 60 && NeedHeal) {
     let manaShieldHp = Math.floor(mana / 60);
     let actualShieldHp = Math.min(manaShieldHp, NeedHeal);
     magicData.setMana(NewMana - (actualShieldHp * 60));
     $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
     EventEntity.heal(actualShieldHp)
     }
     }
}