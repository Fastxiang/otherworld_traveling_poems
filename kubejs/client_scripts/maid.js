
let ItemMaidBaubleHeroBow = MaidRegister.BAUBLE.bind("fast:the_hero_bow")
let ItemMaidBaubleHeroStaff = MaidRegister.BAUBLE.bind("fast:the_hero_staff")
let ItemMaidBaubleHeroShield = MaidRegister.BAUBLE.bind("fast:the_hero_shield")
let ItemMaidBaubleHeroSword = MaidRegister.BAUBLE.bind("fast:the_hero_sword")
let ItemMaidBaubleMaidFoodAutoSellToken = MaidRegister.BAUBLE.bind("fast:maid_food_auto_sell_token")
let ItemMaidBaubleSprllStorageSphere = MaidRegister.BAUBLE.bind("fast:spell_storage_sphere")
let ItemMaidBaubleStrGem = MaidRegister.BAUBLE.bind("fast:str_gem")
let ItemMaidBaubleAgiGem = MaidRegister.BAUBLE.bind("fast:agi_gem")
let ItemMaidBaubleIntGem = MaidRegister.BAUBLE.bind("fast:int_gem")
let ItemMaidBaubleVitGem = MaidRegister.BAUBLE.bind("fast:vit_gem")
let ItemMaidBaubleJusticeShield = MaidRegister.BAUBLE.bind("fast:justice_shield")
let ItemMaidBaubleHeroFishingRod = MaidRegister.BAUBLE.bind("fast:the_hero_fishing_rod")

MaidRegister.TASK
    .rangedAttackTask("fast:magic", "fast:the_hero_staff")
    
MaidRegister.TASK
    .rangedAttackTask("fast:bow", "fast:the_hero_bow")
    .enable(maid => maid.favorabilityManager.getLevel() >= 1)
    .addEnableConditionDesc("need_level_1", maid => maid.favorabilityManager.getLevel() >= 1)
    
MaidRegister.TASK
    .meleeTask("fast:shield", "fast:the_hero_shield")
    
MaidRegister.TASK
    .walkToLivingEntityTask("fast:support", "fast:compassionate_heart")
    
MaidRegister.TASK
    .baseTask("fast:sales_assistant", "fast:maid_food_auto_sell_token")