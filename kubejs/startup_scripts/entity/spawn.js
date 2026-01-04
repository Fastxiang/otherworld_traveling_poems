
EntityJSEvents.spawnPlacement(event => {
    event.and('minecraft:slime', (predicate, level, spawntype, pos, random) => {
        return level.level.dimension != 'fast:fast_flat_world';
    });
});

