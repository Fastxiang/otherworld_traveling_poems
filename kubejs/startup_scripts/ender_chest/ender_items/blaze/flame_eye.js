// priority: 500

registerItemToolTips("cataclysm:flame_eye")
registerAttribute('cataclysm:flame_eye', [
  {
    attr: 'irons_spellbooks:fire_spell_power',
    op: 'addition',
    calculate: (entity, entry, multiplier, customData) => {
        let str = entity.getAttribute('fast:str').getValue()
        return 0.01 * str * multiplier
    }
  },
], true)