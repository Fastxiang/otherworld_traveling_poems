
// 新的物品映射匠魂材料
function NewItemTconstrucMaterial(event, item, material, value) {
    let obj = {
        "type": "tconstruct:material",
        "ingredient": {
            "item": item
        },
        "material": material,
        "needed": 1,
        "value": value
    }
    event.custom(obj)
}

ServerEvents.recipes(event => {
// 安山合金
    // 物品 对应材料 该物品价值数量
    NewItemTconstrucMaterial(event, "create:andesite_alloy", "kubejs:andesite_alloy", 1)
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "create:andesite_alloy_block"
        },
        "leftover": {
            "count": 1,
            "item": "create:andesite_alloy"
        },
        "material": "kubejs:andesite_alloy",
        "needed": 1,
        "value": 9
    });
// 锌
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "create:zinc_ingot"
        },
        "material": "kubejs:zinc_ingot",
        "needed": 1,
        "value": 1
    });
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "create:zinc_ingot_block"
        },
        "leftover": {
            "count": 1,
            "item": "create:zinc_ingot"
        },
        "material": "kubejs:zinc_ingot",
        "needed": 1,
        "value": 9
    });
    event.custom({
        "type": "tconstruct:material_fluid",
        "fluid": {
            "amount": 90,
            "fluid": "tconstruct:molten_zinc"
        },
        "temperature": 800,
        "output": "kubejs:zinc_ingot"
    })
// 黄铜
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "create:brass_ingot"
        },
        "material": "kubejs:brass_ingot",
        "needed": 1,
        "value": 1
    });
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "create:brass_ingot_block"
        },
        "leftover": {
            "count": 1,
            "item": "create:brass_ingot"
        },
        "material": "kubejs:brass_ingot",
        "needed": 1,
        "value": 9
    });
    event.custom({
        "type": "tconstruct:material_fluid",
        "fluid": {
            "amount": 90,
            "fluid": "tconstruct:molten_brass"
        },
        "temperature": 800,
        "output": "kubejs:brass_ingot"
    })
    // 铁戒指
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "item": "fast:iron_ring"
        },
        "result": {
            "amount": 14,
            "tag": "forge:molten_iron"
        },
        "temperature": 8,
        "time": 60
    })
    // 获得锤子cast
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:wooden_craftsman_hammer"
         },
        "cast_consumed": true,
        "cooling_time": 57,
        "fluid": {
        "amount": 180,
        "tag": "forge:molten_gold"
         },
        "result": "fast:craftsman_hammer_cast",
        "switch_slots": true
   });
   // 锤子cast相关配方
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:craftsman_hammer_cast"
         },
        "cast_consumed": false,
        "cooling_time": 120,
        "fluid": {
        "amount": 810,
        "tag": "forge:molten_iron"
         },
        "result": "fast:iron_craftsman_hammer",
        "switch_slots": false
   });
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:craftsman_hammer_cast"
         },
        "cast_consumed": false,
        "cooling_time": 120,
        "fluid": {
        "amount": 810,
        "tag": "forge:molten_gold"
         },
        "result": "fast:gold_craftsman_hammer_cast",
        "switch_slots": false
   });
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:craftsman_hammer_cast"
         },
        "cast_consumed": false,
        "cooling_time": 120,
        "fluid": {
        "amount": 810,
        "fluid": "tconstruct:molten_diamond"
         },
        "result": "fast:diamond_craftsman_hammer_cast",
        "switch_slots": false
   });
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:craftsman_hammer_cast"
         },
        "cast_consumed": false,
        "cooling_time": 120,
        "fluid": {
        "amount": 810,
        "fluid": "tconstruct:molten_brass"
         },
        "result": "fast:brass_craftsman_hammer_cast",
        "switch_slots": false
   });
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:craftsman_hammer_cast"
         },
        "cast_consumed": false,
        "cooling_time": 120,
        "fluid": {
        "amount": 810,
        "fluid": "tconstruct:molten_netherite"
         },
        "result": "fast:netherite_ingot_craftsman_hammer_cast",
        "switch_slots": false
   })
   // 获得碗cast
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "minecraft:bowl"
         },
        "cast_consumed": true,
        "cooling_time": 57,
        "fluid": {
        "amount": 180,
        "tag": "forge:molten_gold"
         },
        "result": "fast:bowl_cast",
        "switch_slots": true
   });
   // 碗配方
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:bowl_cast"
         },
        "cast_consumed": false,
        "cooling_time": 70,
        "fluid": {
        "amount": 270,
        "tag": "forge:molten_iron"
         },
        "result": "fast:unfired_iron_bowl",
        "switch_slots": false
   });
   event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
        "item": "fast:bowl_cast"
         },
        "cast_consumed": false,
        "cooling_time": 70,
        "fluid": {
        "amount": 270,
        "tag": "forge:molten_gold"
         },
        "result": "fast:unfired_gold_bowl",
        "switch_slots": false
   });
})



