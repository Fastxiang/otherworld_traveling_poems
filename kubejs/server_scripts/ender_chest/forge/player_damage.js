// priority: 700
    const excludedTypes = ["magic", "fire_field", "tacz.bullet", "heartstop", "poison_cloud","dragon_breath_pool","danmaku"];
    const wheelOfFortuneDamageType = ["player","fire_magic","ice_magic","nature_magic","lightning_magic","blood_magic","holy_magic","ender_magic","evocation_magic","arrow"]
    const MagicDamageType = ["fire_magic","ice_magic","nature_magic","lightning_magic","blood_magic","holy_magic","ender_magic","evocation_magic","fire_field","poison_cloud","dragon_breath_pool","heartstop"]
    const FastMagicDamageType = ["fire_magic","ice_magic","nature_magic","lightning_magic","blood_magic","holy_magic","ender_magic","evocation_magic"]
    
function MyPlayerDamageTypeObj() {
    this.DamageType = {}
    return this
}

MyPlayerDamageTypeObj.prototype = {
    set: function (damagetype, uuid) {
        this.DamageType[uuid] = damagetype
        return this
    },
    get: function (uuid) {
        return this.DamageType[uuid]
    }
}

let PlayerDamageType = new MyPlayerDamageTypeObj()

function LivingHurtByPlayer(event) {
    let player = event.source.player;
    if (!player) return;
    let EventEntity = player;
    if (!EventEntity) return;
    let uuid = player.uuid
    let AngerValueData = PlayerAngerValueData[uuid]
    let item = player.getMainHandItem();
    let damagetype = event.source.getType();
    let Olddamagetype = event.source.getType();
    let damageimmediate = event.source.immediate.type;
    let entity = event.entity;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    entity.invulnerableTime = 20;
    if (persistentData.HeroShield && !persistentData.HeroShieldDamage && !persistentData.JusticeShield) {
      event.amount = 1;
      PlayerDamageType.set(damagetype, uuid)
      return;
    } else if (persistentData.HeroShieldDamage) {
    persistentData.HeroShieldDamage = false;
    }
    
    let Partner = getEntityPartner(player)
    if (Partner) {
    setAttackEntity(Partner, entity)
    }
    
    if (damageimmediate.includes('mokels_boss')) return

    let extraDamage = player.getAttribute('fast:extra_damage').getValue();
    let attack_invulnerable_frames = player.getAttribute('kubejs:generic.attack_invulnerable_frames').getValue(); // 从属性中获取额外伤害值
    
    let dice1 = 0
    if (persistentData.HeroDice) {
    let Cd = PlayerPersistentData.DiceCd
    if (!Cd) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    player.tell(`第一次掷骰: ${dice1}`);
    PlayerPersistentData.DiceCd = true
    player.server.scheduleInTicks((100), () => {
    PlayerPersistentData.remove('DiceCd');
    })
    }
    }
    
    damagetype = SpecialPropertyOriginReverseFlowEvent(event, player, item, damagetype)
    damagetype = SpecialPropertyGreedyCrystalEvent(event, player, EventEntity, item, damagetype)
    damagetype = DemonCallerEvent(event, persistentData, damagetype)
    damagetype = BlazingJudgementDamageTypeEvent(player, persistentData, damagetype)
    if (dice1 === 3) {
    damagetype = HeroDiceEvent3(event, player, EventEntity, entity, persistentData, damagetype, dice1)
    }
    damagetype = wheelOfFortuneEffectEvent(event, player, EventEntity, persistentData, PlayerPersistentData, damagetype);
    
    damagetype = StormEyeEvent(player, persistentData, damagetype, entity)
    
    PlayerDamageType.set(damagetype, uuid)
    
    BloodPactDamageEvent(player, EventEntity, persistentData, damagetype)
    
    let attacktime = TotalAndAttackTime(event, entity, player, EventEntity, attack_invulnerable_frames, persistentData, damagetype, damageimmediate);
    
    HeroSwordEvent(event, player, EventEntity, entity, persistentData, Olddamagetype, PlayerPersistentData, AngerValueData, attacktime);
    
    ThunderbrandMagazineEvent(player, persistentData, damagetype, entity)
    
    ApprenticeStaffEvent(event, player, persistentData, damagetype)
    
    if (dice1 === 4) {
    HeroDiceEvent2(event, player, EventEntity, entity, persistentData, damagetype, dice1)
    }
    
    ExtraDamageEvent(event, extraDamage)
    
    SpecialPropertyMagicBookEvent(event, player, item)
    
    GrimoireOfManaReapingEvent(event, player, entity, persistentData, damagetype)
    
    CursedEyeEvent(event, player, entity, persistentData, damagetype)
    
    WaterPrecisionMechanismEvent(event, player, EventEntity, persistentData, damagetype)
    
    EnderScrollEvent(event, player, persistentData, damagetype)
    
    ItemNbtWeAnEvent(event, player, EventEntity, item, 'kubejs:weakness_analysis')
    
    FrostStaffEvent(event, entity, player, persistentData, damagetype);
    
    JusticeEvent(event, entity, player, persistentData);
    
    PrimalFireEvent(event, player, EventEntity, persistentData, damagetype);
    
    SourceOfVenomEvent(player, event, persistentData, damagetype, entity)
    
    HeroBowEvent(event, player, EventEntity, persistentData, damagetype, Olddamagetype);
    
    HeroStaffDamageEvent(event, player, EventEntity, persistentData, damagetype)
    
    JusticeStaffEvent(event, persistentData)
    
    starCardEffectEvent(event, persistentData)
    
    NatureMagicShardEvent(event, player, persistentData, damagetype, entity)
    
    EnderNecklaceEvent(event, player, EventEntity, persistentData, PlayerPersistentData, damagetype);
    
    ShadowDaggeEvent(event, persistentData);
    
    NecklaceOfTheDesertEvent(event, player, persistentData, damagetype)
    
    if (persistentData.HeroDice) {
    let randomMultiplier = (Math.random() * 149 + 1) / 100;
    event.amount *= randomMultiplier;
    }
    
    if (dice1 && dice1 !== 4 && dice1 !== 3) {
    HeroDiceEvent1(event, player, EventEntity, entity, persistentData, damagetype, dice1)
    }
    
    StrangeKeyEvent(player, persistentData, damagetype, entity)
    
    let CanUseSwordSoul = true
    
    if (persistentData.RiftsongEdge) {
    if (!damagetype.includes('player')) CanUseSwordSoul = false
    }
    
    if (CanUseSwordSoul) {
    SwordSoulEvent(player, event, persistentData, damagetype, entity)
    }
    
    TheHierophantEvent(event, player, persistentData, damagetype);
    
    IronPrecisionMechanismEvent(event, player, EventEntity, persistentData, damagetype)
    
    SwordSoulCountEvent(event, persistentData, damagetype)
    
    FateGemStrengthEvent(event, persistentData)
    
    FateGemIntelligenceEvent(event, persistentData)
    
    RealmSplitterEvent(event, persistentData, damagetype)
    
    TheCard3DamageEvent(event, persistentData)
    
    SkilledAxeItemDamageEvent(event, player, persistentData)
    
    ShimmeringDiamondDamageEvent(event, player, persistentData)
}

