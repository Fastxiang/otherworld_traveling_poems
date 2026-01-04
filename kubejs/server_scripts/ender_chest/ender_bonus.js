// priority: 2000

const EntityEnderBonus = {}

function EnderBonusHandler() {
    this.event = {}
    this.eventPriority = {}
    this.specialPropertyEvent = {}
    this.specialPropertyEventPriority = {}
    this.checkEvents = {}
    this.customData = {}
    this.cancelled = false
    this.init = (args) => {}
    this.defer = (args) => {}
    return this
}

let EntityEnderBonusCustomData = {}

function registerItemMaidBauble(itemId) {
    MaidRegister.BAUBLE.bind(itemId)
}

EnderBonusHandler.prototype = {
    addBonus: function (bonusKey, event, priority) {
        this.event[bonusKey] = event
        this.eventPriority[bonusKey] = priority
        return this
    },
    addSpecialProperty: function (bonusKey, event, priority) {
        this.specialPropertyEvent[bonusKey] = event
        this.specialPropertyEventPriority[bonusKey] = priority
        return this
    },
    addCheckBonus: function (bonusKey, onValid, onInvalid) {
        this.checkEvents[bonusKey] = { onValid: onValid, onInvalid: onInvalid }
        return this
    },
    cancel: function () {
        this.cancelled = true
    },
    addDamageMultiplier: function (DamageMultiplier) {
        let data = this.customData
        data.additiveBonus += DamageMultiplier
        return this
    },
    addIndependentMultiplier: function (Multiplier) {
        let data = this.customData
        data.independentMultiplier *= (1 + Multiplier)
        return this
    },
    addExtraDamage: function (ExtraDamage) {
        let data = this.customData
        data.extraDamage += ExtraDamage
        return this
    },
    setDamageType: function (DamageType) {
        let data = this.customData
        data.damageType = DamageType
        return this
    },
    initDamageType: function (DamageType) {
    let data = this.customData
    data.additiveBonus = 0
    data.independentMultiplier = 1
    data.extraDamage = 0
    data.damageType = DamageType
    data.oldDamageType = DamageType
    return this
    },
    setInit: function (initFunc) {
        this.init = initFunc
        return this
    },
    setDefer: function (deferFunc) {
        this.defer = deferFunc
        return this
    },
    runKey: function (key, args) {
        args.unshift(this)
        
        this.cancelled = false
        
        this.init.apply(null, args)
        
        let fn = this.event[key]
        if (!fn) return
        if (!this.cancelled) {
        fn.apply(null, args)
        }
    
        this.defer.apply(null, args)
        return
    },
    run: function (keys, args, entity) {
        args.unshift(this)
        
        this.cancelled = false
        
        this.init.apply(null, args)
        
        let list = []
        
        let item = entity.getMainHandItem();
        
        if (item) {
        let specialProperty = getSpecialProperty(item)
        if (specialProperty) {
        let itemfn = this.specialPropertyEvent[specialProperty]
        if (itemfn) {
        list.push({ fn: itemfn, priority: this.specialPropertyEventPriority[specialProperty] || 0 })
        }
        }
        }
        
    keys.forEach(key => {
        let fn = this.event[key]
        if (!fn) return
        list.push({ fn: fn, priority: this.eventPriority[key] || 0 })
    })
    
    list.sort((a, b) => b.priority - a.priority)
    list.forEach((e) => {
    if (this.cancelled) return
    e.fn.apply(null, args)
    })
    
        this.defer.apply(null, args)
        return
    },
    runCheck: function (args) {
        args.unshift(this)
        this.init.apply(null, args)
        let player = args[1]
        if (!player) return
        for (let [bonusKey, check] of Object.entries(this.checkEvents)) {
            let hasBonus = hasEntityEnderBonus(player, bonusKey)
            if (hasBonus) {
                if (typeof check.onValid === 'function') {
                    check.onValid.apply(null, args)
                }
            } else {
                if (typeof check.onInvalid === 'function') {
                    check.onInvalid.apply(null, args)
                }
            }
        }
        this.defer.apply(null, args)
        return
    }
}

const EnderBonusOnUpdate = new EnderBonusHandler()

const EnderBonusCustomDataModifierList = []

function registerEnderBonusCustomDataModifier(fn) {
    if (typeof fn === "function") {
        EnderBonusCustomDataModifierList.push(fn)
    }
}

