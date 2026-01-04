// priority: 500

EnderBonusOnUpdate.addCheckBonus("fast:resonance_pact", ResonancePactUpdateEvent, ResonancePactEvent)

function ResonancePactUpdateEvent(handler, EventEntity) {
        let uuid = EventEntity.uuid
        let data = getEntityCustomData(EventEntity, "ResonancePact")
        let str = data.str
        let agi = data.agi
        let int = data.int
        let vit = data.vit
        let StrGemCount = getEntityEnderBonusCount(EventEntity, "fast:fate_gem_strength")
        let AgiGemCount = getEntityEnderBonusCount(EventEntity, "fast:fate_gem_agility")
        let VitGemCount = getEntityEnderBonusCount(EventEntity, "fast:fate_gem_vitality")
        let IntGemCount = getEntityEnderBonusCount(EventEntity, "fast:fate_gem_intelligence")
        let StrRate = 0.5 + 0.09 * StrGemCount - 0.03 * (AgiGemCount + IntGemCount + VitGemCount)
        let AgiRate = 0.5 + 0.09 * AgiGemCount - 0.03 * (StrGemCount + IntGemCount + VitGemCount)
        let IntRate = 0.5 + 0.09 * IntGemCount - 0.03 * (StrGemCount + AgiGemCount + VitGemCount)
        let VitRate = 0.5 + 0.09 * VitGemCount - 0.03 * (StrGemCount + AgiGemCount + IntGemCount)
        let finalStr = str * StrRate
        let finalAgi = agi * AgiRate
        let finalInt = int * IntRate
        let finalVit = vit * VitRate
        let MaidList = getPlayerMaidList(EventEntity, 40)
    MaidList.forEach(maid => {
    let MaidHave = MaidList.length
    let FavoLevel = maid.getFavorabilityManager().getLevel();
    let inheritanceRatio = 1;
    if (MaidHave > 1) {
        inheritanceRatio *= 100 / MaidHave / 100
    }
    maid.modifyAttribute('fast:str', 'resonance_pact', finalStr * inheritanceRatio, 'addition');
    maid.modifyAttribute('fast:agi', 'resonance_pact', finalAgi * inheritanceRatio, 'addition');
    maid.modifyAttribute('fast:int', 'resonance_pact', finalInt * inheritanceRatio, 'addition');
    maid.modifyAttribute('fast:vit', 'resonance_pact', finalVit * inheritanceRatio, 'addition');
    })
}

function ResonancePactEvent(handler, EventEntity) {
        let uuid = EventEntity.uuid
        let MaidList = getPlayerMaidList(EventEntity, 40)
    MaidList.forEach(maid => {
        maid.removeAttribute('fast:str', 'resonance_pact');
        maid.removeAttribute('fast:agi', 'resonance_pact');
        maid.removeAttribute('fast:int', 'resonance_pact');
        maid.removeAttribute('fast:vit', 'resonance_pact');
    })
}