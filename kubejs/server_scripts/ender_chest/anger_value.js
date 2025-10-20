let AngerValuevisible = {}

function AngerValue(player, persistentData, AngerValueData) {
    let uuid = player.uuid
    if (persistentData.HeroSword) {
    AngerValuevisible[uuid] = true;
    let resourcePercent = AngerValueData.Value;
    let NeedY = 0
    if (persistentData.MagicSword) {
    NeedY = -11
    }
    if (AngerValueData.SwordTechniqueTime) {
    player.paint({
        anger: {
            type: 'rectangle',
            x: '$screenW/2 ',
            y: -41 + NeedY,
            z: 50,
            w: 98,
            h: 16,
            alignX: 'left',      
            alignY: 'bottom',         
            texture: 'fast:textures/gui/anger_skill.png',
            visible: true
        },
        anger_value: {
            type: 'rectangle',
            x: '$screenW/2 + 3', //3
            y: -43 + NeedY,  
            z: 51,
            u0: 0,
            u1: resourcePercent / 100,
            w: 93 * (resourcePercent / 100),
            h: 14,
            alignX: 'left',  
            alignY: 'bottom',    
            texture: 'fast:textures/gui/anger_value.png',
            visible: true
        }
    })
    } else {
        player.paint({
        anger: {
            type: 'rectangle',
            x: '$screenW/2 ',
            y: -41 + NeedY,
            z: 50,
            w: 98,
            h: 16,
            alignX: 'left',      
            alignY: 'bottom',         
            texture: 'fast:textures/gui/anger.png',
            visible: true
        },
        anger_value: {
            type: 'rectangle',
            x: '$screenW/2 + 3', //3
            y: -43 + NeedY,  
            z: 51,
            u0: 0,
            u1: resourcePercent / 100,
            w: 93 * (resourcePercent / 100),
            h: 14,
            alignX: 'left',  
            alignY: 'bottom',    
            texture: 'fast:textures/gui/anger_value.png',
            visible: true
        }
    })
    }
    } else {
    if (AngerValuevisible[uuid]) {
    AngerValuevisible[uuid] = false
    player.paint({
        anger: {
            remove: true
        },
        anger_value: {
            remove: true
        }
    })
    }
    }
}

function AngerValueMax(AngerValueData) {
    if (AngerValueData.Value > 100) {
    AngerValueData.Value = 100
    }
    if (AngerValueData.Value < 0) {
    AngerValueData.Value = 0
    }
}