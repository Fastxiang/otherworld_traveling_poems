// priority: 1000

global.EnderBonusAttributes = []
global.EnderBonusTooltpisItems = []

function registerItemToolTips(itemId, NotMaidRegister) {
    global.EnderBonusTooltpisItems.push(itemId)
}

function registerAttribute(bonusKey, modifiers, only) {
    if (!only) {
    only = false
    }
    global.EnderBonusAttributes.push({ key: bonusKey, modifiers: modifiers, only: only })
}