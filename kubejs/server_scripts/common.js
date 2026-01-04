// priority: 2000
const $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')
const $DamageSources = Java.loadClass('io.redspace.ironsspellbooks.damage.DamageSources')
const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData");
const $CastSource = Java.loadClass("io.redspace.ironsspellbooks.api.spells.CastSource");
const $SpellRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.SpellRegistry");
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
const $Messages = Java.loadClass("io.redspace.ironsspellbooks.setup.Messages");
const $ClientboundSyncMana = Java.loadClass("io.redspace.ironsspellbooks.network.ClientboundSyncMana");
const $EntityRegistry = Java.loadClass("io.redspace.ironsspellbooks.registries.EntityRegistry");
const $MagicFireball = Java.loadClass('io.redspace.ironsspellbooks.entity.spells.fireball.MagicFireball');
const $SmallMagicFireball = Java.loadClass('io.redspace.ironsspellbooks.entity.spells.fireball.SmallMagicFireball');
const $ScaleTypes = Java.loadClass('virtuoel.pehkui.api.ScaleTypes');
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries');
const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey');
const $AABBArea = Java.loadClass('snownee.loquat.core.area.AABBArea');
const $AreaManager = Java.loadClass('snownee.loquat.core.AreaManager');
const $Area = Java.loadClass('snownee.loquat.core.area.Area');
const $UUID = Java.loadClass('java.util.UUID');
const $RestrictInstance = Java.loadClass('snownee.loquat.core.RestrictInstance');
const $RestrictBehavior = $RestrictInstance.RestrictBehavior
const $SSyncRestrictionPacket = Java.loadClass('snownee.loquat.network.SSyncRestrictionPacket');
const $BossEvent = Java.loadClass('net.minecraft.world.BossEvent');
const $ServerBossEvent = Java.loadClass('net.minecraft.server.level.ServerBossEvent');
const $SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource')
const $EntityRelationship = Java.loadClass('forge.net.mca.entity.ai.relationship.EntityRelationship')
const $SDMShopR = Java.loadClass('net.sixik.sdmshoprework.SDMShopR')
const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
const $PoisonSplashSpell = Java.loadClass('io.redspace.ironsspellbooks.spells.nature.PoisonSplashSpell');
const $PackageItem = Java.loadClass('com.simibubi.create.content.logistics.box.PackageItem');
const $PackageEntity = Java.loadClass('com.simibubi.create.content.logistics.box.PackageEntity');
const $ItemStackHandler = Java.loadClass('net.minecraftforge.items.ItemStackHandler');
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')
const $ChestMenu = Java.loadClass("net.minecraft.world.inventory.ChestMenu")
const $SimpleContainer = Java.loadClass("net.minecraft.world.SimpleContainer")
const $SweeperWeapon = Java.loadClass("com.sky.weaponmaster.SweeperWeapon")
const $CropBlock = Java.loadClass("net.minecraft.world.level.block.CropBlock")
const $Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks")
const $ShopBase = Java.loadClass('net.sixik.sdmshoprework.common.shop.ShopBase');
const $KubeJSHelper = Java.loadClass('net.sixik.sdmshoprework.common.integration.KubeJS.KubeJSHelper');
const $AllBlocks = Java.loadClass('com.simibubi.create.AllBlocks');
const $InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand');
const $ItemHandlerHelper = Java.loadClass('net.minecraftforge.items.ItemHandlerHelper');
const $ProjectileUtil = Java.loadClass('net.minecraft.world.entity.projectile.ProjectileUtil');
const $MaidUseShieldTask = Java.loadClass('com.github.tartaricacid.touhoulittlemaid.entity.ai.brain.task.MaidUseShieldTask');
const $MemoryModuleType = Java.loadClass('net.minecraft.world.entity.ai.memory.MemoryModuleType');
const $TargetEntityCastData = Java.loadClass('io.redspace.ironsspellbooks.capabilities.magic.TargetEntityCastData');
const $Water_Spear_Entity = Java.loadClass('com.github.L_Ender.cataclysm.entity.projectile.Water_Spear_Entity');
const $SpiritSwordEntity = Java.loadClass('com.main.fast.entity.SpiritSwordEntity');
const $ItemStackTransfer = Java.loadClass('com.lowdragmc.lowdraglib.misc.ItemStackTransfer');
const $FastSwordEntity = Java.loadClass('com.main.fast.entity.FastSwordEntity');
const $SwordEntityHelper = Java.loadClass("com.main.fast.util.SwordEntityHelper")
const $PoisonCloud = Java.loadClass("io.redspace.ironsspellbooks.entity.spells.poison_cloud.PoisonCloud")
const $LightningStrike = Java.loadClass("io.redspace.ironsspellbooks.entity.spells.LightningStrike")
const $SkillsAPI = Java.loadClass("net.puffish.skillsmod.api.SkillsAPI")
const $IGun = Java.loadClass("com.tacz.guns.api.item.IGun")
const $TimelessAPI = Java.loadClass("com.tacz.guns.api.TimelessAPI")



/**
 * 创建基于中心点和半径的AABB区域
 * @param {Internal.Vec3} center - 中心点坐标
 * @param {Number} radius - 搜索半径
 * @returns {Internal.AABB} 
 */
function createCenteredAABB(x,y,z, radius) {
      let aabb = new AABB.of(x - radius,y - radius,z - radius,x + radius,y + radius,z + radius)
    return aabb
}

function createCenteredPosAABB(pos, radius) {
      let aabb = new AABB.of(pos.x() - radius,pos.y() - radius,pos.z() - radius,pos.x() + radius,pos.y() + radius,pos.z() + radius)
    return aabb
}

function thisXZHavePlayer(player, targetX, targetZ, range) {
    // 获取玩家的当前坐标
    const playerX = Math.round(player.x);
    const playerZ = Math.round(player.z);

    // 计算与目标坐标的距离
    const distanceX = Math.abs(playerX - targetX);
    const distanceZ = Math.abs(playerZ - targetZ);

    // 判断是否在范围内
    if (distanceX <= range && distanceZ <= range) {
        return true;
    } else {
        return false;
    }
};

