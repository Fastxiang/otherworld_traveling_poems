
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

function SpellStorageSphereEvent(player, item) {
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
    let uuid = player.uuid
        let nbt = item.orCreateTag
        openGuiPlayer[uuid] = true
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
MagicData, validItems)
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
MagicData, validItems)
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
MagicData, validItems)
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
MagicData, validItems)
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
MagicData, validItems)
                    });
             });
        });
}


function openGUISpellStorageSphereEvent(player,
MagicData, validItems) {
    let thisCount = MagicData.thisCount
    let uuid = player.uuid
    if (thisCount >= MagicData.typeCount) {
    openNewGuiPlayer[uuid] = false
    player.closeMenu();
    return
    }
    
    let rowsNeeded = Math.ceil(validItems.length / 9);
    if (rowsNeeded < 1) rowsNeeded = 1;
    if (rowsNeeded > 6) rowsNeeded = 6;
    openNewGuiPlayer[uuid] = true
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
MagicData, validItems)
                }
                });
            });
        }
    })
}