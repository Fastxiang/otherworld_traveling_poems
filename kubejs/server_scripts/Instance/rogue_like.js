// priority: 500
function RoguelikeDungeonList() {
    this.dungeonList = []
    this.dungeonMap = new Map()
    return this
}

RoguelikeDungeonList.prototype = {
    addDungeon: function (level, id, type, uuid, floor, stage, next, x, y, z, hp, players, moneydata) {
        const dungeon = {
            id:id,
            type:type,     
            uuid:uuid,      
            floor:floor,     
            stage:stage,      
            next:next,
            x:x,
            y:y,
            z:z,
            killTarget: type === "monster" ? Math.min((1 + stage - 1), 8) : 0, 
            killCount: 0,
            Reward: 0,
            MaxReward: 1,
            Hp: hp,
            MaxHp: 3,
            players: players,
            RewardLvl: 1,
            area: createLoquat(x,y,z, level, 48),
            level: level,
            RefreshCount: 0,
            MoneyData: moneydata
        }
        this.dungeonList.push(dungeon)
        this.dungeonMap.set(uuid, dungeon)
        return this
    },
    getDungeonById: function (id) {
        return this.dungeonList.find(d => d.id === id)
    },
    getDungeonByUuid: function (uuid) {
        return this.dungeonMap.get(uuid) || null
    },
    hasDungeonByUuid: function (uuid) {
        return this.dungeonMap.has(uuid)
    },
    getDungeonsByType: function (type) {
        return this.dungeonList.filter(d => d.type === type)
    },
    removeDungeonByUuid: function (uuid) {
        const dungeon = this.dungeonMap.get(uuid)
        if (dungeon) {
            deleteLoquat(dungeon.area, dungeon.level)
            this.dungeonList = this.dungeonList.filter(d => d.uuid !== uuid)
            this.dungeonMap.delete(uuid)
        }
        return this
    },
    clearAll: function () {
        this.dungeonList = []
        this.dungeonMap.clear()
        return this
    }
}

const RoguelikeDungeonManager = new RoguelikeDungeonList()

const RoguelikeDungeonMonsterMap = {
    "easy": {basehp:10, types:[
  "minecraft:zombie",
  "minecraft:skeleton",
  "minecraft:spider",
  "minecraft:husk"
    ]},
    "normal": {basehp:15, types:[
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
    "cataclysm:kobolediator",
    "cataclysm:aptrgangr",
    "cataclysm:wadjet",
    "cataclysm:coralssus",
    "cataclysm:the_prowler",
    "cataclysm:coral_golem",
    "cataclysm:ignited_revenant",
    "cataclysm:ender_golem",
    ]}
}

const RoguelikeDungeonBossMonsterMap = {
    "easy": {basehp:200, types:[
  "fast:zombie_summoner",
  "mowziesmobs:frostmaw",
  "irons_spellbooks:dead_king",
  "mowziesmobs:umvuthi",
  "mutantmonsters:mutant_skeleton",
  "remnant_ossukage:ossukage",
  "mutantmonsters:mutant_enderman",
  "mutantmonsters:mutant_creeper"
    ]},
    "normal": {basehp:270, types:[
    'cataclysm:ignis',
    'cataclysm:netherite_monstrosity',
    'cataclysm:ender_guardian',
    'cataclysm:maledictus',
    'cataclysm:the_harbinger',
    'cataclysm:ancient_remnant',
    'fast:mysterious_figure',
    'cataclysm:amethyst_crab',
    'fast:mysterious_black_cloaked_swordsman',
    ]}
}

const RogueLikeRewardEnderitemsList = {
  1: [
    'tarotcards:the_fool',
    'tarotcards:the_lovers',
    'fast:branch',
    'fast:wooden_craftsman_hammer',
    'fast:iron_ring',
    'fast:the_hero_shield',
    'fast:the_hero_sword',
    'fast:the_hero_bow',
    'fast:the_hero_staff',
    'fast:the_hero_dice',
    'fast:shadow_dagge',
    'fast:godspeed_wield',
    'tarotcards:the_world',
    'tarotcards:the_empress',
    'tarotcards:the_emperor',
    'fast:ender_necklace',
    'fast:lethal_shutter',
    'fast:riftsong_edge',
    'fast:compassionate_heart',
    'fast:ammo_drive',
    'fast:fate_gem_strength',
    'fast:fate_gem_vitality',
    'fast:fate_gem_intelligence',
    'fast:fate_gem_agility',
    "fast:sword_soul",
  ],
  2: [
    'fast:sword_technique_decisive_strike',
    'fast:sword_technique_four_strike',
    'fast:blaze_scroll',
    'fast:primal_fire',
    'tarotcards:the_sun',
    'tarotcards:temperance',
    'tarotcards:the_chariot',
    'fast:frost_staff',
    'cataclysm:monstrous_eye',
    'tarotcards:strength',
    'tarotcards:the_high_priestess',
    'tarotcards:the_star',
    'tarotcards:justice',
    'fast:blaze_shard',
    'fast:magic_quiver',
    'fast:magic_arrow',
    'fast:ender_scroll',
    'tarotcards:the_hierophant',
    'fast:gold_ring',
    'tarotcards:the_magician',
    'tarotcards:the_tower',
    'tarotcards:wheel_of_fortune',
    'tarotcards:the_hermit',
    'fast:shadow_assassin_cloak',
    'fast:int_gem',
    'fast:spell_storage_sphere',
    'fast:magic_shield',
    'fast:megumin_magic_staff',
    'fast:charge',
    'fast:grimoire_of_mana_reaping',
    'celestisynth:celestial_core',
    'fast:justice_staff',
    'fast:magic_sword',
    'fast:berserker_bow',
    'fast:blood_pact',
    'fast:blood_brand',
    'fast:blood_tally',
    'fast:blood_vitality',
    'fast:blood_oath',
    'fast:shadow_chaser',
    'fast:soul_pact',
    'fast:realm_splitter',
    'fast:spirit_surge',
    'fast:demon_caller',
    'fast:sword_technique_flying_sword_guard',
  ],
  3: [
    'cataclysm:cursed_eye',
    'fast:bule_gem',
    'fast:blaze_necklace',
    'cataclysm:necklace_of_the_desert',
    'cataclysm:abyssal_sacrifice',
    'cataclysm:flame_eye',
    'cataclysm:void_eye',
    'cataclysm:abyss_eye',
    'fast:overcharged_mana_flask',
    'cataclysm:mech_eye',
    'cataclysm:desert_eye',
    'cataclysm:strange_key',
    'cataclysm:storm_eye',
  ],
  4: [
    'tarotcards:the_hanged_man',
    'tarotcards:the_devil',
    'tarotcards:the_moon',
    'tarotcards:death',
    'tarotcards:judgement',
    'fast:uma_factor_item',
    'tconstruct:encyclopedia',
    'irons_spellbooks:fire_upgrade_orb',
    'irons_spellbooks:ice_upgrade_orb',
    'irons_spellbooks:lightning_upgrade_orb',
    'irons_spellbooks:holy_upgrade_orb',
    'irons_spellbooks:ender_upgrade_orb',
    'irons_spellbooks:blood_upgrade_orb',
    'irons_spellbooks:evocation_upgrade_orb',
    'irons_spellbooks:nature_upgrade_orb',
    'fast:iron_craftsman_hammer',
    'fast:gold_craftsman_hammer',
    'fast:diamond_craftsman_hammer',
    'fast:brass_craftsman_hammer',
    'fast:netherite_ingot_craftsman_hammer',
    'fast:iron_heart',
    'fast:iron_precision_mechanism',
    'fast:water_precision_mechanism',
    'fast:rose_quartz_gauntlets',
    'touhou_little_maid:fall_protect_bauble',
    'cataclysm:burning_ashes',
    'fast:fire_magic_shard',
    'fast:ice_magic_shard',
    'fast:nature_magic_shard',
    'fast:lightning_magic_shard',
    'fast:blood_magic_shard',
    'fast:holy_magic_shard',
    'fast:ender_magic_shard',
    'fast:evocation_magic_shard',
    'fast:blazing_judgement',
    'hmag:fortune_crystal_plus',
    'hmag:fortune_crystal',
    'fast:ender_brass_hand',
    'fast:shimmering_diamond',
    'fast:apprentice_staff',
    'fast:shining_beacon',
    'fast:thunderbrand_magazine',
    'fast:precision_pouch',
  ]
};

