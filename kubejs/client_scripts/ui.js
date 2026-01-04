
ItemEvents.rightClicked("fast:ender_pouch", event => {
    let player = event.player;
    let item = event.item;
    let hand = event.getHand();
    if (player.isShiftKeyDown()) {
    EnderPouchPlayerisShift(player, hand, item)
    }
})

function EnderPouchPlayerisShift(player, hand, openitem) {
    ItemUIFactory.INSTANCE.openUI(player, hand, "ender_pouch")
}