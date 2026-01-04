// priority: 900

let ItemTagRegistry = [];

/**
 * 注册物品与标签的绑定
 * @param {string} itemId - 物品的完整ID (例如 "minecraft:diamond")
 * @param {string} tag - 要添加的标签 (例如 "curios:ring" 或 "fast:ender_item")
 */
function registerItemTag(itemId, tag) {
    ItemTagRegistry.push({ item: itemId, tag: tag });
};

ServerEvents.tags('minecraft:item', event => {
    
    const removeList = [
        'tarotcards:the_fool',
        'tarotcards:the_magician',
        'tarotcards:the_high_priestess',
        'tarotcards:the_empress',
        'tarotcards:the_emperor',
        'tarotcards:the_hierophant',
        'tarotcards:the_lovers',
        'tarotcards:the_chariot',
        'tarotcards:strength',
        'tarotcards:the_hermit',
        'tarotcards:wheel_of_fortune',
        'tarotcards:justice',
        'tarotcards:the_hanged_man',
        'tarotcards:death',
        'tarotcards:temperance',
        'tarotcards:the_devil',
        'tarotcards:the_tower',
        'tarotcards:the_star',
        'tarotcards:the_moon',
        'tarotcards:the_sun',
        'tarotcards:judgement',
        'tarotcards:the_world'
    ];
    for (let item of removeList) {
        event.remove('curios:curio', item);
    }
    
    global.EnderBonusTooltpisItems.forEach(itemKey => {
        event.add('fast:ender_item', itemKey);
    });
    
    for (let entry of ItemTagRegistry) {
        event.add(entry.tag, entry.item);
    }

    // 标签id，物品id
    event.add('fast:mechanic', 'tarotcards:the_chariot');
    event.add('fast:shadow',
    'tarotcards:the_hermit');
    event.add('fast:ingots/rose_gold',
    'mca:rose_gold_ingot');
    event.add('fast:ingots/rose_gold',
    'tconstruct:rose_gold_ingot');
    event.add('fast:right_clickable_item',
    'minecraft:compass');
    event.add('fast:right_clickable_item',
    'minecraft:sea_lantern');
    event.add('fast:blaze',
    'cataclysm:flame_eye');
    event.add('fast:blaze',
    'cataclysm:burning_ashes');
})
