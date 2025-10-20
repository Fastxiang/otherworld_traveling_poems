// priority: 500
function BossEntitylistEvent() {
    this.strategyMap = {}
    this.InitstrategyMap = {}
    this.BossBar = {}
    this.music = {}
    this.BossEntityList = []
    this.init = (args) => {}
    this.defer = (args) => {}
    return this
}

BossEntitylistEvent.prototype = {
    addStrategy: function (type, func, Initfunc) {
        this.BossEntityList.push(type)
        this.strategyMap[type] = func
        this.InitstrategyMap[type] = Initfunc
        return this
    },
    setInit: function (initFunc) {
        this.init = initFunc
        return this
    },
    setDefer: function (deferFunc) {
        this.defer = deferFunc
        return this
    },
    run: function (types, args) {
        args.unshift(this)
        this.init.apply(null, args)
        types.forEach(type => {
            if (!this.strategyMap[type]) return
            this.strategyMap[type].apply(null, args)
        })
        this.defer.apply(null, args)
        return
    },
    initBossBar: function (BossBar, uuid, music) {
        this.BossBar[uuid] = BossBar
        if (music != "noop") {
        this.music[uuid] = music
        }
        return this
    },
    removeBossBar: function (uuid, server) {
        if (this.BossBar[uuid]) {
        let BossBar = this.BossBar[uuid]
        BossBar.removeAllPlayers()
        if (this.music[uuid]) {
        server.runCommandSilent(`stopsound @a * ${this.music[uuid]}`);
        this.music[uuid] = null
        }
        this.BossBar[uuid] = null
        }
        return
    },
    startBoss: function (entity, BossEvent, MaxBossEvent, CoolDown, server, func, args) {
        if(!entity.isAlive()) return;
        args.unshift(entity)
        server.scheduleInTicks(CoolDown, () => {
        if(!entity.isAlive()) return;
        if (BossEvent > MaxBossEvent) {
        let BossPersistentData = entity.persistentData
        BossPersistentData.BossEvent = 1
        let BossEventWave = BossPersistentData.BossEvent
        let Initfunc = this.InitstrategyMap[entity.type]
        Initfunc.apply(null, args)
        } else {
        func.apply(null, args)
        }
        })
        return
    }
}

const BossEntitySpawn = new BossEntitylistEvent()

const BossEntityHurt = new BossEntitylistEvent()

EntityEvents.spawned(event => {
       let entity = event.entity
       let Spawntype = entity.type
       //entity.server.tell(Spawntype)
       let BossEntitylist = BossEntitySpawn.BossEntityList
       let BossEntitys = []
       BossEntitylist.forEach(type => {
       if (Spawntype === type) {
       BossEntitys.push(Spawntype)
       }
        })
       BossEntitySpawn.run(BossEntitys, [event])
})

