

// ItemEvents.rightClicked(event => {
    // const { item, player } = event;
    // const inventory = player.inventory;
    // const weapon = inventory.getStackInSlot(0);
    // if (!weapon) return;

    // // 赋予潜力值 (修改部分)
    // if (item.id === "fast:potential_paper") {
        // if (weapon.count > 1) { // 检查武器数量
            // player.tell("§b[潜力系统] §c请将物品堆叠数量减少到1再赋予潜力值！");
            // return;
        // }
        // let zhiNbt = item.getNbt();
        // if (zhiNbt && zhiNbt.weapon && zhiNbt.weapon.potential) {
            // let weaponNbt = weapon.orCreateTag;
            // if (weaponNbt.weapon && weaponNbt.weapon.potential != null) {
                // player.tell("§b[潜力系统] §c该物品已有潜力值，无法再次赋予！");
                // return;
            // }
            // weaponNbt.weapon = {};
            // weaponNbt.weapon.potential = zhiNbt.weapon.potential;
            // weapon.setNbt(weaponNbt);
            // item.count--;
            // player.tell(`§b[潜力系统] §a成功赋予物品潜力值：${zhiNbt.weapon.potential}`);
            // return; 
        // }
    // }
    
    // const augmentation = augmentations.find(aug => aug.item === item.id);
    // if (!augmentation) return;

    // let nbt = weapon.getNbt();
    // if (nbt && nbt.weapon) {
        // let weaponConfig = nbt.weapon;
        // let tec = player.getAttribute('fast:tec').getValue();

        // if (weaponConfig.potential <= 0) {
            // player.tell("§b[潜力系统] §c该武器潜力值不足！");
            // return;
        // }

        // let attributeCount = Object.keys(weaponConfig).length - 1;
        // if (attributeCount >= 6 && !weaponConfig.hasOwnProperty(augmentation.attribute)) {
            // player.tell("§b[潜力系统] §c该武器可附加的属性已达上限！");
            // return;
        // }

        // let currentAttributeValue = weaponConfig[augmentation.attribute] || 0;
        // let attributeName = Text.translatable(`attribute.modifier.fast.${augmentation.attribute}`).getString();
        
        
        // let Dwarven = getModifierLevel(weapon, "tconstruct:dwarven")
        // // 正面属性的上限计算
        // let positiveMax = 0;
        // if (augmentation.modifier.operation === "MULTIPLY_BASE" && augmentation.value > 0) {
            // positiveMax = augmentation.baseMax + (Math.floor(tec / 10) * 0.01);
            // if (Dwarven) {
            // positiveMax += (0.02 * Dwarven)
            // }
        // } else if (augmentation.value > 0){
            // positiveMax = augmentation.baseMax + Math.floor(tec / 5);
            // if (Dwarven) {
            // positiveMax += (2 * Dwarven)
            // }
        // }


        // // 负面属性的"下限"计算 (注意这里用 min，因为是负数)
        // let negativeMin = 0;
        // if (augmentation.modifier.operation === "MULTIPLY_BASE" && augmentation.value < 0) {
            // negativeMin = augmentation.baseMax - (Math.floor(tec / 10) * 0.01); // 注意这里是减
            // if (Dwarven) {
            // negativeMin -= (0.02 * Dwarven)
            // }
        // } else if(augmentation.value < 0){
            // negativeMin = augmentation.baseMax - Math.floor(tec / 5); // 注意这里是减
            // if (Dwarven) {
            // negativeMin -= (2 * Dwarven)
            // }
        // }

        // // 检查正面属性是否达到上限
        // if (augmentation.value > 0 && (positiveMax - currentAttributeValue) <= 0) {
            // player.tell(`§b[潜力系统] §c该武器的${attributeName}已达上限！`);
            // return;
        // }

        // // 检查负面属性是否达到下限
        // if (augmentation.value < 0 && (negativeMin - currentAttributeValue) >= 0) {
             // player.tell(`§b[潜力系统] §c该武器的${attributeName}已达下限！`);
            // return;
        // }

        // if ((weaponConfig.potential - augmentation.potentialCost) <= -5) {
            // player.tell("§b[潜力系统] §c潜力值最低为-5，无法承受更多的力量");
            // return;
        // }

        // if (augmentation.opposite && weaponConfig.hasOwnProperty(augmentation.opposite)) {
            // player.tell(`§b[潜力系统] §c该武器已存在互斥属性，无法添加！`);
            // return;
        // }

        // weaponConfig.potential -= augmentation.potentialCost;
        // weaponConfig[augmentation.attribute] = currentAttributeValue + augmentation.value;
        // weapon.setNbt(nbt);
        // item.count--;

        // if (augmentation.modifier.operation === "MULTIPLY_BASE") {
            // let percentageValue = Math.round(weaponConfig[augmentation.attribute] * 100);
            // player.tell(`§b[潜力系统] §a强化成功！当前${attributeName}：${percentageValue}%，剩余潜力：${weaponConfig.potential}`);
        // } else {
            // player.tell(`§b[潜力系统] §a强化成功！当前${attributeName}：${weaponConfig[augmentation.attribute]}，剩余潜力：${weaponConfig.potential}`);
        // }
    // }
// });

