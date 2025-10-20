    // 所有果酱版本食物的列表
    const jamFoods = [
        "kubejs:mixed_salad_jam",
        "kubejs:cooked_rice_jam",
        "kubejs:salmon_roll_jam",
        "kubejs:cod_roll_jam",
        "kubejs:kelp_roll_slice_jam",
        "kubejs:barbecue_stick_jam",
        "kubejs:vegetable_soup_jam",
        "kubejs:fruit_salad_jam",
        "kubejs:eggplant_burger_jam",
        "kubejs:dumplings_jam",
        "kubejs:cabbage_rolls_jam",
        "kubejs:bone_broth_jam",
        "kubejs:ratatouille_jam",
        "kubejs:egg_sandwich_jam",
        "kubejs:bacon_sandwich_jam",
        "kubejs:chicken_sandwich_jam",
        "kubejs:hamburger_jam",
        "kubejs:mushroom_rice_jam",
        "kubejs:grilled_salmon_jam",
        "kubejs:mutton_wrap_jam",
        "kubejs:stuffed_potato_jam",
        "kubejs:beef_stew_jam",
        "kubejs:chicken_soup_jam",
        "kubejs:fried_rice_jam",
        "kubejs:noodle_soup_jam",
        "kubejs:squid_ink_pasta_jam",
        "kubejs:roast_chicken_block_jam",
        "kubejs:shepherds_pie_block_jam",
        "kubejs:steak_and_potatoes_jam",
        "kubejs:pasta_with_meatballs_jam",
        "kubejs:pasta_with_mutton_chop_jam",
        "kubejs:honey_glazed_ham_block_jam",
        "kubejs:rice_roll_medley_block_jam"
    ]
    
ItemEvents.tooltip((event) => {
    // 定义通用的提示信息处理函数
    const addTooltip = (itemId) => {
        event.addAdvanced(itemId, (item, advanced, text) => {
            const langId = itemId.replace(":", ".")
            if (text.length > 1) {
                text.remove(1); // 如果text长度大于1，移除索引为1的元素
            }
            // 第一行显示属性和类型
            text.add(Text.translate(`item.${langId}.type`))
            
            if (event.shift) {
                // 按住shift时显示详细描述
                text.add(Text.translate(`item.${langId}.tooltip2`))
            } else {
                // 未按shift时显示基础描述
                text.add(Text.translate(`item.${langId}.tooltip`))
                text.add(Text.translate("item.fast.tooltips.shift"))
            }
        })
    }

    jamFoods.forEach(item => addTooltip(item))
})