function applyEnderBonusAttributes(entity, EntityEnderBonusData, customData) {
    const UUID_MAP = {
        addition:      "11111111-1111-1111-1111-111111111111",
        multiply_base: "22222222-2222-2222-2222-222222222222",
        multiply_total:"33333333-3333-3333-3333-333333333333",
        
        calculate_addition:      "aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
        calculate_multiply_base: "bbbbbbb2-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
        calculate_multiply_total:"ccccccc3-cccc-cccc-cccc-cccccccccccc"
    }
    
    let sums = {}
    let calculateList = []
    let calculatesums = {}
    let uuid = entity.uuid
    let multiplier = hasEntityEnderBonus(entity, "tarotcards:the_hanged_man") ? -1 : 1
    let EnderBonusAttributesData = global.EnderBonusAttributes
    
    if (customData && customData.TheCard1) {
    for (let key in customData.TheCard1) {
        let data = customData.TheCard1[key]
        let sumKey = data.name + "#" + data.operation.toLowerCase()
        if (!(sumKey in sums)) sums[sumKey] = 0
        sums[sumKey] += data.value * multiplier
      }
    }
    
    for (let bonus of EnderBonusAttributesData) {
        if (!EntityEnderBonusData.hasOwnProperty(bonus.key)) continue
        let entry = EntityEnderBonusData[bonus.key]
        let bonusVal = bonus.only ? 1 : entry.count

        for (let mod of bonus.modifiers) {
            let key = mod.attr + "#" + mod.op
            if (!(key in sums)) sums[key] = 0

            let effectiveVal = mod.only ? 1 : bonusVal
            let effectiveMultiplier = mod.ignoreInvert ? 1 : multiplier

            if (mod.calculate) {
            if (mod.calculateToBase) {
            let val = mod.calculate(entity, entry, multiplier, customData)
            sums[key] += val
            } else {
            calculateList.push({fun: mod.calculate, key: key, entry: entry})
            }
            } else {
                sums[key] += mod.value * effectiveVal * effectiveMultiplier
            }
        }
    }
    
    for (let bonus of EnderBonusAttributesData) {
        for (let mod of bonus.modifiers) {
            let inst = entity.getAttribute(mod.attr)
            if (!inst) continue
            inst.removeModifier(UUID.fromString(UUID_MAP[mod.op]))
            inst.removeModifier(UUID.fromString(UUID_MAP["calculate_" + mod.op]))
        }
    }
    
    for (let key in sums) {
        let [attr, op] = key.split("#")
        let inst = entity.getAttribute(attr)
        if (!inst) continue
        if (!UUID_MAP[op]) {
        entity.level.tell("无法获得对应uuid: " + op)
        continue
        }
        let modifier = new $AttributeModifier(
            UUID.fromString(UUID_MAP[op]),
            `EnderBonus_${op}`,
            sums[key],
            op
        )
        inst.addPermanentModifier(modifier)
    }
    
    for (let {fun, key, entry} of calculateList) {
            let val = fun(entity, entry, multiplier, customData)
            if (!calculatesums[key]) calculatesums[key] = 0
            calculatesums[key] += val
    }
    
    for (let key in calculatesums) {
        let [attr, op] = key.split("#")
        let inst = entity.getAttribute(attr)
        if (!inst) continue
        if (!UUID_MAP[op]) {
        entity.level.tell("无法获得对应uuid: " + op)
        continue
        }
        let modifier = new $AttributeModifier(
            UUID.fromString(UUID_MAP["calculate_" + op]),
            `EnderBonus_Calc_${op}`,
            calculatesums[key],
            op
        )
        inst.addPermanentModifier(modifier)
    }
    
    EntityEnderBonusCustomData[uuid].customData = customData
}

