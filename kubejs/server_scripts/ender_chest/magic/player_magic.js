function sunCardEffectFlamingEvent(player, persistentData) {
    if (!persistentData.sunCardEffect) return
        let firePower = player.getAttributeValue("irons_spellbooks:fire_spell_power")
        let fireLevel = 1
        fireLevel += Math.floor((firePower - 1) * 5)
        let Cast = overLimitSpellCast("irons_spellbooks:flaming_strike", fireLevel, player, false); 
}

function HeroStaffMagicEvent(event, player, persistentData, damagetype) {
        if (!damagetype.includes("player")) return
        let int = player.getAttribute(`fast:int`).getValue();
        let str = player.getAttribute(`fast:str`).getValue();
        int *= 1.5;
        let MagicLevel = 1
        let spellId = "irons_spellbooks:magic_missile"
        if (persistentData.HeroStaffMagic) {
        spellId = persistentData.HeroStaffMagic
        }
        
        if (persistentData.BloodMagicShard) {
        MagicLevel += Math.floor((int + str) / 40)
        } else {
        MagicLevel += Math.floor(int / 20)
        }
        
        let spell = $SpellRegistry["getSpell(net.minecraft.resources.ResourceLocation)"](new ResourceLocation(spellId));
        
        let Cast = overLimitSpellCast(spellId, MagicLevel, player, false)
        event.setCanceled(true);
}

const notspelltype = ["irons_spellbooks:summon_polar_bear", "irons_spellbooks:summon_vex","irons_spellbooks:raise_dead"];

global.PlayerUseMagicPlus = (player, spellLevel, persistentData) => {
    if (persistentData.magicianCardEffect) {
        if (persistentData.spellIds && persistentData.spellIds.length > 0) {
            let spellId = persistentData.spellIds;
            let spell = $SpellRegistry["getSpell(net.minecraft.resources.ResourceLocation)"](new ResourceLocation(spellId));
            if (notspelltype.includes(spellId)) {
                player.tell("你尝试释放召唤法术，但失败了");
                return false;
            } else {
                if (spell) {
                        
                            if (checkPlayerMana(player, spell, spellLevel)) {
                            if (overLimitSpellCast(spellId, spellLevel, player, false)) {
                            return true;
                              }
                            }
                           } 
                 }
          }
     }
     return false
}

global.ExplosionPre = (ctx) => {
        let player = ctx.entity;
        if (!player.isPlayer()) return;
        let { x, y, z, level } = player
        let CastTimeReduction = player.getAttributeValue('irons_spellbooks:cast_time_reduction');
        // 播放音效
        if (CastTimeReduction <= -0.5) {
        // player.server.runCommandSilent(`stopsound @a * kubejs:explosion2`);
         PlayersStopAndPlaySound(level, x, y, z, 50, 'kubejs:explosion2')
        }
}