function ExtraDamageEvent(event, extraDamage) {
    event.amount += extraDamage
}

function LivingDamageByPlayer(event) {
    let player = event.source.player;
    if (!player) return;
    let EventEntity = player;
    if (!EventEntity) return;
    let uuid = player.uuid
    let level = player.level
    let damagetype = PlayerDamageType.get(uuid)
    let damageimmediate = event.source.immediate.type;
    let item = player.getMainHandItem();
    let entity = event.entity;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    
    FoolPresentEvent(event, player, uuid, level, EventEntity, persistentData);
    SpecialPropertyHolyLifeDrainEvent(event, player, EventEntity, item, damagetype)
    DamageTypeMessage(player, persistentData, event.amount, damagetype)
    FastServerDamageRenderEvent(event, player, entity, event.amount, damagetype)
}

function ItemNbtWeAnEvent(event, player, EventEntity, item, modifier) {
        if (!item) return
        const modifierlevel = getModifierLevel(item, modifier)
        if(modifierlevel) {
        let Crt = player.getAttribute(`l2damagetracker:crit_rate`).getValue();
        let CrtDamage = player.getAttribute(`l2damagetracker:crit_damage`).getValue();
        let Damage = modifierlevel * 3 * Crt * CrtDamage
        event.amount += Damage
        }
}

