// 打开末影箱

let $SimpleMenuProvider = Java.loadClass("net.minecraft.world.SimpleMenuProvider");
let $Optional = Java.loadClass("java.util.Optional");

NetworkEvents.dataReceived("server", (event) => {
    const { data, player } = event;

    if (data.open_menu == "enderchest") {
        player.openInventoryGUI(player.enderChestInventory, Component.translatable("container.enderchest"));
    }
});