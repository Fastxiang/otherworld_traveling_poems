// priority: 500

registerItemToolTips("fast:arcane_paranoia")
registerAttribute('fast:arcane_paranoia', [
  { 
    attr: 'fast:int', 
    op: 'addition',
    calculateToBase: true,
    calculate: (entity, entry, multiplier, customData) => {
        let magicCount = customData.magicTag || 0
        let notMagicCount = customData.notmagicTag || 0
        let totalInt = magicCount * 4 - notMagicCount * 1
        return totalInt
    },
  },
], true)