// 创建一个区域
function createLoquat(x,y,z, level, radius) {
      let aabb = new AABB.of(x - radius,y - 1,z - radius,x + radius,y + radius,z + radius);
      let area = new $AABBArea(aabb);
      area.setUuid($UUID.randomUUID());
      let manager = $AreaManager.of(level);
      manager.removeAllInside(aabb);
      manager.add(area);
      return area.uuid
}

// 限制区域破坏
function restrictLoquat(player, level, area) {
    let name = getPlayerName(player);
    let restrictions = $RestrictInstance.of(level, name);
    restrictions.restrict(area, $RestrictBehavior.PLACE, true);
    restrictions.restrict(area, $RestrictBehavior.DESTROY, true);
    restrictions.restrict(area, $RestrictBehavior.EXIT, true);
    $SSyncRestrictionPacket.sync(player)
}

function deleteInsideLoquat(x,y,z, level, radius) {
      let aabb = new AABB.of(x - radius,y - radius,z - radius,x + radius,y + radius,z + radius);
      let manager = $AreaManager.of(level);
      manager.removeAllInside(aabb);
}

function deleteLoquat(areauuid, level) {
      if (!areauuid) return
      let manager = $AreaManager.of(level);
      manager.remove(areauuid);
}

function deleteTagLoquat(tag, level) {
      let manager = $AreaManager.of(level);
      let areas = manager.byTag(tag).toList();
      areas.forEach(area => {
      manager.remove(area.uuid);
      })
}

function addLoquatTag(tag, level, area) {
      let manager = $AreaManager.of(level);
      area.tags.add(tag);
      manager.setChanged([area]);
}

function getPlayerName(player) {
    return player.getName().getString();
}

/**
 * 创建冲锋路径的长方体aabb区域
 * @param {Internal.Vec3} startPos - 起始位置
 * @param {Internal.Vec3} direction - 标准化方向向量
 * @param {number} distance - 冲锋距离
 * @param {number} radius - 路径半径
 * @returns {Internal.AABB} 
 */
function getcreateChargePathAABBEntity(startPos, direction, distance, radius, level) {
    // 计算终点位置
    const endPos = startPos.add(
        direction.x() * distance,
        direction.y() * distance,
        direction.z() * distance
    );

    // 计算包围盒坐标
    const minX = Math.min(startPos.x(), endPos.x()) - radius;
    const maxX = Math.max(startPos.x(), endPos.x()) + radius;
    const minY = Math.min(startPos.y(), endPos.y()) - radius;
    const maxY = Math.max(startPos.y(), endPos.y()) + radius;
    const minZ = Math.min(startPos.z(), endPos.z()) - radius;
    const maxZ = Math.max(startPos.z(), endPos.z()) + radius;

    let area = new AABB.of(minX, minY, minZ, maxX, maxY, maxZ);
    
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.isLiving() && entity.position().distanceTo(startPos) <= radius) {
            entityList.push(entity)
        }
    })
    return entityList
}

function getLivingWithinRadius(level, pos, radius) {
    let area = new AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.isLiving() && entity.position().distanceTo(pos) <= radius) {
            entityList.push(entity)
        }
    })
    return entityList
}

// 是否存在特定匠魂修饰符
function checkModifier(nbt, targetName) {
  if (!nbt) return false;
  if (nbt.tic_broken) return false;
  const modifiers = nbt.tic_modifiers
  if (!modifiers) return false;
  return modifiers?.some(m => 
    m.name === targetName) || false;
}

// 获得匠魂修饰符的等级
function getModifierLevel(nbt, targetName) {
  if (!nbt) return 0;
  const modifiers = nbt.tic_modifiers;
  if (nbt.tic_broken) return 0;
  if (!modifiers) return 0;
  const foundModifier = modifiers?.find(m => m.name === targetName) || 0;
  if (!foundModifier) return 0;
  return foundModifier.level
}

// 获得序列组装的当前步骤
function getSequencedAssemblyStep(nbt) {
  if (!nbt) return null;
  const SequencedAssembly = nbt.SequencedAssembly;
  if (!SequencedAssembly) return null;
  const Step = SequencedAssembly.Step
  if (!Step) return null;
  return Step
}

global.getSequencedAssemblyStep = (nbt) => {
  if (!nbt) return null;
  const SequencedAssembly = nbt.SequencedAssembly;
  if (!SequencedAssembly) return null;
  const Step = SequencedAssembly.Step
  if (!Step) return null;
  return Step
} 

// 获得匠魂头部材料
function countUniqueHeadMaterials(nbt) {
        if (!nbt) return null;
        let matList = nbt.tic_materials;
        if (!matList) return null;
        let headMat = matList.getString(0);
        return headMat
}

// 获得匠魂工具/武器伤害
function getTicAttackDamage(nbt) {
        if (!nbt) return 0;
        let Stats = nbt.tic_stats;
        if (!Stats) return 0;
        let AttackDamage = Stats['tconstruct:attack_damage'];
        return AttackDamage;
}

// 投射物实体跟踪特定范围实体aabb附近的最近的实体的向量
function getTrackingEntityVector(entitypos, targetEntitypos, radius, level) {
        let aabb = createCenteredPosAABB(targetEntitypos, radius);
        let ConfigentityAABBList = level.getEntitiesWithin(aabb);

        let nearestEntity = null;
        let minDistanceSq = Infinity;

        for (let targetEntity of ConfigentityAABBList) {
            if (!targetEntity.isLiving()) continue;
            if (!targetEntity.isAlive()) continue;
            if (targetEntity.isPlayer()) continue;
            let distanceSq = targetEntitypos.distanceToSqr(targetEntity.position());
            if (distanceSq < minDistanceSq) {
                minDistanceSq = distanceSq;
                nearestEntity = targetEntity;
            }
        }

        if (nearestEntity) {
            let nearestEntityPos = nearestEntity.position();
            let directionVector = nearestEntityPos.subtract(entitypos).normalize();
            return directionVector
} else {
            let basedirectionVector = new $Vec3(0, -1, 0);
            return basedirectionVector
}
}

