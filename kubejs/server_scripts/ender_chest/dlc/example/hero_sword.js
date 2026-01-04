// priority: 500

// 注册属性和描述在startup_scripts里

// 为物品注册为女仆饰品让女仆可以装备
registerItemMaidBauble("fast:the_hero_sword")

// 为该物品注册伤害事件，一般而言，修改伤害相关的都在这个事件。 注册末影饰品事件的三个参数，分别为：物品id，触发的函数，优先级（越大越优先）
EnderBonusOnLivingHurtByEntity.addBonus("fast:the_hero_sword", HeroSwordEvent, 2)

// 受到伤害事件
EnderBonusOnLivingHurtByOthers.addBonus("fast:the_hero_sword", HeroSwordHurtEvent, 1)

// tick事件
EnderBonusOnEntityTick.addBonus("fast:the_hero_sword", HeroSwordTickEvent, 1)

// 更新末影箱事件，第一个为存在末影箱时触发，第二个为没有这个物品时触发
EnderBonusOnUpdate.addCheckBonus("fast:the_hero_sword", HeroSwordUpdateEvent, HeroSwordRemoveEvent)

// 自定义数据事件，所有情况都会发生，属于历遍末影箱期间的事件，用于检测某些nbt物品或者特殊条件物品
registerEnderBonusCustomDataModifier(HeroSwordCustomDataEvent)

// 怒气值
let EntityAngerValueData = {}

function HeroSwordCustomDataEvent(EventEntity, item, slot, entry, customData) {
    let itemId = item.id
    let uuid = EventEntity.uuid
    if (!customData.SwordValue) customData.SwordValue = 0
    if (itemId.includes('sword')) {
    customData.SwordValue += 1
    }
    return customData
    // 这里的customData为注册属性时的customData，同时也会存到全局，用getEntityCustomData(实体, data名字：比如这个函数就是"SwordValue")也能获得这个data，下面的事件用用到这个函数
}

function HeroSwordUpdateEvent(handler, EventEntity) {
        let uuid = EventEntity.uuid
        if (!EntityAngerValueData[uuid]) EntityAngerValueData[uuid] = {}
        let AngerValueData = EntityAngerValueData[uuid]
        if (!AngerValueData.Value) {
        AngerValueData.Open = 0;
        AngerValueData.Value = 0;
        }
        AngerValue(EventEntity, AngerValueData);
}

function HeroSwordRemoveEvent(handler, EventEntity) {
        let uuid = EventEntity.uuid
        EntityAngerValueData[uuid] = {};
        let AngerValueData = EntityAngerValueData[uuid]
        AngerValue(EventEntity, AngerValueData);
}

function HeroSwordEvent(handler, event) {
        let EventEntity = event.source.actual;
        let entity = event.entity
        let uuid = EventEntity.uuid
        let server = EventEntity.server
        let AngerValueData = EntityAngerValueData[uuid]
        let data = handler.customData
        let damagetype = data.oldDamageType
        let PlayerTags = EventEntity.getTags();
        let SwordValue = getEntityCustomData(EventEntity, "SwordValue")
        if (!isDamageTypePhysical(damagetype, EventEntity)) return;
        let attacktime = entity.invulnerableTime;
        // let DamageUp = (AngerValueData.Value * 0.01);
        // if (DamageUp > 0) {
        // event.amount *= 0.5 + DamageUp;
        // } else {
        // event.amount *= 0.5;
        // }
        let Damageneed = event.amount;
        server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(EventEntity, entity, "fast:holy_magic", Damageneed)
        }
       });
        let Value = 2;
        if (SwordValue > 0) {
        Value += SwordValue
        }
        if (PlayerHasTag(EventEntity, PlayerTags, "str_talent2")) {
        Value += 15
        }
        let CardData = getEntityCustomData(EventEntity, "TheCard4")
        if (CardData) {
        Value += CardData.count2
        }
        AngerValueData.Value += Value;
        AngerValueData.Open = 5;
        AngerValueMax(AngerValueData);
        AngerValue(EventEntity, AngerValueData);
}

function HeroSwordHurtEvent(handler, event) {
        let EventEntity = event.entity
        let uuid = EventEntity.uuid
        let server = EventEntity.server
        let AngerValueData = EntityAngerValueData[uuid]
        let data = handler.customData
        let damagetype = data.oldDamageType
        let PlayerTags = EventEntity.getTags();
        let SwordValue = getEntityCustomData(EventEntity, "SwordValue")
        let Value = 1;
        if (SwordValue) {
        Value += Math.floor(SwordValue / 2);
        }
        let CardData = getEntityCustomData(EventEntity, "TheCard4")
        if (CardData) {
        Value += Math.floor(CardData.count2 / 2)
        }
        AngerValueData.Value += Value;
        AngerValueData.Open = 5;
        AngerValueMax(AngerValueData);
        AngerValue(EventEntity, AngerValueData);
    if (!AngerValueData.DecisiveStrikeTime) return;
    let entity = event.source.actual;
    if (!entity || !entity.isLiving()) return;
    event.amount = 0;
    let Damage = EventEntity.getAttribute('minecraft:generic.attack_damage').getValue();
    let powerModifier = EventEntity.getAttribute('fast:physical_mastery').getValue();
    Damage = Damage * powerModifier;
    entity.attack(EventEntity.damageSources().playerAttack(EventEntity), Damage);
    let { x, y, z, level } = EventEntity
    if (EventEntity.hasEffect('fast:counter')) {
    PlayersPlaySound(level, x, y, z, 50, 'kubejs:sword1')
    let CounterEffect = EventEntity.getEffect('fast:counter');
    let EffectLevel = CounterEffect.getAmplifier();
    if (EffectLevel >= 4) return;
    EventEntity.removeEffect('fast:counter');
    EventEntity.potionEffects.add('fast:counter', CounterEffect.getDuration(), EffectLevel + 1, false, false);
    } else {
    PlayersPlaySound(level, x, y, z, 50, 'kubejs:sword1')
    EventEntity.potionEffects.add('fast:counter', 1200, 0, false, false);
    }
}

function HeroSwordTickEvent(handler, event) {
    let EventEntity = event.entity
    if (!EventEntity) return
    let age = EventEntity.age
    if (age % 40 !== 0) return
    let uuid = EventEntity.uuid
    let AngerValueData = EntityAngerValueData[uuid]
    if (!AngerValueData.Value) return
    if (AngerValueData.Open >= 1) {
    AngerValueData.Open -= 1;
    AngerValue(EventEntity, AngerValueData);
    } else {
    AngerValueData.Value -= 20;
    AngerValueMax(AngerValueData);
    AngerValue(EventEntity, AngerValueData);
    }
}
