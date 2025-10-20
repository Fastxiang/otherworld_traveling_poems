ServerEvents.recipes(event => {
    //删除匠魂大百科的配方
    event.remove({output:"tconstruct:encyclopedia"});
    
    //删除食物的合成配方
    event.remove({output:"mynethersdelight:rock_soup", type: 'minecraft:crafting_shapeless'});
    
    event.remove({output:"create:precision_mechanism"});
    
    event.remove({mod:"hmag"});
    
    event.remove({output:"bountiful:bountyboard"});
    
     //删除安山合金的配方
    event.remove({output:"create:andesite_alloy"});
    
    //删除糖的配方
    event.remove({output:"minecraft:sugar"});
    
       //删除tacz工作台配方
    event.remove({output:"tacz:gun_smith_table"});
    
      //删除灾变材料配方
    event.remove({output:"cataclysm:necklace_of_the_desert"});
    event.remove({output:"cataclysm:abyssal_sacrifice"});
    event.remove({output:"cataclysm:flame_eye"});
    event.remove({output:"cataclysm:void_eye"});
    event.remove({output:"cataclysm:abyss_eye"});
    event.remove({output:"cataclysm:mech_eye"});
    event.remove({output:"cataclysm:monstrous_eye"});
    event.remove({output:"cataclysm:desert_eye"});
    event.remove({output:"cataclysm:cursed_eye"});
    event.remove({output:"cataclysm:storm_eye"});
});