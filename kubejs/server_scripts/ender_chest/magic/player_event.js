PlayerEvents.spellPreCast(event => {
    let spellId = event.spellId;
    let player = event.entity;
    let spellLevel = event.spellLevel
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    magicianCardEffectEvent(player, persistentData, spellId, spellLevel)
})

PlayerEvents.spellOnCast(event => {
    let spellId = event.spellId;
    let player = event.entity;
    let spellLevel = event.spellLevel
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let ManaCost = event.getManaCost()
    let item = player.getMainHandItem();
   if (item) {
   if (hasSpecialProperty(item, "youkaishomecoming:assorted_dango")) {
   player.server.scheduleInTicks((2), () => {
   if (checkPlayerManaCost(player, ManaCost * 5, false)) {
   let Cast = overLimitSpellCast(spellId, spellLevel, player, false)
   }
   })
   }
   }
})

PlayerEvents.changeMana(event => {
    let NewManaCost = event.getNewMana();
    let OldManaCost = event.getOldMana();
    let player = event.entity;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let item = player.getMainHandItem();
   if (item) {
   if (hasSpecialProperty(item, "lavafishing:arowana_fish")) {
   if (OldManaCost > NewManaCost) {
   let NeedMana = OldManaCost - NewManaCost
   let NeedDamage = Math.floor(NeedMana / 20)
   let PlayerHp = player.getHealth();
   let Hp = PlayerHp - NeedDamage;
   if (Hp > 0) {
   player.setHealth(PlayerHp - NeedDamage);
   event.setNewMana(OldManaCost)
   }
   }
   }
   }
})


function magicianCardEffectEvent(player, persistentData, spellId, spellLevel) {
    if (!persistentData.magicianCardEffect) return
    let level = player.level;
    let pos = player.position();
    let radius = 20;
    let Entityentitylist = getLivingWithinRadius(level, pos, radius);
    if(Entityentitylist) {
    Entityentitylist.forEach(entity => {
    let Owner = getEntityOwner(entity)
    let Partner = getEntityPartner(entity)
    if ((Owner && Owner === player) || (Partner && Partner === player)) {
    if (!entity.isAlive()) return
    MoboverLimitSpellCast(spellId, entity, spellLevel)
    }
    })
    }
}