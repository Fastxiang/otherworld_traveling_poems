// priority: 800

let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')

EntityJSEvents.addGoals("fast:zombie_summoner", event => {
    event.nearestAttackableTarget(1, $Player, 8, true, false, entity => {
        if (entity) {
        return true
        } else {
        return false
               }
    });
    event.hurtByTarget(2, [$Player], true, [$Player])
})

EntityJSEvents.addGoalSelectors('fast:zombie_summoner', event => {
    event.meleeAttack(2, 1, true)
    event.waterAvoidingRandomStroll(3, 1.5, 0.5)
    event.lookAtEntity(8, $Player, 8, 0.8, false)
    event.randomLookAround(5)
    event.arbitraryGoal(1, (e) => {
        return new WizardAttackGoal(e, 1, 100) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('irons_spellbooks:fireball')], // Attack
                [], // Defense
                [], // Movement
                [] // Support
            )
    })
})

EntityJSEvents.addGoalSelectors('fast:mysterious_figure', event => {
    event.meleeAttack(1, 1, true)
    event.lookAtEntity(2, $Player, 16, 1, false)
})

EntityJSEvents.addGoals("fast:mysterious_figure", event => {
    event.nearestAttackableTarget(1, $Player, 8, true, false, entity => {
        if (entity) {
        return true
        } else {
        return false
               }
    });
    event.hurtByTarget(2, [$Player], true, [$Player])
})

EntityJSEvents.addGoalSelectors('fast:mysterious_black_cloaked_swordsman', event => {
    event.meleeAttack(1, 1, true)
    event.lookAtEntity(2, $Player, 16, 1, false)
})

EntityJSEvents.addGoals("fast:mysterious_black_cloaked_swordsman", event => {
    event.nearestAttackableTarget(1, $Player, 8, true, false, entity => {
        if (entity) {
        return true
        } else {
        return false
               }
    });
    event.hurtByTarget(2, [$Player], true, [$Player])
})

let GrmoList = [
    "grimoireofgaia:ant",
    "grimoireofgaia:anubis",
    "grimoireofgaia:arachne",
    "grimoireofgaia:banshee",
    "grimoireofgaia:bee",
    "grimoireofgaia:behender",
    "grimoireofgaia:bone_knight",
    "grimoireofgaia:cecaelia",
    "grimoireofgaia:centaur",
    "grimoireofgaia:cobble_golem",
    "grimoireofgaia:cobblestone_golem",
    "grimoireofgaia:creep",
    "grimoireofgaia:cyclops",
    "grimoireofgaia:deathword",
    "grimoireofgaia:dryad",
    "grimoireofgaia:dullahan",
    "grimoireofgaia:dwarf",
    "grimoireofgaia:ender_dragon_girl",
    "grimoireofgaia:ender_eye",
    "grimoireofgaia:flesh_lich",
    "grimoireofgaia:gelatinous_slime",
    "grimoireofgaia:goblin",
    "grimoireofgaia:goblin_feral",
    "grimoireofgaia:gryphon",
    "grimoireofgaia:harpy",
    "grimoireofgaia:hunter",
    "grimoireofgaia:kobold",
    "grimoireofgaia:matango",
    "grimoireofgaia:mermaid",
    "grimoireofgaia:mimic",
    "grimoireofgaia:minotaur",
    "grimoireofgaia:minotaurus",
    "grimoireofgaia:naga",
    "grimoireofgaia:nine_tails",
    "grimoireofgaia:oni",
    "grimoireofgaia:orc",
    "grimoireofgaia:satyress",
    "grimoireofgaia:shaman",
    "grimoireofgaia:sharko",
    "grimoireofgaia:siren",
    "grimoireofgaia:sludge_girl",
    "grimoireofgaia:sphinx",
    "grimoireofgaia:sporeling",
    "grimoireofgaia:spriggan",
    "grimoireofgaia:succubus",
    "grimoireofgaia:toad",
    "grimoireofgaia:valkyrie",
    "grimoireofgaia:werecat",
    "grimoireofgaia:witch",
    "grimoireofgaia:wither_cow",
    "grimoireofgaia:wizard_harpy",
    "grimoireofgaia:yuki_onna",
]

function addGrmoAttackGoal(AttackEntity) {
EntityJSEvents.addGoals(AttackEntity, event => {
    event.nearestAttackableTarget(1, $Player, 8, true, false, entity => {
        if (entity) {
        return true
        } else {
        return false
               }
    });
    event.hurtByTarget(2, [$Player], true, [$Player])
})
}

function addGrmoAttacTwoGoal(AttackEntity) {
EntityJSEvents.addGoalSelectors(AttackEntity, event => {
    event.meleeAttack(2, 1, true)
})
}

GrmoList.forEach(addGrmoAttackGoal)
GrmoList.forEach(addGrmoAttacTwoGoal)