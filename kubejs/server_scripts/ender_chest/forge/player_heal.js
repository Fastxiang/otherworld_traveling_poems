// function LivingHealByOthers(player, targetEntity, healAmount) {
     // let maxhp = targetEntity.getAttribute('minecraft:generic.max_health').getValue();
     // let hp = targetEntity.getHealth();
     // let overheal = (hp + healAmount) - maxhp;

// }

function LivingHealByPlayer(entity, targetEntity, healAmount) {
      if (targetEntity.isPlayer()) return;
      let PlayerPersistentData = entity.persistentData;
      let persistentData = PlayerPersistentData.enderBonus;
      if (persistentData.FalseSacredAmulet) {
      let Damage = healAmount * 2;
      targetEntity.attack($SpellRegistry.DIVINE_SMITE_SPELL.get().getDamageSource(entity), Damage);
      }
}

