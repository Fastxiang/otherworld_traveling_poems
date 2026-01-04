// priority: 500

EnderBonusOnLivingDamageByOthers.addBonus("vit_talent4", VitTalent4Event, 1)

function VitTalent4Event(handler, event) {
    let EventEntity = event.entity
    let entity = event.source.actual;
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let data = handler.customData
    let damagetype = data.damageType
    let Damage = event.amount
    if (Damage >= 5) {
    if (!EventEntity.hasEffect('fast:vit_talent4')) {
    EventEntity.potionEffects.add('fast:vit_talent4', 200, 0, false, false);
    } else {
    let VitTalent = EventEntity.getEffect('fast:vit_talent4');
    let EffectLevel = VitTalent.getAmplifier();
    EventEntity.removeEffect('fast:vit_talent4');
    EventEntity.potionEffects.add('fast:vit_talent4', 200, Math.min((EffectLevel + 1), 14), false, false)
    }
    }
}
