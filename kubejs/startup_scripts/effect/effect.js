StartupEvents.registry('mob_effect', event => {
        
    event.create('fast:faith_effect')
        .beneficial() // 信仰
        .modifyAttribute('minecraft:generic.max_health', 'faith_effect', 1, "multiply_base");
        
    event.create('fast:sword_combo')
        .beneficial()
        
    event.create('fast:oath_of_knight')
        .beneficial()
        
    event.create('fast:toxic')
        .beneficial()
        
    event.create('fast:full_throttle')
        .beneficial() // 火力全开
        .modifyAttribute('minecraft:generic.movement_speed', 'full_throttle', -0.01, "multiply_total");
        
    event.create('fast:taunt_effect')
        .beneficial() // 嘲讽
        .effectTick((mob, lvl) => {
        global.TauntEffectEvent(mob, lvl)
        })
        
    event.create('fast:card_attack')
        .beneficial() // 临时攻击
        .modifyAttribute('minecraft:generic.attack_damage', 'card_attack', 1, "addition");
        
    event.create('fast:blood_str')
        .beneficial() 
        .modifyAttribute('fast:str', 'blood_str', 1, "addition");
        
    event.create('fast:blood_int')
        .beneficial() 
        .modifyAttribute('fast:int', 'blood_int', 1, "addition");
        
    event.create('fast:counter')
        .beneficial() // 反击
        .modifyAttribute('minecraft:generic.attack_damage', 'counter_effect', 0.2, "multiply_base");
        
    event.create('fast:defensive_stance')
        .beneficial() // 防御姿态
        .modifyAttribute('fast:defense', 'defensive_stance', 0.1, "multiply_base");
        
    event.create('fast:offensive_stance')
        .beneficial() // 攻击姿态
        .modifyAttribute('fast:defense', 'offensive_stance', 1.5, "multiply_base");

    event.create('fast:blazing_effect')
        .beneficial() // 炙热
        .effectTick((entity, lvl) => {
        global.BlazingEffectEvent(entity, lvl)
            });
            
    event.create('fast:vulnerable_effect')
        .harmful();  // 易伤
});

