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

ItemEvents.tooltip(event => {
    event.addAdvanced('fast:the_hero_card', (item, advanced, text) => {
        let nbt = item.nbt;
        if (!nbt || !nbt.HeroCardData) return;

        let cardData = nbt.HeroCardData;
        let startTick = cardData.startTick || 0;
        let duration = cardData.duration || 0;
        let player = Client.player
        let level = player.level

        if (HeroCardIsExpired(level, startTick, duration)) {
            text.add('§c已过期');
        } else {
            let remain = HeroCardTimeLeftSeconds(level, startTick, duration);
            text.add('§a剩余: ' + remain + ' 秒');
        }
    });
});