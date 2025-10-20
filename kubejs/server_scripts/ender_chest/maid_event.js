// priority: 1000

let ItemMaidBaubleHeroBow = MaidRegister.BAUBLE.bind("fast:the_hero_bow")
let ItemMaidBaubleHeroStaff = MaidRegister.BAUBLE.bind("fast:the_hero_staff")
let ItemMaidBaubleHeroShield = MaidRegister.BAUBLE.bind("fast:the_hero_shield")
let ItemMaidBaubleHeroSword = MaidRegister.BAUBLE.bind("fast:the_hero_sword")
let ItemMaidBaubleMaidFoodAutoSellToken = MaidRegister.BAUBLE.bind("fast:maid_food_auto_sell_token")
let ItemMaidBaubleSprllStorageSphere = MaidRegister.BAUBLE.bind("fast:spell_storage_sphere")
let ItemMaidBaubleStrGem = MaidRegister.BAUBLE.bind("fast:str_gem")
let ItemMaidBaubleAgiGem = MaidRegister.BAUBLE.bind("fast:agi_gem")
let ItemMaidBaubleIntGem = MaidRegister.BAUBLE.bind("fast:int_gem")
let ItemMaidBaubleVitGem = MaidRegister.BAUBLE.bind("fast:vit_gem")
let ItemMaidBaubleJusticeShield = MaidRegister.BAUBLE.bind("fast:justice_shield")
let ItemMaidBaubleHeroFishingRod = MaidRegister.BAUBLE.bind("fast:the_hero_fishing_rod")


MaidRegister.TASK
    .rangedAttackTask("fast:bow", "fast:the_hero_bow")
    .isWeapon((maid, stack) => {
    return ItemisBowsOfCrossbows(stack)
    })
    .chargeDurationTick(10)
    .walkSpeed(0.1)
    .searchRadius(48)
    .projectileRange(20)
    .enable(maid => maid.favorabilityManager.getLevel() >= 1)
    .addEnableConditionDesc("need_level_1", maid => maid.favorabilityManager.getLevel() >= 1)
    .performRangedAttack((maid, target, distanceFactor) => {
    let x = target.getX() - maid.getX();
    let y = target.getEyeY() - maid.getEyeY();
    let z = target.getZ() - maid.getZ();
    let Attack = maid.getAttribute('minecraft:generic.attack_damage')
    let multiplier = 2
    if (Attack) {
    multiplier = Math.max((Attack.getValue() / 2), 2)
    }
    let ArrowEntity = $ProjectileUtil.getMobArrow(maid, Item.of("minecraft:arrow"), distanceFactor)
    ArrowEntity.setNoGravity(true)
    ArrowEntity.shoot(x, y * 0.8, z, 1.5, 0)
    ArrowEntity.setBaseDamage(ArrowEntity.getBaseDamage() * multiplier)
    ArrowEntity.spawn()
    maid.mainHandItem.hurtAndBreak(1, maid, m => {});
    });
    
MaidRegister.TASK
    .rangedAttackTask("fast:shield", "fast:the_hero_shield")
    .isWeapon((maid, stack) => {
    return true
    })
    .chargeDurationTick(60)
    .walkSpeed(0.3)
    .searchRadius(48)
    .projectileRange(10)
    .addBrain(1, (task, maid) => new $MaidUseShieldTask())
    .performRangedAttack((maid, target, distanceFactor) => {
    let Owner = maid.getOwner();
    if (!Owner) return 
    let PlayerPersistentData = Owner.persistentData;
    if (!PlayerPersistentData) return
    let persistentData = PlayerPersistentData.enderBonus;
    let MaidPersistentData = maid.persistentData;
    if (!MaidPersistentData) return
   let item = maid.getMainHandItem();
   if (item) {
   if (hasSpecialProperty(item, "collectorsreap:lime_popsicle")) {
    ShieldStanceItemEvent(Owner, maid, MaidPersistentData)
    }
    }
    });
    
MaidRegister.TASK
    .rangedAttackTask("fast:magic", "fast:the_hero_staff")
    .isWeapon((maid, stack) => {
    return true
    })
    .chargeDurationTick(10)
    .walkSpeed(0.1)
    .searchRadius(48)
    .projectileRange(20)
    .performRangedAttack((maid, target, distanceFactor) => {
    let Owner = maid.getOwner();
    if (!Owner) return 
    let PlayerPersistentData = Owner.persistentData;
    if (!PlayerPersistentData) return
    let persistentData = PlayerPersistentData.enderBonus;
    let MaidPersistentData = maid.persistentData;
    if (!MaidPersistentData) return
    let MaidMagicAttack = "irons_spellbooks:magic_missile";
    let int = maid.getAttribute(`fast:int`).getValue();
    let HeroStaffBaubleslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroStaff)
    let SprllStorageSphereslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleSprllStorageSphere)
    if (HeroStaffBaubleslot >= 0) {
    int *= 1.5
    }
    let SpellLevel = 1;
    SpellLevel += Math.floor(int / 20)
    if (!maid.isCasting()) {
    if (SprllStorageSphereslot >= 0) {
    let SprllStorageSphere = maid.getMaidBauble().getStackInSlot(SprllStorageSphereslot)
    let nbt = SprllStorageSphere.nbt
    if (nbt) {
    let MagicData = nbt.MagicData
    if (MagicData) {
    let MagicList = MagicData.magic
    let thisMagic = MagicList[MagicData.thisAttack]
    if (!thisMagic) {
    thisMagic = MagicList[0]
    MagicData.thisAttack = 0
    if (!thisMagic) {
    thisMagic = "irons_spellbooks:magic_missile"
    }
    }
    MaidMagicAttack = thisMagic
    MagicData.thisAttack += 1
    }
    }
    }
    MoboverLimitSpellCast(MaidMagicAttack, maid, SpellLevel);
    }
    });
    
MaidRegister.TASK.walkToLivingEntityTask("fast:support", "fast:compassionate_heart")
    .setCloseEnoughDist(6)
    .setStartSearchPredicate(maid => true)
    .setEntityPredicate(
        (maid, entity) => {
    if (!entity.isLiving() || !entity.isAlive()) return false
    let Owner = getEntityOwner(entity)
    let Partner = getEntityPartner(entity)
    if ((Owner && Owner.isPlayer()) || (Partner && Partner.isPlayer()) || entity.isPlayer()) {
    if (typeof entity.getHealth !== 'function') return false
    let EntityHp = entity.getHealth();
    let EntityMaxHp = entity.getAttribute('minecraft:generic.max_health').getValue();
    let ThisHpHave = EntityHp / EntityMaxHp
    if (ThisHpHave <= 0.7) {
    return true
    }
    }
    return false
    })
    .setArriveAction((maid, entity) => {
    if (!maid.isCasting()) {
    let int = maid.getAttribute(`fast:int`).getValue();
    let HeroStaffBaubleslot = MaidItemsUtil.getBaubleSlotInMaid(maid, ItemMaidBaubleHeroStaff)
    if (HeroStaffBaubleslot >= 0) {
    int *= 1.5
    }
    let vit = maid.getAttribute(`fast:vit`).getValue();
    let SpellLevel = 1
    SpellLevel += Math.floor((int + vit) / 30)
    maid.getBrain().setMemory($MemoryModuleType.ATTACK_TARGET, entity);
    MoboverLimitSpellCast("irons_spellbooks:blessing_of_life", maid, SpellLevel);
    }
    });
    
MaidRegister.TASK
    .baseTask("fast:sales_assistant", "fast:maid_food_auto_sell_token")