const RogueLikeMapObj = {};
const PlayerPositionObj = {};
const PlayersInRogueLike = {};
const RogueLikeItemObj = {};
const RogueLikeBossBarObj = {}

const tileTypesWithWeights = [
  { type: "shop", weight: 10 },
  { type: "monster", weight: 60 },
  { type: "reward", weight: 30 }
];

function getWeightedRandomTile() {
  const totalWeight = tileTypesWithWeights.reduce((sum, tile) => sum + tile.weight, 0);
  const rand = Math.random() * totalWeight;
  let sum = 0;
  for (let i = 0; i < tileTypesWithWeights.length; i++) {
    sum += tileTypesWithWeights[i].weight;
    if (rand < sum) {
      return tileTypesWithWeights[i].type;
    }
  }
  return tileTypesWithWeights[tileTypesWithWeights.length - 1].type;
}

function generateMapWithUUID(uuid) {
  const rows = 5;
  const cols = 9;
  let map = [];
  let shopCount = 0;

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let tile = getWeightedRandomTile();
      if (tile === "shop") {
        shopCount++;
      }
      row.push(tile);
    }
    map.push(row);
  }


  let playerRow = Math.floor(Math.random() * rows);
  let playerCol = Math.floor(Math.random() * cols);
  map[playerRow][playerCol] = "player";

  let maxDistance = -1;
  let farthestTiles = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === playerRow && j === playerCol) continue;
      if (map[i][j] === "shop") continue; 
      let dist = Math.abs(i - playerRow) + Math.abs(j - playerCol);
      if (dist > maxDistance) {
        maxDistance = dist;
        farthestTiles = [{ row: i, col: j }];
      } else if (dist === maxDistance) {
        farthestTiles.push({ row: i, col: j });
      }
    }
  }

  if (farthestTiles.length > 0) {
    let bossTile = farthestTiles[Math.floor(Math.random() * farthestTiles.length)];
    map[bossTile.row][bossTile.col] = "boss";
  }

  RogueLikeMapObj[uuid] = map;
  PlayerPositionObj[uuid] = { row: playerRow, col: playerCol };

  return map;
}

function RogueLikeReloadPreDataEvent(level, uuid, Newdungeon, Map, PlayerPos) {
    let LevelData = level.persistentData
    if (!LevelData.RougueLike || !LevelData.RougueLike[uuid]) {
    LevelData.RougueLike = {}
    LevelData.RougueLike[uuid] = {}
    let ThisLevelData = LevelData.RougueLike[uuid]
    ThisLevelData.dungeon = Newdungeon
    ThisLevelData.map = Map
    ThisLevelData.playerpos = PlayerPos
    } else {
    let ThisLevelData = LevelData.RougueLike[uuid]
    ThisLevelData.dungeon = Newdungeon
    ThisLevelData.map = Map
    ThisLevelData.playerpos = PlayerPos
    }
}

function DeepblueCrystalEvent(player, item, PlayerPersistentData, persistentData) {
			let open = false;
		    let pos = player.position();
		    let { level, x, y, z } = player
		    let dimension = level.dimension
		    if (dimension !== "fast:fast_flat_world") {
            player.tell(Text.translatable('ender_bonus.instance.message.dimension.nearby_open'))
            return
            }
		    
			for (const [existingKey, existingData] of instance) {
				let existingAABB = createCenteredAABB(
					existingData.instancex + 0.5,
					existingData.instancey + 0.5,
					existingData.instancez + 0.5,
					100
				)
				
				if (existingAABB.contains(pos)) {
					open = true;
					break
				}
			}
			if (open) {
	        player.tell(Text.translatable('ender_bonus.instance.message.nearby_open'))
	        return
			}
    let nbt = item.nbt
    if (nbt) {
    let ItemData = nbt.RougueLike
    if (ItemData) {
    if (ItemData.Remove) {
    if (!ItemData.GetItem) {
    let ItemValue = ItemData.ItemValue
    if (ItemValue > 0) {
    openGUIgetRogueLikeEnderItem(player, ItemData.uuid, ItemData, persistentData)
    }
    }
    return
    }
    }
    } else {
               	if (!persistentData.DeepblueCrystalEvent1) {
				player.tell(Text.translatable('ender_bonus.instance.message.deepblue_crystal'))
				persistentData.DeepblueCrystalEvent1 = true
				return
		    }
    }
    if (nbt && nbt.RougueLike) {
    RogueLikeEvent(player, item, PlayerPersistentData, persistentData, 1)
    } else {
    openRogueStageSelectGUI(player, item, PlayerPersistentData, persistentData)
    }
}

