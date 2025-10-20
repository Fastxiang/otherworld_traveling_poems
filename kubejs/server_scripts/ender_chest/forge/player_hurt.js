// priority: 700

function LivingHurtByOthers(event) {
     let player = event.entity;
     if (!player.isPlayer()) return;
     let EventEntity = player;
     let damagetype = event.source.getType();
     let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    
    GodspeedWieldEvent(event, persistentData);
    
     DefenseEvent(event, player, EventEntity, persistentData);
     
     JudgementEvent(player, damagetype);
     
}

function LivingDamageByOthers(event) {
     let player = event.entity;
     if (!player.isPlayer()) return;
     let EventEntity = player;
     let PlayerPersistentData = player.persistentData;
     let damagetype = event.source.getType();
     let uuid = player.uuid
     let AngerValueData = PlayerAngerValueData[uuid]
     let persistentData = PlayerPersistentData.enderBonus;
     
     FireMagicShardEvent(event, player, persistentData)
     
     MagicShieldEvent(event, player, EventEntity, persistentData);
     
     BloodOathEvent(event, player, persistentData, damagetype)
     BloodVitalityEvent(event, player, persistentData)
     BloodPactHurtEvent(event, player, persistentData)
     BloodBrandEvent(event, player, persistentData)
     BloodTallyEvent(event, player, persistentData)
     
     let EmperorPresentData = persistentData.theEmperorPresentData
     SwordTechniqueDecisiveStrikeEvent(event, player, EventEntity, persistentData, PlayerPersistentData, AngerValueData)
}

function DefenseEvent(event, player, EventEntity, persistentData) {
     let Defense = EventEntity.getAttribute('fast:defense').getValue();
     let reductionFactor = 0;

if (Defense <= 200) {
    reductionFactor = Defense / 10 / 100;
} else if (Defense <= 1000) {
    let baseReduction = 200 / 10 / 100;
    let extraReduction = (Defense - 200) / 30 / 100;
    reductionFactor = baseReduction + extraReduction;
} else {
    let baseReduction1 = 200 / 10 / 100;
    let baseReduction2 = (1000 - 200) / 30 / 100;
    let extraReduction = (Defense - 1000) / 100 / 100;
    reductionFactor = baseReduction1 + baseReduction2 + extraReduction;
}

    let CloseDamage = false
    if (EventEntity.hasEffect('fast:offensive_stance')) CloseDamage = true
    if (EventEntity.isPlayer() && persistentData.FateGemVitality) CloseDamage = true
    if (!CloseDamage) {
     event.amount = event.amount * (1 - Math.min(reductionFactor, 0.65));
     }
     if (EventEntity.isPlayer() && !persistentData.HeroShield) return;
     let MaidJusticeShield = false
     if (EventEntity.type === "touhou_little_maid:maid") {
     let ItemMaidBaubleHeroShieldslot = MaidItemsUtil.getBaubleSlotInMaid(EventEntity, ItemMaidBaubleHeroShield)
     let ItemMaidBaubleJusticeShieldslot = MaidItemsUtil.getBaubleSlotInMaid(EventEntity, ItemMaidBaubleJusticeShield)
     if (ItemMaidBaubleHeroShieldslot < 0) return
     if (ItemMaidBaubleJusticeShieldslot >= 0) MaidJusticeShield = true
     }
     let entity = event.source.actual;
     if (!entity || !entity.isLiving()) return;
     persistentData.HeroShieldDamage = true;
     if (entity.isAlive()) {
     let AttackDamage = 10
     AttackDamage += Defense / 2
     if (persistentData.JusticeShield || MaidJusticeShield) {
     AttackDamage *= 0.3
     }
     AttackEntity(EventEntity, entity, "fast:ender_magic", AttackDamage);
     }
}

function JudgementEvent(player, damagetype) {
     if(damagetype === "lightningBolt"){
     let currentHealth = player.getHealth();
     let maxHealth = player.getAttribute('minecraft:generic.max_health').getValue();
     if(currentHealth <= (maxHealth * 0.2)){
     player.give(Item.of('tarotcards:judgement',))
     }
     }
}

// magic_shield
function MagicShieldEvent(event, player, EventEntity, persistentData) {
    if (!persistentData.MagicShield) return;

    // 获取事件中的伤害值
    let NeedShieldDamage = event.amount;

    // 获取实体的最大生命值和当前生命值
    let MaxHp = EventEntity.getAttribute('minecraft:generic.max_health').getValue();
    let hp = EventEntity.getHealth();
    let NeedHeal = MaxHp - hp;

    // 获取玩家的魔法数据和当前mana值
    const magicData = $MagicData.getPlayerMagicData(player);
    let mana = magicData.getMana();

    // 计算每60点mana抵消1点伤害，取整数部分
    let manaShield = Math.floor(mana / 60);

    // 实际抵消的伤害不能超过事件中的伤害值
    let actualShield = Math.min(manaShield, NeedShieldDamage);

    // 扣除对应的mana值
    magicData.setMana(mana - (actualShield * 60));
    $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);

    // 减少事件中的伤害值
    event.amount -= actualShield;
    
    let NewMana = magicData.getMana();
    if (event.amount === 0 && NewMana >= 60 && NeedHeal) {
    let manaShieldHp = Math.floor(mana / 60);
    let actualShieldHp = Math.min(manaShieldHp, NeedHeal);
    magicData.setMana(NewMana - (actualShieldHp * 60));
    $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
    player.heal(actualShieldHp)
    }
}


