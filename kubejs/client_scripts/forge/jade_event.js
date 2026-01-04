// priority: 1100

const $JadeTooltipEvent = Java.loadClass("com.main.fast.event.JadeTooltipEvent")

NativeEvents.onEvent($JadeTooltipEvent, event => {
    let entity = event.entity
    let list = global.getMobEntityEnderBonusItemList(entity);
    if (!list || list.length === 0) return;
    
    let names = list.map(stack => {
        let langId = stack.getItem().getDescriptionId();
        return Text.translatable(langId).getString();
    });
    
    let line = "末影饰品: " + names.join(" ");
    
    event.addText(line);
})