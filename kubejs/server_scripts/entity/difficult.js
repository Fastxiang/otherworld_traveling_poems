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
    'mokels_bossfight_saphyra:witchboss',
    'mokels_bossfight_saphyra:mothboss',
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
    let player = entity.getLevel().getNearestPlayer(entity, 240);
    let entityName = entity.type;
    if (!player) return;
    if (bossEntities.includes(entityName) || SmallbossEntities.includes(entityName)) BossEntityDifficult(entity, player);
    if (!entity.isLiving() || !(entity.isMonster() || entityName.startsWith('iceandfire'))) return;
    let Owner = getEntityOwner(entity);
    if (Owner && Owner.isPlayer()) return;
    if (entity.persistentData.contains('diffLevel')) return;

    let diffStage = player.stages.getAll().toArray().find(stage => stage.startsWith('difficult_level_'));
    let diffLevelNum = 1;

    if (diffStage) {
        diffLevelNum = parseInt(diffStage.match('difficult_level_(\\d+)')[1]);
    }

    let diffLevel = difficultLevelDef[diffLevelNum - 1];
    entity.persistentData.putInt('diffLevel', diffLevelNum);

    if (diffLevel.healthMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.max_health')) {
        entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * diffLevel.healthMulti);
        entity.setHealth(entity.getMaxHealth());
    }
    if (diffLevel.attackMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.attack_damage')) {
        entity.setAttributeBaseValue('minecraft:generic.attack_damage', entity.getAttribute('minecraft:generic.attack_damage').getValue() * diffLevel.attackMulti);
    }
    
    if (entityName === "minecraft:skeleton") {
			entity.setItemSlot('mainhand', Item.of('minecraft:bow'));
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

function BossEntityDifficult(entity, player) {
   if (entity.persistentData.contains('diffLevel')) return;

   let BossdiffStage = player.stages.getAll().toArray().find(stage => stage.startsWith('difficult_level_'));
    let BossdiffLevelNum = 1;
    
    if (BossdiffStage) {
        BossdiffLevelNum = parseInt(BossdiffStage.match('difficult_level_(\\d+)')[1]);
    }
    
        let BossdiffLevel = BossdifficultLevelDef[BossdiffLevelNum - 1];
    entity.persistentData.putInt('diffLevel', BossdiffLevelNum);
    
        if (BossdiffLevel.healthMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.max_health')) {
        entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * BossdiffLevel.healthMulti);
        entity.setHealth(entity.getMaxHealth());
    }
    if (BossdiffLevel.attackMulti !== 0 && entity.attributes.hasAttribute('minecraft:generic.attack_damage')) {
        entity.setAttributeBaseValue('minecraft:generic.attack_damage', entity.getAttribute('minecraft:generic.attack_damage').getValue() * BossdiffLevel.attackMulti);
    }
    let type = entity.type;
    
    if (type == 'irons_spellbooks:dead_king') {
        let x = entity.x;
        let y = entity.y;
        let z = entity.z;
        let currentPos = new $Vec3(x, y, z);

        for (const [existingKey, existingData] of instance) {
            let existingAABB = createCenteredAABB(
                existingData.instancex + 0.5,
                existingData.instancey + 0.5,
                existingData.instancez + 0.5,
                50
            );
            if (existingAABB.contains(currentPos)) {
                entity.persistentData.Instance = {
                    type: existingData.dungeonType,
                    wave: 1,
                    spawnx: existingData.instancex,
                    spawny: existingData.instancey,
                    spawnz: existingData.instancez,
                    killcount: 1,
                };
               break;
            }
        }
    }
    
}