function TotalAndAttackTime(event, entity, player, EventEntity, attack_invulnerable_frames, persistentData, damagetype, damageimmediate) {
    let attacktime = 20
    if (attack_invulnerable_frames < 1) {
    attacktime = 10 + (10 * attack_invulnerable_frames)
    }
      if(!excludedTypes.includes(damagetype) && !damagetype.includes('magic')) {
  if (persistentData.HermitEffect && player.hasEffect('irons_spellbooks:true_invisibility')) {
  let TrueItyTime = 1;
  if (persistentData.TrueItyTime) {
    TrueItyTime = 1 + (persistentData.TrueItyTime) * 0.03;

    let damageIncreasePercentage = ((TrueItyTime - 1) * 100).toFixed(2); // 计算并格式化为百分比，保留两位小数
    let totalDamagePercentage = ((1.5 + TrueItyTime - 1 -1) * 100).toFixed(2); // 计算总伤害百分比

    player.tell("你的破隐一击增加了 " + damageIncreasePercentage + "%, 总计 " + totalDamagePercentage + "%");
      }

  event.amount *= (1.5 + TrueItyTime - 1); // 破隐一击

  player.removeEffect('irons_spellbooks:true_invisibility');

  persistentData.TrueItyTime = 0;
   }
    entity.invulnerableTime = attacktime;// 设置攻击无敌帧
    if (attack_invulnerable_frames === 0){
    entity.invulnerableTime = 0
    // 完全消除无敌帧
     }

    }
    return attacktime
}

function IronPrecisionMechanismEvent(event, player, EventEntity, persistentData, damagetype) {
    if (!persistentData.IronPrecisionMechanism) return
    if (!MagicDamageType.includes(damagetype)) return
    let Crt = player.getAttribute(`l2damagetracker:crit_rate`).getValue();
    let CrtDamage = player.getAttribute(`l2damagetracker:crit_damage`).getValue();
    if (Math.random() < Crt) {
    if (CrtDamage > 0) {
    event.amount *= (1 + CrtDamage)
    }
    }
}

function WaterPrecisionMechanismEvent(event, player, EventEntity, persistentData, damagetype) {
    if (!persistentData.WaterPrecisionMechanism) return
    if (!MagicDamageType.includes(damagetype)) return
    let Damage = persistentData.WaterPrecisionMechanismCrt
    event.amount += Damage
}

function FoolPresentEvent(event, player, uuid, level, EventEntity, persistentData) {
    if (!persistentData.theFoolPresent) return;
    if (isInCooldown("the_fool", uuid, level)) return
    let str = player.getAttribute(`fast:str`).getValue();
    let agi = player.getAttribute(`fast:agi`).getValue();
    let int = player.getAttribute(`fast:int`).getValue();
    let vit = player.getAttribute(`fast:vit`).getValue();
    if (persistentData.HeroStaff) {
     int *= 1.5;
     }
    let damage = (str + agi + int + vit);
    event.amount = damage;
    addCooldown("the_fool", uuid, 10, level)
}

// 烈焰系列效果
function PrimalFireEvent(event, player, EventEntity, persistentData, damagetype) {
    if(!damagetype.includes('fire')) return;
    if(persistentData.FireScroll) {
    player.potionEffects.add('fast:blazing_effect', 300 * 20, 0, false, false)
    }

    if(persistentData.PrimalFire && player.hasEffect('fast:blazing_effect')) {
    let fireEffect = player.getEffect('fast:blazing_effect');
    let Effectlevel = Math.max(fireEffect.getAmplifier() + 1);
    Effectlevel *= persistentData.PrimalFire * 2;
    event.amount += Effectlevel;
      }

}
    // 命运之轮效果
function wheelOfFortuneEffectEvent(event, player, EventEntity, persistentData, PlayerPersistentData, damagetype) {
    if (persistentData.wheelOfFortuneEffect && damagetype.includes("evocation_magic")) {
        let randomIndex = Math.floor(Math.random() * wheelOfFortuneDamageType.length);
        let randomDamageType = wheelOfFortuneDamageType[randomIndex];
        let NeedDamageType = null
        if (persistentData.EvocationMagicShard) {
        NeedDamageType = getMaxSpellDamageType(player);
        if (NeedDamageType && NeedDamageType != randomDamageType) {
        randomIndex = Math.floor(Math.random() * wheelOfFortuneDamageType.length);
        randomDamageType = wheelOfFortuneDamageType[randomIndex];
        }
        }
        let thisPower = player.getAttribute(getSpellPowerId(randomDamageType));
        if (thisPower) {
        event.amount *= thisPower.getValue()
        }
        return randomDamageType;
        } else {
        return damagetype;
    }
}

function starCardEffectEvent(event, persistentData) {
    if (!persistentData.starCardEffect) return;
        event.amount *= 0.2;
}

function JusticeStaffEvent(event, persistentData) {
    if (!persistentData.JusticeStaff) return;
        event.amount *= 0.4;
}

