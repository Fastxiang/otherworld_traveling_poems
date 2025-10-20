let $Button = Java.loadClass("net.minecraft.client.gui.components.Button");
let $InventoryScreen = Java.loadClass("net.minecraft.client.gui.screens.inventory.InventoryScreen");


ClientEvents.tick((event) => {
    let screen = Client.screen;
    let player = event.player;

    if (screen instanceof $InventoryScreen) {
        screen.addRenderableWidget(
            $Button
                .builder(Text.of("b").font("kubejs:botton"), (button) =>
                    player.sendData("server", { open_menu: "enderchest" })
                )
                .bounds(screen.guiLeft + screen.getXSize() - 80, screen.guiTop + 60, 20, 20)
                .build()
        );
    }
});