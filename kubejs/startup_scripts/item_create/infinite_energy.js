StartupEvents.registry('item', event => {
    event.create("fast:endless_battery1")
        .unstackable()
        .tag("fast:endless_battery")
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(i => true)
                .getEnergyStored(i => 2333)
                .getMaxEnergyStored(i => 2333)
                .extractEnergy((itm, i, sim) => {
                    if (!sim) {
                        // 逻辑：消耗能量
                        //itm.damageValue += 1
                        //if (itm.damageValue >= 2333)
                        //    itm.shrink(1)
                    }
                    return 20 // 返回能量
                })
        )


    event.create("fast:endless_battery2")
        .unstackable()
        .tag("fast:endless_battery")
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(i => true)
                .getEnergyStored(i => 2333)
                .getMaxEnergyStored(i => 2333)
                .extractEnergy((itm, i, sim) => {
                    return 40 // 返回能量
                })
        )
        
    event.create("fast:endless_battery3")
        .unstackable()
        .tag("fast:endless_battery")
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(i => true)
                .getEnergyStored(i => 2333)
                .getMaxEnergyStored(i => 2333)
                .extractEnergy((itm, i, sim) => {
                    return 80 // 返回能量
                })
        )
        
    event.create("fast:endless_battery4")
        .unstackable()
        .tag("fast:endless_battery")
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(i => true)
                .getEnergyStored(i => 2333)
                .getMaxEnergyStored(i => 2333)
                .extractEnergy((itm, i, sim) => {
                    return 160 // 返回能量
                })
        )
        
    event.create("fast:endless_battery5")
        .unstackable()
        .tag("fast:endless_battery")
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(i => true)
                .getEnergyStored(i => 2333)
                .getMaxEnergyStored(i => 2333)
                .extractEnergy((itm, i, sim) => {
                    return 1600 // 返回能量
                })
        )
        
    event.create("fast:shimmering_diamond")
        .unstackable()
        .tag("fast:endless_battery")
        .tag('fast:mechanic')
        .maxDamage(23333)
        .attachCapability(
            CapabilityBuilder.ENERGY.customItemStack()
                .canExtract(i => true)
                .getEnergyStored(i => {
                return 23333 - i.damageValue
                })
                .getMaxEnergyStored(i => 23333)
                .receiveEnergy((itm, i, sim) => {
                let ItemDamage = itm.damageValue
                if (ItemDamage <= 0) return 0
                    if (!sim) {
                        itm.damageValue = Math.max((ItemDamage - 80), 0)
                    }
                    return 80 
                })
                .extractEnergy((itm, i, sim) => {
                let ItemDamage = itm.damageValue
                if (ItemDamage >= 23333) return 0
                    if (!sim) {
                        itm.damageValue = Math.min((ItemDamage + 80), 23333)
                    }
                    return 80 
                })
        )
})