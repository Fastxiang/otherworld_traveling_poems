// priority: 899

let openGuiPlayer = {}

ItemEvents.canPickUp(event => {
    let player = event.player
    if (!player || !player.isAlive()) return;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (persistentData.OpenMenuGui) {
    event.cancel();
    }
})

const Cardpositions = {
    1: [4],
    2: [3,5],
    3: [2,4,6],
    4: [1,3,5,7],
    5: [0,2,4,6,8],
    6: [1,2,3,5,6,7],
    7: [1,2,3,4,5,6,7],
    8: [0,1,2,3,5,6,7,8],
    9: [0,1,2,3,4,5,6,7,8]
};

function OpenCardGuiEvent(player, Name, uuid, persistentData, ItemList, originalItem) {
    let { level, x, y, z } = player
    persistentData.OpenMenuGui = true
    player.openChestGUI(Text.translatable(Name), 1, gui => {
        let Length = ItemList.length
        let availablePositions = Cardpositions[Length];
        if (Length < 8) {
        let stickItem = Item.of("fast:closegui");
        gui.slot(0, 0, slot => {
            slot.setItem(stickItem)
            slot.setLeftClicked(() => {
                TheHeroCardClickedSlotEvent(slot, player, uuid, persistentData, ItemList, originalItem, level, x, y, z, false)
                })
        });
        gui.slot(8, 0, slot => {
            slot.setItem(stickItem)
            slot.setLeftClicked(() => {
                TheHeroCardClickedSlotEvent(slot, player, uuid, persistentData, ItemList, originalItem, level, x, y, z, false)
                })
        });
        }
        for (let index = 0; index < ItemList.length; index++) {
            gui.slot(availablePositions[index], 0, slot => {
            let Newitem = ItemList[index]
                slot.setItem(Newitem)
                slot.setLeftClicked(() => {
                TheHeroCardClickedSlotEvent(slot, player, uuid, persistentData, ItemList, originalItem, level, x, y, z, true)
                })
            })
        }
    })
}

function TheHeroCardClickedSlotEvent(slot, player, uuid, persistentData, ItemList, originalItem, level, x, y, z, SpawnEntity) {
                    let iitem = slot.getItem();
                    if (iitem.is("air")) return;
                    player.closeMenu();
                    player.server.scheduleInTicks(1, () => {
                        persistentData.OpenMenuGui = false
                        if (SpawnEntity) {
                        NewItemEntity(level, x, y, z, iitem)
                        }
                        PlayerHaveCardItemList[uuid] = null
                        if (originalItem) {
                        originalItem.count--;
                        }
                    })
}