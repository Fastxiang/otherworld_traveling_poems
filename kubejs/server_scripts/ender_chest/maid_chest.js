
function MaidInvEvent(Owner, persistentData, maid) {
     let MaidInv = maid.getAvailableInv(false)
     let MaidpersistentData = maid.persistentData;
     MaidpersistentData.Foodstaturation = 0;
     let foodList = []
     for (let i = 0; i < MaidInv.getSlots() - 2; i++) {
     let item = MaidInv.getStackInSlot(i)
     let fooditem = item.getFoodProperties(Owner);
     if (fooditem) {
     let itemId = item.id
     if (!foodList.includes(itemId)) {
     foodList.push(itemId);
     let nutrition = fooditem.getNutrition()
     let staturation = fooditem.getSaturationModifier() * nutrition
     MaidpersistentData.Foodstaturation += staturation;
     }
     }
     }
}
