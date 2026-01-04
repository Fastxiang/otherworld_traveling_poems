// priority: 500

registerItemMaidBauble("fast:nature_magic_shard")
EnderBonusOnLivingHurtByEntity.addBonus("fast:nature_magic_shard", NatureMagicShardEvent, 1)
registerItemTag("fast:nature_magic_shard", "fast:magic")

function NatureMagicShardEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (damagetype.includes('poison_cloud')) return
    let Damage = 5
    let time = 100
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    if (hasEntityEnderBonus(EventEntity, "fast:the_hero_staff")) {
    int *= 1.5;
    }
    let level = EventEntity.level
    let NatureSpellPower = EventEntity.getAttribute('irons_spellbooks:nature_spell_power').getValue();
    Damage += Math.floor(int / 7)
    Damage *= NatureSpellPower
    time *= NatureSpellPower
            let cloud = new $PoisonCloud(level);
            cloud.setOwner(EventEntity);
            cloud.setDuration(time);
            cloud.setDamage(Damage);
            cloud.moveTo(entity.position());
            level.addFreshEntity(cloud);
}