function SpellStorageSphereEvent(player, item, PlayerPersistentData, persistentData) {
        let validItems = [];
    
    let inventory = player.inventory;
    for (let i = 0; i < inventory.getContainerSize(); i++) {
        let item = inventory.getItem(i);
        if (!item.isEmpty()) {
        let itemId = item.id;
        if (itemId === 'irons_spellbooks:scroll') {
        let nbt = item.getNbt();
        let spells = nbt?.ISB_Spells?.data;
        if (spells && Array.isArray(spells)) {
            validItems.push(item);
            }
            }
            }
        }
    
    let enderChest = player.enderChestInventory;
    for (let i = 0; i < enderChest.getContainerSize(); i++) {
        let item = enderChest.getItem(i);
        if (!item.isEmpty()) {
        let itemId = item.id;
        if (itemId === 'irons_spellbooks:scroll') {
        let nbt = item.getNbt(); 
        let spells = nbt?.ISB_Spells?.data;
        if (spells && Array.isArray(spells)) {
            validItems.push(item);
            }
            }
        }
    }
    
        let nbt = item.orCreateTag
        persistentData.OpenMenuGui = true
        player.openChestGUI(Text.of("你想让女仆释放几种法术？"), 1, gui => {
        gui.slot(0, 0, slot => {
                    let SlotItem = Item.of("fast:spell_storage_sphere").withName("§f按顺序释放1种法术")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                    nbt.MagicData = {}
                    let MagicData = nbt.MagicData
                    MagicData.magic = []
                    MagicData.typeCount = 1
                    MagicData.thisCount = 0
                    MagicData.thisAttack = 0
                    openGUISpellStorageSphereEvent(player,
MagicData, persistentData, validItems)
                    });
             });
             
        gui.slot(2, 0, slot => {
                    let SlotItem = Item.of("fast:spell_storage_sphere").withName("§f按顺序释放2种法术")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                    nbt.MagicData = {}
                    let MagicData = nbt.MagicData
                    MagicData.magic = []
                    MagicData.typeCount = 2
                    MagicData.thisCount = 0
                    MagicData.thisAttack = 0
                    openGUISpellStorageSphereEvent(player,
MagicData, persistentData, validItems)
             });
        });
        
        gui.slot(4, 0, slot => {
                    let SlotItem = Item.of("fast:spell_storage_sphere").withName("§f按顺序释放3种法术")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                    nbt.MagicData = {}
                    let MagicData = nbt.MagicData
                    MagicData.magic = []
                    MagicData.typeCount = 3
                    MagicData.thisCount = 0
                    MagicData.thisAttack = 0
                    openGUISpellStorageSphereEvent(player,
MagicData, persistentData, validItems)
             });
        });
        
        gui.slot(6, 0, slot => {
                    let SlotItem = Item.of("fast:spell_storage_sphere").withName("§f按顺序释放4种法术")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                    nbt.MagicData = {}
                    let MagicData = nbt.MagicData
                    MagicData.magic = []
                    MagicData.typeCount = 4
                    MagicData.thisCount = 0
                    MagicData.thisAttack = 0
                    openGUISpellStorageSphereEvent(player,
MagicData, persistentData, validItems)
             });
        });
        
        
        gui.slot(8, 0, slot => {
                    let SlotItem = Item.of("fast:spell_storage_sphere").withName("§f按顺序释放5种法术")
                    slot.setItem(SlotItem);
                    slot.setLeftClicked(() => {
                    nbt.MagicData = {}
                    let MagicData = nbt.MagicData
                    MagicData.magic = []
                    MagicData.typeCount = 5
                    MagicData.thisCount = 0
                    MagicData.thisAttack = 0
                    openGUISpellStorageSphereEvent(player,
MagicData, persistentData, validItems)
                    });
             });
        });
}


function openGUISpellStorageSphereEvent(player,
MagicData, persistentData, validItems) {
    let thisCount = MagicData.thisCount
    let Playeruuid = player.uuid
    if (thisCount >= MagicData.typeCount) {
    openGuiPlayer[Playeruuid] = false
    player.closeMenu();
    return
    }
    
    let rowsNeeded = Math.ceil(validItems.length / 9);
    if (rowsNeeded < 1) rowsNeeded = 1;
    if (rowsNeeded > 6) rowsNeeded = 6;
    openGuiPlayer[Playeruuid] = true
    player.openChestGUI(Text.of(`§9§l选择释放的法术`), rowsNeeded, gui => {
        for (let i = 0; i < validItems.length; i++) {
            let item = validItems[i]
            let nbt = item.getNbt();
            let spellId = null
        let spells = nbt?.ISB_Spells?.data;
        if (spells && Array.isArray(spells)) {
            spells.forEach((spell) => {
                spellId = spell.id;
            })
            }
            let spellLang = spellId.replace(":", ".")
            let NewItem = item.withName(Text.of(`§f选择该法术为第${thisCount + 1}次释放法术: `).append(Text.translatable(`spell.${spellLang}`)))
            
            
            gui.slot(i, 0, slot => {
                slot.setItem(NewItem);
                slot.setLeftClicked(() => {
                if (spellId) {
                MagicData.magic.push(spellId)
                MagicData.thisCount += 1
                openGUISpellStorageSphereEvent(player,
MagicData, persistentData, validItems)
                }
                });
            });
        }
    })
}