// 根据一个pos寻找最近范围的实体
function getNearestEntity(pos, radius, level) {
    let aabb = createCenteredPosAABB(pos, radius);
    let entityList = level.getEntitiesWithin(aabb);

    let nearestEntity = null;
    let minDistanceSq = Infinity;

    for (let entity of entityList) {
        if (!entity.isLiving()) continue;
        if (!entity.isAlive()) continue;
        if (entity.isPlayer()) continue;
        if ($SwordEntityHelper.isFastSword(entity)) continue
        let Owner = getEntityOwner(entity)
        let Partner = getEntityPartner(entity)
        if (Owner && Owner.isPlayer() || Partner && Partner.isPlayer()) continue
        let distanceSq = pos.distanceToSqr(entity.position());
        if (distanceSq < minDistanceSq) {
            minDistanceSq = distanceSq;
            nearestEntity = entity;
        }
    }

    return nearestEntity; 
}

function isEntityOnFire(entity) {
    return hasEntityEnderBonus(entity, "cataclysm:burning_ashes") || entity.isOnFire()
}

function damageTypeKey(damageTypeName) { 
 return $ResourceKey.create($Registries.DAMAGE_TYPE, damageTypeName) 
}

function NewDamageSource(damageTypeName, entity, target) {
    if (target) {
    return target.damageSources().source(damageTypeKey(damageTypeName), entity, entity)
    }
    return entity.damageSources().source(damageTypeKey(damageTypeName), entity, entity)
}

/**
 * 使用damagekey对实体造成无视无敌帧的伤害
 * @param {$LivingEntity_} source 
 * @param {$LivingEntity_} target 
 * @param {Special.DamageType} damagetype 
 * @param {number} amount
 */
function simpleAttackEntity(source, target, damagetype, amount) {
    let defTime = target.invulnerableTime
    target.invulnerableTime = 0
    target.attack(NewDamageSource(damagetype, source, target), amount)
    target.invulnerableTime = defTime
}

// 使用damagekey对实体造成伤害
function AttackEntity(source, target, damagetype, amount) {
    if (!target) return
    target.attack(NewDamageSource(damagetype, source, target), amount)
}


global.AttackEntity = (source, target, damagetype, amount) => {
    target.attack(target.damageSources().source(damageTypeKey(damagetype), source, source), amount)
}

function getEntityOwner(entity) {
   let Owner = null
   if (!entity) return
   if (typeof entity.getOwner === 'function') {
    Owner = entity.getOwner();
    } else if (typeof entity.getSummoner === 'function') {
    Owner = entity.getSummoner();
    }
    if (Owner != null) {
    return Owner
    } else {
    return null
    }
}

function newBossBar(level, uuid, server, x, y, z, BossBarName, radius, music, Progress) {
    let ServerBossEvent = new $ServerBossEvent(BossBarName, $BossEvent.BossBarColor.RED, $BossEvent.BossBarOverlay.PROGRESS);
    ServerBossEvent.setProgress(Progress)
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            ServerBossEvent.addPlayer(entity)
        }
    })
    if (music != "noop") {
    server.runCommandSilent(`stopsound @a * ${music}`);
    level.playSound(null, x, y, z, music, $SoundSource.MUSIC, 1, 1);
    }
    BossEntitySpawn.initBossBar(ServerBossEvent, uuid, music)
    return ServerBossEvent
}

// 增加xp
function addPlayerXp(player, Xp, categoryId) {
    if (!categoryId) {
    categoryId = "puffish_skills:fast"
    }
    let optionalCategory = $SkillsAPI.getCategory(categoryId)
    if (optionalCategory.isPresent()) {
    let category = optionalCategory.get()
    let optionalExperience = category.getExperience()
    if (optionalExperience.isPresent()) {
        optionalExperience.get().addTotal(player, Xp)
        player.displayClientMessage(("§a+" + Xp + " 天赋树经验"), true);
    }
    }
}

function resetPlayerSkills(player, categoryId) {
    if (!categoryId) {
    categoryId = "puffish_skills:fast"
    }
    let optionalCategory = $SkillsAPI.getCategory(categoryId)
    if (optionalCategory.isPresent()) {
    let category = optionalCategory.get()
    category.resetSkills(player)
    player.displayClientMessage(("您的天赋树已重置"), true);
    }
}

function getEntityPartner(entity) {
    let Partner = null;
    let PartnerEntity = null;

    if (!entity) return null;
    if (entity.level.isClientSide()) return null
    if (entity.isPlayer) {
        let senderData = $EntityRelationship.of(entity);
        if (senderData.isPresent()) {
            let PlayerData = senderData.get();
            Partner = PlayerData.getPartner();

            // 检查 Partner 是否为 null 或空
            if (Partner != null && Partner.isPresent()) {
                PartnerEntity = Partner.get();
            }
        }
    } else if (typeof entity.getRelationships === 'function') {
        Partner = entity.getRelationships().getPartner();

        // 检查 Partner 是否为 null 或空
        if (Partner != null && Partner.isPresent()) {
            PartnerEntity = Partner.get();
        }
    }

    return PartnerEntity || null;
}

function getEntityHearts(entity, player) {
    if (typeof entity.getVillagerBrain === 'function') {
        let memories = entity.getVillagerBrain().getMemoriesForPlayer(player);
        if (memories) {
            let hearts = memories.getHearts();
            return hearts;
        }
    }
    return null;
}

function addEntityHearts(entity, player, hearts) {
    if (typeof entity.getVillagerBrain === 'function') {
    let memories = entity.getVillagerBrain().getMemoriesForPlayer(player)
    memories.modHearts(hearts)
    }
}

function setAttackEntity(entity, target) {
    if (typeof entity.getBrain === 'function') {
    //if (entity.isGuard()) {
    entity.setTarget(target)
    const brain = entity.getBrain();
    brain.setMemory('minecraft:attack_target', target);
    //}
    }
}

function getBountyItemId(item) {
    if (item != "bountiful:bounty") return null;
    let nbt = item.nbt;
    if (!nbt) return null;
    let BountyData = nbt['bountiful:bounty_data'];
    if (!BountyData) return null;
    let thisBountyData = JSON.parse(BountyData);
    let objectives = thisBountyData.objectives;
    if (!objectives) return null;

    // 遍历 objectives 并提取 content
    let contentList = [];
    for (let key in objectives) {
        let obj = objectives[key];
        if (!obj) continue;
        let content = obj.content;
        if (!content) continue;
        contentList.push(content);
    }

    return contentList;
}

