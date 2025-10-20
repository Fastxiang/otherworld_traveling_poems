// priority: 1000

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
    
    // 辅助函数：通过keyItem获取对应的副本类型
    function getDungeonTypeByKeyItem(keyItemId) {
        for (const [dungeonType, config] of Object.entries(dungeonConfig)) {
            if (config.keyItem === keyItemId) return dungeonType;
        }
        return null;
    }
// 为所有钥匙物品添加统一格式的提示信息
ItemEvents.tooltip(event => {
    // 获取所有唯一的钥匙物品ID
    if (!dungeonConfig.bounty) {
    dungeonConfig.bounty = {}
    dungeonConfig.bounty.keyItem = 'bountiful:bounty'
    }
    const keyItems = new Set(Object.values(dungeonConfig).map(config => config.keyItem)); // 直接赋值 Set 对象，不再包裹数组
    // 为每个钥匙物品注册提示
    keyItems.forEach(keyItemId => { // 直接迭代 Set 对象，keyItemId 现在是单个物品 ID 字符串
        event.addAdvanced(keyItemId, (item, advanced, text) => {
            let KeyId = item.id
            let itemId = item.id
            let x = null 
            let z = null
            let Iteminstance = null
            if (KeyId === "bountiful:bounty") {
            let nbt = item.nbt
            if (nbt) {
    Iteminstance = nbt.instance
	if (!Iteminstance) return
	if (Iteminstance.type != "instance") return
	x = Iteminstance.x
	z = Iteminstance.z
    KeyId = Iteminstance[`name${Iteminstance.thiscount}`]
	}
            }
            const dungeonType = getDungeonTypeByKeyItem(KeyId);
            if (!dungeonType) return;

            // 按住Shift显示详细信息
                let config = dungeonConfig[dungeonType];
                let mobsConfig = dungeonMobs[dungeonType];
                
                let TextNeed = 0
                // 副本标题
                if (itemId != "bountiful:bounty") {
                text.remove(0); 
                text.add(TextNeed++, `§6§l${Text.translatable(`instance.${dungeonType}.name`).getString()}`);
                } else {
                if (Iteminstance && Iteminstance[`name${Iteminstance.count}`]) {
                TextNeed = 2 + Iteminstance.count
                }
                text.add(TextNeed++, `§c[!] 在对应坐标 §eX: ${x},Y: ~,Z: ${z}§6附近50格内`);
                text.add(TextNeed++, `§a右键任意方块开启要求的对应副本（任意高度）`);
                text.add(TextNeed++, `当前开启副本（每次开启都会变更为下一个副本）：`);
                text.add(TextNeed++, `§6§l${Text.translatable(`instance.${dungeonType}.name`).getString()}`);
                }

                // 基础信息
                text.add(TextNeed++, `§7副本波数: §f${config.totalWaves}`);
                text.add(TextNeed++, `§7限时时间: §f${config.time}秒`);

                // 奖励列表
                text.add(TextNeed++, `§6◆ 副本奖励:`);
                config.reward.forEach((reward, index) => {
                let min = null
                let max = null
                let nbtName = null
                if (reward.Range) {
                reward.Range.forEach(rangeConfig => { // 遍历Range数组
                nbtName = rangeConfig.nbtname
				min = rangeConfig.min
				max = rangeConfig.max
							})
                }
                    let chance = (reward.chance || 1) * 100;
                    let ItemLang = reward.item.replace(':', '.')
                    let itemName = Text.translatable(`item.${ItemLang}`).getString();
                    if (itemName === `item.${ItemLang}`) {
                    itemName = Text.translatable(`block.${ItemLang}`).getString();
                    }
                    let TextNeedIndex = TextNeed + index
                    if (min && nbtName === 'weapon.potential') {
                    text.add(TextNeedIndex, `§8- §f${itemName} §f潜力值：${min}~${max} §7×${reward.count} §8(${chance}%几率)`);
                    } else {
                    if (!reward.item.includes('instance_pass')) {
                    text.add(TextNeedIndex, `§8- §f${itemName} §7×${reward.count} §8(${chance}%几率)`);
                    } else {
                    TextNeed--
                    }
                    }
                });

                // 怪物列表
                let lineOffset = TextNeed + config.reward.length;
                text.add(lineOffset++, `§4◆ 怪物列表:`);
                let first = false;
                let MobWave = 0
                Object.keys(mobsConfig).forEach(wave => {
                    const mobs = mobsConfig[wave];
                    let MobCount = 0
                    mobs.forEach(mob => {
                    let mobType = mob.type;
                    if (mobType === "list") {
                    if (!first) {
            let dungeonTypeList = dungeonLists[dungeonType]; 
            text.add(lineOffset++, `随机怪物列表:`);
            if (!event.shift) {
            dungeonTypeList.slice(0, 3).forEach(listmob => {
    let mobName = Text.translatable(`entity.${listmob.replace(':', '.')}`).getString();
    text.add(lineOffset++, `§8- §7${mobName}`);
            });
            text.add(lineOffset++, Text.translate("item.fast.tooltips.shift"))
            } else {
            dungeonTypeList.forEach(listmob => {
            let mobName = Text.translatable(`entity.${listmob.replace(':', '.')}`).getString();
            text.add(lineOffset++, `§8- §7${mobName}`);
            })
            }
            if (MobWave != wave) {
            text.add(lineOffset++, `§c波次 ${wave}:`)
            MobWave = wave
            }
            first = true;
            } else {
            if (MobWave != wave) {
            text.add(lineOffset++, `§c波次 ${wave}:`)
            MobWave = wave
            }
            }
            MobCount += mob.count
			        } else {
            if (MobWave != wave) {
            text.add(lineOffset++, `§c波次 ${wave}:`)
            MobWave = wave
            }
                        let mobName = Text.translatable(`entity.${mobType.replace(':', '.')}`).getString();
                        text.add(lineOffset++, `§8- §7${mobName} §8×${mob.count}`);
                        }
                    });
                    if (MobCount) {
                    text.add(lineOffset++, `§8- §b当前波数随机怪物次数：§8${MobCount}`);
                    }
                });
        });
    });
});