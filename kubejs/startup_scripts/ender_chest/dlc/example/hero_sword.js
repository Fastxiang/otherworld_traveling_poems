// priority: 500

// 注册物品描述
registerItemToolTips("fast:the_hero_sword")

//注册属性
registerAttribute('fast:the_hero_sword', [
  {
    attr: 'irons_spellbooks:max_mana',
    op: 'multiply_total',// 属性乘区
    // 拥有calculate的属性为自定义函数属性，可以任意设计你的公式
    // multiplier参数为倒吊人的加成为1或者-1
    // entry为该物品的data，entry.count为末影饰品的数量（不计算堆叠），部分entry会带entry.nbt，为该末影饰品第一个物品的nbt
    // customData在服务端注册有进行介绍
    calculate: (entity, entry, multiplier, customData) => {
    // global.hasEntityEnderBonus为查找是否有特定末影饰品/天赋标签的函数
        if (global.hasEntityEnderBonus(entity, "fast:magic_sword") || global.hasEntityEnderBonus(entity, "int_talent4")) return 0
        return -1
    },
    calculateToBase: true //calculate默认最后计算，但是加上这个为true就会在前面进行计算，用于让其他属性的calculate检测到这个属性
  },
  {
  // 注册普通属性逻辑
    attr: 'fast:str',
    op: 'addition',
    value: 2
  }
], true)