function openGUIgetRogueLikeEnderItem(player, targetUUID, useItemData, persistentData) {
    let validItems = [];
    
    let inventory = player.inventory;
    for (let i = 0; i < inventory.getContainerSize(); i++) {
        let item = inventory.getItem(i);
        if (!item.isEmpty()) {
            let nbt = item.getNbt();
            if (nbt && nbt.Roguelike && nbt.Roguelike === targetUUID) {
                validItems.push(item);
            }
        }
    }
    
    let enderChest = player.enderChestInventory;
    for (let i = 0; i < enderChest.getContainerSize(); i++) {
        let item = enderChest.getItem(i);
        if (!item.isEmpty()) {
            let nbt = item.getNbt();
            if (nbt && nbt.Roguelike && nbt.Roguelike === targetUUID) {
                validItems.push(item);
            }
        }
    }
    
    let rowsNeeded = Math.ceil(validItems.length / 9);
    if (rowsNeeded < 1) rowsNeeded = 1;
    if (rowsNeeded > 6) rowsNeeded = 6;
    persistentData.OpenMenuGui = true
    player.openChestGUI(Text.of("§9§l转化为永久末影饰品"), rowsNeeded, gui => {
        for (let i = 0; i < validItems.length; i++) {
            let item = validItems[i];

            gui.slot(i, 0, slot => {
                slot.setItem(item);
                slot.setLeftClicked(() => {
                    player.closeMenu();
                        useItemData.ItemValue -= 1;
                        item.nbt.remove('Roguelike');
                        
                        if (useItemData.ItemValue <= 0) {
                            useItemData.GetItem = true;
                    }
                });
            });
        }
    });
}

function openRogueStageSelectGUI(player, item, PlayerPersistentData, persistentData) {
    if (!PlayerPersistentData.Rogue) PlayerPersistentData.Rogue = {};
    let PlayerRogueData = PlayerPersistentData.Rogue;
    if (PlayerRogueData.stage) {
        persistentData.OpenMenuGui = true
        player.openChestGUI(Text.of("§l请选择开始的层数"), 1, gui => {
            gui.slot(2, 0, slot => {
                slot.setItem(Item.of("minecraft:green_wool").withName("§a从第 1 层开始"));
                slot.setLeftClicked(() => {
                let Playeruuid = player.uuid
                openGuiPlayer[Playeruuid] = true
                        RogueLikeEvent(player, item, PlayerPersistentData, persistentData, 1);
                });
            });
            
            gui.slot(6, 0, slot => {
                slot.setItem(Item.of("minecraft:blue_wool").withName(`§b从第 ${PlayerRogueData.stage} 层继续`));
                slot.setLeftClicked(() => {
                let Playeruuid = player.uuid
                openGuiPlayer[Playeruuid] = true
                        RogueLikeEvent(player, item, PlayerPersistentData, persistentData, PlayerRogueData.stage);
                });
            });

            // 关闭页面
            gui.slot(8, 0, slot => {
                slot.setItem(Item.of("minecraft:red_wool").withName("§c关闭页面"));
                slot.setLeftClicked(() => {
                    player.closeMenu();
                });
            });
        });
    } else {
        RogueLikeEvent(player, item, PlayerPersistentData, persistentData, 1);
    }
}