function getCuriosHaveCurio(player, itemId) {
    let slotResult = new $CuriosApi().getCuriosHelper().findEquippedCurio(Item.of(itemId), player);
    return slotResult.isPresent()
}

let DamageHistory = {}

function DamageTypeMessage(player, amount, damagetype) {
    if (!getCuriosHaveCurio(player, "irons_spellbooks:amethyst_resonance_charm")) return;
    let uuid = player.uuid
    if (!DamageHistory[uuid]) {
        DamageHistory[uuid] = [];
    }
    
    let thisDamageHistory = DamageHistory[uuid]

    DamageHistory[uuid].unshift({
        amount: amount,
        type: damagetype
    });
    
    if (thisDamageHistory.length > 3) {
        DamageHistory[uuid].pop();
    }

    let messageComponents = [];
    for (let i = 0; i < thisDamageHistory.length; i++) {
        let entry = thisDamageHistory[i];
        let line;
        let formattedAmount = entry.amount.toFixed(1); 
        let TypeMessage = Text.translatable(`fast.damagetype.${entry.type}`).getString()
        
        switch (i) {
            case 0:
                line = Text.translatable("fast.damagetype.tools.current", formattedAmount, TypeMessage);
                break;
            case 1:
                line = Text.translatable("fast.damagetype.tools.previous", formattedAmount, TypeMessage);
                break;
            case 2:
                line = Text.translatable("fast.damagetype.tools.earlier", formattedAmount, TypeMessage);
                break;
        }
        messageComponents.push(line); 
    }
    
    let finalMessage = (Text.of(messageComponents));
    let server = player.server
    server.scheduleInTicks(2, () => {
    player.displayClientMessage(Text.join(finalMessage), true);
    })
}

function FastServerDamageRenderEvent(event, player, entity, Amount, damagetype) {
    if (!getCuriosHaveCurio(player, "fast:gold_ring")) return;
    if (entity.type != "dummmmmmy:target_dummy") {
    player.sendData("DamageRender",{
    x: entity.x,
    y: entity.y,
    z: entity.z,
    bbHeight: entity.bbHeight,
    amount: Amount,
    uuid: entity.uuid + $UUID.randomUUID(),
    color: damagetype
    });
    }
}

function addMaidFavorability(maid, favorability) {
    maid.getFavorabilityManager().add(favorability)
}

function getPlayerMaidList(player, radius) {
    let level = player.level;
    let pos = player.position();
    let Maidentitylist = getLivingWithinRadius(level, pos, radius);
    let MaidList = []
    if(Maidentitylist) {
    Maidentitylist.forEach(maid => {
    if (maid.type === "touhou_little_maid:maid") {
    let Owner = getEntityOwner(maid);
    if (Owner && Owner === player) {
    MaidList.push(maid)
    }
    }
    })
    }
    return MaidList
}

function getSpecialProperty(item) {
    let nbt = item.nbt;
    if (!nbt) return null;
    let WeaponConfig = nbt.weapon
    if (!WeaponConfig) return null;
    let SpecialProperty = WeaponConfig.SpecialProperty
    if (!SpecialProperty) return null
    return SpecialProperty;
}

function hasSpecialProperty(item, targetName) {
    const nbt = item.nbt;
    if (!nbt) return false;
    const WeaponConfig = nbt.weapon
    if (!WeaponConfig) return false;
    const SpecialProperty = WeaponConfig.SpecialProperty
    if (SpecialProperty === targetName) {
    return true 
    }
    return false;
}

function getStructureString(serverLevel, BlockPos) {
  let structureArray = serverLevel.structureManager().getAllStructuresAt(BlockPos).keySet().toArray()
  let structureRegistry = serverLevel.registryAccess().registryOrThrow($Registries.STRUCTURE)
  for (let structure of structureArray) {
  let structureStart = serverLevel.structureManager().getStructureAt(BlockPos, structure)  
  if (structureStart.isValid()) {
  return structureRegistry.getKey(structure).toString()
  }
  }
  return null
}

function spawnPackage(level, x, y, z, items) {
    let handler = new $ItemStackHandler(9);

    for (let i = 0; i < Math.min(items.length, 9); i++) {
        let entry = items[i];
        handler.setStackInSlot(i, entry);
    }

    let packageStack = $PackageItem['containing(net.minecraftforge.items.ItemStackHandler)'](handler);

    let entity = new $PackageEntity(level, x + 0.5, y, z + 0.5);
    entity.setBox(packageStack);

    level.addFreshEntity(entity);
}

function NewFlameStrike(ctxEntity, x, y, z, Damage, Radius, WaitTime, Duration, Soul) {
    const level = ctxEntity.level
    let falme = level.createEntity("cataclysm:flame_strike");
    falme.setPos(x, y, z)
    falme.setDamage(Damage)
    falme.setHpDamage(0)
    falme.setRadius(Radius)
    falme.setWaitTime(WaitTime)
    falme.setDuration(Duration)
    falme.setSoul(Soul)
    falme.setOwner(ctxEntity)
    falme.spawn()
}

function shootWaterSpear(shooter, target, damage, bounces) {
    let d0 = shooter.getX();
    let d1 = shooter.getEyeY();
    let d2 = shooter.getZ();
    
    let d3 = target.getX() - d0;
    let d4 = target.getEyeY() - d1;
    let d5 = target.getZ() - d2;

    let vec3 = new $Vec3(d3, d4, d5).normalize();
    let level = shooter.level
    let waterSpear = new $Water_Spear_Entity(shooter, vec3, level, damage);
    
    waterSpear.setPosRaw(d0, d1, d2);
    level.addFreshEntity(waterSpear);
}

function NewPhantomHalberd(ctxEntity, x, y, z, damage, State) {
    const level = ctxEntity.level;
    let halberd = level.createEntity("cataclysm:phantom_halberd");
    halberd.setPos(x, y, z);
    halberd.setDamage(damage);
    halberd.setCaster(ctxEntity)
    halberd.setState(State)
    halberd.spawn();
}

function NewWeaponProjectile(ctxEntity, x, y, z, damage, NoGravity) {
    const level = ctxEntity.level;
    if (!ctxEntity) return
    let WeaponProjectile = level.createEntity("weaponmaster:throw_weapon_projectile");
    WeaponProjectile.setPosition(x, y, z);
    WeaponProjectile.setDamage(damage);
    WeaponProjectile.setOwner(ctxEntity);
    WeaponProjectile.setNoGravity(NoGravity);
    WeaponProjectile.setStore(1);
    WeaponProjectile.spawn();
}

