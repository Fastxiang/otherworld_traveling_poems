
function LivingHurtByPartnerAndMaid(event) {
    let attacker = event.source.actual;
    if (!attacker) return;
    
    let victim = event.entity;
    
    let attackerOwner = getEntityOwner(attacker);
    let victimOwner = getEntityOwner(victim);
    
    if (attackerOwner && attackerOwner.isPlayer() &&
        victimOwner && victimOwner.isPlayer()) {
        event.setCanceled(true);
        return;
    }
    
    if (attackerOwner && attackerOwner.isPlayer() && victim.isPlayer()) {
        event.setCanceled(true);
        return;
    }
    
    if (attacker.isPlayer() && victimOwner && victimOwner.isPlayer()) {
        event.setCanceled(true);
        return;
    }
}

function LivingAttackRogueLikeMaid(event) {
         let maid = event.entity;
         if (!maid) return;
         if (maid.type != 'touhou_little_maid:maid') return;
         let MaidpersistentData = maid.persistentData;
         if (!MaidpersistentData.RogueLike) return
         event.setCanceled(true);
}

function LivingHurtByMaidAttack(event) {
    let maid = event.source.actual;
    if (maid.type != 'touhou_little_maid:maid') return;
    let Owner = maid.getOwner();
    if (!Owner) return;
    let PlayerPersistentData = Owner.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let MaidPersistentData = maid.persistentData;
    let damagetype = event.source.getType();
    let HeroStaffBaubleslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroStaff)
    
    if (HeroStaffBaubleslot >= 0) {
    if (damagetype.includes("mob")) {
    let MaidMagicAttack = "irons_spellbooks:magic_missile";
    let int = maid.getAttribute(`fast:int`).getValue();
    int *= 1.5
    let SpellLevel = 1;
    SpellLevel += Math.floor(int / 20)
    if (!maid.isCasting()) {
    MoboverLimitSpellCast(MaidMagicAttack, maid, SpellLevel);
    }
    event.setCanceled(true);
    }
    }
}

function LivingDamageByMaid(event) {
         let maid = event.source.actual;
         if (!maid) return;
         if (maid.type != 'touhou_little_maid:maid') return;
         let Owner = maid.getOwner();
         if (!Owner) return;
         let hurtentity = event.entity;
         let MaidItem = maid.getMainHandItem();
         let uuid = maid.uuid
         let damagetype = PlayerDamageType.get(uuid)
         let damageimmediate = event.source.immediate.type;
         let PlayerPersistentData = Owner.persistentData;
         let persistentData = PlayerPersistentData.enderBonus;
         DamageTypeMessage(Owner, persistentData, event.amount, damagetype)
         SpecialPropertyHolyLifeDrainEvent(event, Owner, maid, MaidItem, damagetype)
         FastServerDamageRenderEvent(event, Owner, hurtentity, event.amount, damagetype)
}