function RogueLikeEvent(player, itemWithNbt, PlayerPersistentData, persistentData, Rostage) {
    let nbt = itemWithNbt.orCreateTag
    let RougueLikeData = null
    const { level, x, y, z } = player;
    let PlayerUuid = player.uuid
    let players = 0
    if (!nbt.RougueLike) {
    nbt.RougueLike = {}
    RougueLikeData = nbt.RougueLike
    RougueLikeData.uuid = $UUID.randomUUID().toString()
    players = PlayersInitRogueLike(level, x, y, z, RougueLikeData.uuid)
    RoguelikeDungeonManager.addDungeon(level, "easy", "player", RougueLikeData.uuid, 0, Rostage, true, x, y, z, players, players, {});
    } else {
    RougueLikeData = nbt.RougueLike
    players = PlayersInitRogueLike(level, x, y, z, RougueLikeData.uuid)
    }
    let uuid = RougueLikeData.uuid
    RogueLikeItemObj[uuid] = PlayerUuid
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    let Map = null
    let PlayersPos = null
    if (!dungeon) {
    let LevelData = level.persistentData
    if (LevelData.RougueLike) {
    let ThisLevelData = LevelData.RougueLike[uuid]
    if (!ThisLevelData) return
    dungeon = ThisLevelData.dungeon
    RoguelikeDungeonManager.dungeonList.push(dungeon)
    RoguelikeDungeonManager.dungeonMap.set(uuid, dungeon)
    let mapDataRaw = ThisLevelData.map;
    let NewmapData = [];
    for (let i = 0; i < mapDataRaw.length; i++) {
    let Maprow = [];
    for (let j = 0; j < mapDataRaw[i].length; j++) {
    Maprow.push(String(mapDataRaw[i][j]));
    }
    NewmapData.push(Maprow);
    }
    Map = NewmapData
    RogueLikeMapObj[uuid] = Map
    PlayersPos = ThisLevelData.playerpos
    PlayerPositionObj[uuid] = PlayersPos
    dungeon.next = true
    } else {
    return
    }
    } else {
    Map = RogueLikeMapObj[uuid] ? RogueLikeMapObj[uuid] : generateMapWithUUID(uuid)
    PlayersPos = PlayerPositionObj[uuid]
    }
    const directions = ["up", "down", "left", "right"];
    const directionSlots = {
        up: 4,
        down: 40,
        left: 20,
        right: 24
    };
    let { row, col } = PlayersPos;
    persistentData.OpenMenuGui = true
    player.openChestGUI(Text.of("§l深蓝之渊试炼"), 6, gui => {
        gui.slot(45, 0, slot => {
        slot.setItem(Item.of("minecraft:paper").withName("§a查看地图"));
        slot.setLeftClicked(() => {
            // 打开地图 GUI
            openMapGUI(player, Map, row, col, persistentData);
        });
    });
        gui.slot(53, 0, slot => {
        slot.setItem(Item.of("minecraft:stone").withName("§a主动结束深蓝之渊"));
        slot.setLeftClicked(() => {
            player.closeMenu();
            if (dungeon.stage >= 10) {
            RoguePlayersAddData(level, x, y, z, 50, "stage", 10)
            }
            player.server.scheduleInTicks(2, () => {
            RemoveRogueLike(level, uuid, RogueLikeItemObj[uuid]);
            })
        });
    });
    if (!dungeon.MoneyData[PlayerUuid]) dungeon.MoneyData[PlayerUuid] = 0
    let PlayerMoney = dungeon.MoneyData[PlayerUuid]
        gui.slot(46, 0, slot => {
        slot.setItem(Item.of("minecraft:emerald").withName("§a你当前拥有深蓝币: "+ PlayerMoney));
    });
    
        gui.slot(47, 0, slot => {
        slot.setItem(Item.of("minecraft:stone_bricks").withName("§a当前层数: "+ dungeon.stage));
    });
    
        gui.slot(48, 0, slot => {
        slot.setItem(Item.of("minecraft:white_banner").withName("§a当前已走步数: "+ dungeon.floor));
    });
    
        gui.slot(49, 0, slot => {
        slot.setItem(Item.of("minecraft:totem_of_undying").withName("§a当前试炼生命值: "+ dungeon.Hp));
    });
    
    gui.slot(22, 0, slot => {
        slot.setItem(Item.of("fast:deepblue_crystal").withName(Text.of("§a当前位置处于 ").append(Text.translatable(`fast.ender_bonus.roguelike.type.${Map[row][col]}`))));
    });
    
        directions.forEach(dir => {
    let slotIndex = directionSlots[dir];

    // 计算目标位置
    let newRow = row;
    let newCol = col;

    if (dir === "up") newRow -= 1;
    if (dir === "down") newRow += 1;
    if (dir === "left") newCol -= 1;
    if (dir === "right") newCol += 1;

    let isInsideMap = newRow >= 0 && newRow < 5 && newCol >= 0 && newCol < 9;
    let targetType = isInsideMap ? Map[newRow][newCol] : null;

    gui.slot(slotIndex, 0, slot => {
        let displayItem;
        if (!isInsideMap || targetType == null) {
            displayItem = Item.of("minecraft:barrier").withName("§c无法前进");
            slot.setItem(displayItem);
        } else {
                            let TypenameList = {
                    "monster": "minecraft:diamond_sword",
                    "reward": "fast:roguelike_reward",
                    "shop": "fast:roguelike_shop",
                    "player": "minecraft:white_banner",
                    "boss": "fast:roguelike_boss",
                    }
            displayItem = Item.of(TypenameList[targetType]).withName(Text.of(`§e前进至：`).append(Text.translatable(`fast.ender_bonus.roguelike.type.${targetType}`)));
            slot.setItem(displayItem);

            // 设置点击事件
            slot.setLeftClicked(() => {
                player.closeMenu();
                player.server.scheduleInTicks(1, () => {
                let { next } = dungeon
                if (!next) { 
                player.tell("你还未完成当前事件的需求")
                return 
                }
                if (dir === 'up') {
                dungeon.z -= 15;
                } else if (dir === 'down') {
                dungeon.z += 15;
                } else if (dir === 'left') {
                dungeon.x -= 15;
                } else if (dir === 'right') {
                dungeon.x += 15;
                }
                Map[row][col] = "player";
                PlayerPositionObj[uuid] = { row: newRow, col: newCol };
                NewRougueLike(player, level, dir, uuid, dungeon, targetType, players, Map, PlayerPositionObj[uuid]);
                        });
                    });
                }
            });
        });
    });
}

function openMapGUI(player, mapData, PlayerRow, PlayerCol, persistentData) {
    let Playeruuid = player.uuid
    openGuiPlayer[Playeruuid] = true
    player.openChestGUI(Text.of("§9§l深蓝之渊地图"), 6, gui => {
        // 地图为 5x9，填充在前5行（共 45 个格子）
        mapData.forEach((row, rowIndex) => {
            row.forEach((tileType, colIndex) => {
                let slotIndex = rowIndex * 9 + colIndex;
                gui.slot(slotIndex, 0, slot => {
                    let TypenameList = {
                    "monster": "minecraft:diamond_sword",
                    "reward": "fast:roguelike_reward",
                    "shop": "fast:roguelike_shop",
                    "player": "minecraft:white_banner",
                    "boss": "fast:roguelike_boss",
                    }
                    let item = Item.of(TypenameList[tileType]).withName(Text.translatable(`fast.ender_bonus.roguelike.type.${tileType}`));
                    if (PlayerRow === rowIndex && PlayerCol === colIndex) {
                    item = Item.of("minecraft:player_head").withName("§a你的位置");
                    }
                    slot.setItem(item);
                    slot.setLeftClicked(() => {
                        
                    });
                });
            });
        });
    });
}

let RougueLikeFunctionObj = {
"monster": RogueLikeSpawnMonsterEvent,
"reward": RogueLikeRewardEvent,
"boss": RogueLikeSpawnBossMonsterEvent,
"shop": RogueLikeShopEvent,
"player": RogueLikePlayerTurnBackEvent
}

