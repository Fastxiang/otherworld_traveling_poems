
function Rpg(entity) {
  let str = entity.getAttribute('fast:str').getValue()
  let agi = entity.getAttribute('fast:agi').getValue()
  let int = entity.getAttribute('fast:int').getValue()
  let vit = entity.getAttribute('fast:vit').getValue()
  let EntityTags = entity.getTags()
  
  let thisuuid = "11111111-1111-1111-1111-111111111112"
  let thisuuid2 = "11111111-1111-1111-1111-111111111122"
  let thisuuid3 = "11111111-1111-1111-1111-111111111222"
  
  if (hasEntityEnderBonus(entity, "fast:the_hero_staff")) {
    int *= 1.5
  }
  
  if (!PlayerHasTag(entity, EntityTags, "str_talent1")) {
  applyModifier(entity, thisuuid, 'minecraft:generic.attack_damage', 'str', str * 0.5, 'addition')
  applyModifier(entity, thisuuid2, 'minecraft:generic.max_health', 'str', str * 0.1, 'addition')
  } else {
  removeModifier(entity, thisuuid2, "minecraft:generic.max_health")
  applyModifier(entity, thisuuid, 'minecraft:generic.attack_damage', 'str', str * 1, 'addition')
  }
  
  if (!PlayerHasTag(entity, EntityTags, "int_talent5")) {
  applyModifier(entity, thisuuid, 'irons_spellbooks:spell_power', 'int', int * 0.005, 'addition')
  } else {
  removeModifier(entity, thisuuid, "irons_spellbooks:spell_power")
  applyModifier(entity, thisuuid2, 'irons_spellbooks:max_mana', 'int', int * 5, 'addition')
  }
  
  if (hasEntityEnderBonus(entity, "fast:lightning_magic_shard")) {
    applyModifier(entity, thisuuid3, 'minecraft:generic.max_health', 'int', int * 0.1, 'addition')
  } else {
  removeModifier(entity, thisuuid3, "minecraft:generic.max_health")
  }
  applyModifier(entity, thisuuid, 'irons_spellbooks:max_mana', 'int', int * 1, 'addition')
  
  if (hasEntityEnderBonus(entity, "fast:iron_heart")) {
    applyModifier(entity, thisuuid2, 'l2damagetracker:crit_rate', 'agi', agi * 0.001, 'addition')
  } else {
  removeModifier(entity, thisuuid2, "l2damagetracker:crit_rate")
  }
  
  
  if (entity.isPlayer() && hasEntityEnderBonus(entity, "fast:brass_craftsman_hammer")) {
    let tec = entity.getAttribute('fast:tec').getValue()
    applyModifier(entity, thisuuid, 'l2damagetracker:crit_rate', 'agi', tec * 0.006, 'addition')
  } else if (entity.isPlayer()) {
  removeModifier(entity, thisuuid, "l2damagetracker:crit_rate")
  }
  
  applyModifier(entity, thisuuid, 'minecraft:generic.movement_speed', 'agi', agi * 0.001, 'multiply_base')
  applyModifier(entity, thisuuid, 'minecraft:generic.attack_speed', 'agi', agi * 0.001, 'multiply_base')
  
  if (hasEntityEnderBonus(entity, "cataclysm:monstrous_eye")) {
    applyModifier(entity, thisuuid, 'minecraft:generic.max_health', 'vit', vit * 1, 'addition')
  } else {
    applyModifier(entity, thisuuid, 'minecraft:generic.max_health', 'vit', vit * 0.5, 'addition')
  }
  applyModifier(entity, thisuuid, 'fast:defense', 'vit', vit * 2, 'addition')
}