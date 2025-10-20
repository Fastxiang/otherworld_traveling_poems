global.OathOfKnight = (ctx) => {
    let player = ctx.entity;
    if (!player.isPlayer()) return;
    let powerModifier = player.getAttribute('irons_spellbooks:spell_power').getValue();
    let thispowerModifier = player.getAttribute('irons_spellbooks:holy_spell_power').getValue();
    let time = 1200 * powerModifier * thispowerModifier
    let MaidList = getPlayerMaidList(player, 20)
    MaidList.forEach(maid => {
    if (!maid.hasEffect('fast:oath_of_knight')) {
    maid.potionEffects.add('fast:oath_of_knight', time, 0, false, false);
    } else {
    maid.removeEffect('fast:oath_of_knight');
    maid.potionEffects.add('fast:oath_of_knight', time, 0, false, false)
    }
    })
}