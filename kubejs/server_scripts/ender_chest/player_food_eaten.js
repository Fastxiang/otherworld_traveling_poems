
function PlayerfoodEatenEvent(event) {
    let player = event.player;
    if (!player) return;
    let item = event.item
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    TheCard8foodEatenEvent(player, persistentData, item)
}

function TheCard8foodEatenEvent(player, persistentData, item) {
    if (!persistentData.TheCard8) return
    let count = persistentData.TheCard8
    let fooditem = item.getFoodProperties(player);
     if (fooditem) {
     let nutrition = fooditem.getNutrition()
     let staturation = fooditem.getSaturationModifier() * nutrition
     if (player.hasEffect('fast:card_attack')) {
    player.removeEffect('fast:card_attack');
    }
    player.potionEffects.add('fast:card_attack', 400, staturation * (count - 1), false, false);
     }
}
