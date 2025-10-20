StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('fireball_plus') 
        .setCastTime(40)
        .setCooldownSeconds(25)
        .setBaseManaCost(60)
        .setManaCostPerLevel(15)
        .setCastType('long')
        .setSchool('irons_spellbooks:fire') 
        .setMinRarity("rare")
        .setMaxLevel(5)
        .setAllowLooting(false)        
        .canBeCraftedBy(() => false)
        .setUniqueInfo((spellLevel, caster) => {
        let er = 0;
        let damage = (5 + spellLevel * 5) * 2.5;
        if (caster) {
        let powerModifier = caster.getAttribute('irons_spellbooks:spell_power').getValue();
        let thispowerModifier = caster.getAttribute('irons_spellbooks:fire_spell_power').getValue();
        let power = powerModifier * thispowerModifier;
        damage = damage * power;
        damage = parseFloat(damage.toFixed(2));
        return [
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.fireball_plus1`, damage)), 
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.fireball_plus2`, er))
            ]
        } else {
            return [
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.fireball_plus1`, damage)), 
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.fireball_plus2`, er))
            ]
            }
        })
        .onCast(ctx => {       
            if (ctx.level.isClientSide()) return; 
            global.fireballplusCast(ctx); 
        });

    event.create('custom_spell') 
        .setCastTime(30)
        .setCooldownSeconds(5)
        .setBaseManaCost(150)
        .setManaCostPerLevel(-7)
        .setCastType('long')
        .setSchool('irons_spellbooks:ender') 
        .setMinRarity("legendary")
        .setMaxLevel(1)
        .setAllowLooting(false)        
        .canBeCraftedBy(() => false)
        .setUniqueInfo((spellLevel, caster) => {
        if (caster) {
            return [
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.custom_spell1`)),
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.custom_spell2`)),
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.custom_spell3`)),
            ]
            } else {
             return [
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.custom_spell1`)),
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.custom_spell2`)),
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.custom_spell3`)),
            ]
            }
        })
        .onCast(ctx => {       
            if (ctx.level.isClientSide()) return; 
            global.CustomSpell(ctx); 
        });
        
    event.create('explosion') 
        .setCastTime(120)
        .setCooldownSeconds(20)
        .setBaseManaCost(100)
        .setManaCostPerLevel(0)
        .setCastType('long')
        .setSchool('irons_spellbooks:fire') 
        .setMinRarity("legendary")
        .setMaxLevel(1)
        .setAllowLooting(false)        
        .canBeCraftedBy(() => false)
        .onPreCast(ctx => {
        if (ctx.level.isClientSide()) return; 
        global.ExplosionPre(ctx);
        })
        .setUniqueInfo((spellLevel, caster) => {
        let up = 1;
        let damage = 70
        let er = 3
        if (caster) {
        let powerModifier = caster.getAttribute('irons_spellbooks:spell_power').getValue();
        let thispowerModifier = caster.getAttribute('irons_spellbooks:fire_spell_power').getValue();
        let power = powerModifier * thispowerModifier;
        let CastTimeReduction = caster.getAttribute('irons_spellbooks:cast_time_reduction').getValue();
        if (CastTimeReduction < -1) {
    CastTimeReduction = -1;
        }
        up += ((1 - CastTimeReduction) * 9);
        damage = 70 * powerModifier * thispowerModifier * up;
        damage = parseFloat(damage.toFixed(2));
        er = 3 * up;
        return [
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.explosion1`, damage)), 
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.explosion2`, er))
            ]
        } else {
        return [
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.explosion1`, damage)), 
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.explosion2`, er))
        ]
        }
            
        })
        .onCast(ctx => {       
            if (ctx.level.isClientSide()) return; 
            global.Explosion(ctx); 
        });
        
    event.create('oath_of_knight') 
        .setCastTime(20)
        .setCooldownSeconds(60)
        .setBaseManaCost(500)
        .setManaCostPerLevel(-20)
        .setCastType('long')
        .setSchool('irons_spellbooks:holy') 
        .setMinRarity("legendary")
        .setMaxLevel(1)
        .setAllowLooting(false)        
        .canBeCraftedBy(() => false)
        .setUniqueInfo((spellLevel, caster) => {
        let time = 20
        if (caster) {
        let thispowerModifier = caster.getAttribute('irons_spellbooks:holy_spell_power').getValue();
        let powerModifier = caster.getAttribute('irons_spellbooks:spell_power').getValue();
        time *= thispowerModifier * powerModifier
            return [
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.oath_of_knight1`, time)),
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.oath_of_knight2`)),
            ]
            } else {
             return [
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.oath_of_knight1`, time)),
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.oath_of_knight2`)),
            ]
            }
        })
        .onCast(ctx => {       
            if (ctx.level.isClientSide()) return; 
            global.OathOfKnight(ctx); 
        });
        
    event.create('fast:sword_technique_four_strike')
    .setCooldownSeconds(0)
    .setBaseManaCost(0)
    .setManaCostPerLevel(0)
    .setCastType('instant')
    .setSchool('fast:physical')
    .setMinRarity('legendary')
    .setMaxLevel(1)
    .setAllowLooting(false) 
    .canBeCraftedBy(() => false) 
    .setUniqueInfo((spellLevel, caster) => { 
        let anger_value = 50;
        let damage = 0
        if (caster) {
        let powerModifier = caster.getAttribute('fast:physical_mastery').getValue();
        let attack = caster.getAttribute('minecraft:generic.attack_damage').getValue();
        damage = (damage + attack) * powerModifier;
        damage = parseFloat(damage.toFixed(2));
        return [
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "动作期间"))
            ]
        } else {
        return [
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "动作期间"))
        ]
        }
    })
    .onCast(ctx => {
        if (ctx.level.isClientSide()) return; 
        global.SwordTechniqueFourStrike(ctx); 
    })
    .checkPreCastConditions(ctx => {
        return global.SwordTechniqueCanUse(ctx, 50)
        });
        
    event.create('fast:sword_technique_decisive_strike')
    .setCooldownSeconds(0)
    .setBaseManaCost(0)
    .setManaCostPerLevel(0)
    .setCastType('instant')
    .setSchool('fast:physical')
    .setMinRarity('legendary')
    .setMaxLevel(1)
    .setAllowLooting(false) 
    .canBeCraftedBy(() => false) 
    .setUniqueInfo((spellLevel, caster) => { 
        let anger_value = 20;
        let damage = 0
        if (caster) {
            let powerModifier = caster.getAttribute('fast:physical_mastery').getValue();
            let attack = caster.getAttribute('minecraft:generic.attack_damage').getValue();
            damage = (damage + attack) * powerModifier;
            damage = parseFloat(damage.toFixed(2));
        return [
            Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
            Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
            Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "动作期间+0.5秒"))
        ]
        } else {
        return [
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "动作期间+0.5秒"))
        ]
        }
    })
    .onCast(ctx => {
        if (ctx.level.isClientSide()) return; 
        global.SwordTechniqueDecisiveStrike(ctx); 
    })
    .checkPreCastConditions(ctx => {
        return global.SwordTechniqueCanUse(ctx, 20)
    });
    
    event.create('fast:sword_technique_flying_sword_guard')
    .setCooldownSeconds(0)
    .setBaseManaCost(0)
    .setManaCostPerLevel(0)
    .setCastType('instant')
    .setSchool('fast:physical')
    .setMinRarity('legendary')
    .setMaxLevel(1)
    .setAllowLooting(false) 
    .canBeCraftedBy(() => false) 
    .setUniqueInfo((spellLevel, caster) => { 
        let anger_value = 50;
        let damage = 0
        if (caster) {
            let powerModifier = caster.getAttribute('fast:physical_mastery').getValue();
            let attack = caster.getAttribute('minecraft:generic.attack_damage').getValue();
            damage = (damage + attack) * 0.3 * powerModifier;
            damage = parseFloat(damage.toFixed(2));
            return [
            Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
            Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
            Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "1秒"))
        ]
        } else {
        return [
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
            Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "1秒"))
        ]
        }
    })
    .onCast(ctx => {
        if (ctx.level.isClientSide()) return; 
        global.SwordTechniqueFlyingSwordGuard(ctx); 
    })
    .checkPreCastConditions(ctx => {
        return global.SwordTechniqueCanUse(ctx, 50)
    });
    
    event.create('fast:sword_technique_moon_god_calamity')
    .setCooldownSeconds(0)
    .setBaseManaCost(0)
    .setManaCostPerLevel(0)
    .setCastType('instant')
    .setSchool('fast:physical')
    .setMinRarity('legendary')
    .setMaxLevel(1)
    .setAllowLooting(false) 
    .canBeCraftedBy(() => false) 
    .setUniqueInfo((spellLevel, caster) => { 
        let anger_value = 40; 
        let damage = 0
        if (caster) {
            let powerModifier = caster.getAttribute('fast:physical_mastery').getValue();
            let attack = caster.getAttribute('minecraft:generic.attack_damage').getValue();
            damage = (damage + attack) * 0.3 * powerModifier;
            damage = parseFloat(damage.toFixed(2));
            return [
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "0.6秒"))
            ]
        } else {
            return [
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "0.6秒"))
            ]
        }
    })
    .onCast(ctx => {
        if (ctx.level.isClientSide()) return; 
        global.SwordTechniqueMoonGodCalamity(ctx); 
    })
    .checkPreCastConditions(ctx => {
        return global.SwordTechniqueCanUse(ctx, 40) 
    });
    
    event.create('fast:sword_technique_heroic_strike')
    .setCooldownSeconds(0)
    .setBaseManaCost(0)
    .setManaCostPerLevel(0)
    .setCastType('instant')
    .setSchool('fast:physical')
    .setMinRarity('legendary')
    .setMaxLevel(1)
    .setAllowLooting(false) 
    .canBeCraftedBy(() => false) 
    .setUniqueInfo((spellLevel, caster) => { 
        let anger_value = 20; 
        let damage = 0;
        if (caster) {
            let powerModifier = caster.getAttribute('fast:physical_mastery').getValue();
            let Defense = caster.getAttribute('fast:defense').getValue();
            damage = (damage + Defense) * 0.3 * powerModifier;
            damage = parseFloat(damage.toFixed(2));
            return [
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
                Component.green(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "1秒"))
            ]
        } else {
            return [
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.damage_value`, damage)), 
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.anger_value`, anger_value)),
                Component.black(Text.translatable(`item.irons_spellbooks.scroll.tooltip.sword_technique_cd`, "1秒"))
            ]
        }
    })
    .onCast(ctx => {
        if (ctx.level.isClientSide()) return; 
        global.SwordTechniqueHeroicStrike(ctx); 
    })
    .checkPreCastConditions(ctx => {
        return global.SwordTechniqueCanUse(ctx, 20) 
    });

})