// 勇者弓
function HeroBowEvent(event, player, EventEntity, persistentData, damagetype, Olddamagetype) {
    let haveType = false
    if (EventEntity.isPlayer() && persistentData.BerserkerBow) {
    if (Olddamagetype.includes("player")) haveType = true
    }
    if (damagetype.includes("arrow")) haveType = true
    if ((EventEntity.isPlayer() && !persistentData.HeroBow) || !haveType) return;
    let agi = EventEntity.getAttribute(`fast:agi`).getValue();
    event.amount += (agi * 2);
}

function HeroDiceEvent1(event, player, EventEntity, entity, persistentData, damagetype, dice1) {
    if ((EventEntity.isPlayer() && !persistentData.HeroDice)) return;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    player.tell(`第二次掷骰: ${dice2}`);

    let heroDiceEffects = {
        6: { 
            values: { 1: 1, 2: 25, 3: 50, 4: 100, 5: 400, 6: 1000 },
            apply: (val) => {
                event.amount *= 1 + val / 100;
                player.tell(`本次伤害增加 ${val}%`);
            }
        },
        1: { 
            values: { 1: 100, 2: 80, 3: 60, 4: 40, 5: 10, 6: 1 },
            apply: (val) => {
                event.amount *= 1 - val / 100;
                player.tell(`本次伤害减少 ${val}%`);
            }
        },
        5: {
            values: { 1: 10, 2: 50, 3: 100, 4: 200, 5: 300, 6: 400 },
            apply: (val) => {
                let extra = event.amount * (val / 100);
                player.server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(EventEntity, entity, "fast:player", extra);
        }
       });
                player.tell(`附加 ${val}% 物理伤害`);
            }
        },
        2: { 
            values: { 1: 10, 2: 20, 3: 40, 4: 80, 5: 150, 6: 300 }, 
            apply: (val) => {
                let randomType = FastMagicDamageType[Math.floor(Math.random() * FastMagicDamageType.length)];
                let extra = event.amount * (val / 100);
                player.server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(EventEntity, entity, `fast:${randomType}`, extra);
        }
       });
           let TypeMessage = Text.translatable(`fast.damagetype.${randomType}`).getString()
                player.tell(`附加 ${val}% ${TypeMessage}伤害`);
            }
        }
    };

    let effect = heroDiceEffects[dice1];
    if (!effect) return;
    let value = effect.values[dice2];
    effect.apply(value);
}

function HeroDiceEvent2(event, player, EventEntity, entity, persistentData, damagetype, dice1) {
    if ((EventEntity.isPlayer() && !persistentData.HeroDice)) return;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    player.tell(`第二次掷骰: ${dice2}`);

    let values = { 1: 1, 2: 50, 3: 100, 4: 200, 5: 400, 6: 500 };
    let val = values[dice2];
    event.amount += val;
    player.tell(`本次伤害额外增加 ${val}`);
}

function HeroDiceEvent3(event, player, EventEntity, entity, persistentData, damagetype, dice1) {
    if ((EventEntity.isPlayer() && !persistentData.HeroDice)) return;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    player.tell(`第二次掷骰: ${dice2}`);

    let values = {
        1: "player",
        2: "ender_magic",
        3: "tacz.bullet",
        4: "arrow",
        5: "danmaku",
        6: "holy_magic"
    };
    let val = values[dice2];
    let TypeMessage = Text.translatable(`fast.damagetype.${val}`).getString()
    player.tell(`本次伤害变为: ${TypeMessage}伤害`);
    return val;
}

// 勇者杖
function HeroStaffDamageEvent(event, player, EventEntity, persistentData, damagetype) {
    if ((EventEntity.isPlayer() && !persistentData.HeroStaff) || !damagetype.includes("ender")) return;
    let int = EventEntity.getAttribute(`fast:int`).getValue();
    let extraDamage = int * 1.5;
    
    let maxTotal = 300;
    let allowedIncrease = maxTotal - event.amount;

    if (allowedIncrease > 0) {
        event.amount += Math.min(extraDamage, allowedIncrease);
    }
}

function HeroSwordEvent(event, player, EventEntity, entity, persistentData, damagetype, PlayerPersistentData, AngerValueData, attacktime) {
        let isPlayer = EventEntity.isPlayer()
        let NeedDamage = isPlayer ? "player" : "mob"
        if ((isPlayer && !persistentData.HeroSword) || !damagetype.includes(NeedDamage)) return;
        if (isPlayer) {
        let attacktime = entity.invulnerableTime;
        let DamageUp = (AngerValueData.Value * 0.01);
        if (DamageUp > 0) {
        event.amount *= 0.5 + DamageUp;
        } else {
        event.amount *= 0.5;
        }
        let Damageneed = event.amount;
        player.server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(EventEntity, entity, "fast:holy_magic", Damageneed)
        if (persistentData.GrimoireOfManaReaping) {
        entity.invulnerableTime = attacktime;
        }
        }
       });
        let Value = 2;
        if (persistentData.HeroSwordAngerValue) {
        Value += persistentData.HeroSwordAngerValue;
        }
        if (persistentData.TheCard4) {
        let thisData = persistentData.TheCard4
        Value += thisData
        }
        AngerValueData.Value += Value;
        AngerValueData.Open = 5;
        AngerValueMax(AngerValueData);
        AngerValue(player, persistentData, AngerValueData);
        } else {
        event.amount *= 1.5
        player.server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        let Damageneed = event.amount;
        AttackEntity(EventEntity, entity, "fast:holy_magic", Damageneed)
        }
       });
        }
}