function NewRougueLike(player, level, dir, uuid, dungeon, targetType, players, Map, PlayerPos) {
    let { floor, stage, type, x, y, z, Hp, MaxHp, killCount, killTarget, MoneyData } = dungeon
    RemoveAllShopRougeReward(RogueLikeShopRewardObj[uuid])
    let BossBar = RogueLikeBossBarObj[uuid]
    if (BossBar) {
    BossBar.removeAllPlayers()
    delete RogueLikeBossBarObj[uuid]
    }
    RoguelikeDungeonManager.removeDungeonByUuid(uuid);
    let Newfloor = floor + 1
    let Thisid = "easy"
    if (stage >= 10) {
    Thisid = "normal"
    }
    Math.min(Hp, MaxHp)
    RoguelikeDungeonManager.addDungeon(level, Thisid, targetType, uuid, Newfloor, stage, false, x, y, z, Hp, players, MoneyData)
    let { server } = player
    let dimension = level.dimension
  // let NewY = Math.floor(y);
  // let NewX = Math.floor(x);
  // let NewZ = Math.floor(z);
    // server.runCommandSilent(`execute in ${dimension} run place template fast:noop ${NewX - 12} ${NewY - 1} ${NewZ + 12} counterclockwise_90`)
    let Newdungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (stage >= 10) {
    Newdungeon.RewardLvl = 2
    }
    RogueLikeReloadPreDataEvent(level,  uuid, Newdungeon, Map, PlayerPos)
    BossBar = newBossBar(level, uuid, server, x, y, z, Text.translatable(`fast.ender_bonus.roguelike.type.${targetType}`).append("当前完成进度"), 50, 'noop', 0)
    RogueLikeBossBarObj[uuid] = BossBar
    let fun = RougueLikeFunctionObj[targetType]
    if (fun) {
    fun(player, level, uuid)
    }
    RogueLikenotifyPlayers(level, x, y, z, 50, 
            Text.translatable('fast.ender_bonus.roguelike.new.1', Text.translatable(`fast.ender_bonus.roguelike.dir.${dir}`), Text.translatable(`fast.ender_bonus.roguelike.type.${targetType}`)))
    RogueLikenotifyPlayers(level, x, y, z, 50, 
            Text.translatable('fast.ender_bonus.roguelike.new.2', players))
}

function RogueLikeSpawnMonsterEvent(player, level, uuid) {
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    let { floor, stage, id, x, y, z, killTarget, players } = dungeon
    let MonsterMap = RoguelikeDungeonMonsterMap[id]
    if (!MonsterMap) return
    let TypeList = MonsterMap.types
    let mobHp = MonsterMap.basehp
    const floorMultiplier = 1 + floor * 0.1;
    const stageMultiplier = Math.pow(1.2, stage);
    mobHp *= floorMultiplier * stageMultiplier * players;
    for (let i = 1; i <= killTarget; i++) {
    let randomIndex = Math.floor(Math.random() * TypeList.length);
   let randomMobType = TypeList[randomIndex];
            let mob = level.createEntity(randomMobType)
			mob.setPosition(x + (Math.random() * 5 - 2.5), y + 1, z + (Math.random() * 5 - 2.5))
			mob.setAttributeBaseValue('minecraft:generic.max_health', Math.floor(mobHp));
			mob.potionEffects.add('minecraft:glowing', 600, 0, false, false);
			mob.persistentData.RogueLike = {
				uuid: uuid
			}
			mob.spawn()
			}
}

function RogueLikeSpawnBossMonsterEvent(player, level, uuid) {
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    dungeon.killTarget = 1
    let { floor, stage, id, x, y, z, killTarget, players } = dungeon
    let MonsterMap = RoguelikeDungeonBossMonsterMap[id]
    if (!MonsterMap) return
    let TypeList = MonsterMap.types
    let mobHp = MonsterMap.basehp
    const floorMultiplier = 1 + floor * 0.1;
    const stageMultiplier = Math.pow(1.6, stage); 
    mobHp *= floorMultiplier * stageMultiplier * players;
    for (let i = 1; i <= killTarget; i++) {
    let randomIndex = Math.floor(Math.random() * TypeList.length);
   let randomMobType = TypeList[randomIndex];
            let mob = level.createEntity(randomMobType)
			mob.setPosition(x + (Math.random() * 5 - 2.5), y + 1, z + (Math.random() * 5 - 2.5))
			mob.setAttributeBaseValue('minecraft:generic.max_health', Math.floor(mobHp));
			mob.persistentData.RogueLike = {
				uuid: uuid
			}
			mob.spawn()
			}
}

function RogueLikeMobDeadEvent(entity, MobRogueLikeData) {
    let uuid = MobRogueLikeData.uuid
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    let { killTarget, type, x, y, z } = dungeon
    let level = entity.level
    dungeon.killCount += 1
    let BossBar = RogueLikeBossBarObj[uuid]
    if (type !== "boss") {
    if (BossBar) {
    BossBar.setProgress(dungeon.killCount / killTarget)
    }
    }
    if (dungeon.killCount >= killTarget) {
    if (type === "boss") {
    dungeon.floor = 0
    dungeon.stage += 1
    dungeon.MaxReward = 1
    dungeon.RewardLvl += 1
    RoguePlayersAddMoney(dungeon, level, x, y, z, 50, 40)
    spawnPackage(level, x, y, z, [newDeepBlueShardItem(uuid, 1, 3)])
    let RewardObj = RogueLikeRewardEventRewardObj[uuid]
    RemoveAllRougeReward(level, RewardObj)
    RogueLikeRewardEvent(null, level, uuid)
    generateMapWithUUID(uuid)
    RogueLikeReloadPreDataEvent(level, uuid, RoguelikeDungeonManager.getDungeonByUuid(uuid), RogueLikeMapObj[uuid], PlayerPositionObj[uuid])
    } else {
    RoguePlayersAddMoney(dungeon, level, x, y, z, 50, 10)
    if (Math.random() < 0.2) {
    spawnPackage(level, x, y, z, [newDeepBlueShardItem(uuid, 1, 3)])
    }
    NextRogueLikeEvent(uuid, dungeon)
    }
    }
}

function coordKey(x, y, z) {
  return `${x},${y},${z}`;
}

const RogueLikeRewardEventRewardObj = {}