function SwordTechniqueDecisiveStrikeEvent(event, player, EventEntity, persistentData, PlayerPersistentData, AngerValueData) {
    if (!persistentData.HeroSword) return;
        let Value = 1;
        if (persistentData.HeroSwordAngerValue) {
        Value += Math.floor(persistentData.HeroSwordAngerValue / 2);
        }
        if (persistentData.TheCard4) {
        let thisData = persistentData.TheCard4
        Value += Math.floor(thisData / 2)
        }
        AngerValueData.Value += Value;
        AngerValueData.Open = 5;
        AngerValueMax(AngerValueData);
        AngerValue(player, persistentData, AngerValueData);
    if (!AngerValueData.DecisiveStrikeTime) return;
    let entity = event.source.actual;
    if (!entity || !entity.isLiving()) return;
    event.amount = 0;
    let Damage = EventEntity.getAttribute('minecraft:generic.attack_damage').getValue();
    let powerModifier = player.getAttribute('fast:physical_mastery').getValue();
    Damage = Damage * powerModifier;
    entity.attack(player.damageSources().playerAttack(player), Damage);
    let { x, y, z, level } = player
    if (EventEntity.hasEffect('fast:counter')) {
    //player.playNotifySound("kubejs:sword1", "players", 10, 1);
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

function GodspeedWieldEvent(event, persistentData) {
    if (!persistentData.GodspeedWield) return;
    event.amount *= 2;
    if (Math.random() < 0.2) {
    event.amount = 0
    }
}

function FireMagicShardEvent(event, player, persistentData) {
    if (!persistentData.FireMagicShard) return;
    let Damage = event.amount
    if (Damage >= 5 && player.hasEffect('fast:blazing_effect')) {
    let fireEffect = player.getEffect('fast:blazing_effect');
    player.removeEffect('fast:blazing_effect');
    player.potionEffects.add('fast:blazing_effect', fireEffect.getDuration() + 60, fireEffect.getAmplifier(), false, false)
    }
}

function BloodPactHurtEvent(event, player, persistentData) {
    if (!persistentData.BloodPact) return;
    let Damage = event.amount
    if (Damage >= 3) {
    if (!player.hasEffect('fast:blood_str')) {
    player.potionEffects.add('fast:blood_str', 600, 0, false, false)
    } else {
    let thisEffect = player.getEffect('fast:blood_str');
    let thisLevel = thisEffect.getAmplifier()
    player.removeEffect('fast:blood_str');
    player.potionEffects.add('fast:blood_str', 600, Math.min(thisLevel + 1, 49), false, false)
    }
    if (!player.hasEffect('fast:blood_int')) {
    player.potionEffects.add('fast:blood_int', 600, 0, false, false)
    } else {
    let thisEffect = player.getEffect('fast:blood_int');
    let thisLevel = thisEffect.getAmplifier()
    player.removeEffect('fast:blood_int');
    player.potionEffects.add('fast:blood_int', 600, Math.min(thisLevel + 1, 49), false, false)
    }
    }
}

function BloodBrandEvent(event, player, persistentData) {
    if (!persistentData.BloodBrand) return;
    let Damage = event.amount
    if (Damage >= 5) {
    let uuid = player.uuid
    let Data = PlayerBloodValueData[uuid]
    if (!Data.Value) Data.Value = 0
    Data.Value += 1
    BloodBrandAttackEvent(player, Data, persistentData)
    }
}

function BloodTallyEvent(event, player, persistentData) {
    if (!persistentData.BloodTally) return;
    let Damage = event.amount
    if (Damage >= 2) {
    let uuid = player.uuid
    let Data = PlayerBloodValueData[uuid]
    if (!Data.Value) Data.Value = 0
    Data.Value += 1
    BloodBrandAttackEvent(player, Data, persistentData)
    }
}

function BloodBrandAttackEvent(player, Data, persistentData) {
    if (!persistentData.BloodBrand) return;
    if (Data.Value >= 10) {
    let level = player.level
    Data.Value = 0
    let pos = player.position()
    let entitylist = getLivingWithinRadius(level, pos, 5);
    let str = player.getAttribute(`fast:str`).getValue();
    let int = player.getAttribute(`fast:int`).getValue();
    if (persistentData.HeroStaff) {
    int *= 1.5;
    }
    let thispowerModifier = player.getAttribute('irons_spellbooks:blood_spell_power').getValue();
    let Damage = (str + int) * thispowerModifier
    entitylist.forEach(entity => {
        let Owner = getEntityOwner(entity);
        if (Owner && Owner.isPlayer()) return;
        if (entity.isPlayer()) return;
        let Partner = getEntityPartner(entity)
        if (Partner && Partner.isPlayer()) return
        let EntityPos = entity.position()
        let spawn = EntityPos.add(0, entity.getEyeHeight() / 2 + 5, 0)
        let direction = EntityPos.subtract(spawn).normalize();
        let needle = level.createEntity('irons_spellbooks:blood_needle');
    needle.setOwner(player)
    needle.moveTo(spawn)
    needle.shoot(direction)
    needle.setDamage(Damage)
    needle.spawn()
    })
    }
}

function BloodVitalityEvent(event, player, persistentData) {
    if (!persistentData.BloodVitality) return;
    let Damage = event.amount
    if (Damage >= 2) {
    player.heal(1)
    }
}

function BloodOathEvent(event, player, persistentData, damagetype) {
    if (!persistentData.BloodOath) return;
    if (!damagetype.includes('blood')) return
    let Damage = event.amount
    if (Damage <= 5) {
    event.amount = 5
    }
}