function EnderNecklaceEvent(event, player, EventEntity, persistentData, PlayerPersistentData, damagetype) {
    if (!damagetype.includes('ender')) return;
    if (persistentData.EnderNecklace) {
    if (!PlayerPersistentData.EnderNecklace) {
    PlayerPersistentData.EnderNecklace = {};
    }
    let x = player.x;
    let y = player.y;
    let z = player.z;
    let Data = PlayerPersistentData.EnderNecklace;
    if (Data.x) {
        let dx = x - Data.x;
        let dy = y - Data.y;
        let dz = z - Data.z;
        let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (persistentData.EnderMagicShard) {
        distance += 20
        }
        if (distance > 60) {
        distance = 60;
        }
        let thispowerModifier = player.getAttributeValue('irons_spellbooks:ender_spell_power');
        let DamageUp = (distance * 0.01 * thispowerModifier);
        event.amount += distance
        event.amount *= (1 + DamageUp);
    };
    Data.x = x;
    Data.y = y;
    Data.z = z;
    } else {
    if (PlayerPersistentData.EnderNecklace) {
    player.persistentData.remove('EnderNecklace');
    }
    }
}

function FrostStaffEvent(event, entity, player, persistentData, damagetype) {
    if (!persistentData.FrostStaff) return;
    if (!damagetype.includes('ice')) return;
    if (!entity.hasEffect('irons_spellbooks:chilled')) return;
    let int = player.getAttribute(`fast:int`).getValue();
    if (persistentData.HeroStaff) {
     int *= 1.5;
     }
    let damage = int * 10;
    event.amount += damage;
    if (persistentData.IceScroll) {
    let EntitypersistentData = entity.persistentData;
    if (!EntitypersistentData.IceScroll) {
    EntitypersistentData.IceScroll = true
    player.server.scheduleInTicks(40, () => {
    if (!entity.hasEffect('irons_spellbooks:chilled')) return;
    entity.removeEffect('irons_spellbooks:chilled');
    entity.persistentData.remove('IceScroll')
    })
    }
    } else {
    entity.removeEffect('irons_spellbooks:chilled');
    }
}

function ShadowDaggeEvent(event, persistentData) {
    if (!persistentData.ShadowDagge) return;
    if (persistentData.ShadowDaggeTime === 0) {
    event.amount *= 2;
    }
    persistentData.ShadowDaggeTime = 10;
}

function JusticeEvent(event, entity, player, persistentData) {
    if (!persistentData.Justice) return;
    let PlayerHp = player.getHealth();
    let EntityHp = entity.getHealth();
    let PlayerMaxHp = player.getAttribute('minecraft:generic.max_health').getValue(); 
    let EntityMaxHp = entity.getAttribute('minecraft:generic.max_health').getValue(); 
    let PlayerHaveHp = PlayerHp / PlayerMaxHp
    let EntityHaveHp = EntityHp / EntityMaxHp
    if (EntityHaveHp > PlayerHaveHp) {
    event.amount += PlayerMaxHp;
    }
}

function TheHierophantEvent(event, player, persistentData, damagetype) {
    if (!persistentData.TheHierophant) return;
    if (!damagetype.includes('holy')) return;
    let level = player.level;
    let pos = player.position();
    let radius = 20;
    let entitylist = getLivingWithinRadius(level, pos, radius);
    if (entitylist) {
        let entitiesWithOwner = entitylist.filter(e => typeof e.getSummoner === 'function');
        entitiesWithOwner.forEach(entity => {
            let Owner = entity.getSummoner();
            if (player === Owner) {
            if (!entity.hasEffect('fast:faith_effect')) {
            entity.potionEffects.add('fast:faith_effect', 1200, 0, false, false);
            entity.setHealth(entity.getMaxHealth());
            }
            }
        });
    }
}