function handleEnderBonusItem(player, item, slot, Oldresult) {
    if (item.isEmpty()) {
    return Oldresult
    }
    
    let customData = Oldresult.customData
    let EntityEnderBonusData = Oldresult.EntityEnderBonusData
    let genericBonusKeysList = Oldresult.genericBonusKeysList
    
    let itemId = item.id
    let itemNbt = item.nbt ? item.nbt.copy() : {}
    
    if (itemNbt) {
        let nbtEnderbonus = itemNbt.enderbonus
        if (nbtEnderbonus) {
            if (!nbtEnderbonus.only || !genericBonusKeysList.includes(itemId)) {
                if (nbtEnderbonus.only) {
                    genericBonusKeysList.push(itemId)
                }

                for (let bonusKey in nbtEnderbonus) {
                    let thisCount = nbtEnderbonus[bonusKey]
                    let entry = EntityEnderBonusData[bonusKey]

                    if (entry) {
                        entry.count += thisCount
                    } else {
                        EntityEnderBonusData[bonusKey] = {
                            count: thisCount
                        }
                    }
                }
            }
        }
    }
    
    let entry = EntityEnderBonusData[itemId]
    if (entry) {
        entry.count += 1
    } else {
        entry = {
            nbt: itemNbt,
            slot: slot,
            count: 1
        }
    }
    
    EnderBonusCustomDataModifierList.forEach(fn => {
        customData = fn(player, item, slot, entry, customData)
    })
    
    EntityEnderBonusData[itemId] = entry
    
    let Newresult = {}
    Newresult.customData = customData
    Newresult.EntityEnderBonusData = EntityEnderBonusData
    Newresult.genericBonusKeysList = genericBonusKeysList
    
    return Newresult
}

function PlayerUpdateEnderBonusEvent(player) {
    if (!player || !player.isAlive()) return;
    let enderChest = player.enderChestInventory;
    let uuid = player.uuid;
    
    let EntityEnderBonusData = {}
    let TagsData = {}
    let genericBonusKeysList = [];
    let customData = {}
    EntityEnderBonusCustomData[uuid] = {}
    
    let EntityTags = player.getTags();
    
    EntityTags.forEach(tag => {
        let entry = EntityEnderBonusData[tag]
        if (entry) {
                entry.count += 1
                EntityEnderBonusData[tag] = entry
            } else {
                EntityEnderBonusData[tag] = {
                    count: 1
                   }
                }
    })
    
    for (let i = 0; i < enderChest.getContainerSize(); i++) {
    let item = enderChest.getItem(i)
    
    let Oldresult = { customData: customData, EntityEnderBonusData: EntityEnderBonusData, genericBonusKeysList: genericBonusKeysList }
    let result = handleEnderBonusItem(
        player,
        item,
        i,
        Oldresult
    )
    customData = result.customData
    EntityEnderBonusData = result.EntityEnderBonusData
    genericBonusKeysList = result.genericBonusKeysList
    }

    
    if (customData.NewEnderBonus) {
    let extraList = customData.NewEnderBonus

    for (let i = 0; i < extraList.length; i++) {
        let item = extraList[i]

    let Oldresult = { customData: customData, EntityEnderBonusData: EntityEnderBonusData, genericBonusKeysList: genericBonusKeysList }
    let result = handleEnderBonusItem(
        player,
        item,
        i,
        Oldresult
    )
    customData = result.customData
    EntityEnderBonusData = result.EntityEnderBonusData
    genericBonusKeysList = result.genericBonusKeysList
    }
    }
    
    EntityEnderBonus[uuid] = EntityEnderBonusData
    
    applyEnderBonusAttributes(player, EntityEnderBonusData, customData)
    
    EnderBonusOnUpdate.runCheck([player])
    
    theHangedManPresentGet(player)
    
    let persistentData = player.persistentData
    if (persistentData.DeceiverMask) {
    player.sendData("DeceiverMask",{
    DeceiverMaskData: persistentData.DeceiverMask,
    })
    } else {
    player.sendData("DeceiverMask");
    }
    
    let PlayerHp = player.getHealth();
    let PlayerMaxHp = player.getAttribute('minecraft:generic.max_health').getValue()
    if (PlayerHp > PlayerMaxHp) {
    player.setHealth(PlayerMaxHp);
    }
    
    let MaidList = getPlayerMaidList(player, 40)
    MaidList.forEach(maid => {
    MaidUpdateEnderBonusEvent(maid)
    })
}

function theHangedManPresentGet(player) {
    let PlayerPersistentData = player.persistentData;
    let str = player.getAttribute(`fast:str`).getValue();
    let agi = player.getAttribute(`fast:agi`).getValue();
    let int = player.getAttribute(`fast:int`).getValue();
    let vit = player.getAttribute(`fast:vit`).getValue();
    if (!PlayerPersistentData.theHangedManPresentGet && (str < 0 || agi < 0 || int < 0 || vit < 0)) {
     player.give(Item.of('tarotcards:the_hanged_man',));
     PlayerPersistentData.theHangedManPresentGet = true;
     }
}