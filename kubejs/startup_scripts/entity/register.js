StartupEvents.registry('entity_type', event => {
    event.create('fast:zombie_summoner', 'irons_spells_js:spellcasting')
        .addAnimationController('exampleController1', 0, event => {
            event.addTriggerableAnimation('attack2', 'onattack', 'default');
            event.addTriggerableAnimation('attack', 'inattack', 'default');
            if (event.isMoving()) { 
                event.thenPlayAndHold('walk') 
            } else {
                event.thenLoop('idle') 
            }
            return true
        })
        .sized(0.6,1.95)
        .mobCategory('monster')
        .canJump(true)
        .mobType('undead');
        
        
        
    event.create('fast:mysterious_figure', 'irons_spells_js:spellcasting')
        .addAnimationController('exampleController1', 0, event => {
            event.addTriggerableAnimation('attack2', 'onattack', 'default');
            event.addTriggerableAnimation('attack3', 'figureattack', 'default');
            event.addTriggerableAnimation('attack', 'inattack', 'default');
            event.addTriggerableAnimation('buff', 'getbuff', 'default');
            event.addTriggerableAnimation('reload', 'inreload', 'default');
            event.addTriggerableAnimation('flst', 'flstattack', 'default');
            event.addTriggerableAnimation('dism', 'dismattack', 'default');
            if (event.isMoving()) { 
                event.thenPlayAndHold('walk') 
            } else {
                event.thenLoop('idle') 
            }
            return true
        })
        .canHoldItem(context => {
			return true
		})
        .sized(0.6,1.95)
        .mobCategory('monster')
        .isPushable(false)
        .meleeAttackRangeSqr(entity => {
    return 3 * 3; 
        });
        
    event.create('fast:mysterious_black_cloaked_swordsman', 'entityjs:mob')
        .addAnimationController('exampleController1', 0, event => {
            event.addTriggerableAnimation('Attack', 'Attack', 'default');
            event.addTriggerableAnimation('AttackFirst', 'AttackFirst', 'default');
            event.addTriggerableAnimation('AttackTwo', 'AttackTwo', 'default');
            if (event.isMoving()) {
                event.thenPlayAndHold('walk') 
            }
            return true
        })
        .canHoldItem(context => {
			return true
		})
        .sized(0.6,1.95)
        .mobCategory('monster')
        .isPushable(false)
        .meleeAttackRangeSqr(entity => {
    return 3 * 3; 
        })
});