// priority: 500

registerItemMaidBauble("tarotcards:the_magician")
EnderBonusOnPlayerRightClick.addBonus("tarotcards:the_magician", TheMagicianEvent, 1)
EnderBonusOnPlayerSpellPreCast.addBonus("tarotcards:the_magician", TheMagicianSpellPreCastEvent, 1)

const coinSpellLevels = {
        "money:coin_gold": 3,
        "money:coin_diamond": 4,
        "money:coin_emerald": 5,
        "money:coin_netherite": 6,
        "money:magic_coin_gold": 6,
        "money:magic_coin_diamond": 8,
        "money:magic_coin_emerald": 10,
        "money:magic_coin_netherite": 12
};

function TheMagicianEvent(handler, event) {
            let player = event.player
            let item = event.item;
            let itemId = item.id
            let spellLevel = coinSpellLevels[itemId]
            if (!spellLevel) return
            let spellId = null
            let nbt = getEntityEnderBonusNbt(player, "irons_spellbooks:scroll")
            if (nbt) {
        let NbtSpells = nbt?.ISB_Spells?.data;
        if (NbtSpells && Array.isArray(NbtSpells)) {
            NbtSpells.forEach((NbtSpell) => {
                let NbtSpellId = NbtSpell.id;
                spellId = NbtSpellId;
            })
            }
            }
            if (!spellId) return
            let spell = getSpellBySpellId(spellId)
                if (spell) {  
        if (checkPlayerMana(player, spell, spellLevel)) {
        if (overLimitSpellCast(spellId, spellLevel, player, false)) {
        event.item.count--;
                 }
              }
        } 
}

function TheMagicianSpellPreCastEvent(handler, event) {
    let EventEntity = event.entity
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let spellId = event.spellId;
    let spellLevel = event.spellLevel
    let pos = EventEntity.position();
    let radius = 20;
    let Entityentitylist = getLivingWithinRadius(level, pos, radius);
    if (Entityentitylist) {
    Entityentitylist.forEach(entity => {
    let Owner = getEntityOwner(entity)
    let Partner = getEntityPartner(entity)
    if ((Owner && Owner === EventEntity) || (Partner && Partner === EventEntity)) {
    if (!entity.isAlive()) return
    MoboverLimitSpellCast(spellId, entity, spellLevel)
    }
    })
    }
}