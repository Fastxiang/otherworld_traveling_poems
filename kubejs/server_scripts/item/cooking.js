ServerEvents.recipes(e => {
  e.custom({
    "type": "farmersdelight:cooking",
    "recipe_book_tab": "meals",
    "ingredients": [
      { "item": "fast:unfired_iron_bowl" }
      ],
    "result": { "item": "fast:iron_bowl" },
    "cookingtime": 40,
    "experience": 1.0
  })
})