function RogueLikeRewardEvent(player, level, uuid) {
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    let { x, y, z, RewardLvl } = dungeon
    let OffsetNeed = {
    0: 0,
    1: +2,
    2: -2
    }
    let direction = null
    if (player) {
    direction = player.getHorizontalFacing();
    }
    let NewRogueRewardObj = {}
    let ThisReward = RogueLikeRewardEnderitemsList[Math.min(RewardLvl, 3)]
    
let shuffledRewards = ThisReward.slice(); 

for (let i = shuffledRewards.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = shuffledRewards[i];
  shuffledRewards[i] = shuffledRewards[j];
  shuffledRewards[j] = temp;
}

let selectedRewards = [shuffledRewards[0], shuffledRewards[1], shuffledRewards[2]];

for (let i = 0; i < 3; i++) {
  let randomItem = selectedRewards[i];
  let Thisoffset = OffsetNeed[i];
  let NewY = Math.floor(y);
  let NewX = Math.floor(x);
  let NewZ = Math.floor(z);

  if (direction && direction.getX() !== 0) {
    NewZ += Thisoffset;
  } else {
    NewX += Thisoffset;
  }

  level.setBlockAndUpdate(BlockPos(NewX, NewY, NewZ), $AllBlocks.DEPOT.getDefaultState());

  let ItemX = NewX + 0.5;
  let ItemY = NewY + 1.5;
  let ItemZ = NewZ + 0.5;

  let DisplayItem = NewDisplayItemEntity(level, ItemX, ItemY, ItemZ, Item.of(randomItem));
  DisplayItem.persistentData.RogueLike = uuid;
  DisplayItem.spawn();

  let key = coordKey(NewX, NewY, NewZ);
  NewRogueRewardObj[key] = DisplayItem;
}

RogueLikeRewardEventRewardObj[uuid] = NewRogueRewardObj;
}

BlockEvents.rightClicked("create:depot", event => {
	if (event.hand == "OFF_HAND") return;
	let { block, player } = event
	let { level, x, y, z } = block
    let aabb = AABB.of(
    x - 3, y, z - 3,
    x + 3, y + 3, z + 3
    );
    let uuid = null
    let entities = level.getEntitiesWithin(aabb)
    entities.forEach(DisplayItem => {
        if (DisplayItem.type === "minecraft:item_display") {
        if (!uuid) {
           uuid = DisplayItem.persistentData.RogueLike
           }
        }
    })
    if (!uuid) return
    let RewardObj = RogueLikeRewardEventRewardObj[uuid]
    if (!RewardObj) return
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    let key = coordKey(x, y, z);
    let MaxReward = dungeon.MaxReward
    let ThisItem = RewardObj[key]
    let ItemEntityNbt = ThisItem.nbt
    let item = ItemEntityNbt.item
    let nbt = item.tag
    let NewNbt = null
    if (nbt) {
    nbt.Roguelike = uuid
    NewNbt = nbt
    } else {
    NewNbt = {Roguelike: uuid}
    }
    let stack = Item.of(item.id, 1, NewNbt)
    let PlayerUuid = player.uuid
    if (!dungeon.MoneyData[PlayerUuid]) dungeon.MoneyData[PlayerUuid] = 0
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    persistentData.OpenMenuGui = true
    player.openChestGUI(Text.of("§l请选择你的行动"), 1, gui => {
            gui.slot(0, 0, slot => {
                slot.setItem(Item.of("minecraft:orange_wool").withName("§f使用次数或25深蓝币刷新所有物品"));
                slot.setLeftClicked(() => {
                if (dungeon.RefreshCount > 0) {
                player.closeMenu();
                dungeon.RefreshCount -= 1
                player.server.scheduleInTicks(1, () => {
    RemoveAllRougeReward(level, RewardObj)
    RogueLikeRewardEvent(player, level, uuid);
                })
                } else if (dungeon.MoneyData[PlayerUuid] >= 25){
                player.closeMenu();
                dungeon.MoneyData[PlayerUuid] -= 25
                player.server.scheduleInTicks(1, () => {
    RemoveAllRougeReward(level, RewardObj)
    RogueLikeRewardEvent(player, level, uuid);
                })
                } else {
                player.closeMenu();
                player.tell("深蓝币不足")
                }
                })
                })
            gui.slot(2, 0, slot => {
                slot.setItem(Item.of("minecraft:blue_wool").withName("§f领取该物品"));
                slot.setLeftClicked(() => {
                player.closeMenu();
                player.server.scheduleInTicks(1, () => {
                ThisItem.discard()
    level.destroyBlock(BlockPos(x, y, z), false)
    NewItemEntity(level, x+0.5, y+1, z+0.5, stack)
    delete RewardObj[key]
    dungeon.Reward += 1
    if (dungeon.Reward >= MaxReward) {
    RemoveAllRougeReward(level, RewardObj)
    NextRogueLikeEvent(uuid, dungeon)
    } else if (dungeon.Reward % 3 === 0) {
    RogueLikeRewardEvent(player, level, uuid);
    }
                })
                })
                })
            gui.slot(4, 0, slot => {
                slot.setItem(stack);
                })
            gui.slot(6, 0, slot => {
                slot.setItem(Item.of("minecraft:white_wool").withName("§f不领取物品以获得10深蓝币"));
                slot.setLeftClicked(() => {
                player.closeMenu();
                player.server.scheduleInTicks(1, () => {
                    ThisItem.discard()
    level.destroyBlock(BlockPos(x, y, z), false)
    dungeon.MoneyData[PlayerUuid] += 10
    delete RewardObj[key]
    dungeon.Reward += 1
    if (dungeon.Reward >= MaxReward) {
    RemoveAllRougeReward(level, RewardObj)
    NextRogueLikeEvent(uuid, dungeon)
    } else if (dungeon.Reward % 3 === 0) {
    RogueLikeRewardEvent(player, level, uuid);
    }
                })
                })
                })
            gui.slot(8, 0, slot => {
                slot.setItem(Item.of("minecraft:red_wool").withName("§f关闭页面"));
                slot.setLeftClicked(() => {
                player.closeMenu();
                })
                })
    });
})

function RemoveAllRougeReward(level, RewardObj) {
    if (!RewardObj) return
    for (let RewardBlock in RewardObj) {
    let RewardItem = RewardObj[RewardBlock]
    RewardItem.discard()
    let [RewardX, RewardY, RewardZ] = RewardBlock.split(",").map(Number);
    level.destroyBlock(BlockPos(RewardX, RewardY, RewardZ), false)
    delete RewardObj[RewardBlock]
    }
}

function RogueLikePlayerTurnBackEvent(player, level, uuid) {
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    NextRogueLikeEvent(uuid, dungeon)
}

