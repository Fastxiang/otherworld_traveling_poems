// priority: 500

registerItemToolTips("fast:resonance_pact")
registerAttribute('fast:resonance_pact', [
  {
    attr: 'fast:str',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
        let str = entity.getAttribute(`fast:str`).getValue();
        if (!customData.ResonancePact) customData.ResonancePact = {}
        customData.ResonancePact.str = str
        return -0.8
    }
  },
  {
    attr: 'fast:agi',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
        let agi = entity.getAttribute(`fast:agi`).getValue();
        if (!customData.ResonancePact) customData.ResonancePact = {}
        customData.ResonancePact.agi = agi
        return -0.8
    }
  },
  {
    attr: 'fast:int',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
        let int = entity.getAttribute(`fast:int`).getValue();
        if (!customData.ResonancePact) customData.ResonancePact = {}
        customData.ResonancePact.int = int
        return -0.8
    }
  },
  {
    attr: 'fast:vit',
    op: 'multiply_total',
    calculate: (entity, entry, multiplier, customData) => {
        let vit = entity.getAttribute(`fast:vit`).getValue();
        if (!customData.ResonancePact) customData.ResonancePact = {}
        customData.ResonancePact.vit = vit
        return -0.8
    }
  },
], true)