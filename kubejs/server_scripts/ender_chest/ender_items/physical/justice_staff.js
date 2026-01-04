// priority: 500

registerItemMaidBauble("fast:justice_staff")
EnderBonusOnLivingHurtByEntity.addBonus("fast:justice_staff", JusticeStaffEvent, 1)

function JusticeStaffEvent(handler, event) {
    handler.addIndependentMultiplier(-0.6)
}