function EnderScrollEvent(event, player, persistentData, damagetype) {
    if (!persistentData.EnderScroll) return
    if (!damagetype.includes('ender')) return;
    let level = player.level;
    let randomNum = Math.floor(Math.random() * 11) - 5;
    let randomNum2 = Math.floor(Math.random() * 11) - 5;
    player.setPosition(player.x + randomNum, player.y, player.z + randomNum2);
    level.playSound(null, player.getX(), player.getY(), player.getZ(), 'minecraft:entity.enderman.teleport', player.getSoundSource(), 1, 1);
}

function NecklaceOfTheDesertEvent(event, player, persistentData, damagetype) {
    if (!persistentData.NecklaceOfTheDesert) return
    if (!damagetype.includes('player')) return;
    let InFr = player.getAttribute('kubejs:generic.attack_invulnerable_frames').getValue();
    event.amount *= InFr
}

function CursedEyeEvent(event, player, entity, persistentData, damagetype) {
    if (!persistentData.CursedEye) return
    let EntityPersistentData = entity.persistentData
    if (damagetype.includes('nature')) {
    let Damage = event.amount
    EntityPersistentData.CursedEye = Damage * 10
    } else if (damagetype.includes('poison_cloud')) {
    if (!EntityPersistentData.CursedEye) return
    let GetDamage = EntityPersistentData.CursedEye / 20
    EntityPersistentData.CursedEye -= GetDamage
    event.amount += GetDamage
    }
}

function SpecialPropertyMagicBookEvent(event, player, item) {
    if (!hasSpecialProperty(item, "lavafishing:quartz_fish")) return
    let MaxMana = player.getAttribute(`irons_spellbooks:max_mana`).getValue();
    let NeedMana = Math.floor(MaxMana * 0.05)
    if (checkPlayerManaCost(player, NeedMana, false)) {
    event.amount += NeedMana
    }
}

function SpecialPropertyOriginReverseFlowEvent(event, EventEntity, item, damagetype) {
    let NeedDamage = EventEntity.isPlayer() ? "player" : "mob"
    if (hasSpecialProperty(item, "youkaishomecoming:big_popsicle")) {
    if (damagetype.includes('holy_magic')) {
    return "ender_magic"
    } else if (damagetype.includes('ender_magic')) {
    return "holy_magic"
    } else {
    return NeedDamage
    }
    }
    return damagetype
}

function SpecialPropertyHolyLifeDrainEvent(event, player, EventEntity, item, damagetype) {
    if (!hasSpecialProperty(item, "irons_spellbooks:divine_pearl")) return
    if (!damagetype.includes('holy')) return
    let Damage = event.amount
    let HeadNeed = 0
    HeadNeed += Math.floor(Damage * 0.01)
    if (HeadNeed > 0) {
    EventEntity.heal(HealNeed)
    }
}

function GrimoireOfManaReapingEvent(event, player, entity, persistentData, damagetype) {
    if (!persistentData.GrimoireOfManaReaping) return
    if (!MagicDamageType.includes(damagetype)) return
    const magicData = $MagicData.getPlayerMagicData(player);
    let PlayerMana = magicData.getMana() * 0.12 + 50;
    if (checkPlayerManaCost(player, PlayerMana, false)) {
    entity.invulnerableTime = 0
    }
}

function NatureMagicShardEvent(event, player, persistentData, damagetype, entity) {
    if (!persistentData.NatureMagicShard) return
    if (damagetype.includes('poison_cloud')) return
    let Damage = 5
    let time = 100
    let int = player.getAttribute(`fast:int`).getValue();
    if (persistentData.HeroStaff) {
     int *= 1.5;
    }
    let level = player.level
    let NatureSpellPower = player.getAttribute('irons_spellbooks:nature_spell_power').getValue();
    Damage += Math.floor(int / 7)
    Damage *= NatureSpellPower
    time *= NatureSpellPower
            let cloud = new $PoisonCloud(level);
            cloud.setOwner(player);
            cloud.setDuration(time);
            cloud.setDamage(Damage);
            cloud.moveTo(entity.position());
            level.addFreshEntity(cloud);
}

function SpecialPropertyGreedyCrystalEvent(event, player, EventEntity, item, damagetype) {
    let NeedDamage = EventEntity.isPlayer() ? "player" : "mob"
    if (hasSpecialProperty(item, "hmag:greedy_crystal") && damagetype.includes(NeedDamage)) {
        let NewDamageType = getMaxSpellDamageType(EventEntity)
        if (!NewDamageType) return damagetype
        let thisPower = EventEntity.getAttribute(getSpellPowerId(NewDamageType));
        let Attack = EventEntity.getAttribute('minecraft:generic.attack_damage').getValue();
        if (thisPower) {
        event.amount = Attack * 0.5 * thisPower.getValue()
        return NewDamageType;
        }
        }
        return damagetype;
}


