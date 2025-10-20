let FEValuevisible = {}

function FEValue(player, persistentData, Value) {
    let uuid = player.uuid
    if (persistentData.ShimmeringDiamond) {
    FEValuevisible[uuid] = true;
    let resourcePercent = 23333 - Value;
    player.paint({
        fe: {
            type: 'rectangle',
            x: '$screenW/2 ',
            y: -41,
            z: 50,
            w: 79,
            h: 22,
            alignX: 'left',      
            alignY: 'bottom',         
            texture: 'fast:textures/gui/fe.png',
            visible: true
        },
        fe_value: {
            type: 'rectangle',
            x: '$screenW/2 +4',
            y: -41 -3,  
            z: 51,
            u0: 0,
            u1: resourcePercent / 23333,
            w: 71 * (resourcePercent / 23333),
            h: 7,
            alignX: 'left',  
            alignY: 'bottom',    
            texture: 'fast:textures/gui/fe_value.png',
            visible: true
        }
    })
    } else {
    if (FEValuevisible[uuid]) {
    FEValuevisible[uuid] = false
    player.paint({
        fe: {
            remove: true
        },
        fe_value: {
            remove: true
        }
    })
    }
    }
}