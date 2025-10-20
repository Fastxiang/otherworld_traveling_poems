// priority: 0
function BossHurtEvent(event) {
       let entity = event.entity;
       let Spawntype = entity.type
       //entity.server.tell(Spawntype)
       let BossEntitylist = BossEntityHurt.BossEntityList
       let BossEntitys = []
       BossEntitylist.forEach(type => {
       if (Spawntype === type) {
       BossEntitys.push(Spawntype)
       }
        })
       BossEntityHurt.run(BossEntitys, [event])
}
