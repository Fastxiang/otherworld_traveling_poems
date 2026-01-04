// priority: 500

registerItemToolTips("fast:int_gem")
registerAttribute('fast:int_gem', [
  {
    attr: 'fast:int',
    op: 'addition',
    value: 9
  },
  { 
    attr: "fast:int",
    op: "multiply_base",
    value: 0.09
  },
  { 
    attr: "irons_spellbooks:spell_power",
    op: "addition",
    value: 0.09
  }
], true)