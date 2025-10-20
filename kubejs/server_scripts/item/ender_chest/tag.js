ServerEvents.tags('minecraft:item', event => {
    /**
     * 从标签删除的物品id数组
     * @type {Special.Item[]}
     */
    const tagItems = [
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
    ]
    for (const item of tagItems) {
        event.remove('curios:curio', item);
    }
    
    Object.keys(ItemBonusOnlyMap).forEach(itemKey => {
    event.add('fast:ender_item', itemKey);
    });
    
    Object.keys(ItemBonusMap).forEach(itemKey => {
    event.add('fast:ender_item', itemKey);
    });
    
})