function NewCounterslashProj(ctxEntity, WeaponItem, x, y, z) {
    const level = ctxEntity.level;
    if (!ctxEntity) return
    let WeaponProjectile = level.createEntity("weaponmaster:counter_projectile");
    WeaponProjectile.setPosition(x, y, z);
    WeaponProjectile.setOwner(ctxEntity.uuid);
    WeaponProjectile.spawn();
    WeaponItem.getItem().performAttack(WeaponItem, ctxEntity);
    WeaponProjectile.discard();
}

function blockcanHarvest(block, cropState) {
    if (!cropState) return
    if (block instanceof $CropBlock && block.isMaxAge(cropState)) {
    return true
    }
    return block == $Blocks.NETHER_WART && cropState.getValue >= 3
}

function NewItemEntity(level, x, y, z, stack) {
        let ItemEntity = level.createEntity('item')
        ItemEntity.setPos(x, y, z)
        ItemEntity.item = stack
        ItemEntity.spawn()
}

function NewItemEntitygetItemEntity(level, x, y, z, stack) {
        let ItemEntity = level.createEntity('item')
        ItemEntity.setPos(x, y, z)
        ItemEntity.item = stack
        return ItemEntity
}

function NewDisplayItemEntity(level, x, y, z, stack) {
        let ItemEntity = level.createEntity(`minecraft:item_display`)
        ItemEntity.setPos(x, y, z)
        stack.nbt ? ItemEntity.mergeNbt(`{item:{id:"${stack.id}",Count:1,tag:${stack.nbt}}}`) : ItemEntity.mergeNbt(`{item:{id:"${stack.id}",Count:1}}`)
        return ItemEntity
}

function NewItemEntityCardBox(player, level, dungeonType) {
    let { x, y, z } = player;
    
    let Luck = player.getAttribute(`minecraft:generic.luck`).getValue();
    
    let quality = "r";
    let roll = Math.random();
    
    let baseChance = 0.2; 
    if (MediumLevelInstanceList.includes(dungeonType)) baseChance = 0.4;
    if (HighLevelInstanceList.includes(dungeonType)) baseChance = 0.6;

    let finalChance = baseChance + Luck * 0.01;
    if (Math.random() > finalChance) return;
    
    if (LowLevelInstanceList.includes(dungeonType)) {
        quality = "r"; // 固定
    } else if (MediumLevelInstanceList.includes(dungeonType)) {
        if (roll < 0.7) quality = "r";
        else quality = "sr";
    } else if (HighLevelInstanceList.includes(dungeonType)) {
        if (roll < 0.4) quality = "r";
        else if (roll < 0.8) quality = "sr";
        else quality = "ssr";
    }
    
    NewItemEntity(level, x, y, z, Item.of('fast:card_box', 1, { carddata: { rarity: quality } }));
}

function SpawnCircularParticles(player, particle, center, radius, count, delay, tick, lifeTime) {
  let points = []
  let angleStep = (2 * JavaMath.PI) / count
  
  for (let i = 0; i < count; i++) {
    let angle = angleStep * i
    let x = center[0] + radius * Math.cos(angle)
    let z = center[2] + radius * Math.sin(angle)
    let y = center[1]
    points.push([x, y, z])
  }
  
  player.sendData("drawParticle", {
      points: points,
      particle: particle,
      isDelayed: delay,  
      tick: tick,
      lifeTime: lifeTime
  })
}

function SpawnSquareParticles(player, particle, center, size, count, delay, tick, lifeTime) {
  let points = [];
  let edgeCount = Math.floor(count / 4); // 每条边的粒子数
  let step = size / edgeCount; // 每个粒子之间的步长
  
  // 生成正方形四条边上的粒子
  for (let i = 0; i < edgeCount; i++) {
    // 顶部边 - 从左到右
    points.push([
      center[0] - size/2 + step * i, 
      center[1], 
      center[2] - size/2
    ]);
    
    // 右侧边 - 从上到下
    points.push([
      center[0] + size/2, 
      center[1], 
      center[2] - size/2 + step * i
    ]);
    
    // 底部边 - 从右到左
    points.push([
      center[0] + size/2 - step * i, 
      center[1], 
      center[2] + size/2
    ]);
    
    // 左侧边 - 从下到上
    points.push([
      center[0] - size/2, 
      center[1], 
      center[2] + size/2 - step * i
    ]);
  }
  
  // 填充剩余粒子（如果count不是4的倍数）
  let remaining = count % 4;
  if (remaining > 0) {
    for (let i = 0; i < remaining; i++) {
      points.push([
        center[0] - size/2 + step * i, 
        center[1], 
        center[2] - size/2
      ]);
    }
  }
  
  player.sendData("drawParticle", {
      points: points,
      particle: particle,
      isDelayed: delay,  
      tick: tick,
      lifeTime: lifeTime
  });
}

function BossNeedAttackSpawnCircularParticlesPlayers(particle, level, x, y, z, radius, min, minCount, max, maxCount, tick) {
    const aabb = createCenteredAABB(x, y, z, 50);
    let center = [x, y, z]
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
           SpawnSquareParticles(entity, particle, center, min, minCount, false, 0, tick)
           SpawnSquareParticles(entity, particle, center, max, maxCount, false, 0, tick)
        }
    })
}

function BossInAttackSpawnCircularParticlesPlayers(particle, level, x, y, z, radius, min, minCount, max, maxCount) {
    const aabb = createCenteredAABB(x, y, z, 50);
    let center = [x, y, z]
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
           SpawnSquareParticles(entity, particle, center, min, minCount, true, 20, -1)
           SpawnSquareParticles(entity, particle, center, max, maxCount, true, 20, -1)
        }
    })
}

function FerroBossAttackEntitys(BossEntity, Damage, level, x, y, z, radius) {
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isLiving() && entity != BossEntity) {
           entity.attack(entity.damageSources().mobAttack(BossEntity), Damage)
        }
    })
}

