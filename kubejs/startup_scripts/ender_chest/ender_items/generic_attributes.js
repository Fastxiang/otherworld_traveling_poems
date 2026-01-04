// priority: 500

registerAttribute('genericAttackBonus', [
  { attr: "minecraft:generic.attack_damage", value: 1, op: "addition" },
])
registerAttribute('genericCritBonus', [
  { attr: "l2damagetracker:crit_rate", value: 0.01, op: "addition" },
])
registerAttribute('genericStrBonus', [
  { attr: 'fast:str', value: 1, op: 'addition' },
])
registerAttribute('genericIntBonus', [
  { attr: 'fast:int', value: 1, op: 'addition' },
])
registerAttribute('genericAgiBonus', [
  { attr: 'fast:agi', value: 1, op: 'addition' },
])
registerAttribute('genericVitBonus', [
  { attr: 'fast:vit', value: 1, op: 'addition' },
])
registerAttribute('genericTecBonus', [
  { attr: 'fast:tec', value: 1, op: 'addition' },
])
registerAttribute('genericAttackSpeedBonus', [
  { attr: 'minecraft:generic.attack_speed', value: 0.01, op: 'multiply_base' },
])
registerAttribute('genericMaxHealthBonus', [
  { attr: 'minecraft:generic.max_health', value: 1, op: 'addition' },
])
registerAttribute('genericPhysicalMasteryBonus', [
    { attr: 'fast:physical_mastery', value: 0.01, op: 'multiply_base' } 
])
registerAttribute('genericSpellPowerBonus', [
    { attr: 'irons_spellbooks:spell_power', value: 0.01, op: 'addition' } 
])
registerAttribute('genericEvocationSpellBonus', [
    { attr: 'irons_spellbooks:evocation_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericFireSpellBonus', [
    { attr: 'irons_spellbooks:fire_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericHolySpellBonus', [
    { attr: 'irons_spellbooks:holy_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericEnderSpellBonus', [
    { attr: 'irons_spellbooks:ender_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericLightningSpellBonus', [
    { attr: 'irons_spellbooks:lightning_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericBloodSpellBonus', [
    { attr: 'irons_spellbooks:blood_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericIceSpellBonus', [
    { attr: 'irons_spellbooks:ice_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericNatureSpellBonus', [
    { attr: 'irons_spellbooks:nature_spell_power', value: 0.01, op: 'addition' }
])
registerAttribute('genericDefenseBonus', [
    { attr: 'fast:defense', value: 1, op: 'addition' }
])
registerAttribute('genericMoveBonus', [
    { attr: 'minecraft:generic.movement_speed', value: 0.01, op: 'multiply_base' }
])
registerAttribute('genericAttackInvincibleBonus', [
    { attr: 'kubejs:generic.attack_invulnerable_frames', value: 0.01, op: 'multiply_base' }
])