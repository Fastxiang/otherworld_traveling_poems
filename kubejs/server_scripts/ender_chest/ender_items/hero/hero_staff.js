// priority: 500

registerItemMaidBauble("fast:the_hero_staff")
EnderBonusOnLivingHurtByEntity.addBonus("fast:the_hero_staff", HeroStaffDamageEvent, 0)
EnderBonusOnLivingAttackByEntity.addBonus("fast:the_hero_staff", HeroStaffEvent, 1)
registerItemTag("fast:the_hero_staff", "fast:magic")

function HeroStaffEvent(handler, event) {
    let EventEntity = event.source.actual;
    let uuid = EventEntity.uuid;
    let data = handler.customData
    let damagetype = data.oldDamageType
    if (hasEntityEnderBonus(EventEntity, "fast:justice_staff")) return
    if (!isDamageTypePhysical(damagetype, EventEntity)) return
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    let str = EventEntity.getAttribute(`fast:str`).getValue();
    int *= 1.5;
    let MagicLevel = 1
    let spellId = "irons_spellbooks:magic_missile"
    if (hasEntityEnderBonus(EventEntity, "fast:blood_magic_shard") && hasEntityEnderBonus(EventEntity, "fast:the_hero_sword")) {
    spellId = "irons_spellbooks:blood_slash"
    MagicLevel += Math.floor((int + str) / 40)
    } else {
    MagicLevel += Math.floor(int / 20)
    }
    
    if (getPlayerTagsHasTag(EventEntity, "int_talent4")) {
    let nbt = getEntityEnderBonusNbt(EventEntity, "irons_spellbooks:scroll")
            if (nbt) {
        let NbtSpells = nbt?.ISB_Spells?.data;
        if (NbtSpells && Array.isArray(NbtSpells)) {
            NbtSpells.forEach((NbtSpell) => {
                let NbtSpellId = NbtSpell.id;
                spellId = NbtSpellId;
            })
            }
            }
    }
    
    if (EventEntity.isPlayer()) {
    let Cast = overLimitSpellCast(spellId, MagicLevel, EventEntity, false)
    } else {
    if (!EventEntity.isCasting()) {
    MoboverLimitSpellCast(spellId, EventEntity, MagicLevel);
    }
    }
    event.setCanceled(true);
}

function HeroStaffDamageEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (!damagetype.includes("ender")) return;
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    let extraDamage = int * 1.5;
    
    let maxTotal = 300;
    let allowedIncrease = maxTotal - event.amount;
    
    let NotAllowedIncrease = false
    
    if (hasEntityEnderBonus(EventEntity, "fast:limit_break_staff") && hasEntityEnderBonus(EventEntity, "fast:ender_necklace")) {
    let Data = EnderNecklaceXYZ[uuid];
    if (Data.distance) {
    let distance = Data.distance
    if (distance >= 22) {
    NotAllowedIncrease = true
    }
    }
    }

    if (NotAllowedIncrease) {
    handler.addExtraDamage(extraDamage)
    } else if (allowedIncrease > 0) {
    handler.addExtraDamage(Math.min(extraDamage, allowedIncrease))
    }
}