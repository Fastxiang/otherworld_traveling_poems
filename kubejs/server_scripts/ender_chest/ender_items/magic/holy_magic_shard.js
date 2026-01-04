// priority: 500

registerItemMaidBauble("fast:holy_magic_shard")
EnderBonusOnEntitySpawnByEntity.addBonus("fast:holy_magic_shard", HolyMagicShardEvent, 1)
registerItemTag("fast:holy_magic_shard", "fast:magic")

function HolyMagicShardEvent(handler, event) {
            let entity = event.entity
            if (typeof entity.getSummoner !== 'function') return
            let EventEntity = entity.getSummoner();
            let int = EventEntity.getAttribute(`fast:int`).getValue();
            let vit = EventEntity.getAttribute(`fast:vit`).getValue();
            let Hp = (vit + int) || 1
            entity.setAttributeBaseValue('minecraft:generic.max_health', Hp);
            entity.setHealth(entity.getMaxHealth());
}