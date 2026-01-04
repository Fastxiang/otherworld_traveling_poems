// priority: 1000

NativeEvents.onEvent($MobEffectEvent$Added, event => {
    let entity = event.entity;
    let effectInstance = event.effectInstance;
    let Effect = effectInstance.getEffect();
    let effectid = Effect.getDescriptionId();
    if (effectid === "effect.irons_spellbooks.thunderstorm") {
    if (entity.type === "fast:mysterious_figure") return
    let effectlevel = effectInstance.getAmplifier();
    let NeedLevel = 34
    if (effectlevel === NeedLevel) return
    entity.server.scheduleInTicks(1, () => {
    entity.removeEffect(Effect);
        entity.potionEffects.add('irons_spellbooks:thunderstorm', effectInstance.getDuration(), NeedLevel, false, false)
    })
    }
})

