// priority: 1000

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('fast')
            .requires(src => src.hasPermission(2))
            .then(Commands.literal('difficult')
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .then(Commands.argument('level', Arguments.INTEGER.create(event))
                        .executes(ctx => {
                            let difficultyLevel = Arguments.INTEGER.getResult(ctx, 'level');
                            let player = ctx.source.server.getPlayer(Arguments.PLAYER.getResult(ctx, 'player'));

                            let existingDiffStage = player.stages.getAll().toArray().find(stage => stage.startsWith('difficult_level_'));
                            if (existingDiffStage) {
                                player.stages.remove(existingDiffStage);
                            }

                            player.stages.add('difficult_level_' + difficultyLevel);

                            return 1;
                        })
                    )
                )
            )
    );
});

const difficultLevelDef = [
    { healthMulti: 5, attackMulti: 1.5 },
    { healthMulti: 10, attackMulti: 2 },
    { healthMulti: 20, attackMulti: 4 }
];

const BossdifficultLevelDef = [
    { healthMulti: 1, attackMulti: 1 },
    { healthMulti: 2, attackMulti: 1.5 },
    { healthMulti: 4, attackMulti: 2 }
];

const bossEntities = [
    'fast:alex',
    'cataclysm:ignis',
    'cataclysm:netherite_monstrosity',
    'cataclysm:the_leviathan',
    'cataclysm:ender_guardian',
    'cataclysm:maledictus',
    'cataclysm:the_harbinger',
    'cataclysm:ancient_remnant',
    'cataclysm:scylla',
    'mowziesmobs:frostmaw',
    'mowziesmobs:umvuthi',
    'mowziesmobs:ferrous_wroughtnaut',
    'fast:zombie_summoner',
    'mutantmonsters:mutant_zombie',
    'mutantmonsters:mutant_snow_golem',
    'mutantmonsters:mutant_skeleton',
    'mutantmonsters:mutant_enderman',
    'mutantmonsters:mutant_creeper',
    'irons_spellbooks:dead_king',
    'fast:mysterious_figure',
    'remnant_ossukage:ossukage',
    'cataclysm:amethyst_crab',
    'fast:mysterious_black_cloaked_swordsman',
    "block_factorys_bosses:infernal_dragon",
    "block_factorys_bosses:underworld_knight",
    "block_factorys_bosses:sandworm",
];

const SmallbossEntities = [
    "cataclysm:kobolediator",
    "cataclysm:aptrgangr",
    "cataclysm:wadjet",
    "cataclysm:coralssus",
    "cataclysm:the_prowler",
    "cataclysm:coral_golem",
    "cataclysm:ignited_revenant",
    "cataclysm:ender_golem",
]

EntityEvents.spawned(event => {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity;
    if (!entity) return;
    let entityName = entity.type;
    if (bossEntities.includes(entityName) || SmallbossEntities.includes(entityName)) BossEntityDifficult(entity);
    let Owner = getEntityOwner(entity);
    if (Owner && Owner.isPlayer()) return;
    
    let MobThisData = entity.persistentData
    
    let customData = MobThisData.customData
    
    if (!customData) return
    
    if (customData.enderbonus) {
    let enderbonusList = []
    customData.enderbonus.forEach(item => {
    enderbonusList.push(Item.of(item.id, item.count || 1, item.nbt))
    })
    NewMobEntityEnderBonus(entity, enderbonusList)
    }
    
    if (!customData.difflevelnum) return
    
    if (entity.persistentData.contains('diffLevel')) return;
    
    let diffLevelNum = customData.difflevelnum
    
    let diffLevel = difficultLevelDef[diffLevelNum - 1];
    entity.persistentData.putInt('diffLevel', diffLevelNum);

    if (diffLevel.healthMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.max_health')) {
        entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * diffLevel.healthMulti);
        entity.setHealth(entity.getMaxHealth());
    }
    if (diffLevel.attackMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.attack_damage')) {
        entity.setAttributeBaseValue('minecraft:generic.attack_damage', entity.getAttribute('minecraft:generic.attack_damage').getValue() * diffLevel.attackMulti);
    }
    
    // 新增的僵尸特殊处理逻辑
    if (entityName == 'minecraft:zombie') {
        if (Math.random() < 0.1) { // 10% 概率
            // 2倍血量
            if (entity.attributes.hasAttribute('minecraft:generic.max_health')) {
                entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * 2);
                entity.setHealth(entity.getMaxHealth());
             }

            // 添加移动速度
             if(entity.attributes.hasAttribute('minecraft:generic.movement_speed')){
                entity.setAttributeBaseValue('minecraft:generic.movement_speed', entity.getAttribute('minecraft:generic.movement_speed').getValue() + 0.08);
            }

            // 穿上 fast:fast_boot 鞋子
            entity.setItemSlot(
                'feet',
                Item.of('fast:fast_boots')
            );
            
            //设置自定义名称
            entity.customName = Text.translatable('entity.fast.newzombie');
            
            entity.persistentData.FastZombieLoot = true;
        }
    }
});

function BossEntityDifficult(entity) {
    let MobThisData = entity.persistentData
    
    let customData = MobThisData.customData
    
    if (!customData) return
    
    if (customData.enderbonus) {
    let enderbonusList = []
    customData.enderbonus.forEach(item => {
    enderbonusList.push(Item.of(item.id, item.count || 1, item.nbt))
    })
    NewMobEntityEnderBonus(entity, enderbonusList)
    }
    
    if (!customData.difflevelnum) return
    
    if (entity.persistentData.contains('diffLevel')) return;
    
    let BossdiffLevelNum = customData.difflevelnum
    
        let BossdiffLevel = BossdifficultLevelDef[BossdiffLevelNum - 1];
    entity.persistentData.putInt('diffLevel', BossdiffLevelNum);
    
        if (BossdiffLevel.healthMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.max_health')) {
        entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * BossdiffLevel.healthMulti);
        entity.setHealth(entity.getMaxHealth());
    }
    if (BossdiffLevel.attackMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.attack_damage')) {
        entity.setAttributeBaseValue('minecraft:generic.attack_damage', entity.getAttribute('minecraft:generic.attack_damage').getValue() * BossdiffLevel.attackMulti);
    }
    
}

