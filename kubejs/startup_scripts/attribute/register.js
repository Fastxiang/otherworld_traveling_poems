let $RangedAttribute = Java.loadClass('net.minecraft.world.entity.ai.attributes.RangedAttribute')

// 注册新的额外伤害属性和攻击无敌帧属性
StartupEvents.registry('attribute', event => {
    event.createCustom('fast:extra_damage', () => {
        return new $RangedAttribute(
            'attribute.name.extra_damage',
            0.0,
            -23333.0,
            23333.0
        );
    });
    event.createCustom('fast:str', () => {
        return new $RangedAttribute(
            'attribute.name.str',
            0.0,
            -23333.0,
            23333.0
        );
    });
    event.createCustom('fast:agi', () => {
        return new $RangedAttribute(
            'attribute.name.agi',
            0.0,
            -23333.0,
            23333.0
        );
    });
    event.createCustom('fast:int', () => {
        return new $RangedAttribute(
            'attribute.name.int',
            0.0,
            -23333.0,
            23333.0
        );
    });
    event.createCustom('fast:vit', () => {
        return new $RangedAttribute(
            'attribute.name.vit',
            0.0,
            -23333.0,
            23333.0
        );
    });
    event.createCustom('fast:tec', () => {
        return new $RangedAttribute(
            'attribute.name.tec',
            0.0,
            -23333.0,
            23333.0
        );
    });
    event.createCustom('fast:defense', () => {
        return new $RangedAttribute(
            'attribute.name.defense',
            0.0,
            -23333.0,
            23333.0
        );
    });
    event.createCustom('fast:bar_size', () => {
        return new $RangedAttribute(
            'attribute.fast.bar_size',
            0.0,
            -100.0,
            300.0
        );
    });
    event.createCustom('fast:projectile_pierce', () => {
        return new $RangedAttribute(
            'attribute.fast.projectile_pierce',
            0.0,
            -100.0,
            300.0
        );
    });
    event.createCustom('fast:line_strength', () => {
        return new $RangedAttribute(
            'attribute.fast.line_strength',
            0.0,
            -100.0,
            300.0
        );
    });
    event.createCustom('kubejs:generic.attack_invulnerable_frames', () => {
        return new $RangedAttribute(
            'attribute.name.generic.attack_invulnerable_frames',
            1.0,
            0.0, 
            5.0
        );
    });
    event.createCustom('fast:dodge_chance', () => {
        return new $RangedAttribute(
            'attribute.fast.dodge_chance',
            0.0,
            -1.0,
            1.0
        );
    });
    
    event.createCustom('fast:block_chance', () => {
        return new $RangedAttribute(
            'attribute.fast.block_chance',
            0.0,
            -1.0,
            1.0
        );
    });
    
    event.createCustom('fast:block_value', () => {
        return new $RangedAttribute(
            'attribute.fast.block_value',
            0.0,
            -23333.0,
            23333.0
        );
    });
    
});

// 为玩家添加额外伤害属性和攻击无敌帧和rpg属性
ForgeModEvents.onEvent(
    'net.minecraftforge.event.entity.EntityAttributeModificationEvent',
    (event) => {
    
        const attributes = [
            'fast:extra_damage',
            'kubejs:generic.attack_invulnerable_frames',
            'fast:str',
            'fast:agi',
            'fast:int',
            'fast:vit',
            'fast:tec',
            'fast:defense',
            'fast:bar_size',
            'fast:line_strength',
            'fast:projectile_pierce',
            'fast:dodge_chance',
            'fast:block_chance',
            'fast:block_value',
        ];
        
        event.getTypes().forEach(entityType => {
            attributes.forEach(attr => {
                if (!event.has(entityType, attr)) {
                    event.add(entityType, attr);
                }
            });
        });
    }
);
