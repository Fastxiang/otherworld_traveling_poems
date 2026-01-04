
StartupEvents.registry("attribute", event => {
	event.create("fast:physical_mastery", "irons_spells_js:spell")
		.setDefaultValue(1.0)
		.setMinimumValue(0.0)
		.setMaximumValue(10.0)

	event.create("fast:physical_resistance", "irons_spells_js:spell")
		.setDefaultValue(1.0)
		.setMinimumValue(0.0)
		.setMaximumValue(10.0)
})

EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, (a) => {
            a.add('fast:physical_mastery')
            a.add('fast:physical_resistance')
        })
    })
})

StartupEvents.registry("irons_spellbooks:schools", event => {
	event.create("fast:physical")
		.setName(Component.of("物理").gold())
		.setFocus("fast:physical_focus") 
		.setPowerAttribute("fast:physical_mastery") 
		.setResistanceAttribute("fast:physical_resistance") 
		.setDefaultCastSound("minecraft:entity.player.attack.strong") 
		.setDamageType("fast:player") 
})
