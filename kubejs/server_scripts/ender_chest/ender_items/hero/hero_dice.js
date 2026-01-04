// priority: 500

registerItemMaidBauble("fast:the_hero_dice")
EnderBonusOnLivingHurtByEntity.addBonus("fast:the_hero_dice", HeroDiceEvent, 6)

function HeroDiceEvent(handler, event) {
    let EventEntity = event.source.actual;
    let entity = event.entity
    let level = EventEntity.level
    let server = EventEntity.server
    let uuid = EventEntity.uuid
    let data = handler.customData
    let damagetype = data.damageType
    if (isInCooldown("the_hero_dice", uuid, level)) return
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    
    EntityCanTell(EventEntity, `第一次掷骰: ${dice1} (决定效果)`)
    EntityCanTell(EventEntity, `第二次掷骰: ${dice2} (决定数值)`)

    let heroDiceEffects = {
        6: { 
            values: { 1: 1, 2: 25, 3: 50, 4: 100, 5: 400, 6: 1000 },
            apply: (val) => {
                handler.addDamageMultiplier(val / 100);
                EntityCanTell(EventEntity, `本次伤害增加 ${val}%`)
            }
        },
        1: { 
            values: { 1: 100, 2: 80, 3: 60, 4: 40, 5: 10, 6: 1 },
            apply: (val) => {
                handler.addDamageMultiplier(-val / 100)
                EntityCanTell(EventEntity, `本次伤害减少 ${val}%`)
            }
        },
        4: { 
            values: {
            1: "player",
            2: "ender_magic",
            3: "tacz.bullet",
            4: "arrow",
            5: "danmaku",
            6: "holy_magic"
            },
            apply: (val) => {
                let TypeMessage = Text.translatable(`fast.damagetype.${val}`).getString()
                EntityCanTell(EventEntity, `本次伤害变为: ${TypeMessage}伤害`)
                handler.setDamageType(val)
            }
        },
        5: {
            values: { 1: 10, 2: 50, 3: 100, 4: 200, 5: 300, 6: 400 },
            apply: (val) => {
                let extra = event.amount * (val / 100);
                server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(EventEntity, entity, "fast:player", extra);
        }
       });
               EntityCanTell(EventEntity, `本次伤害附加 ${val}% 物理伤害`)
            }
        },
        3: {
            values: { 1: 1, 2: 50, 3: 100, 4: 200, 5: 400, 6: 500 }, 
            apply: (val) => {
                handler.addExtraDamage(val)
                EntityCanTell(EventEntity, `本次伤害额外增加 ${val}`)
            }
        },
        2: {
            values: { 1: 10, 2: 20, 3: 40, 4: 80, 5: 150, 6: 300 }, 
            apply: (val) => {
                let randomType = FastMagicDamageType[Math.floor(Math.random() * FastMagicDamageType.length)];
                let extra = event.amount * (val / 100);
                server.scheduleInTicks(1, () => {
        if (entity.isAlive()) {
        AttackEntity(EventEntity, entity, `fast:${randomType}`, extra);
        }
       });
           let TypeMessage = Text.translatable(`fast.damagetype.${randomType}`).getString()
                EntityCanTell(EventEntity, `本次伤害附加 ${val}% ${TypeMessage}伤害`)
            }
        }
    };
    
    let cd = 100
    if (hasEntityEnderBonus(EventEntity, "fast:gambler_zeal")) {
    cd -= 60
    }
    let effect = heroDiceEffects[dice1];
    if (!effect) return;
    let value = effect.values[dice2];
    effect.apply(value);
    addCooldown("the_hero_dice", uuid, cd, level)
}