function getRandomItems(count, uuid) {
  let allItemsWithLevel = [];
  for (let level in RogueLikeRewardEnderitemsList) {
    let itemArray = RogueLikeRewardEnderitemsList[level];
    for (let i = 0; i < itemArray.length; i++) {
      allItemsWithLevel.push({
        item: itemArray[i],
        level: level 
      });
    }
  }
  
  const MoneyRanges = {
    '1': { min: 100, max: 200 },
    '2': { min: 150, max: 300 },
    '3': { min: 200, max: 400 },
    '4': { min: 100, max: 300 }
  };
  
  for (let i = allItemsWithLevel.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [allItemsWithLevel[i], allItemsWithLevel[j]] = [allItemsWithLevel[j], allItemsWithLevel[i]];
  }

  return allItemsWithLevel.slice(0, count).map(item => {
    let range = MoneyRanges[item.level];
    let randomMoney = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;   
    let thisItem = item.item
    let nbt = { Roguelike: uuid };
    
    if (Math.random() < 0.7) {
      thisItem = 'fast:deepblue_shard';
      nbt.enderbonus = generateRandomEnderBonus(1, 3);
    }

    return {
      item: thisItem,
      count: 1,
      money: randomMoney,
      nbt: nbt
    };
  });
}

const RogueLikeShopRewardObj = {}

function RogueLikeShopEvent(player, level, uuid) {
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    NextRogueLikeEvent(uuid, dungeon)
    let { x, y, z } = dungeon
    let ThisShop = getRandomItems(12, uuid)
    RogueLikeShopRewardObj[uuid] = {}
    RogueLikeShopRewardObj[uuid].shop = ThisShop
    let DisplayItem = NewDisplayItemEntity(level, x, y + 3, z, Item.of("fast:roguelike_shop"));
  DisplayItem.persistentData.RogueLike = uuid;
  DisplayItem.spawn();
  RogueLikeShopRewardObj[uuid].DisplayItem = DisplayItem
  let maid = level.createEntity("touhou_little_maid:maid");
  maid.setPosition(x, y, z);
  maid.persistentData.RogueLike = uuid;
  maid.setModelId("touhou_little_maid:kawasiro_nitori")
  maid.spawn()
  RogueLikeShopRewardObj[uuid].maid = maid
}

function openRogueLikeShop(player, shopData, uuid, maid) {
    let PlayerUuid = player.uuid
    let { level, x, y, z } = maid
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    persistentData.OpenMenuGui = true
    player.openChestGUI(Text.of("§6河童工坊"), 6, gui => {
        gui.slot(4, 0, slot => {
        let PlayerMoney = dungeon.MoneyData[PlayerUuid]
        slot.setItem(Item.of("minecraft:emerald").withName("§a你当前拥有深蓝币: "+ PlayerMoney));
        });
        shopData.forEach((entry, index) => {
            let row = Math.floor(index / 2);
            let side = index % 2;

            let baseCol = side === 0 ? 1 : 6;
            let itemSlotIndex = row * 9 + baseCol;
            let buttonSlotIndex = row * 9 + baseCol + 1;
            let item = Item.of(entry.item, 1, entry.nbt);
            gui.slot(itemSlotIndex, 0, slot => {
                slot.setItem(item);
            });

            gui.slot(buttonSlotIndex, 0, slot => {
            let PlayerMoney = dungeon.MoneyData[PlayerUuid]
                let button = Item.of("minecraft:emerald").withName(`§a点击购买 (${entry.money} 深蓝币)`);
                slot.setItem(button);
                slot.setLeftClicked(() => {
                if (PlayerMoney >= entry.money) {
                dungeon.MoneyData[PlayerUuid] -= entry.money
                player.closeMenu();
                let spawn = maid.getEyePosition()
                let targetPos = player.position();
                let direction = targetPos.subtract(spawn).normalize().scale(0.8)
                let ItemEntity = NewItemEntitygetItemEntity(level, spawn.x(), spawn.y(), spawn.z(), item)
                ItemEntity.setMotion(direction.x(), direction.y(), direction.z());
                ItemEntity.spawn()
                shopData.splice(index, 1);
                RogueLikeReloadPreDataEvent(level, uuid, RoguelikeDungeonManager.getDungeonByUuid(uuid), RogueLikeMapObj[uuid], PlayerPositionObj[uuid])
                    } else {
                    
                    }
                });
            });
        });
    });
}

function RemoveAllShopRougeReward(ShopRewardObj) {
    if (!ShopRewardObj) return
    for (let key in ShopRewardObj) {
    let ShopEntity = ShopRewardObj[key]
    if (typeof ShopEntity.discard === 'function') {
    ShopEntity.discard()
    }
    delete ShopRewardObj[key]
    }
}

ItemEvents.entityInteracted(event => {
    let { player, target, hand, level } = event;
    if (hand !== 'main_hand' || target.type !== 'touhou_little_maid:maid') return;
    let MaidPersistentData = target.persistentData;
    if (MaidPersistentData.RogueLike) {
    let uuid = MaidPersistentData.RogueLike
    let ShopRewardObj = RogueLikeShopRewardObj[uuid]
    if (ShopRewardObj) {
    if (ShopRewardObj.shop.length === 0) {
    ShopRewardObj.shop = getRandomItems(12, uuid)
    }
    let Shop = ShopRewardObj.shop
    openRogueLikeShop(player, Shop, uuid, target)
    }
    event.cancel();
    }
});

