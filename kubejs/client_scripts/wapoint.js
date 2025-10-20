const $Waypoint = Java.loadClass('xaero.common.minimap.waypoints.Waypoint');
const $ModSettings = Java.loadClass('xaero.common.settings.ModSettings');


function getRandomColor() {
  return Math.floor(Math.random() * $ModSettings.ENCHANT_COLORS.length); 
}


NetworkEvents.dataReceived("addWaypoint", event => {  
  let {data, player} = event;
  let x = data[`x`];
  let y = data[`y`];
  let z = data[`z`];
  let name = "副本"
  let handler = player.connection;
  let session = handler.getXaero_minimapSession();
  let waypointsManager = session.getWaypointsManager();
  let Waypoint = new $Waypoint(x, y, z, name, name.substring(0, 1), getRandomColor(), 0, false);
  waypointsManager.getWaypoints().getList().add(Waypoint);
})

NetworkEvents.dataReceived("removeWaypoint", event => {  
  let { data, player } = event;
  let x = data[`x`];
  let y = data[`y`];
  let z = data[`z`];

  let handler = player.connection;
  let session = handler.getXaero_minimapSession();
  let waypointsManager = session.getWaypointsManager();
  let WaypointList = waypointsManager.getWaypoints().getList();
  
  let waypointsToRemove = [];
  WaypointList.forEach(Waypoint => {
    if (Waypoint.getX() === x && Waypoint.getY() === y && Waypoint.getZ() === z) {
      waypointsToRemove.push(Waypoint);
    }
  });
  
  waypointsToRemove.forEach(waypoint => {
    waypointsManager.getWaypoints().getList().remove(waypoint);
  });
});