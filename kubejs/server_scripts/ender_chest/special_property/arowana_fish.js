// priority: 500

EnderBonusOnPlayerChangeMana.addSpecialProperty("lavafishing:arowana_fish", SpecialPropertyArowanaFishEvent, 1)

function SpecialPropertyArowanaFishEvent(handler, event) {
    let NewManaCost = event.getNewMana();
    let OldManaCost = event.getOldMana();
    let EventEntity = event.entity
    if (OldManaCost > NewManaCost) {
    let NeedMana = OldManaCost - NewManaCost
    let NeedDamage = Math.floor(NeedMana / 20)
    let EventEntityHp = EventEntity.getHealth();
    let Hp = EventEntityHp - NeedDamage;
    if (Hp > 0) {
    EventEntity.setHealth(Hp);
    event.setNewMana(OldManaCost)
    }
    }
}