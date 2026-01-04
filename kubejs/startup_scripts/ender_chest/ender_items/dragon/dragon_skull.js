// priority: 500

registerItemToolTips("block_factorys_bosses:dragon_skull")
registerAttribute('block_factorys_bosses:dragon_skull', [
  { 
    attr: 'fast:agi', 
    op: 'addition',
    calculateToBase: true,
    calculate: (entity, entry, multiplier, customData) => {
    let dragon = customData.dragonTag || 0
    return multiplier * dragon * 2
    },
    calculateToBase: true
  },
  { 
    attr: 'fast:str', 
    op: 'addition',
    calculateToBase: true,
    calculate: (entity, entry, multiplier, customData) => {
    let dragon = customData.dragonTag || 0
    return multiplier * dragon
    },
    calculateToBase: true
  },
  { 
    attr: 'fast:int', 
    op: 'addition',
    calculateToBase: true,
    calculate: (entity, entry, multiplier, customData) => {
    let dragon = customData.dragonTag || 0
    return multiplier * dragon
    },
    calculateToBase: true
  },
], true)