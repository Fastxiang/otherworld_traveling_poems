// priority: 900
const dungeonDifficulties = {};

function calculateDifficulty(dungeonKey) {
    let totalXP = 0;
    const waves = dungeonMobs[dungeonKey];
    for (const wave in waves) {
        waves[wave].forEach(mob => totalXP += mob.xp * mob.count);
    }
    return totalXP;
}

// 初始化所有副本难度
for (const dungeonKey in dungeonMobs) {
    dungeonDifficulties[dungeonKey] = calculateDifficulty(dungeonKey);
}

function getDistanceRange(totalXP) {
    if (totalXP <= 50) return [150, 300];
    if (totalXP <= 100) return [300, 2000];
    if (totalXP <= 200) return [2000, 5000];
    return [5000, 7000];
}

function BountyItemEvent(player) {
    let inventory = player.inventory;
    let x = null
    let y = null
    let z = null
    for (let i = 0; i < inventory.getContainerSize(); i++) {
        let item = inventory.getItem(i);
        if (item.isEmpty()) continue;
        if (item.id != "bountiful:bounty") continue;
        let BountyList = getBountyItemId(item);
        if (!BountyList) continue;
        let level = player.level;
        let nbt = item.nbt;
        let thisNumber = 1
        let first = false
        let dungeonKey = null
        if (!nbt.instance) {
            nbt.instance = {};
            let instance = nbt.instance;
            let bountyCount = 0;
            for (let bounty of BountyList) {
                if (!bounty) continue;
                if (!bounty.includes('instance_pass')) {
                bountyCount++
                continue;
                }
                let suffixNumber = bounty.match(/\d+$/);
                if (!suffixNumber) continue;

                let number = parseInt(suffixNumber[0]);
                if (isNaN(number)) continue;
                    instance[`name${thisNumber++}`] = `fast:key${number}`;
                if (!first) {
                dungeonKey = `fast${number}`;
                first = true
                }
                bountyCount++;
            }
            instance.count = bountyCount;
            instance.thiscount = 1;
            
            if (!dungeonKey) continue
            const totalXP = dungeonDifficulties[dungeonKey] || 0;
            if (!totalXP) continue;
            
            const [minDist, maxDist] = getDistanceRange(totalXP);
            const distance = minDist + Math.random() * (maxDist - minDist);
            const PI = 3.141592653589793;
            const angle = Math.random() * PI * 2;
            x = Math.round(player.x + Math.cos(angle) * distance);
            y = player.y;
            z = Math.round(player.z + Math.sin(angle) * distance);
            instance.type = "instance";
            instance.x = x;
            instance.z = z;
            instance.y = y;
        }
    }
    if (z) {
    player.sendData("addWaypoint",{
    x:x,
    y:y,
    z:z
    });
    player.tell(`§b[副本系统] §a领取的§6§l悬赏副本任务§a已成功生成`);
    player.tell(`§b[副本系统] §a一次性领取多个悬赏，它们的坐标是相同的`);
    player.tell(`§b[副本系统] §a已生成对应的地图路标点:X: ${x}, Y: ~, Z: ${z}`);
    }
}
