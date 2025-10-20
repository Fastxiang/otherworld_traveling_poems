LoquatEvents.playerEnteredArea(event => {
    let player = event.player;
    let area = event.area;
    let areauuId = area.uuid;
    let level = player.level
    let pos = player.position();
    let server = player.server;
    let dimension = level.dimension.toString();
    // restrictLoquat(player, level, area)
    // instance.forEach((instances, key) => {
    // let x = instances.instancex;
	// let y = instances.instancey;
	// let z = instances.instancez;
	// let AABB = createCenteredAABB(x,y,z, 50);
	// if (AABB.contains(pos)) {
	// if (instances.area === "noop") {
	// instances.area = areauuId;
	// addLoquatTag("instance", level, area)
    // restrictLoquat(player, level, area)
	// }
	// }
    // })
})
