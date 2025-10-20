ServerEvents.recipes(event => {
  event.replaceInput({mod: 'youkaishomecoming', not: {input: 'youkaishomecoming:flesh'}}, 
    Ingredient.of('minecraft:bowl'), 
    Ingredient.of('fast:iron_bowl'));
    
    
})