// priority: 500

registerItemMaidBauble("fast:sword_soul")
EnderBonusOnLivingHurtByEntity.addBonus("fast:sword_soul", SwordSoulEvent, 1)
EnderBonusOnUpdate.addCheckBonus("fast:sword_soul", SwordSoulUpdateEvent, SwordSoulRemoveEvent)

function SwordSoulUpdateEvent(handler, EventEntity) {
    let uuid = EventEntity.uuid
    let level = EventEntity.level
    let count = 1
    let SwordSoulCount = getEntityEnderBonusCount(EventEntity, "SwordSoulCount");
    if (SwordSoulCount > 0) {
    count += SwordSoulCount
    }
    let item = getEntityEnderBonusItem(EventEntity, "fast:sword_soul")
    let nbt = item.orCreateTag;
    let swordNBT = nbt.SwordSpirit;
    if (!swordNBT || !swordNBT.item) {
        swordNBT = { item: "minecraft:wooden_sword", count: 1, nbt: {} };
    }
    let swordItemStack = Item.of(swordNBT.item, swordNBT.count, swordNBT.nbt);
        $SpiritSwordEntity.clearSpiritSwords(EventEntity)
    for (let j = 0; j < count; j++) {
        let sword = spawnSpiritSwordEntity(level, EventEntity, 0.7, 40, 10, swordItemStack)
        
        if (hasEntityEnderBonus(EventEntity, "fast:shadow_chaser")) {
            sword.setMaxTrackingTime(20);
            sword.setAutoTick(20, true, (s, owner) => {
                if (!s.canLaunch()) return
                if (!owner) return
                if (!s) return
                let pos = owner.position()
                let entity = getNearestEntity(pos, 10, level)
                let swordDamage = 20
                let EventEntityPower = owner.getAttribute('irons_spellbooks:spell_power').getValue();
                let HolySpellPower = owner.getAttribute('irons_spellbooks:holy_spell_power').getValue();
                swordDamage *= EventEntityPower
                swordDamage *= HolySpellPower
                s.launchAt(entity, swordDamage, NewDamageSource("irons_spellbooks:holy_magic", owner))
            })
        }

        level.addFreshEntity(sword);
    }
}

function SwordSoulRemoveEvent(handler, EventEntity) {
    let uuid = EventEntity.uuid
    $SpiritSwordEntity.clearSpiritSwords(EventEntity)
}

let SpiritSurgeValue = {}

function SwordSoulEvent(handler, event) {
    let EventEntity = event.source.actual;
    let data = handler.customData
    let damagetype = data.damageType
    let SwordSoulCount = getEntityEnderBonusCount(EventEntity, "SwordSoulCount");
    if (SwordSoulCount > 0) {
    handler.addIndependentMultiplier(Math.pow(0.8, SwordSoulCount) - 1)
    }
    if (hasEntityEnderBonus(EventEntity, "fast:riftsong_edge")) {
    if (!isDamageTypePhysical(damagetype, EventEntity)) return
    }
    if (hasEntityEnderBonus(EventEntity, "fast:shadow_chaser")) return
    let entity = event.entity
    let uuid = EventEntity.uuid
    let swords = $SpiritSwordEntity.getSpiritSwordsOfOwner(EventEntity);
    let level = EventEntity.level;
    let item = "minecraft:wooden_sword"
    let canAttack = true
    
    swords.forEach(sword => {
        if (!sword.canLaunch()) {
        canAttack = false
        return;
        }
        
        item = sword.getItemStack();
        let uuid = sword.uuid;
        
        if (hasEntityEnderBonus(EventEntity, "fast:spirit_surge")) {
            if (!SpiritSurgeValue[uuid]) SpiritSurgeValue[uuid] = 0;
            if (SpiritSurgeValue[uuid] >= 20) {
                SpiritSurgeValue[uuid] = 0;
                sword.startComboAttack(5, 5);
            } else {
                SpiritSurgeValue[uuid] += 1;
            }
        }
        
        let SowrdDamage = sword.getDamage();
        let str = EventEntity.getAttribute(`fast:str`).getValue();
        let agi = EventEntity.getAttribute(`fast:agi`).getValue();
        SowrdDamage += str;
        SowrdDamage += agi;
        if (hasEntityEnderBonus(EventEntity, "fast:realm_splitter")) {
            let vit = EventEntity.getAttribute(`fast:vit`).getValue();
            SowrdDamage += vit;
        }
        
        let thisDamageSource = null;
        if (hasEntityEnderBonus(EventEntity, "fast:demon_caller")) {
            thisDamageSource = "irons_spellbooks:evocation_magic";
        }
        
        if (thisDamageSource) {
            sword.launchAt(entity, SowrdDamage, NewDamageSource(thisDamageSource, EventEntity));
        } else {
            sword.launchAt(entity, SowrdDamage);
        }
    });
    
    if (!canAttack) return
        
        if (hasEntityEnderBonus(EventEntity, "fast:riftsong_edge")) {
        let thisDamage = 10
             let str = EventEntity.getAttribute(`fast:str`).getValue();
             let agi = EventEntity.getAttribute(`fast:agi`).getValue();
            spawnFlySwordEntity(level, EventEntity, entity, 10, 0.7, 100, (thisDamage + ((str + agi) / 2)), EventEntity.damageSources().mobAttack(EventEntity), item);
            let BloodSpellPower = EventEntity.getAttribute('irons_spellbooks:blood_spell_power').getValue();
            spawnFlySwordEntity(level, EventEntity, entity, 15, 0.7, 100, (thisDamage + (50 * (BloodSpellPower - 1))), NewDamageSource("fast:blood_magic", EventEntity), item);
            let EnderSpellPower = EventEntity.getAttribute('irons_spellbooks:ender_spell_power').getValue();
            spawnFlySwordEntity(level, EventEntity, entity, 20, 0.7, 100, (thisDamage + (50 * (EnderSpellPower - 1))), NewDamageSource("fast:ender_magic", EventEntity), item);
        }
    
}