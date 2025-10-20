// priority: 1000
const killcont = new Map();
const instance = new Map();
const instancetime = new Map();

const dungeonMobs = {
    fast1: {
        1: [{ type: 'minecraft:zombie', count: 3, xp: 2 }, { type: 'minecraft:zombie', count: 2, xp: 2 }],
        2: [{ type: 'minecraft:zombie', count: 4, xp: 2 }, { type: 'minecraft:zombie', count: 6, xp: 2 }],
        3: [{ type: 'minecraft:zombie', count: 15, xp: 2 }]
    },
    fast2: {
        1: [{ type: 'grimoireofgaia:orc', count: 1, xp: 4 }],
        2: [{ type: 'grimoireofgaia:mimic', count: 1, xp: 4 }],
        3: [{ type: 'grimoireofgaia:naga', count: 1, xp: 4 }]
    },
    fast3: {
        1: [{ type: 'grimoireofgaia:werecat', count: 1, xp: 5 }],
        2: [{ type: 'grimoireofgaia:sludge_girl', count: 1, xp: 5 }],
        3: [{ type: 'grimoireofgaia:werecat', count: 1, xp: 5 }, { type: 'grimoireofgaia:sludge_girl', count: 1, xp: 5 }]
    },
    fast4: { 
        1: [{ type: 'grimoireofgaia:matango', count: 2, xp: 10 }],
        2: [{ type: 'grimoireofgaia:shaman', count: 1, xp: 10 }],
        3: [{ type: 'grimoireofgaia:shaman', count: 2, xp: 10 }]
    },
    fast5: { 
        1: [{ type: 'list', count: 1, xp: 8 }, { type: 'list', count: 1, xp: 8 }],
        2: [{ type: 'list', count: 1, xp: 8 }, { type: 'list', count: 1, xp: 8 }, { type: 'list', count: 1, xp: 8 }],
        3: [{ type: 'list', count: 1, xp: 8 }, { type: 'list', count: 1, xp: 8 }, { type: 'list', count: 1, xp: 8 }, { type: 'list', count: 1, xp: 8 }]
    },
    fast6: {
        1: [{ type: 'fast:alex', count: 1, xp: 49 }]
    },
    fast7: {
        1: [{ type: 'mokels_bossfight_saphyra:witchboss', count: 1, xp: 92 }]
    },
    fast8: {
        1: [{ type: 'fast:zombie_summoner', count: 1, xp: 21 }]
    },
    fast9: {
        1: [{ type: 'minecraft:blaze', count: 5, xp: 21 }],
        2: [{ type: 'minecraft:blaze', count: 5, xp: 21 }],
        3: [{ type: 'minecraft:blaze', count: 6, xp: 21 }]
    },
    fast10: {
        1: [{ type: 'mowziesmobs:umvuthi', count: 1, xp: 49 }]
    },
    fast11: {
        1: [{ type: 'mowziesmobs:ferrous_wroughtnaut', count: 1, xp: 49 }]
    },
    fast12: {
        1: [{ type: 'mowziesmobs:frostmaw', count: 1, xp: 49 }]
    },
    fast13: {
        1: [{ type: 'irons_spellbooks:dead_king_corpse', count: 1, xp: 49 }]
    },
    fast14: {
        1: [{ type: 'remnant_ossukage:ossukage', count: 1, xp: 49 }]
    },
    fast15: {
        1: [{ type: 'mutantmonsters:mutant_zombie', count: 1, xp: 49 }]
    },
    fast16: {
        1: [{ type: 'cataclysm:ignis', count: 1, xp: 121 }]
    },
    fast17: {
        1: [{ type: 'mutantmonsters:mutant_skeleton', count: 1, xp: 49 }]
    },
    fast18: {
        1: [{ type: 'mutantmonsters:mutant_enderman', count: 1, xp: 49 }]
    },
    fast19: {
        1: [{ type: 'mutantmonsters:mutant_creeper', count: 1, xp: 49 }]
    },
    fast20: {
        1: [{ type: "list", count: 1, xp: 14 },
        { type: "list", count: 1, xp: 14 },
        { type: "list", count: 1, xp: 14 },
        { type: "list", count: 1, xp: 14 },
        { type: "list", count: 1, xp: 14 },
        ]
    },
    fast21: {
        1: [{ type: 'fast:mysterious_figure', count: 1, xp: 200 }]
    },
    fast22: {
        1: [{ type: 'cataclysm:ender_guardian', count: 1, xp: 121 }]
    },
    fast23: {
        1: [{ type: 'cataclysm:netherite_monstrosity', count: 1, xp: 121 }]
    },
    fast24: {
        1: [{ type: 'cataclysm:the_harbinger', count: 1, xp: 121 }]
    },
    fast25: {
        1: [{ type: 'cataclysm:the_leviathan', count: 1, xp: 121 }]
    },
    fast26: {
        1: [{ type: 'cataclysm:ancient_remnant', count: 1, xp: 121 }]
    },
    fast27: {
        1: [{ type: 'cataclysm:maledictus', count: 1, xp: 121 }]
    },
    fast28: { 
        1: [{ type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        ],
        2: [{ type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        ]
    },
    fast29: { 
        1: [{ type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        ],
        2: [{ type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 10 },
        { type: "list", count: 1, xp: 40 },
        ]
    },
    fast30: {
        1: [{ type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        ]
    },
    fast31: {
        1: [{ type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        ]
    },
    fast32: {
        1: [{ type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        ]
    },
    fast33: {
        1: [{ type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        { type: "list", count: 1, xp: 80 },
        ]
    },
    fast34: {
        1: [{ type: 'cataclysm:amethyst_crab', count: 1, xp: 92 }]
    },
    fast35: {
        1: [{ type: 'list', count: 1, xp: 4 },{ type: 'list', count: 1, xp: 4 },{ type: 'list', count: 1, xp: 4 }]
    },
    fast36: {
        1: [{ type: 'touhou_little_maid:fairy', count: 5, xp: 2 }],
        2: [{ type: 'touhou_little_maid:fairy', count: 6, xp: 2 }],
        3: [{ type: 'touhou_little_maid:fairy', count: 10, xp: 2 }]
    },
    fast37: {
        1: [{ type: 'irons_spellbooks:citadel_keeper', count: 1, xp: 12 }]
    },
    fast38: {
        1: [{ type: 'list', count: 1, xp: 10 }]
    },
    fast39: {
        1: [{ type: 'fast:mysterious_black_cloaked_swordsman', count: 1, xp: 121 }]
    },
    fast40: {
        1: [{ type: 'cataclysm:scylla', count: 1, xp: 121 }]
    },
    fast41: {
        1: [{ type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        ]
    },
    fast42: {
        1: [{ type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        ],
        2: [{ type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        ]
    },
    fast43: {
        1: [{ type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        ],
        2: [{ type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        { type: "list", count: 1, xp: 4 },
        ]
    },
};


const dungeonLists = {
  fast5: [
    'grimoireofgaia:mandragora',
    'grimoireofgaia:flesh_lich',
  ],
  fast20: [
    'grimoireofgaia:sphinx',
    'grimoireofgaia:minotaur',
    'grimoireofgaia:valkyrie',
  ],
  fast28: [
    "grimoireofgaia:anubis",
    "grimoireofgaia:arachne",
    "grimoireofgaia:banshee",
    "grimoireofgaia:bee",
    "grimoireofgaia:bone_knight",
    "grimoireofgaia:cecaelia",
    "grimoireofgaia:centaur",
    "grimoireofgaia:cobble_golem",
    "grimoireofgaia:cobblestone_golem",
    "grimoireofgaia:cyclops",
    "grimoireofgaia:deathword",
    "grimoireofgaia:dryad",
    "grimoireofgaia:dullahan",
    "grimoireofgaia:dwarf",
    "grimoireofgaia:flesh_lich",
    "grimoireofgaia:gelatinous_slime",
    "grimoireofgaia:goblin",
    "grimoireofgaia:goblin_feral",
    "grimoireofgaia:gryphon",
  ],
  fast29: [
    "grimoireofgaia:harpy",
    "grimoireofgaia:hunter",
    "grimoireofgaia:kobold",
    "grimoireofgaia:matango",
    "grimoireofgaia:mermaid",
    "grimoireofgaia:mimic",
    "grimoireofgaia:naga",
    "grimoireofgaia:nine_tails",
    "grimoireofgaia:oni",
    "grimoireofgaia:orc",
    "grimoireofgaia:satyress",
    "grimoireofgaia:shaman",
    "grimoireofgaia:sharko",
    "grimoireofgaia:siren",
    "grimoireofgaia:sludge_girl",
    "grimoireofgaia:spriggan",
    "grimoireofgaia:succubus",
    "grimoireofgaia:toad",
    "grimoireofgaia:werecat",
    "grimoireofgaia:witch",
    "grimoireofgaia:wither_cow",
    "grimoireofgaia:wizard_harpy",
    "grimoireofgaia:yuki_onna",
  ],
  fast30: [
    "cataclysm:wadjet",
    "cataclysm:kobolediator",
  ],
  fast31: [
    "cataclysm:aptrgangr",
    "cataclysm:coralssus",
  ],
  fast32: [
    "cataclysm:ignited_revenant",
    "cataclysm:the_prowler",
  ],
  fast33: [
    "cataclysm:ender_golem",
  ],
  fast35: [
    "irons_spellbooks:cryomancer",
    "irons_spellbooks:necromancer",
    "irons_spellbooks:archevoker"
  ],
  fast38: [
  "minecraft:zombie",
  "minecraft:skeleton",
  "minecraft:spider",
  "minecraft:husk"
  ],
  fast41: [
  "minecraft:zombie",
  "minecraft:skeleton",
  "minecraft:spider",
  "minecraft:husk"
  ],
  fast42: [
  "minecraft:zombie",
  "minecraft:skeleton",
  "minecraft:spider",
  "minecraft:husk",
  "hmag:redcap",
  ],
  fast43: [
  "minecraft:zombie",
  "minecraft:skeleton",
  "hmag:redcap",
  "hmag:harpy",
  "hmag:cursed_doll",
  ],
};

const dungeonConfig = {
    fast1: {
        keyItem: 'fast:key1',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 3,
        reward: [
            { item: 'fast:fast_boots', count: 1, chance: 0.2 },
            { item: 'fast:instance_pass1', count: 1 },
            { item: 'money:coin_copper', count: 40 } // 添加20铜币
        ]
    },
    fast2: {
        keyItem: 'fast:key2',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 3,
        reward: [
            { item: 'fast:branch', count: 1 },
            {
                item: 'minecraft:diamond',
                count: 1,
                nbt: { 
                    enderbonus: { 
                        genericVitBonus: 3,
                        genericStrBonus: 3,
                        genericIntBonus: 3,
                        genericAgiBonus: 3
                    } 
                },
                chance: 0.5
            },
            { item: 'fast:instance_pass2', count: 1 },
            { item: 'money:coin_copper', count: 40 } // 添加20铜币
        ]
    },
    fast3: {
        keyItem: 'fast:key3',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 3,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [{ nbtname: 'weapon.potential', min: 20, max: 40 }] 
            },
            { item: 'fast:instance_pass3', count: 1 },
            { item: 'money:coin_copper', count: 40 } // 添加20铜币
        ]
    },
    fast4: {
        keyItem: 'fast:key4',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 3,
        reward: [
            {
                item: 'tarotcards:the_fool',
                count: 1
            },
            { item: 'fast:instance_pass4', count: 1 },
            { item: 'money:coin_copper', count: 40 } // 添加20铜币
        ]
    },
    fast5: {
        keyItem: 'fast:key5',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 3,
        reward: [
            { item: 'fast:wooden_craftsman_hammer', count: 1 },
            { item: 'fast:instance_pass5', count: 1 },
            { item: 'money:coin_copper', count: 40 } // 添加20铜币
        ]
    },
    fast6: {
        keyItem: 'fast:key6',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [{nbtname: 'weapon.potential', min: 80, max: 100 }]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:sword_technique_decisive_strike',
                count: 1,
                chance: 0.5
            },
            {
                item: 'fast:sword_technique_four_strike',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass6', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast7: {
        keyItem: 'fast:key7',
        place: 'noop',
        placexz: {x:1, z:-1},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                {nbtname: 'weapon.potential', min: 140, max: 160 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'cataclysm:cursed_eye',
                count: 1
            },
            { item: 'fast:instance_pass7', count: 1 },
            { item: 'money:coin_iron', count: 30 }
        ]
    },
    fast8: {
        keyItem: 'fast:key8',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                {nbtname: 'weapon.potential', min: 40, max: 60 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
            item: 'irons_spellbooks:scroll',
                count: 1,
                nbt: '{ISB_Spells:{data:[{id:"kubejs:explosion",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}'
            },
            { item: 'fast:gold_craftsman_hammer', count: 1 },
            { item: 'fast:instance_pass8', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast9: {
        keyItem: 'fast:key9',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 3,
        reward: [
            {
                item: 'fast:blaze_scroll',
                count: 1
            },
            {
                item: 'hmag:fire_bottle',
                count: 1,
                chance: 0.2
            },
            { item: 'fast:instance_pass9', count: 1 },
            { item: 'money:coin_copper', count: 40 } // 添加20铜币
        ]
    },
    fast10: {
        keyItem: 'fast:key10',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                {nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:primal_fire',
                count: 1,
                chance: 0.5
            },
            {
                item: 'tarotcards:the_sun',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass10', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast11: {
        keyItem: 'fast:key11',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 1800,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                {nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'tarotcards:temperance',
                count: 1,
                chance: 0.5
            },
            {
                item: 'tarotcards:the_chariot',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass11', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast12: {
        keyItem: 'fast:key12',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                {nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:frost_staff',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass12', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast13: {
        keyItem: 'fast:key13',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'cataclysm:monstrous_eye',
                count: 1,
                chance: 0.5
            },
            {
                item: 'fast:blood_pact',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:blood_brand',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:blood_tally',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:blood_vitality',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:blood_oath',
                count: 1,
                chance: 0.15
            },
            {
                item: 'tarotcards:strength',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass13', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast14: {
        keyItem: 'fast:key14',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'tarotcards:the_high_priestess',
                count: 1,
                chance: 0.5
            },
            {
                item: 'minecraft:iron_sword',
                count: 1,
                nbt: { 
                    enderbonus: { 
                        SwordSoulCount: 1
                    } 
                },
                chance: 0.5
            },
            {
                item: 'fast:shadow_chaser',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:soul_pact',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:realm_splitter',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:spirit_surge',
                count: 1,
                chance: 0.15
            },
            {
                item: 'fast:demon_caller',
                count: 1,
                chance: 0.15
            },
            {
                item: 'tarotcards:the_star',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass14', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast15: {
        keyItem: 'fast:key15',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'tarotcards:justice',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass15', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast16: {
        keyItem: 'fast:key16',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:blaze_shard',
                count: 1
            },
            {
                item: 'fast:blaze_shard',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass16', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast17: {
        keyItem: 'fast:key17',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:magic_quiver',
                count: 1,
                chance: 0.5
            },
            {
                item: 'fast:magic_arrow',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass17', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast18: {
        keyItem: 'fast:key18',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:ender_scroll',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass18', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast19: {
        keyItem: 'fast:key19',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'tarotcards:the_hierophant',
                count: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass19', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast20: {
        keyItem: 'fast:key20',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 80, max: 100 }
                ]
            },
            { item: 'fast:instance_pass20', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast21: {
        keyItem: 'fast:key21',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 300, max: 300 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            { item: 'fast:instance_pass21', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast22: {
        keyItem: 'fast:key22',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:bule_gem',
                count: 1
            },
            { item: 'fast:instance_pass22', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast23: {
        keyItem: 'fast:key23',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:netherite_ingot_craftsman_hammer',
                count: 1
            },
            { item: 'fast:instance_pass23', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast24: {
        keyItem: 'fast:key24',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
            item: 'irons_spellbooks:scroll',
                count: 1,
                nbt: '{ISB_Spells:{data:[{id:"kubejs:custom_spell",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}',
                chance: 0.5
            },
            {
                item: 'fast:custom_spell',
                count: 1,
                NbtLevel: 2
            },
            { item: 'fast:instance_pass24', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast25: {
        keyItem: 'fast:key25',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'fast:ice_scroll',
                count: 1
            },
            { item: 'fast:instance_pass25', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast26: {
        keyItem: 'fast:key26',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
            item: 'irons_spellbooks:scroll',
                count: 1,
                nbt: '{ISB_Spells:{data:[{id:"kubejs:custom_spell",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}',
                chance: 0.5
            },
            {
                item: 'fast:custom_spell',
                count: 1,
                NbtLevel: 2
            },
            { item: 'fast:instance_pass26', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast27: {
        keyItem: 'fast:key27',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
            item: 'irons_spellbooks:scroll',
                count: 1,
                nbt: '{ISB_Spells:{data:[{id:"kubejs:custom_spell",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}',
                chance: 0.5
            },
            {
                item: 'fast:custom_spell',
                count: 1,
                NbtLevel: 2
            },
            { item: 'fast:instance_pass27', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast28: {
        keyItem: 'fast:key28',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 120,
        totalWaves: 2,
        reward: [
            {
                item: 'memory_of_the_past:tome_of_rebirth',
                count: 1
            },
            { item: 'fast:instance_pass28', count: 1 },
            { item: 'money:coin_iron', count: 20 } 
        ]
    },
    fast29: {
        keyItem: 'fast:key29',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 120,
        totalWaves: 2,
        reward: [
            {
                item: 'fast:the_dice_of_fate',
                count: 1,
                nbt: { Damage: 0, enderbonus: {only:true} },
                Range: [
                    { nbtname: 'enderbonus.genericStrBonus', min: -30, max: 30 },
                    { nbtname: 'enderbonus.genericAgiBonus', min: -30, max: 30 },
                    { nbtname: 'enderbonus.genericIntBonus', min: -30, max: 30 },
                    { nbtname: 'enderbonus.genericVitBonus', min: -30, max: 30 }
                ]
            },
            { item: 'fast:instance_pass29', count: 1 },
            { item: 'money:coin_iron', count: 20 } 
        ]
    },
    fast30: {
        keyItem: 'fast:key30',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 120,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 120, max: 140 }
                ]
            },
            {
                item: 'cataclysm:necklace_of_the_desert',
                count: 1,
            },
            { item: 'fast:instance_pass30', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast31: {
        keyItem: 'fast:key31',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 120,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 120, max: 140 }
                ]
            },
            {
                item: 'cataclysm:abyssal_sacrifice',
                count: 1,
            },
            {
                item: 'fast:diamond_craftsman_hammer',
                count: 1,
            },
            { item: 'fast:instance_pass31', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast32: {
        keyItem: 'fast:key32',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 120,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 120, max: 140 }
                ]
            },
            {
                item: 'cataclysm:flame_eye',
                count: 1,
            },
            { item: 'fast:instance_pass32', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast33: {
        keyItem: 'fast:key33',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 120,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 120, max: 140 }
                ]
            },
            {
                item: 'cataclysm:void_eye',
                count: 1,
            },
            { item: 'fast:instance_pass33', count: 1 },
            { item: 'money:coin_iron', count: 17 } 
        ]
    },
    fast34: {
        keyItem: 'fast:key34',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 140, max: 160 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'cataclysm:altar_of_amethyst',
                count: 1,
                type: 'block'
            },
            {
                item: 'cataclysm:abyss_eye',
                count: 1,
            },
            { item: 'fast:instance_pass34', count: 1 },
            { item: 'money:coin_iron', count: 30 } 
        ]
    },
    fast35: {
        keyItem: 'fast:key35',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 1,
        reward: [
            {
                item: 'irons_spellbooks:lightning_bottle',
                count: 3,
            },
            {
                item: 'irons_spellbooks:divine_pearl',
                count: 3,
            },
            {
                item: 'minecraft:poisonous_potato',
                count: 3,
            },
            {
                item: 'minecraft:blaze_rod',
                count: 3,
            },
            {
                item: 'irons_spellbooks:blood_vial',
                count: 3,
            },
            {
            item: 'irons_spellbooks:scroll',
                count: 1,
                nbt: '{ISB_Spells:{data:[{id:"kubejs:custom_spell",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}',
                chance: 0.05
            },
            {
                item: 'fast:custom_spell',
                count: 1,
                NbtLevel: 1,
                chance: 0.5
            },
            { item: 'fast:instance_pass35', count: 1 },
            { item: 'money:coin_copper', count: 40 } 
        ]
    },
    fast36: {
        keyItem: 'fast:key36',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 3,
        reward: [
            { item: 'tarotcards:the_lovers', count: 1 },
            { item: 'fast:ammo_drive', count: 1, chance: 0.4 },
            { item: 'fast:fate_gem_strength', count: 1, chance: 0.1 },
            { item: 'fast:fate_gem_intelligence', count: 1, chance: 0.1 },
            { item: 'fast:fate_gem_vitality', count: 1, chance: 0.1 },
            { item: 'fast:fate_gem_agility', count: 1, chance: 0.1 },
            { item: 'fast:instance_pass36', count: 1 },
            { item: 'money:coin_copper', count: 40 } 
        ]
    },
    fast37: {
        keyItem: 'fast:key37',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 1,
        reward: [
            {
                item: 'irons_spellbooks:frozen_bone',
                count: 3,
            },
            {
                item: 'minecraft:emerald',
                count: 3,
            },
            {
                item: 'minecraft:ender_pearl',
                count: 3,
            },
            {
                item: 'fast:riftsong_edge',
                count: 1,
                chance: 0.2
            },
            { item: 'fast:instance_pass37', count: 1 },
            { item: 'money:coin_copper', count: 40 }
        ]
    },
    fast38: {
        keyItem: 'fast:key38',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 1,
        reward: [
            {
                item: 'minecraft:iron_ingot',
                count: 1,
                nbt: { 
                    enderbonus: { 
                        genericVitBonus: 2 
                    } 
                },
                chance: 0.5
            },
            {
                item: 'irons_spellbooks:arcane_essence',
                count: 1,
                nbt: { 
                    enderbonus: { 
                        genericIntBonus: 2 
                    } 
                },
                chance: 0.5
            },
            {
                item: 'minecraft:gold_ingot',
                count: 1,
                nbt: { 
                    enderbonus: { 
                        genericAgiBonus: 2 
                    } 
                },
                chance: 0.5
            },
            { 
            item: 'minecraft:copper_ingot', 
            count: 1, 
            nbt: { 
                    enderbonus: { 
                        genericStrBonus: 2 
                    } 
                },
            chance: 0.5 },
            { item: 'fast:instance_pass38', count: 1 },
            { item: 'money:coin_copper', count: 5 }
        ]
    },
    fast39: {
        keyItem: 'fast:key39',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            { item: 'celestisynth:lunar_stone', type: 'block', count: 1, chance: 0.3 },
            { item: 'celestisynth:wintereis_shard', count: 1, chance: 0.8 },
            { item: 'celestisynth:zephyr_deposit', count: 1, chance: 0.2 },
            { item: 'celestisynth:solar_crystal', type: 'block', count: 1, chance: 0.8 },
            { item: 'celestisynth:crimson_piece', count: 1, chance: 0.8 },
            { item: 'celestisynth:celestial_core', count: 1, chance: 0.5 },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            { item: 'fast:instance_pass39', count: 1 },
            { item: 'money:coin_iron', count: 17 }
        ]
    },
    fast40: {
        keyItem: 'fast:key40',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 180,
        totalWaves: 1,
        reward: [
            {
                item: 'fast:potential_paper',
                count: 1,
                nbt: { weapon: {} },
                Range: [
                    { nbtname: 'weapon.potential', min: 180, max: 200 }
                ]
            },
            {
                item: 'fast:potential_reverter',
                count: 1,
                chance: 0.1
            },
            {
                item: 'cataclysm:storm_eye',
                count: 1
            },
            { item: 'fast:instance_pass40', count: 1 },
            { item: 'money:coin_iron', count: 65 } 
        ]
    },
    fast41: {
        keyItem: 'fast:key41',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 1,
        reward: [
            { 
            item: 'refinedstorage:1k_storage_part', 
            count: 1, 
            chance: 0.6 },
            { 
            item: 'refinedstorage:4k_storage_part', 
            count: 1, 
            chance: 0.05 },
            { 
            item: 'hmag:evil_crystal', 
            count: 1, 
            chance: 0.5 },
            { 
            item: 'hmag:insomnia_sword', 
            count: 1, 
            chance: 0.15 },
            { item: 'fast:instance_pass41', count: 1 },
            { item: 'money:coin_copper', count: 40 }
        ]
    },
    fast42: {
        keyItem: 'fast:key42',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 2,
        reward: [
            { 
            item: 'hmag:greedy_crystal_plus', 
            count: 1, 
            chance: 0.2 },
            {
                item: 'create:brass_ingot',
                count: 1,
                nbt: { 
                    enderbonus: { 
                        genericPhysicalMasteryBonus: 10
                    } 
                },
                chance: 0.5
            },
            { 
            item: 'hmag:reinforcing_chain', 
            count: 1, 
            chance: 0.2 },
            { 
            item: 'hmag:ancient_stone', 
            count: 1, 
            chance: 0.2 },
            { 
            item: 'hmag:soul_powder', 
            count: 1, 
            chance: 0.2 },
            { item: 'fast:instance_pass42', count: 1 },
            { item: 'money:coin_copper', count: 40 }
        ]
    },
    fast43: {
        keyItem: 'fast:key43',
        place: 'noop',
        placexz: {x:0, z:0},
        time: 90,
        totalWaves: 2,
        reward: [
            { 
            item: 'hmag:soul_powder', 
            count: 1, 
            chance: 0.2 },
            { 
            item: 'hmag:ender_plasm', 
            count: 1, 
            chance: 0.2 },
            { 
            item: 'hmag:reinforcing_chain', 
            count: 1, 
            chance: 0.2 },
            { 
            item: 'hmag:purification_cloth', 
            count: 1, 
            chance: 0.2 },
            { 
            item: 'hmag:endless_pearl', 
            count: 1, 
            chance: 0.2 },
            { 
            item: 'hmag:insomnia_fruit', 
            count: 1, 
            chance: 0.2 },
            { item: 'fast:instance_pass43', count: 1 },
            { item: 'money:coin_copper', count: 40 }
        ]
    },
};

function notifyPlayers(level, x, y, z, radius, message) {
    x += 0.5;
    y += 0.5;
    z += 0.5;
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
        let PlayerPersistentData = entity.persistentData;
        if (PlayerPersistentData.DungeonChatLogEnabled) return
        entity.tell(message);
        }
    });
}

let NewCustomSpellNbtList = {
  spell: [
    "irons_spellbooks:fireball",
    "irons_spellbooks:heat_surge",
    "irons_spellbooks:wall_of_fire",
    "irons_spellbooks:fire_breath",
    "irons_spellbooks:magma_bomb",
    "irons_spellbooks:scorch",
    "irons_spellbooks:burning_dash",
    "irons_spellbooks:blaze_storm",
    "irons_spellbooks:firebolt",
    "irons_spellbooks:flaming_barrage",
    "irons_spellbooks:flaming_strike",
    "irons_spellbooks:poison_arrow",
    "irons_spellbooks:earthquake",
    "irons_spellbooks:poison_splash",
    "irons_spellbooks:spider_aspect",
    "irons_spellbooks:firefly_swarm",
    "irons_spellbooks:root",
    "irons_spellbooks:blight",
    "irons_spellbooks:stomp",
    "irons_spellbooks:acid_orb",
    "irons_spellbooks:poison_breath",
    "irons_spellbooks:gluttony",
    "irons_spellbooks:frostbite",
    "irons_spellbooks:ice_block",
    "irons_spellbooks:ray_of_frost",
    "irons_spellbooks:cone_of_cold",
    "irons_spellbooks:frost_step",
    "irons_spellbooks:frostwave",
    "irons_spellbooks:summon_polar_bear",
    "irons_spellbooks:icicle",
    "irons_spellbooks:arrow_volley",
    "irons_spellbooks:fang_ward",
    "irons_spellbooks:fang_strike",
    "irons_spellbooks:chain_creeper",
    "irons_spellbooks:gust",
    "irons_spellbooks:summon_vex",
    "irons_spellbooks:lob_creeper",
    "irons_spellbooks:wololo",
    "irons_spellbooks:shield",
    "irons_spellbooks:summon_horse",
    "irons_spellbooks:spectral_hammer",
    "irons_spellbooks:firecracker",
    "irons_spellbooks:portal",
    "irons_spellbooks:black_hole",
    "irons_spellbooks:recall",
    "irons_spellbooks:magic_missile",
    "irons_spellbooks:summon_ender_chest",
    "irons_spellbooks:magic_arrow",
    "irons_spellbooks:teleport",
    "irons_spellbooks:dragon_breath",
    "irons_spellbooks:counterspell",
    "irons_spellbooks:healing_circle",
    "irons_spellbooks:blessing_of_life",
    "irons_spellbooks:angel_wing",
    "irons_spellbooks:sunbeam",
    "irons_spellbooks:fortify",
    "irons_spellbooks:guiding_bolt",
    "irons_spellbooks:heal",
    "irons_spellbooks:wisp",
    "irons_spellbooks:divine_smite",
    "irons_spellbooks:greater_heal",
    "irons_spellbooks:raise_dead",
    "irons_spellbooks:blood_slash",
    "irons_spellbooks:blood_step",
    "irons_spellbooks:acupuncture",
    "irons_spellbooks:ray_of_siphoning",
    "irons_spellbooks:blood_needles",
    "irons_spellbooks:sacrifice",
    "irons_spellbooks:devour",
    "irons_spellbooks:wither_skull",
    "irons_spellbooks:thunderstorm",
    "irons_spellbooks:ascension",
    "irons_spellbooks:lightning_lance",
    "irons_spellbooks:shockwave",
    "irons_spellbooks:electrocute",
    "irons_spellbooks:lightning_bolt",
    "irons_spellbooks:ball_lightning",
    "irons_spellbooks:chain_lightning"
  ],
  level: { 1:[1],
  2:[2],
  },
  delay: { 1:[10],
  2:[10,5,15,20],
  }
}

function NewCustomSpellNbt(Nbtlevel) {
    let spellConfig = {};
    if (!Nbtlevel) Nbtlevel = 1
    let types = ["spell", "level", "delay", "spell", "spell"];
    let NewType = types[Math.floor(Math.random() * types.length)];
    
    let candidates = NewCustomSpellNbtList[NewType];
    if (!candidates || candidates.length === 0) return null;
    
    let value = 1
    if (NewType === "spell") {
    value = candidates[Math.floor(Math.random() * candidates.length)];
    } else {
    let thisList = candidates[Nbtlevel]
    value = thisList[Math.floor(Math.random() * thisList.length)];
    }
    
    spellConfig.type = NewType;
    spellConfig.value = value;

    return spellConfig;
}

// 生成副本物品的函数
function generateInstanceItem(selectedReward) {
    let itemConfig = {
        item: selectedReward.item,
        count: selectedReward.count || 1,
        nbt: selectedReward.nbt,
        Range: selectedReward.Range
    };
        if (itemConfig.item === "fast:custom_spell") {
        itemConfig.nbt = { spellConfig: NewCustomSpellNbt(selectedReward.NbtLevel) }
        }
    if (itemConfig.nbt && itemConfig.Range) {
        itemConfig.Range.forEach(rangeConfig => {
            const pathParts = rangeConfig.nbtname.split('.');
            let target = itemConfig.nbt;
            // 遍历路径，确保嵌套结构存在
            for (let i = 0; i < pathParts.length - 1; i++) {
                const part = pathParts[i];
                if (!target[part]) target[part] = {};
                target = target[part];
            }
            // 设置随机值
            const min = rangeConfig.min;
            const max = rangeConfig.max;
            target[pathParts.pop()] = Math.floor(Math.random() * (max - min + 1)) + min;
        });
        return Item.of(itemConfig.item, itemConfig.count, itemConfig.nbt);
    } else if (itemConfig.nbt) {
        return Item.of(itemConfig.item, itemConfig.count || 1, itemConfig.nbt);
    } else {
        return Item.of(itemConfig.item, itemConfig.count || 1);
    }
    return null
}

function addXpPlayers(level, player, radius, xp) {
    const aabb = createCenteredAABB(player.x, player.y, player.z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            addPlayerXp(entity, xp)
        }
    });
}

function PlayersCanSpawnCardBox(radius, level, x, y, z, dungeonType) {
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            NewItemEntityCardBox(entity, level, dungeonType)
        }
    });
}

BlockEvents.rightClicked(event => {
	if (event.hand == "OFF_HAND") return;
	const item = event.getItem()
	const block = event.block
	const player = event.player
	const level = block.level
    let nbt = item.nbt
	let Itemxpup = 1
	let IteminstanceName = item.id
	let NeedBlock = false
    let Iteminstance = null
	if (nbt) {
	Iteminstance = nbt.instance
	if (Iteminstance) {
	if (Iteminstance.type != "instance") return
	let x = Iteminstance.x
	let z = Iteminstance.z
	let InCount = Iteminstance.count
	let thisInCounr = Iteminstance.thiscount
	if (thisXZHavePlayer(player, x, z, 50)) {
    Itemxpup = Iteminstance.xpup || 1
    IteminstanceName = Iteminstance[`name${thisInCounr}`]
    NeedBlock = true
    }
	}
	}
	if (block.id === "minecraft:sea_lantern") {
	NeedBlock = true
	}
	if (!NeedBlock) return
	const x = block.x,
		y = block.y,
		z = block.z;
	const currentPos = new $Vec3(x + 0.5, y + 0.5, z + 0.5)
	const key = `${x},${y},${z}`
	const server = event.server;
	let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let dimension = level.dimension.toString();
	let placex = x - 23;
	let placey = y - 1;
	let placez = z + 23;

	

	let selectedDungeon = null
	for (const [dungeonType, config] of Object.entries(dungeonConfig)) {
		if (IteminstanceName === config.keyItem) {
			let open = false;
			for (const [existingKey, existingData] of instance) {
				let existingAABB = createCenteredAABB(
					existingData.instancex + 0.5,
					existingData.instancey + 0.5,
					existingData.instancez + 0.5,
					100
				)
				
				if (existingAABB.contains(currentPos)) {
					open = true;
					break
				}
			}
           	if (IteminstanceName === 'fast:key6') {
				player.tell(Text.translatable('ender_bonus.instance.message.fast6'))
		    }
		let RogueData = PlayersInRogueLike[player.uuid]
        if (RogueData) {
        let Datax = RogueData.x
        let Dataz = RogueData.z
        if (thisXZHavePlayer(player, Datax, Dataz, 50)) open = true
        }
	        if (open) {
	        player.tell(Text.translatable('ender_bonus.instance.message.nearby_open'))
	        return
	        }
			selectedDungeon = {
				type: dungeonType,
				time: config.time,
				totalWaves: config.totalWaves,
				reward: config.reward,
				place: config.place,
				placexz: config.placexz,
			}
			break
		}
	}
	if (!selectedDungeon) return;
	let place = selectedDungeon.place;
	let placexz = selectedDungeon.placexz;
	if (place != 'noop') {
	server.runCommandSilent(`execute in ${dimension} run place template ${place} ${placex + placexz.x} ${placey} ${placez + placexz.z} counterclockwise_90`)
	}
	instance.set(key, {
		instancehas: true,
		instancelevel: level,
		instancex: x,
		instancez: z,
		instancey: y,
		MaxTime: selectedDungeon.time,
		dungeonType: selectedDungeon.type, // 存储副本类型
		reward: selectedDungeon.reward, // 存储奖励信息
		area: "noop",
		intdimension: dimension,
	    xpup: Itemxpup,
	})
	if (!Iteminstance) {
	item.count--
	} else {
	Iteminstance.thiscount += 1
    if (!Iteminstance[`name${Iteminstance.thiscount}`]) {
	Iteminstance.type = "noop"
	}
	player.sendData("removeWaypoint",{
    x:Iteminstance.x,
    y:Iteminstance.y,
    z:Iteminstance.z
    });
	}

	server.tell(Text.translatable(
    'ender_bonus.instance.message.opened',
    Text.translatable(`instance.${selectedDungeon.type}.name`)))
    notifyPlayers(level, x, y, z, 50, Text.translatable('ender_bonus.instance.message.start_in_3'))
    notifyPlayers(level, x, y, z, 50, Text.translatable('ender_bonus.instance.countdown', 3))
	// 开始生成第一波
	server.scheduleInTicks(20, () => {
		server.scheduleInTicks(20, () => {
			server.scheduleInTicks(20, () => {
				notifyPlayers(level, x, y, z, 50, Text.translatable('ender_bonus.instance.countdown', 0))
				instancetime.set(key, selectedDungeon.time)
				let BossBar = newBossBar(level, key, server, x, y, z, "副本剩余时间", 50, 'noop', 1)
				spawnWave(x, y, z, 1, selectedDungeon.type, block.level)
			})
			notifyPlayers(level, x, y, z, 50, Text.translatable('ender_bonus.instance.countdown', 1))
		})
		notifyPlayers(level, x, y, z, 50, Text.translatable('ender_bonus.instance.countdown', 2))
	})
})

// 修改后的生成波次函数
function spawnWave(x, y, z, waveNumber, dungeonType, level) {
    notifyPlayers(level, x, y, z, 50, 
        Text.translatable('ender_bonus.instance.wave_start', waveNumber, Text.translatable(`instance.${dungeonType}.name`)))

	let key = `${x},${y},${z}`
	killcont.set(key, 0)
	
	let ThisInstance = instance.get(key)

	// 获取当前波次的生物配置
	const waveConfig = dungeonMobs[dungeonType][waveNumber]

	// 计算总击杀数
	let totalMobs = waveConfig.reduce((sum, mob) => sum + mob.count, 0)

	// 生成生物
	waveConfig.forEach(mobConfig => {
		for (let i = 0; i < mobConfig.count; i++) {
			let mobType = mobConfig.type;
			let newxp = mobConfig.xp | 1;
			let thisxpup = ThisInstance.xpup
			if (mobType === "list") {
            let dungeonTypeList = dungeonLists[dungeonType]; 
            const randomIndex = Math.floor(Math.random() * dungeonTypeList.length);
            mobType = dungeonTypeList[randomIndex];
			}
			let mob = level.createEntity(mobType)
			mob.setPosition(x + (Math.random() * 5 - 2.5), y + 1, z + (Math.random() * 5 - 2.5))
			
			mob.potionEffects.add('minecraft:glowing', 600, 0, false, false);
			
			mob.persistentData.Instance = {
				type: dungeonType,
				wave: waveNumber,
				spawnx: x,
				spawny: y,
				spawnz: z,
				xp: newxp,
				xpup: thisxpup,
				killcount: totalMobs,
			}

			mob.spawn()
		}
	})
}

// 实体死亡事件处理
EntityEvents.death(event => {
	const entity = event.entity
    let MobThisData = entity.persistentData
	let uuid = entity.uuid
	let server = entity.server
    BossEntitySpawn.removeBossBar(uuid, server)
    let xp = 0
    let Entitynbt = false
    if (!event.entity.lastHurtByMob) return
    let killer = event.entity.lastHurtByMob
    if (entity.isPlayer()) {
    BossEntitySpawn.removeBossBar(killer.uuid, server)
    }
	let Owner = getEntityOwner(killer)
    let Partner = getEntityPartner(killer)
    if (!(killer.isPlayer() || (Owner && Owner.isPlayer()) || (Partner && Partner.isPlayer()))) return;
    if (MobThisData.RogueLike) {
    RogueLikeMobDeadEvent(entity, MobThisData.RogueLike)
    return
    }
    let Instance = null
	if (MobThisData.Instance) {
    Instance = MobThisData.Instance
	Entitynbt = true
	xp = 1
	let xpup = Instance.xpup
	let newxp = Instance.xp
	if (newxp) {
	xp = newxp * xpup
	}
	}
	if (!xp) return
    let level = killer.level
    if (Owner) {
    addXpPlayers(level, Owner, 50, xp)
    } else if (Partner) {
    addXpPlayers(level, Partner, 50, xp)
    } else {
    addXpPlayers(level, killer, 50, xp)
    }
    if (!Entitynbt) return
	if (!event.entity.lastHurtByMob) return
	if (Owner && killer.type === "touhou_little_maid:maid") {
    let ownerData = Owner.persistentData;
    let maidData = killer.persistentData;
    if (ownerData.enderBonus?.theLoversPresent) {
    if (!maidData.theLoversPresent) {
    maidData.theLoversPresent = 1;
    }
    if (++maidData.theLoversPresent > 10) {
        addMaidFavorability(killer, 1);
        maidData.theLoversPresent = 1;
    }
    }
    }
	let x = Instance.spawnx
	let y = Instance.spawny
	let z = Instance.spawnz
	let needkill = Instance.killcount
	let key = `${x},${y},${z}`
	let killCount = killcont.get(key)
	let dungeonType = Instance.type
	let waveNumber = Instance.wave
	killCount++
	killcont.set(key, killCount)
	let needkillhave = needkill - killCount
	notifyPlayers(level, x, y, z, 50, Text.translatable('ender_bonus.instance.kill_required', "§d" + needkill, "§d" + needkillhave))
	const rewardConfig = dungeonConfig[dungeonType]
	
	// 检查波次完成
	if (killCount >= needkill) {
		if (waveNumber >= rewardConfig.totalWaves) {
		
			notifyPlayers(level, x, y, z, 50, 
            Text.translatable('ender_bonus.instance.complete_reward'))
			let KeyInstance = instance.get(key);
			BossEntitySpawn.removeBossBar(key, server)
			let area = KeyInstance.area;
			deleteLoquat(area, level)
			instance.delete(key)
			instancetime.delete(key)
			killcont.delete(key)
			instancetime.delete(key)
			let RewardItemList = []
			rewardConfig.reward.forEach(itemconfig => {
			let thisItem = null
				// 使用随机数判断是否掉落
				if (Math.random() <= (itemconfig.chance || 1)) {
                thisItem = generateInstanceItem(itemconfig)
                if (!thisItem) return
                RewardItemList.push(thisItem)
                }
                if (!thisItem) return
					let langId = itemconfig.item.replace(':', '.')
					if (!itemconfig.item.includes('instance_pass')) {
					notifyPlayers(level, x, y, z, 50, 
                Text.translatable('ender_bonus.instance.reward_item', Text.translatable(`item.${langId}`)))
					}
				})
			spawnPackage(level, x, y + 2, z, RewardItemList)
			PlayersCanSpawnCardBox(50, level, x, y, z, dungeonType)
		} else {
			waveNumber = Instance.wave + 1
			killcont.set(key, 0)

			// 生成下一波
			spawnWave(x, y, z, waveNumber, dungeonType, level)
		}
	}
})

ServerEvents.tick(event => {
	const server = event.server
	if (server.tickCount % 20 != 0) return // 每秒执行一次
	// 遍历所有副本的计时
	instancetime.forEach((time, key) => {
		let ThisInstance = instance.get(key)
		let level = ThisInstance.instancelevel
		let x = ThisInstance.instancex
		let y = ThisInstance.instancey
		let z = ThisInstance.instancez
		let MaxTime = ThisInstance.MaxTime
		let BossBar = BossEntitySpawn.BossBar[key]

		const newTime = time - 1
		if (BossBar) {
		BossBar.setProgress(newTime / MaxTime);
		}
		instancetime.set(key, newTime) // 更新时间
		if (newTime <= 5) {
			notifyPlayers(level, x, y, z, 50, 
            Text.translatable('ender_bonus.instance.time_left', newTime)
        )
		}

		// 时间耗尽处理
		if (newTime <= 0) {
			notifyPlayers(level, x, y, z, 50, 
            Text.translatable('ender_bonus.instance.timeout'))
			level.getEntities().forEach(entity => {
				let persistentData = entity.persistentData
				if (!persistentData.Instance) return
				let Instance = persistentData.Instance
				let x2 = Instance.spawnx
				let y2 = Instance.spawny
				let z2 = Instance.spawnz
				let key2 = `${x2},${y2},${z2}`
				if (key2 != key) return
				let uuid = entity.uuid
			    BossEntitySpawn.removeBossBar(uuid, server)
				entity.discard()
			})
			
			// 清理相关数据
			BossEntitySpawn.removeBossBar(key, server)
			let area = ThisInstance.area;
			deleteLoquat(area, level)
			instance.delete(key)
			instancetime.delete(key)
			killcont.delete(key)
			instancetime.delete(key)
		}
	})
})

ServerEvents.unloaded(event => {
	// 服务端关闭清理所有副本和相关怪物
	instance.forEach((instances, key) => {
		let level = instances.instancelevel
		let server = level.server;
		level.getEntities().forEach(entity => {
			let persistentData = entity.persistentData
			if (!persistentData.Instance) return
			let uuid = entity.uuid
			BossEntitySpawn.removeBossBar(uuid, server)
			entity.discard()
		})
		BossEntitySpawn.removeBossBar(key, server)
		let area = instances.area;
	    deleteLoquat(area, level)
		instance.delete(key)
		instancetime.delete(key)
		killcont.delete(key)
		instancetime.delete(key)
	})
})