function LunarBossAttackEntitys(BossEntity, Damage, level, x, y, z, maxRadius, minRadius) {
    const centerPos = new $Vec3(x, y, z);
    const maxArea = new AABB.of(x - maxRadius, y - maxRadius, z - maxRadius, x + maxRadius, y + maxRadius, z + maxRadius);
    const entityAABBList = level.getEntitiesWithin(maxArea);

    entityAABBList.forEach(entity => {
        if (entity.isLiving() && entity != BossEntity) {
            let entityPos = entity.position();
            let distance = entityPos.distanceTo(centerPos);
            if (distance <= maxRadius && distance >= minRadius) {
                entity.attack(entity.damageSources().mobAttack(BossEntity), Damage);
            }
        }
    });
}

function PlayersInitRogueLike(level, x, y, z, uuid) {
    const aabb = createCenteredAABB(x, y, z, 50);
    let players = 0
    level.getEntitiesWithin(aabb).forEach(player => {
        if (player.isPlayer()) {
        let Playeruuid = player.uuid
        if (!PlayersInRogueLike[Playeruuid]) {
        PlayersInRogueLike[Playeruuid] = {}
        let Data = PlayersInRogueLike[Playeruuid]
        Data.uuid = uuid
        players += 1
        } else if (PlayersInRogueLike[Playeruuid]) {
        let Data = PlayersInRogueLike[Playeruuid]
        if (Data.uuid === uuid) {
        players += 1
        } else {
        Data.uuid = uuid
        players += 1
        }
        }
        }
    })
    return players
}

function PlayersPlaySound(level, x, y, z, radius, sound) {
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            entity.sendData("PlaySound",{
            sound: sound
            })
        }
    })
}

function PlayersStopAndPlaySound(level, x, y, z, radius, sound) {
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            entity.sendData("StopSound")
            entity.sendData("PlaySound",{
            sound: sound
            })
        }
    })
}

function RoguePlayersAddMoney(dungeon, level, x, y, z, radius, money) {
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            let PlayerUuid = entity.uuid
            if (!dungeon.MoneyData[PlayerUuid]) dungeon.MoneyData[PlayerUuid] = 0
            dungeon.MoneyData[PlayerUuid] += money
        }
    })
}

function RoguePlayersAddSdmMoney(dungeon, level, x, y, z, radius) {
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            let PlayerUuid = entity.uuid
            if (!dungeon.MoneyData[PlayerUuid]) return
            let Money = dungeon.MoneyData[PlayerUuid]
            let getMoney = Math.floor(Money / 10)
            entity.tell(Text.translatable('fast.ender_bonus.roguelike.getmoney', getMoney))
            $SDMShopR.addMoney(entity, getMoney)
        }
    })
}


function RoguePlayersAddData(level, x, y, z, radius, Data, DataHave) {
    const aabb = createCenteredAABB(x, y, z, radius);
    level.getEntitiesWithin(aabb).forEach(entity => {
        if (entity.isPlayer()) {
            let PlayerPersistentData = entity.persistentData
            if (!PlayerPersistentData.Rogue) PlayerPersistentData.Rogue = {}
            let RogueData = PlayerPersistentData.Rogue
            RogueData[Data] = DataHave
        }
    })
}

function placePlatform(player, blockId, size, height) {
    let { x, y, z } = player.block;
    let half = Math.floor(size / 2);
    let x1 = x - half;
    let x2 = x + half;
    let z1 = z - half;
    let z2 = z + half;

    let baseY = y - 1;
    let dimension = player.level.dimension;

    for (let h = 0; h < height; h++) {
        let yLevel = baseY - h;
        player.server.runCommandSilent(
            `execute in ${dimension} run fill ${x1} ${yLevel} ${z1} ${x2} ${yLevel} ${z2} ${blockId} replace`
        );
    }
}


function applyModifier(entity, uuid, attribute, name, value, operation) {
  let thisuuid = UUID.fromString(uuid)
  let inst = entity.getAttribute(attribute)
  if (!inst) return
  inst.removeModifier(thisuuid)
  let modifier = new $AttributeModifier(thisuuid, name, value, operation)
  inst.addPermanentModifier(modifier)
}

function removeModifier(entity, uuid, attribute) {
  let thisuuid = UUID.fromString(uuid)
  let inst = entity.getAttribute(attribute)
  if (!inst) return
  inst.removeModifier(thisuuid) 
}

function addEnderModifier(entity, uuid, attribute, name, value, operation, have) {
  let thisuuid = UUID.fromString(uuid)
  let inst = entity.getAttribute(attribute)
  if (!inst) return
  if (have) {
  inst.removeModifier(thisuuid)
  let modifier = new $AttributeModifier(thisuuid, name, value, operation)
  inst.addPermanentModifier(modifier)
  } else {
  inst.removeModifier(thisuuid)
  }
}

function spawnFlySwordEntity(level, entity, target, Delay, Speed, LifeTime, Damage, DamageType, item) {
    let flySwordEntity = new $FastSwordEntity(entity, target);
    flySwordEntity.setDelay(Delay);
    flySwordEntity.setSpeed(Speed);
    flySwordEntity.setLifeTime(LifeTime);
    flySwordEntity.setDamage(Damage);
    flySwordEntity.setDisappearOnHit(true);
    flySwordEntity.setVanishWhenNoTarget(true);
    if (DamageType) {
    flySwordEntity.setCustomDamageSource(DamageType)
    }
    if (item) {
    flySwordEntity.setItemStack(item)
    }
    level.addFreshEntity(flySwordEntity);
}

function spawnSpiritSwordEntity(level, entity, Speed, MaxTrackingTime, Damage, item) {
    let flySwordEntity = new $SpiritSwordEntity(entity);
    flySwordEntity.setDamage(Damage);
    flySwordEntity.setSpeed(Speed);
    flySwordEntity.setCanDamageWhenNotFlying(false)
    flySwordEntity.setInfiniteLifeTime(true);
    flySwordEntity.setMaxTrackingTime(MaxTrackingTime);
    if (item) {
    flySwordEntity.setItemStack(item)
    }
    return flySwordEntity
}