EntityEvents.death("minecraft:player", event => {
	const player = event.player
	if (!player.isPlayer()) return
	let { level } = player
	let Playeruuid = player.uuid
	let RogueData = PlayersInRogueLike[Playeruuid]
	if (!RogueData) return
	let uuid = RogueData.uuid
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    let { x, y, z } = dungeon
    let HaveHp = false
    if (dungeon.Hp > 0) {
    dungeon.Hp -= 1
    RogueLikenotifyPlayers(level, x, y, z, 50, Text.translatable('fast.ender_bonus.roguelike.dead.1', dungeon.Hp))
    player.setHealth(player.getMaxHealth())
    player.sendData("DisplayItemActivation",{
    item: "fast:deepblue_crystal"
    })
    PlayersPlaySound(level, x, y, z, 50, 'minecraft:item.totem.use')
    HaveHp = true
    }
    if (dungeon.Hp <= 0) {
    RogueLikenotifyPlayers(level, x, y, z, 50, Text.translatable('fast.ender_bonus.roguelike.dead.2'))
    if (dungeon.stage >= 10) {
    RoguePlayersAddData(level, x, y, z, 50, "stage", 10)
    }
    let server = player.server
    let ItemPlayer = RogueLikeItemObj[uuid]
    let ItemPlayerEntity = server.getPlayer(ItemPlayer)
    ItemPlayerEntity.closeMenu();
    server.scheduleInTicks(2, () => {
    RemoveRogueLike(level, uuid, ItemPlayer)
    })
    }
    if (HaveHp) {
    event.cancel();
    }
})

function getRogueLikeItem(player, uuid, PlayerUuid) {
    if (!player) return null
    let inventory = player.inventory;
    let RogueLikeItem = null
    for (let i = 0; i < inventory.getContainerSize(); i++) {
        let item = inventory.getItem(i);
        if (!item.isEmpty() && item.id === "fast:deepblue_crystal") {
            let nbt = item.getNbt();
            if (nbt && nbt.RougueLike) {
            let ItemData = nbt.RougueLike
            if (ItemData.uuid === uuid) {
            RogueLikeItem = item
            }
            }
        }
    }
    return RogueLikeItem
}

function RemoveRogueLike(level, uuid, PlayerUuid) {
    let dungeon = RoguelikeDungeonManager.getDungeonByUuid(uuid);
    if (!dungeon) return
    let { x, y, z } = dungeon
    deleteInsideLoquat(x,y,z, level, 200)
    let BossBar = RogueLikeBossBarObj[uuid]
    if (BossBar) {
    BossBar.removeAllPlayers()
    delete RogueLikeBossBarObj[uuid]
    }
    if (PlayerUuid) {
    let player = level.server.getPlayer(PlayerUuid)
    let item = getRogueLikeItem(player, uuid, PlayerUuid)
    if (item) {
    let nbt = item.nbt
    if (nbt) {
    let ItemData = nbt.RougueLike
    let { floor, stage, players } = dungeon
    ItemData.Remove = true
    ItemData.floor = floor
    ItemData.stage = stage
    let thisItemValue = 1 + Math.floor(stage / 10)
    thisItemValue * players
    ItemData.ItemValue = thisItemValue
    if (stage < 3) ItemData.ItemValue = 0
    RoguePlayersAddSdmMoney(dungeon, level, x, y, z, 50)
    if (stage >= 3) {
    RogueLikenotifyPlayers(level, x, y, z, 50, 
            Text.translatable('fast.ender_bonus.roguelike.close.1', stage, players, thisItemValue))
            } else {
            RogueLikenotifyPlayers(level, x, y, z, 50, 
            Text.translatable('fast.ender_bonus.roguelike.close.0'))
            }
    }
    }
    }
    RoguelikeDungeonManager.removeDungeonByUuid(uuid);
    RemoveAllShopRougeReward(RogueLikeShopRewardObj[uuid])
    RemoveAllRougeReward(level, RogueLikeRewardEventRewardObj[uuid])
    delete RogueLikeMapObj[uuid]
    delete PlayerPositionObj[uuid]
    for (let playerUUID in PlayersInRogueLike) {
        if (!PlayersInRogueLike.hasOwnProperty(playerUUID)) continue;
        let data = PlayersInRogueLike[playerUUID];
        if (data && data.uuid === uuid) {
            delete PlayersInRogueLike[playerUUID];
        }
    }
    let LevelData = level.persistentData
    if (LevelData.RougueLike) {
    LevelData.RougueLike.remove(uuid);
    }
	level.getEntities().forEach(entity => {
		let persistentData = entity.persistentData
        if (!persistentData.RogueLike) return
		let MobRogueLikeData = persistentData.RogueLike
        let Mobuuid = MobRogueLikeData.uuid
        if (Mobuuid !== uuid) return
		entity.discard()
	})
}

function NextRogueLikeEvent(uuid, dungeon) {
    dungeon.next = true
    let BossBar = RogueLikeBossBarObj[uuid]
    if (BossBar) {
    BossBar.setProgress(1)
    }
}

function RogueLikenotifyPlayers(level, x, y, z, radius, message) {
    x += 0.5;
    y += 0.5;
    z += 0.5;
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            entity.tell(message);
        }
    });
}

const enderBonusRanges = {
    1: {
        genericStrBonus: [-5,10],
        genericIntBonus: [-5,10],
        genericAgiBonus: [-5,10],
        genericVitBonus: [-5,10],
        genericAttackBonus: [-7,15],
        genericCritBonus: [-2,5],
        genericAttackSpeedBonus: [-5,10],
        genericMaxHealthBonus: [-7,15],
        genericSpellPowerBonus: [-5,10],
        genericEvocationSpellBonus: [-10,20],
        genericFireSpellBonus: [-10,20],
        genericHolySpellBonus: [-10,20],
        genericEnderSpellBonus: [-10,20],
        genericLightningSpellBonus: [-10,20],
        genericBloodSpellBonus: [-10,20],
        genericIceSpellBonus: [-10,20],
        genericNatureSpellBonus: [-10,20],
        genericDefenseBonus: [-10,20],
        genericMoveBonus: [-5,10],
        genericAttackInvincibleBonus: [-5,2]
    },
};

function generateRandomEnderBonus(key, count) {
    let ranges = enderBonusRanges[key];
    if (!ranges) return {};

    let result = {};
    let keys = Object.keys(ranges);
    let used = new Set();

    while (Object.keys(result).length < count) {
        let bonusKey = keys[Math.floor(Math.random()*keys.length)];
        if (used.has(bonusKey)) continue;
        used.add(bonusKey);

        let [min,max] = ranges[bonusKey];
        let value = randInt(min,max);
        if (value !== 0) result[bonusKey] = value;
    }

    return result;
}

function newDeepBlueShardItem(uuid, key, count) {
    let enderbonus = generateRandomEnderBonus(key, count);
    return Item.of('fast:deepblue_shard', 1, {enderbonus: enderbonus, Roguelike: uuid})
}