// priority: 500

registerDungeonRaw('fast44', {
  mobs: { 1: [{ type: 'block_factorys_bosses:infernal_dragon', count: 1, xp: 1200, EnderBonus: [{ id: 'fast:ender_scroll', count: 1 }], attributes: { 'minecraft:generic.max_health': 1000000 } }] },
  config: {
    keyItem: 'fast:key44',
    time: 300,
    totalWaves: 1,
    reward: [{ item: 'money:coin_iron', count: 17 }]
  }
});

registerDungeonRaw('fast45', {
  mobs: { 1: [{ type: 'block_factorys_bosses:dragon_guard_sword', count: 9, xp: 100, EnderBonus: [{ id: 'fast:the_hero_sword', count: 1 }], attributes: { 'minecraft:generic.max_health': 50000 } }, { type: 'block_factorys_bosses:dragon_guard_sword', count: 1, xp: 100, EnderBonus: [{ id: 'fast:the_hero_shield', count: 1 }], attributes: { 'minecraft:generic.max_health': 50000 } }] },
  config: {
    keyItem: 'fast:key45',
    time: 240,
    totalWaves: 1,
    reward: [{ item: 'money:coin_iron', count: 17 }]
  }
});

registerDungeonRaw('fast46', {
  mobs: { 1: [{ type: 'block_factorys_bosses:flaming_skeleton_guard_fireball', count: 2, xp: 200, attributes: { 'minecraft:generic.max_health': 75000 } }, { type: 'block_factorys_bosses:flaming_skeleton_guard_sword', count: 3, xp: 200, EnderBonus: [{ id: 'fast:the_hero_shield', count: 1 }], attributes: { 'minecraft:generic.max_health': 75000 } }] },
  config: {
    keyItem: 'fast:key46',
    time: 240,
    totalWaves: 1,
    reward: [{ item: 'money:coin_iron', count: 17 }]
  }
});