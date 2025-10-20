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
    event.createCustom('kubejs:generic.attack_invulnerable_frames', () => {
        return new $RangedAttribute(
            'attribute.name.generic.attack_invulnerable_frames',
            1.0,
            0.0, 
            5.0
        );
    });
    
});

// 为玩家添加额外伤害属性和攻击无敌帧和rpg属性
ForgeModEvents.onEvent(
    'net.minecraftforge.event.entity.EntityAttributeModificationEvent',
    (event) => {
        if (!event.has('player', 'fast:extra_damage')) {
            event.add('player', 'fast:extra_damage');
        }
        if (!event.has('player', 'kubejs:generic.attack_invulnerable_frames')) {
            event.add('player', 'kubejs:generic.attack_invulnerable_frames');
        }
        if (!event.has('player', 'fast:str')) {
            event.add('player', 'fast:str');
        }
        if (!event.has('player', 'fast:agi')) {
            event.add('player', 'fast:agi');
        }
        if (!event.has('player', 'fast:int')) {
            event.add('player', 'fast:int');
        }
        if (!event.has('player', 'fast:vit')) {
            event.add('player', 'fast:vit');
        }
        if (!event.has('player', 'fast:tec')) {
            event.add('player', 'fast:tec');
        }
        if (!event.has('player', 'fast:defense')) {
            event.add('player', 'fast:defense');
        }
        if (!event.has('touhou_little_maid:maid', 'fast:str')) {
            event.add('touhou_little_maid:maid', 'fast:str');
        }
        if (!event.has('touhou_little_maid:maid', 'fast:agi')) {
            event.add('touhou_little_maid:maid', 'fast:agi');
        }
        if (!event.has('touhou_little_maid:maid', 'fast:int')) {
            event.add('touhou_little_maid:maid', 'fast:int');
        }
        if (!event.has('touhou_little_maid:maid', 'fast:vit')) {
            event.add('touhou_little_maid:maid', 'fast:vit');
        }
        if (!event.has('touhou_little_maid:maid', 'fast:defense')) {
            event.add('touhou_little_maid:maid', 'fast:defense');
        }
    }
);