function BlazingJudgementDamageTypeEvent(player, persistentData, damagetype) {
    if (persistentData.BlazingJudgement) {
    if (damagetype.includes('indirectMagic')) {
    return "fire_magic"
    }
    }
    return damagetype
}

function ShimmeringDiamondDamageEvent(event, player, persistentData) {
    if (!persistentData.ShimmeringDiamond) return
    let enderChest = player.enderChestInventory;
    let data = persistentData.ShimmeringDiamond
    let i = data.i
    let item = enderChest.getItem(i);
    let OldValue = item.damageValue
    if (OldValue >= 23333) {
    return
    }
    let Count = persistentData.mechanicItemCount * 100
    let thisValue = OldValue + Count
    if (thisValue >= 23333) {
    Count = 23333 - OldValue
    thisValue = 23333
    }
    item.damageValue = thisValue
    event.amount *= 1 + (Count / 1500)
    event.amount += Count / 2
    let NewValue = item.damageValue
    FEValue(player, persistentData, NewValue)
}

function TheCard3DamageEvent(event, persistentData) {
    if (!persistentData.TheCard3) return;
    let Data = persistentData.TheCard3
    let Count2 = Data.Count2
    event.amount *= Count2
}

function ApprenticeStaffEvent(event, player, persistentData, damagetype) {
    if (!persistentData.ApprenticeStaff) return;
    if (!damagetype.includes('player')) return
    addPlayerManaCost(player, 100)
}

function SkilledAxeItemDamageEvent(event, player, persistentData) {
    if (!persistentData.CelestialCore) return
    let enderChest = player.enderChestInventory;
    let data = persistentData.CelestialCore
    let i = data.i
    let item = enderChest.getItem(i);
    let nbt = item.nbt
    if (!nbt) return
    let DataItem = nbt.item
    let count = CelestisynthItems[DataItem]
    if (!count) return
    event.amount *= count
}

function ThunderbrandMagazineEvent(player, persistentData, damagetype, entity) {
    if (!persistentData.ThunderbrandMagazine) return;
    if (!damagetype.includes('tacz.bullet')) return
    let level = player.level
    let targetPos = entity.position()
    let agi = player.getAttribute(`fast:agi`).getValue();
    let SpellLevel = 1
    SpellLevel += Math.floor(agi / 40)
    player.server.scheduleInTicks((1), () => {
    overLimitSpellOnCast("irons_spellbooks:chain_lightning", SpellLevel, player, entity)
    })
}

function StormEyeEvent(player, persistentData, damagetype, entity) {
    let haveThis = persistentData.StormEye
    if (!damagetype.includes('ice') && !damagetype.includes('lightning') && haveThis) {
        if (entity.isLiving()) {
        let level = player.level
        let EntityPos = entity.position()
        let spawn = EntityPos.add(0, entity.getEyeHeight() / 2 + 5, 0)
        let direction = EntityPos.subtract(spawn).normalize();
        let icicle = level.createEntity('irons_spellbooks:icicle');
    icicle.setOwner(player)
    icicle.moveTo(spawn)
    icicle.shoot(direction)
    icicle.setDamage(5)
    icicle.spawn()
    }
    }
    if (damagetype.includes('ice') && haveThis) {
    return "lightning_magic"
    } else {
    return damagetype
    }
}

function StrangeKeyEvent(player, persistentData, damagetype, entity) {
    if (!persistentData.StrangeKey) return
    if (!damagetype.includes('player')) return
    let lookAngle = entity.getLookAngle()
    let level = player.level
    let dimension = level.dimension
    let behindPos = entity.position().subtract(lookAngle.scale(1.5))
    player.teleportTo(dimension, behindPos.x(), entity.getY(), behindPos.z(), entity.getYaw(), player.getPitch())
}

function BloodPactDamageEvent(player, EventEntity, persistentData, damagetype) {
    if (!persistentData.BloodPact) return;
    if (!damagetype.includes('blood')) return
    let PlayerMaxHp = EventEntity.getAttribute('minecraft:generic.max_health').getValue(); 
    let Damage = PlayerMaxHp * 0.08
    if (EventEntity.isAlive()) {
    AttackEntity(null, EventEntity, `irons_spellbooks:blood_magic`, Damage);
    }
}

function FateGemStrengthEvent(event, persistentData) {
    if (!persistentData.FateGemStrength) return;
    event.amount *= 0.1;
}

