ServerEvents.recipes(e => {
  let recipes = e.recipes
  let create = recipes.create
  create.compacting('fast:gold_craftsman_hammer', 'fast:gold_craftsman_hammer_cast').heated();
  
  create.mixing('fast:gold_bowl', ['fast:unfired_gold_bowl', Fluid.lava(1000)]).superheated();
  
  create.mixing('irons_spellbooks:cinder_essence', ['irons_spellbooks:arcane_essence', Fluid.lava(100)]).superheated();
  
  create.mixing('irons_spellbooks:arcane_debris', ['minecraft:ancient_debris', '4x irons_spellbooks:arcane_essence', Fluid.lava(100)]).superheated();
  
  create.mixing('irons_spellbooks:arcane_salvage', ['minecraft:netherite_scrap', '4x irons_spellbooks:arcane_essence', Fluid.lava(100)]).superheated();
  
  create.mixing('minecraft:bedrock', ['minecraft:obsidian', '9x irons_spellbooks:arcane_essence', Fluid.lava(100)]).superheated();
  
  create.filling('fast:water_precision_mechanism', ['create:precision_mechanism', Fluid.water(1000)]);
  
  create.filling('fast:iron_precision_mechanism', ['create:precision_mechanism', Fluid.of("tconstruct:molten_iron", 1000)]);
  
  // 动力合成
  
  create.mechanical_crafting('fast:rose_quartz_gauntlets', [
    ' DDD ',
    'DCCCD',
    'DABAD',
    'DCCCD',
    ' DDD '
  ], {
    D: 'create:polished_rose_quartz',
    A: 'create:electron_tube',
    B: 'create:precision_mechanism',
    C: 'create:transmitter'
  })
  
  create.mechanical_crafting('fast:iron_heart', [
    '     ',
    'DD DD',
    'DDBDD',
    'DDDDD',
    ' DDD '
  ], {
    D: 'minecraft:iron_ingot',
    B: 'create:precision_mechanism',
  })
  
  
  // 序列组装
  
  
  
  let EnderExtendoGripSequencedAssembly = 'fast:ender_brass_hand_sequenced_assembly'
  
    create.sequenced_assembly([
        Item.of('fast:ender_brass_hand')
    ], 'create:brass_hand', [ // 输入
        recipes.createDeploying(EnderExtendoGripSequencedAssembly, [EnderExtendoGripSequencedAssembly, 'create:precision_mechanism']),
        recipes.createDeploying(EnderExtendoGripSequencedAssembly, [EnderExtendoGripSequencedAssembly, 'create:brass_hand']),
        recipes.createDeploying(EnderExtendoGripSequencedAssembly, [EnderExtendoGripSequencedAssembly, 'minecraft:ender_pearl'])
        // 像普通的配方函数一样，被用作这个数组中的序列步骤。输入和输出都有过渡物品
    ]).transitionalItem(EnderExtendoGripSequencedAssembly).loops(5); // 设置过渡物品和循环次数
    
  
  let PrecisionMechanism = 'create:incomplete_precision_mechanism'
  
    create.sequenced_assembly([
        Item.of('create:precision_mechanism')
    ], '#forge:plates/gold', [ // 输入
        recipes.createDeploying(PrecisionMechanism, [PrecisionMechanism, 'create:cogwheel']),
        recipes.createDeploying(PrecisionMechanism, [PrecisionMechanism, 'create:large_cogwheel']),
        recipes.createDeploying(PrecisionMechanism, [PrecisionMechanism, 'minecraft:iron_nugget'])
        // 像普通的配方函数一样，被用作这个数组中的序列步骤。输入和输出都有过渡物品
    ]).transitionalItem(PrecisionMechanism).loops(5); // 设置过渡物品和循环次数
  
    let RoseQuartGauntSequ = 'fast:rose_quartz_gauntlets_sequenced_assembly'
    
    create.sequenced_assembly([
        Item.of('fast:rose_quartz_gauntlets')
    ], 'fast:rose_quartz_gauntlets', [ // 输入
        recipes.createCutting(RoseQuartGauntSequ, RoseQuartGauntSequ)
        // 像普通的配方函数一样，被用作这个数组中的序列步骤。输入和输出都有过渡物品
    ]).transitionalItem(RoseQuartGauntSequ).loops(10); // 设置过渡物品和循环次数
  
    let DiamondCastSeqAss = 'fast:diamond_craftsman_hammer_cast_sequenced_assembly' 
    
    create.sequenced_assembly([
        Item.of('fast:diamond_craftsman_hammer')
    ], 'fast:diamond_craftsman_hammer_cast', [ // 输入
        recipes.createFilling(DiamondCastSeqAss, [DiamondCastSeqAss, Fluid.lava(1000)]),
        recipes.createPressing(DiamondCastSeqAss, DiamondCastSeqAss)
        // 像普通的配方函数一样，被用作这个数组中的序列步骤。输入和输出都有过渡物品
    ]).transitionalItem(DiamondCastSeqAss).loops(5); // 设置过渡物品和循环次数
    
    let NetheriteCastSeqAss = 'fast:netherite_ingot_craftsman_hammer_cast_sequenced_assembly' 
    
    create.sequenced_assembly([
        Item.of('fast:netherite_ingot_craftsman_hammer')
    ], 'fast:netherite_ingot_craftsman_hammer_cast', [ // 输入
        recipes.createFilling(NetheriteCastSeqAss, [NetheriteCastSeqAss, Fluid.lava(1000)]),
         recipes.createPressing(NetheriteCastSeqAss, NetheriteCastSeqAss)
        // 像普通的配方函数一样，被用作这个数组中的序列步骤。输入和输出都有过渡物品
    ]).transitionalItem(NetheriteCastSeqAss).loops(20); // 设置过渡物品和循环次数
    
    let BrassCastSeqAss = 'fast:brass_craftsman_hammer_cast_sequenced_assembly' // 创建一个变量来存储过渡物品，使代码更具可读性
    create.sequenced_assembly([
        Item.of('fast:brass_craftsman_hammer')
    ], 'fast:brass_craftsman_hammer_cast', [ // 输入
        recipes.createFilling(BrassCastSeqAss, [BrassCastSeqAss, Fluid.lava(1000)]),
         recipes.createPressing(NetheriteCastSeqAss, NetheriteCastSeqAss)
        // 像普通的配方函数一样，被用作这个数组中的序列步骤。输入和输出都有过渡物品
    ]).transitionalItem(NetheriteCastSeqAss).loops(5); // 设置过渡物品和循环次数
})