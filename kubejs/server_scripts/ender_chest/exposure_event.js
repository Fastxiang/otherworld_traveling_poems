
function LethalShutterEvent(player, frame, EntityList, persistentData, PlayerPersistentData) {
    if (!persistentData.LethalShutter) return
    let ray = player.rayTrace(64, false)
    let Biome = frame.Biome
    let level = player.level
    let BlockPos = null
    let structure = null
    if (ray.block) {
    BlockPos = ray.block.pos
    }
    if (ray.entity) {
    BlockPos = ray.entity.block.pos
    }
    if (BlockPos) {
    structure = getStructureString(level, BlockPos)
    }
    if (!PlayerPersistentData.LethalShutter) {
    PlayerPersistentData.LethalShutter = {}
    let NewConfig = PlayerPersistentData.LethalShutter
    NewConfig.Biome = []
    NewConfig.structure = []
    }
    let Config = PlayerPersistentData.LethalShutter
    let BiomeList = Config.Biome.toArray().map(biome => biome.getAsString())
    let StructureList = Config.structure.toArray().map(biome => biome.getAsString())
    if (structure && !StructureList.includes(structure)) {
    Config.structure.push(structure)
    player.tell("成功拍到了新的结构，当前已拍结构类型数量:"+Config.structure.length)
    }
    if (Biome && !BiomeList.includes(Biome)) {
    Config.Biome.push(Biome)
    player.tell("成功拍到了新的群系，当前已拍群系类型数量:"+Config.Biome.length)
    }
    EntityList.forEach(entity => {
    if (!entity.isLiving() || entity.isPlayer()) return;
    let Owner = getEntityOwner(entity);
    if (Owner && Owner.isPlayer()) return;
    if (entity.isPlayer()) return;
    let Partner = getEntityPartner(entity)
    if (Partner && Partner.isPlayer()) return
    let Damage = (Config.Biome.length * Config.structure.length) || 0
    AttackEntity(player, entity, "fast:exposure", Damage)
    })
    let AttackSpeed = player.getAttribute(`minecraft:generic.attack_speed`).getValue();
    let Cd = 6
    let CdSpeed = (AttackSpeed - 4) / 4
    Cd /= 1 + CdSpeed
    Config.Cd = Cd
}