function FateGemIntelligenceEvent(event, persistentData) {
    if (!persistentData.FateGemIntelligence) return;
    event.amount *= 0.1;
}

function RealmSplitterEvent(event, persistentData, damagetype) {
    if (!persistentData.RealmSplitter) return;
    if (damagetype.includes('mob')) return
    event.amount *= 0.1;
}

function SwordSoulCountEvent(event, persistentData, damagetype) {
    if (!persistentData.SwordSoulCount) return;
    let count = persistentData.SwordSoulCount;
    event.amount *= Math.pow(0.8, count);
}

function DemonCallerEvent(event, persistentData, damagetype) {
    if (persistentData.DemonCaller && damagetype.includes('mob')) {
    return "evocation_magic"
    }
    return damagetype
}

let SpiritSurgeValue = {}

function SwordSoulEvent(player, event, persistentData, damagetype, entity) {
    if (!persistentData.SwordSoul) return;
    if (persistentData.ShadowChaser) return;
    let swords = $SpiritSwordEntity.getSpiritSwordsOfOwner(player);
    
    let Playeruuid = player.uuid;
    let level = player.level;
    let item = "minecraft:wooden_sword"
    let canAttack = true
    
    swords.forEach(sword => {
        if (!sword.canLaunch()) {
        canAttack = false
        return;
        }
        
        item = sword.getItemStack();
        let uuid = sword.uuid;
        
        if (persistentData.SpiritSurge) {
            if (!SpiritSurgeValue[uuid]) SpiritSurgeValue[uuid] = 0;
            if (SpiritSurgeValue[uuid] >= 20) {
                SpiritSurgeValue[uuid] = 0;
                sword.startComboAttack(5, 5);
            } else {
                SpiritSurgeValue[uuid] += 1;
            }
        }
        
        let SowrdDamage = sword.getDamage();
        let str = player.getAttribute(`fast:str`).getValue();
        let agi = player.getAttribute(`fast:agi`).getValue();
        SowrdDamage += str;
        SowrdDamage += agi;
        if (persistentData.RealmSplitter) {
            let vit = player.getAttribute(`fast:vit`).getValue();
            SowrdDamage += vit;
        }
        
        let thisDamageSource = null;
        if (persistentData.DemonCaller) {
            thisDamageSource = "irons_spellbooks:evocation_magic";
        }
        
        if (thisDamageSource) {
            sword.launchAt(entity, SowrdDamage, NewDamageSource(thisDamageSource, player));
        } else {
            sword.launchAt(entity, SowrdDamage);
        }
    });
    
    if (!canAttack) return
    
            if (persistentData.SoulPact) {
            let MaidList = getPlayerMaidList(player, 40);
            MaidList.forEach(maid => {
                let str = maid.getAttribute(`fast:str`).getValue();
                let agi = maid.getAttribute(`fast:agi`).getValue();
                let Damage = (str + agi) / 2;
                spawnOrbitingFastFlySwordEntity(level, maid, entity, 0, 0.7, 400, Damage, item);
            });
        }
        
        if (persistentData.RiftsongEdge) {
        let thisDamage = 10
             let str = player.getAttribute(`fast:str`).getValue();
             let agi = player.getAttribute(`fast:agi`).getValue();
            spawnFlySwordEntity(level, player, entity, 10, 0.7, 100, (thisDamage + ((str + agi) / 2)), player.damageSources().mobAttack(player), item);
            let BloodSpellPower = player.getAttribute('irons_spellbooks:blood_spell_power').getValue();
            spawnFlySwordEntity(level, player, entity, 15, 0.7, 100, (thisDamage + (50 * (BloodSpellPower - 1))), NewDamageSource("fast:blood_magic", player), item);
            let EnderSpellPower = player.getAttribute('irons_spellbooks:ender_spell_power').getValue();
            spawnFlySwordEntity(level, player, entity, 20, 0.7, 100, (thisDamage + (50 * (EnderSpellPower - 1))), NewDamageSource("fast:ender_magic", player), item);
        }
    
}

function SourceOfVenomEvent(player, event, persistentData, damagetype, entity) {
    if (!persistentData.SourceOfVenom) return;
    if (!damagetype.includes('poison_cloud')) return
    if (!entity.hasEffect('fast:toxic')) {
    entity.potionEffects.add('fast:toxic', 200, 0, false, false);
    } else {
    let Roxic = entity.getEffect('fast:toxic');
    let EffectLevel = Roxic.getAmplifier();
    entity.removeEffect('fast:toxic');
    entity.potionEffects.add('fast:toxic', 200, EffectLevel + 1, false, false)
    }
}