function spawnOrbitingFastFlySwordEntity(level, entity, target, Delay, Speed, LifeTime, Damage, item) {
    let Swords = $FastSwordEntity.getSwordCountOfOwner(entity);
    if (Swords >= 8) return
    let flySwordEntity = new $FastSwordEntity(entity, target);
    flySwordEntity.setDelay(Delay);
    flySwordEntity.setSpeed(Speed);
    flySwordEntity.setLifeTime(LifeTime);
    flySwordEntity.setHovering();
    flySwordEntity.setDamage(Damage);
    if (item) {
    flySwordEntity.setItemStack(item)
    }
    level.addFreshEntity(flySwordEntity);
}

function OpenHomeGuiEvent(player, persistentData) {
    let { level, x, y, z, uuid } = player;
    openGuiPlayer[uuid] = true
    player.openChestGUI(Text.translatable("快捷指令菜单"), 1, gui => {
        let setHomeItem = Item.of("minecraft:red_bed").withName("§f设置家 /sethome")
        gui.slot(0, 0, slot => {
            slot.setItem(setHomeItem);
            slot.setLeftClicked(() => {
                player.runCommand("sethome");
                player.tell(Text.of("§a已设置家！"));;
                player.closeMenu();
            });
        });

        let homeItem = Item.of("minecraft:compass").withName("§f传送回家 /home")
        gui.slot(1, 0, slot => {
            slot.setItem(homeItem);
            slot.setLeftClicked(() => {
                player.runCommand("home");
                player.tell(Text.of("§b正在传送回家..."));
                player.closeMenu();
            });
        });

        let backItem = Item.of("minecraft:ender_pearl").withName("§f返回上一次传送或死亡的位置 /back")
        gui.slot(2, 0, slot => {
            slot.setItem(backItem);
            slot.setLeftClicked(() => {
                player.runCommand("back");
                player.tell(Text.of("§d正在返回上一个位置..."));
                player.closeMenu();
            });
        });
    });
}

function getDamageTypePhysical(entity) {
    if (entity.isPlayer()) {
    return "player"
    }
    return "mob"
}

function isDamageTypePhysical(damagetype, entity) {
    if (entity.isPlayer()) {
    return damagetype.includes('player')
    }
    return damagetype.includes('mob')
}

function createUI(id) {
    let creator = UIProject.loadUIFromFile(`ldlib:${id}`);
    return creator.get();
}

function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

// 勇者之牌的时间管理
// 剩余 tick
function HeroCardTimeLeftTicks(level, startTick, duration) {
    const currentTick = level.getTime();
    return Math.max(startTick + duration - currentTick, 0);
}

// 剩余秒
function HeroCardTimeLeftSeconds(level, startTick, duration) {
    return Math.floor(HeroCardTimeLeftTicks(level, startTick, duration) / 20);
}

// 是否过期
function HeroCardIsExpired(level, startTick, duration) {
    const currentTick = level.getTime();
    return currentTick >= startTick + duration;
}

// 已经过的 tick
function HeroCardPassedTicks(level, startTick) {
    const currentTick = level.getTime();
    return Math.max(currentTick - startTick, 0);
}

// 已经过的秒
function HeroCardPassedSeconds(level, startTick) {
    return Math.floor(HeroCardPassedTicks(level, startTick) / 20);
}

// 全局CD存储对象
const CooldownManager = {};

/**
 * 添加CD
 * @param {string} type - CD类型标识
 * @param {string} uuid - 玩家或对象唯一ID
 * @param {number} durationTick - CD时长（tick）
 * @param {object} level - 当前世界/层，用于获取时间
 */
function addCooldown(type, uuid, durationTick, level) {
    if (!CooldownManager[type]) CooldownManager[type] = {};
    CooldownManager[type][uuid] = level.getTime() + durationTick; // 保存结束tick
}

function getNewCooldownValue(durationTick, level) {
   return level.getTime() + durationTick; // 获取结束tick
}

function isInCooldownByValue(endTick, level) {
    const currentTick = level.getTime();
    return currentTick < endTick;
}

/**
 * 检查是否在CD中
 * @param {string} type - CD类型标识
 * @param {string} uuid - 玩家或对象唯一ID
 * @param {object} level - 当前世界/层，用于获取时间
 * @returns {boolean} - true表示仍在CD中，false表示CD已过
 */
function isInCooldown(type, uuid, level) {
    if (!CooldownManager[type] || !CooldownManager[type][uuid]) return false;
    const currentTick = level.getTime();
    const endTick = CooldownManager[type][uuid];
    return currentTick < endTick;
}

/**
 * 获取剩余CD（tick）
 */
function remainingCooldown(type, uuid, level) {
    if (!CooldownManager[type] || !CooldownManager[type][uuid]) return 0;
    const currentTick = level.getTime();
    return Math.max(CooldownManager[type][uuid] - currentTick, 0);
}

/**
 * 获取剩余CD（秒）
 */
function remainingCooldownSeconds(type, uuid, level) {
    return Math.floor(remainingCooldown(type, uuid, level) / 20);
}

/**
 * 清除CD
 * @param {string} type - CD类型标识
 * @param {string} uuid - 玩家或对象唯一ID
 */
function clearCooldown(type, uuid) {
    if (CooldownManager[type] && CooldownManager[type][uuid]) {
        delete CooldownManager[type][uuid];
    }
}

function getPlayerTagsHasTag(player, tag) {
    return player.getTags().contains(tag);
}

function PlayerHasTag(player, Tags, tag) {
    return Tags.contains(tag);
}

function hasEntityEnderBonus(entity, itemId) {
    let obj = EntityEnderBonus[entity.uuid]
    if (!obj) return false
    return obj.hasOwnProperty(itemId)
}

global.hasEntityEnderBonus = (entity, itemId) => {
    let obj = EntityEnderBonus[entity.uuid]
    if (!obj) return false
    return obj.hasOwnProperty(itemId)
}

function getEntityEnderBonusData(entity) {
    let obj = EntityEnderBonus[entity.uuid]
    if (!obj) return false
    return obj
}

function getEntityEnderBonusCount(entity, itemId) {
    let obj = EntityEnderBonus[entity.uuid]
    if (!obj) return 0
    let data = obj[itemId]
    return data ? data.count : 0
}

function getEntityEnderBonusNbt(entity, itemId) {
    let obj = EntityEnderBonus[entity.uuid]
    if (!obj) return null
    let data = obj[itemId]
    return data ? data.nbt : null
}

function getEntityEnderBonusSlot(entity, itemId) {
    let obj = EntityEnderBonus[entity.uuid]
    if (!obj) return -1
    let data = obj[itemId]
    return data ? data.slot : -1
}

function getEntityEnderBonusItem(entity, itemId) {
    let slot = getEntityEnderBonusSlot(entity, itemId)
    let uuid = entity.uuid
    if (slot < 0) return null
    if (entity.isPlayer()) {
    let enderChest = entity.enderChestInventory;
    let item = enderChest.getItem(slot);
    return item
    } else if (entity.getType() === "touhou_little_maid:maid") {
    let MaidBauble = entity.getMaidBauble()
    let item = MaidBauble.getStackInSlot(slot)
    return item
    } else if (MobEntityEnderBonusItemList[uuid]) {
    let ItemList = MobEntityEnderBonusItemList[uuid]
    let item = ItemList[slot]
    return item
    }
    return null
}

global.getEntityEnderBonusItem = (entity, itemId) => {
    let slot = getEntityEnderBonusSlot(entity, itemId)
    let uuid = entity.uuid
    if (slot < 0) return null
    if (entity.isPlayer()) {
    let enderChest = entity.enderChestInventory;
    let item = enderChest.getItem(slot);
    return item
    } else if (entity.getType() === "touhou_little_maid:maid") {
    let MaidBauble = entity.getMaidBauble()
    let item = MaidBauble.getStackInSlot(slot)
    return item
    } else if (MobEntityEnderBonusItemList[uuid]) {
    let ItemList = MobEntityEnderBonusItemList[uuid]
    let item = ItemList[slot]
    return item
    }
    return null
}

function getEntityEnderBonusTagCount(entity, tag) {
    let data = EntityEnderBonusTagsData[entity.uuid]
    if (!data) return 0
    return data[tag] || 0
}

global.getEntityEnderBonusTagCount = (entity, tag) => {
    let data = EntityEnderBonusTagsData[entity.uuid]
    if (!data) return 0
    return data[tag] || 0
}

function resolvePlayerFromEntity(entity) {
    if (entity.isPlayer()) return entity
    let owner = getEntityOwner(entity)
    if (owner && owner.isPlayer()) return owner
    return null
}

function EntityCanTell(entity, tell) {
    if (entity.isPlayer()) {
    entity.tell(tell)
    } else {
    let owner = getEntityOwner(entity)
    if (owner) {
    owner.tell(tell)
    }
    }
}

/**
 * 快速获取某实体的指定自定义数据
 * @param {Entity} entity - 目标实体
 * @param {string} customDataName
 * @returns {Object|null} 返回对应 customData，没数据返回 null
 */
function getEntityCustomData(entity, customDataName) {
    if (!entity || !entity.uuid) return null
    let uuid = entity.uuid
    let dataWrapper = EntityEnderBonusCustomData[uuid]
    if (!dataWrapper) return null
    let customData = dataWrapper.customData
    if (!customData) return null
    return customData[customDataName] ?? null
}

let MobEntityEnderBonusItemList = {}

function NewMobEntityEnderBonus(entity, items) {
    let uuid = entity.uuid
    MobEntityEnderBonusItemList[uuid] = {}
    MobEntityEnderBonusItemList[uuid] = items
    MobUpdateEnderBonusEvent(entity)
}

global.getMobEntityEnderBonusItemList = (entity) => {
    let uuid = entity.uuid
    let data = MobEntityEnderBonusItemList[uuid]
    if (!data) return null
    return data
}

function getGunId(gunItem) {
    let iGun = $IGun.getIGunOrNull(gunItem)
    if (!iGun) return null

    let gunId = iGun.getGunId(gunItem)
    if (!gunId) return null
    return gunId
}

function getGunType(gunItem) {
    let iGun = $IGun.getIGunOrNull(gunItem)
    if (!iGun) return null

    let gunId = iGun.getGunId(gunItem)
    if (!gunId) return null

    let gunIndexOpt = $TimelessAPI.getCommonGunIndex(gunId)
    if (!gunIndexOpt || !gunIndexOpt.isPresent()) return null

    let gunIndex = gunIndexOpt.get()
    return gunIndex.getType()
}

const enderBonusRanges = {
    1: {
        genericStrBonus: [-5,10],
        genericIntBonus: [-5,10],
        genericAgiBonus: [-5,10],
        genericVitBonus: [-5,10],
        genericAttackBonus: [-7,15],
        genericCritBonus: [-2,5],
        genericAttackSpeedBonus: [-5,10],
        genericMaxHealthBonus: [-7,15],
        genericSpellPowerBonus: [-5,10],
        genericEvocationSpellBonus: [-10,20],
        genericFireSpellBonus: [-10,20],
        genericHolySpellBonus: [-10,20],
        genericEnderSpellBonus: [-10,20],
        genericLightningSpellBonus: [-10,20],
        genericBloodSpellBonus: [-10,20],
        genericIceSpellBonus: [-10,20],
        genericNatureSpellBonus: [-10,20],
        genericDefenseBonus: [-10,20],
        genericMoveBonus: [-5,10],
        genericAttackInvincibleBonus: [-5,2]
    },
};

function generateRandomEnderBonus(key, count, extraMin, extraMax) {
    let ranges = enderBonusRanges[key]
    if (!ranges) return {}
    
    if (extraMin == null) extraMin = 0
    if (extraMax == null) extraMax = 0
    
    let result = {}
    let keys = Object.keys(ranges)
    let used = new Set()

    while (Object.keys(result).length < count && used.size < keys.length) {
        let bonusKey = keys[Math.floor(Math.random() * keys.length)]
        if (used.has(bonusKey)) continue
        used.add(bonusKey)

        let range = ranges[bonusKey]
        let min = range[0]
        let max = range[1]

        let finalMin = min + extraMin
        let finalMax = max + extraMax
        
        if (finalMin > finalMax) {
            let t = finalMin
            finalMin = finalMax
            finalMax = t
        }

        let value = randInt(finalMin, finalMax)
        if (value !== 0) {
            result[bonusKey] = value
        }
    }

    return result
}

function newAttributeShardItem(key, count, extraMin, extraMax) {
    let enderbonus = generateRandomEnderBonus(key, count, extraMin, extraMax)
    return Item.of('fast:attribute_shard', 1, {
        enderbonus: enderbonus
    })
}