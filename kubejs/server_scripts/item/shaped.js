// priority: 1000
ServerEvents.recipes(event => {
    event.shaped("fast:endless_battery1", [
        'AAA',
        'ADA',
        'AAA'
    ], {
        A: 'minecraft:amethyst_shard',
        D: 'minecraft:diamond'
    });
    
    event.shaped("tacz:gun_smith_table", [
        '   ',
        'CCC',
        'CGC'
    ], {
        C: 'money:coin_gold',
        G: 'minecraft:crafting_table'
    });
    
    event.shaped("money:magic_transformation_coin", [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'irons_spellbooks:magic_cloth',
        B: 'money:coin_copper'
    });
    
    event.shaped("mbd2:create001", [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:andesite_casing',
        B: 'create:cogwheel'
    });
    
    event.shaped("money:magic_coin_gold", [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'irons_spellbooks:arcane_essence',
        B: 'money:coin_gold'
    });
    
    event.shaped("money:magic_coin_diamond", [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'irons_spellbooks:arcane_essence',
        B: 'money:magic_coin_gold'
    });
    
    event.shaped("money:magic_coin_emerald", [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'irons_spellbooks:arcane_essence',
        B: 'money:magic_coin_diamond'
    });
    
    event.shaped("money:magic_coin_netherite", [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'irons_spellbooks:arcane_essence',
        B: 'money:magic_coin_emerald'
    });
    
    event.shaped("bountiful:bountyboard", [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:paper',
        C: 'minecraft:coal'
    });
    
    event.shaped("hmag:greedy_crystal", [
       'ABC',
       'DEF',
       'GHI'
    ], {
       A: 'fast:fire_magic_shard',
       B: 'fast:ice_magic_shard',
       C: 'fast:nature_magic_shard',
       D: 'fast:lightning_magic_shard',
       E: 'minecraft:nether_star',
       F: 'fast:blood_magic_shard',
       G: 'fast:holy_magic_shard',
       H: 'fast:ender_magic_shard',
       I: 'fast:evocation_magic_shard'
    });
    
    event.shaped("fast:shimmering_diamond", [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:sturdy_sheet',
        B: 'fast:endless_battery2',
        C: 'create:precision_mechanism'
    });
    
    event.shaped("fast:precision_pouch", [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:sturdy_sheet',
        B: 'create:sand_paper',
        C: 'create:precision_mechanism'
    });
    
    event.shaped("fast:thunderbrand_magazine", [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:sturdy_sheet',
        B: 'irons_spellbooks:lightning_bottle',
        C: 'create:precision_mechanism'
    });
    
    event.shaped("fast:shining_beacon", [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'minecraft:beacon',
        B: 'create:electron_tube',
    });
    
    event.shaped("fast:endless_battery3", [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'fast:endless_battery2',
        B: 'create:brass_sheet',
    });
    
    event.shaped("fast:endless_battery4", [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'fast:endless_battery3',
        B: 'create:polished_rose_quartz',
    });
    
    event.shaped("fast:endless_battery5", [
        'BCB',
        'BAB',
        'BCB'
    ], {
        A: 'create:precision_mechanism',
        B: 'fast:endless_battery4',
        C: 'create:sturdy_sheet',
    });
    
    event.shaped("fast:apprentice_staff", [
        '  B',
        ' A ',
        'A  '
    ], {
        A: 'minecraft:stick',
        B: 'irons_spellbooks:mana_upgrade_orb',
    });
    
    event.shaped("fast:recoil_musket", [
        '  A',
        ' A ',
        'AA '
    ], {
        A: 'create:copper_sheet',
    });
    
    event.shaped("hmag:evil_crystal", [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'hmag:evil_crystal_fragment',
    });
    
    event.shaped("minecraft:diamond", [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'hmag:diamond_fragment',
    });
    
    event.shaped("minecraft:emerald", [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'hmag:emerald_fragment',
    });
});

let CelestisynthItems = {
    'celestisynth:solaris': 0.2,
    'celestisynth:crescentia': 0.1,
    'celestisynth:breezebreaker': 1,
    'celestisynth:poltergeist': 1,
    'celestisynth:aquaflora': 0.1,
    'celestisynth:frostbound': 0.7,
    'celestisynth:keres': 0.1,
    }

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('tarotcards:the_devil', 1), 
        [
            Item.of('touhou_little_maid:smart_slab_empty')
        ]
    );
    
    event.shapeless(
        Item.of('mbd2:fastchongdian', 1), 
        [
            Item.of('mbd2:fast_wjny')
        ]
    );
    
    const addNewCelestisynth = (item) => {
    event.shapeless(
        Item.of('celestisynth:celestial_core', 1, { item: item }),
        [
            Item.of('celestisynth:celestial_core'),
            Item.of(item)
        ]
    )
    .consumeIngredient('celestisynth:celestial_core')
    .keepIngredient(item);
    };

    Object.keys(CelestisynthItems).forEach(addNewCelestisynth);
    
})