function LivingHurtByMaid(event) {
         let maid = event.source.actual;
         if (!maid) return;
         if (maid.type != 'touhou_little_maid:maid') return;
         let Owner = maid.getOwner();
         if (!Owner) return;
         let hurtentity = event.entity;
         let damagetype = event.source.getType();
         let Olddamagetype = event.source.getType();
         let uuid = maid.uuid
         let item = Owner.getMainHandItem();
         let MaidItem = maid.getMainHandItem();
         let damageimmediate = event.source.immediate.type;
         let PlayerPersistentData = Owner.persistentData;
         let persistentData = PlayerPersistentData.enderBonus;
         let MaidpersistentData = maid.persistentData;
         damagetype = SpecialPropertyOriginReverseFlowEvent(event, maid, MaidItem, damagetype)
         damagetype = SpecialPropertyGreedyCrystalEvent(event, Owner, maid, MaidItem, damagetype)
         PlayerDamageType.set(damagetype, uuid)
         
         let ItemMaidBaubleHeroSwordslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroSword)
         let ItemMaidBaubleHeroShieldslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroShield)
         let ItemMaidBaubleHeroBowslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroBow)
         let ItemMaidHeroStaffBaubleslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroStaff)
         
         let task = maid.getTask()
         let TaskUid = task.getUid()
         if (TaskUid === "maid_sword_soaring:sword_soaring") {
         if (damagetype.includes("mob")) {
         event.amount *= 0.25
         }
         }
     let MaidJusticeShield = false
     let ItemMaidBaubleJusticeShieldslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleJusticeShield)
     if (ItemMaidBaubleJusticeShieldslot >= 0) MaidJusticeShield = true
         
     if (ItemMaidBaubleHeroShieldslot >= 0 && !persistentData.HeroShieldDamage && !MaidJusticeShield) {
      event.amount = 1;
      return;
    } else if (persistentData.HeroShieldDamage) {
    persistentData.HeroShieldDamage = false;
         }
         
         if (ItemMaidBaubleHeroSwordslot >= 0) {
         HeroSwordEvent(event, Owner, maid, hurtentity, persistentData, Olddamagetype, PlayerPersistentData)
         }
         
         if (ItemMaidBaubleHeroBowslot >= 0) {
         HeroBowEvent(event, Owner, maid, persistentData, damagetype)
         }
         
         if (ItemMaidHeroStaffBaubleslot >= 0) {
         HeroStaffDamageEvent(event, Owner, maid, persistentData, damagetype)
         }
         
         FateGemAgilityEvent(event, maid, Owner, persistentData, damagetype)
         
         FallProtectBaubleEvent(event, Owner, maid, persistentData, MaidpersistentData, damagetype)
         
         AmmoDriveDamageEvent(event, maid, Owner, damagetype)
         
         SpecialPropertyMagicBookEvent(event, Owner, MaidItem)
         
         if (item && checkModifier(item, "tconstruct:conducting")) {
         PrimalFireEvent(event, Owner, maid, persistentData, damagetype)
         }
         
         BuleGemEvent(Owner, persistentData)
}

function MaidHurt(event){
         let maid = event.entity;
         if (!maid) return;
         if (maid.type != 'touhou_little_maid:maid') return;
         let Owner = maid.getOwner();
         if (!Owner) return;
         let PlayerPersistentData = Owner.persistentData;
         let persistentData = PlayerPersistentData.enderBonus;
         let MaidpersistentData = maid.persistentData;
         
         let ItemMaidBaubleHeroShieldslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroShield)
         let ItemMaidBaubleHeroSwordslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroSword)
         
         if (ItemMaidBaubleHeroShieldslot >= 0) {
         DefenseEvent(event, Owner, maid, persistentData)
         }
         
         if (ItemMaidBaubleHeroSwordslot >= 0) {
         SwordTechniqueDecisiveStrikeEvent(event, Owner, maid, persistentData, PlayerPersistentData)
         }
         if (maid.hasEffect('fast:oath_of_knight')) {
         MaidOathOfKnightEvent(event, Owner, maid)
         }
}

function BuleGemEvent(player, persistentData) {
    if (!persistentData.BuleGem) return;
    player.heal(1)
}

function FallProtectBaubleEvent(event, player, EventEntity, persistentData, MaidpersistentData, damagetype) {
    if (!persistentData.FallProtectBauble) return;
    if (!damagetype.includes('ender')) return;
    let Foodstaturation = MaidpersistentData.Foodstaturation * 1.5
    if (Foodstaturation) {
    event.amount += Foodstaturation
    }
}

function AmmoDriveDamageEvent(event, maid, Owner, damagetype) {
    if (!Owner.hasEffect('fast:full_throttle')) return
    let FullThrottle = Owner.getEffect('fast:full_throttle');
    let EffectLevel = FullThrottle.getAmplifier();
    EffectLevel += 1
    if (damagetype.includes('tacz.bullet')) {
    event.amount *= 1 + EffectLevel * 0.01
    } else {
    event.amount *= 1 + EffectLevel * 0.004
    }
}

function MaidOathOfKnightEvent(event, Owner, maid) {
    let entity = event.source.actual;
    if (!entity || !entity.isLiving()) return;
    let Damage = event.amount
    event.amount = 0
    AttackEntity(entity, Owner, "fast:share", Damage);
}

function FateGemAgilityEvent(event, maid, Owner, persistentData, damagetype) {
    if (!persistentData.FateGemAgility) return;
    if (!damagetype.includes('tacz.bullet')) return
    let agi = Owner.getAttribute(`fast:agi`).getValue();
    event.amount += agi / 20
}