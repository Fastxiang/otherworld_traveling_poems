// priority: 500

EnderBonusOnEntityTick.addBonus("vit_talent2", VitTalent2TickEvent, 1)

function VitTalent2TickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    if (!EventEntity.isPlayer()) return
    let MaidList = getPlayerMaidList(EventEntity, 20)
    let time = 300
    MaidList.forEach(maid => {
    if (!maid.hasEffect('fast:oath_of_knight')) {
    maid.potionEffects.add('fast:oath_of_knight', time, 0, false, false);
    } else {
    maid.removeEffect('fast:oath_of_knight');
    maid.potionEffects.add('fast:oath_of_knight', time, 0, false, false)
    }
    })
}