// priority: 1100

const $MobEffectEvent$Added = Java.loadClass('net.minecraftforge.event.entity.living.MobEffectEvent$Added');
const $CriticalHitEvent = Java.loadClass('net.minecraftforge.event.entity.player.CriticalHitEvent');
const $LivingAttackEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingAttackEvent');
const $LivingHurtEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingHurtEvent');
const $LivingDamageEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingDamageEvent');
const $SpellHealEvent = Java.loadClass('io.redspace.ironsspellbooks.api.events.SpellHealEvent');
const $InteractMaidEvent = Java.loadClass('com.github.tartaricacid.touhoulittlemaid.api.event.InteractMaidEvent');
const $LivingGetProjectileEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingGetProjectileEvent');
const $AnvilUpdateEvent = Java.loadClass('net.minecraftforge.event.AnvilUpdateEvent');
const $AnvilRepairEvent = Java.loadClass('net.minecraftforge.event.entity.player.AnvilRepairEvent');
const $ShieldBlockEvent = Java.loadClass('net.minecraftforge.event.entity.living.ShieldBlockEvent');
const $ItemStackedOnOtherEvent = Java.loadClass('net.minecraftforge.event.ItemStackedOnOtherEvent');
const $GunShootEvent = Java.loadClass("com.tacz.guns.api.event.common.GunShootEvent")
const $StardewMinigameStartedEvent = Java.loadClass("com.bonker.stardewfishing.server.event.StardewMinigameStartedEvent")
const $StardewMinigameEndedEvent = Java.loadClass("com.bonker.stardewfishing.server.event.StardewMinigameEndedEvent")
const $ProjectileImpactEvent = Java.loadClass("net.minecraftforge.event.entity.ProjectileImpactEvent")
const $MaidBaubleChangeEvent$PutOn = Java.loadClass("com.github.tartaricacid.touhoulittlemaid.api.event.MaidBaubleChangeEvent$PutOn")
const $MaidBaubleChangeEvent$TakeOff = Java.loadClass("com.github.tartaricacid.touhoulittlemaid.api.event.MaidBaubleChangeEvent$TakeOff")
const $LivingTickEvent = Java.loadClass("net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent")