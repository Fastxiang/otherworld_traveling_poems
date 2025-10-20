
NetworkEvents.dataReceived("Attack", event => {
    let player = event.player
    let EventEntity = player
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    let item = player.getMainHandItem();
    RiftsongEdgeEvent(event, player, persistentData)
    CompassionateHeartAttackEvent(player, persistentData)
    theEmperorPresentEvent(player, persistentData)
})

const PlayerAttackSkillList = [
"basic_player_attack",
"basic_player_attack_nokb",
"rapid_player_attack",
"rapid_player_attack_nokb",
]

function AttackByPlayer(event) {
    let player = event.source.player;
    if (!player.isPlayer()) return;
    let EventEntity = player;
    if (!EventEntity) return;
    let damagetype = event.source.getType();
    let damageimmediate = event.source.immediate.type;
    let item = player.getMainHandItem();
    if (item) {

    }
    let entity = event.entity;
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (!persistentData) return
    IceMagicShardEvent(event, player, persistentData, damagetype)
    CompassionateHeartEvent(event, player, persistentData, damagetype)
    BlazingJudgementEvent(event, player, entity, persistentData, damagetype)
    if (persistentData.HeroStaff && !persistentData.JusticeStaff) {
    HeroStaffMagicEvent(event, player, persistentData, damagetype)
    }
}

function AttackByOthers(event) {
    let player = event.entity;
    if (!player.isPlayer()) return
    let EventEntity = player;
    if (!EventEntity) return;
    let damagetype = event.source.getType();
    let PlayerPersistentData = player.persistentData;
    let persistentData = PlayerPersistentData.enderBonus;
    if (!persistentData) return
}

function IceMagicShardEvent(event, player, persistentData, damagetype) {
    if (!persistentData.IceMagicShard) return;
    if (damagetype.includes('ice')) return;
        event.setCanceled(true);
}

function BlazingJudgementEvent(event, player, entity, persistentData, damagetype) {
    if (!persistentData.BlazingJudgement) return;
    if (!damagetype.includes('fire')) return;
        let pos = entity.position();
        let str = player.getAttribute(`fast:str`).getValue();
        let Attack = player.getAttribute('minecraft:generic.attack_damage').getValue();
        let thisPower = player.getAttribute(getSpellPowerId(damagetype)).getValue();
        if (!thisPower) return
        let Damage = str + Attack
        let Radius = 4
        Radius *= thisPower
        NewFlameStrike(player, pos.x(), pos.y(), pos.z(), Damage, Radius, 40, 1, false)
        event.setCanceled(true);
}

function RiftsongEdgeEvent(event, player, persistentData) {
    if (!persistentData.RiftsongEdge) return;
    let pos = player.position();
    let radius = 30;
    let level = player.level;
    let aabb = createCenteredPosAABB(pos, radius);
    let entitylist = level.getEntitiesWithin(aabb);
    if (!entitylist) return;
    let targetPos = null
    let ray = player.rayTrace(64, false)
    if (ray.block) {
    let BlockPos = ray.block.pos
    targetPos = new $Vec3(BlockPos.x, BlockPos.y, BlockPos.z)
    }
    if (ray.entity) {
    targetPos = ray.entity.position()
    }
    if (!targetPos) {
    let lookAngle = player.getLookAngle();
    let LookEye = player.getEyePosition().add(lookAngle.scale(1.5)); 
    targetPos = lookAngle.scale(32).add(LookEye);
    }
    entitylist.forEach(entity => {
        if (entity.type !== "weaponmaster:throw_weapon_projectile") return;
    let Owner = getEntityOwner(entity)
    if (Owner && Owner != player) return
        let spawn = entity.position();
        let direction = targetPos.subtract(spawn).normalize().scale(2);
        entity.setStore(0);
        entity.setMotion(direction.x(), direction.y(), direction.z());

        player.server.scheduleInTicks(20, () => {
            if (entity) {
                entity.setStore(1);
                entity.setMotion(0, 0, 0);
            }
        });
    });
}

function CompassionateHeartEvent(event, player, persistentData, damagetype) {
    if (!persistentData.CompassionateHeart) return;
    if (damagetype.includes('holy')) return
    event.setCanceled(true);
}

function CompassionateHeartAttackEvent(player, persistentData) {
    if (!persistentData.CompassionateHeart) return;
    let int = player.getAttribute(`fast:int`).getValue();
    if (persistentData.HeroStaff) {
    int *= 1.5;
    }
    let vit = player.getAttribute(`fast:vit`).getValue();
    let Level = 1
    Level += Math.floor((int + vit) / 30)
    let Cast = overLimitSpellCast("irons_spellbooks:blessing_of_life", Level, player, false); 
}

function theEmperorPresentEvent(player, persistentData) {
    if (!persistentData.theEmperorPresent) return
    let pos = player.position()
    let level = player.level
    let entitylist = getLivingWithinRadius(level, pos, 20)
    let targetPos = null
    let ray = player.rayTrace(64, false)
    if (ray.entity) {
    targetPos = ray.entity.position()
    }
    if (!targetPos) return
    let NeedEntity = null
    if (entitylist) {
        let entitiesWithOwner = entitylist.filter(e => typeof e.getSummoner === 'function');
        entitiesWithOwner.forEach(entity => {
            let Owner = entity.getSummoner();
            if (player === Owner) {
            NeedEntity = entity
            }
        });
    }
    if (NeedEntity) {
    let int = player.getAttribute(`fast:int`).getValue();
    if (persistentData.HeroStaff) {
    int *= 1.5;
    }
    let vit = player.getAttribute(`fast:vit`).getValue();
    let SpellLevel = 1
    SpellLevel += Math.floor((int + vit) / 30)
    NeedEntity.setPosition(targetPos.x(), targetPos.y(), targetPos.z());
    overLimitSpellOnCast("irons_spellbooks:sacrifice", SpellLevel, player, NeedEntity)
    }
}