NetworkEvents.dataReceived("strengthCardToggle", event => {
   const player = event.player;
   if (!player || !player.isAlive()) return;
   
   let PlayerPersistentData = player.persistentData;
   let persistentData = PlayerPersistentData.enderBonus;
    let thisPlayerUuid = player.uuid
    let AngerValueData = PlayerAngerValueData[thisPlayerUuid]
   let item = player.getMainHandItem();
   if (item) {
   if (hasSpecialProperty(item, "collectorsreap:lime_popsicle")) {
   ShieldStanceItemEvent(player, player, PlayerPersistentData)
   return
   }
   }

        PlayerPersistentData.activeSkillList = [];
        
        if (persistentData && persistentData.theStrengthPresent) {
                PlayerPersistentData.activeSkillList.push("strengthCard");
            
        }
        if (AngerValueData) {
                PlayerPersistentData.activeSkillList.push("swordTechnique");
            
        }
        if (!PlayerPersistentData.activeSkillIndex) {
        PlayerPersistentData.activeSkillIndex = 1;
        }
    
    const activeSkillList = PlayerPersistentData.activeSkillList;
    const activeSkillIndex = PlayerPersistentData.activeSkillIndex;
    if (activeSkillList.length > 0) {
        const currentSkillName = activeSkillList[activeSkillIndex - 1];
        
        if (currentSkillName === "strengthCard") {
            if (persistentData.theStrengthPresent) {
                let current = player.getPersistentData().getBoolean('strengthCardActive');
                let newStatus = !current;
                player.getPersistentData().putBoolean('strengthCardActive', newStatus);
                let status = newStatus ? '开启' : '关闭';
                player.tell(Text.of(status + '塔罗牌：力量').gold());
            }
        } 
        if (currentSkillName === "swordTechnique") {
            if (AngerValueData) {
                if (AngerValueData.SwordTechniqueSerail) {
                    AngerValueData.SwordTechniqueSerail += 1;
                } else {
                    AngerValueData.SwordTechniqueSerail = 1;
                }
                if (AngerValueData.SwordTechniqueSerail > AngerValueData.SwordTechnique) {
                    AngerValueData.SwordTechniqueSerail = 1;
                }
                player.tell(Text.of('切换了剑技').gold());
            }
        }
    }

    updatePlayerEnderBonus(player);
});

NetworkEvents.dataReceived("ListSwitchToggle", event => {
   const player = event.player;
   if (!player || !player.isAlive()) return;
   let PlayerPersistentData = player.persistentData;

    if (!PlayerPersistentData.activeSkillList) {
        PlayerPersistentData.activeSkillList = [];
        if (PlayerPersistentData.enderBonus && PlayerPersistentData.enderBonus.theStrengthPresent) {
                PlayerPersistentData.activeSkillList.push("strengthCard");
        }
        if (PlayerPersistentData.AngerValue) {
                PlayerPersistentData.activeSkillList.push("swordTechnique");
        }
        PlayerPersistentData.activeSkillIndex = 0;
    }

    const activeSkillList = PlayerPersistentData.activeSkillList;
    if (activeSkillList.length <= 1) {
    PlayerPersistentData.activeSkillIndex = 1;
        player.tell(Text.of('技能列表只有一个，无法切换').gold());
        return;
    }

    let currentActiveIndex = PlayerPersistentData.activeSkillIndex || 1;
    let newIndex = (currentActiveIndex + 1)
    if (newIndex > activeSkillList.length) {
    newIndex = 1;
    }
    PlayerPersistentData.activeSkillIndex = newIndex;

    const nextSkillName = activeSkillList[newIndex - 1];
    player.tell(Text.of('切换到技能: ' + nextSkillName).gold());
})

function ShieldStanceItemEvent(player, EventEntity, PlayerPersistentData) {
   if (PlayerPersistentData.MoveAttackDamageCd) return;
   let DefenSiveLevel = 0
   if (EventEntity.hasEffect('fast:defensive_stance')) {
   let DefenSive = EventEntity.getEffect('fast:defensive_stance');
   DefenSiveLevel = DefenSive.getAmplifier();
   }
   if (!EventEntity.hasEffect('fast:offensive_stance') && DefenSiveLevel < 9) return
   if (DefenSiveLevel >= 9) {
   EventEntity.removeEffect('fast:defensive_stance');
   EventEntity.potionEffects.add('fast:offensive_stance', 300, 0, false, false)
   }
    let level = EventEntity.level;
    let server = EventEntity.server;
    let lookAngle = EventEntity.getLookAngle();
    
    // 提取水平方向分量并重新归一化
    let x = lookAngle.x();
    let z = lookAngle.z();
    let horizontalLength = Math.sqrt(x*x + z*z);
    
    if (horizontalLength > 0.001) { // 防止除以零
        x /= horizontalLength;
        z /= horizontalLength;
    } else { // 处理直视正上/正下的情况
    return
    }
    let y = 0.1
    
    x *= 2
    y *= 2
    
    MoveAttackentitylist = []
    PlayerPersistentData.MoveAttackDamage = true;
    PlayerPersistentData.MoveAttackDamageCd = true
    if (EventEntity.isPlayer()) {
    player.sendData("Motion",{
    motionx:x,
    motiony:y,
    motionz:z
    });
    } else {
    EventEntity.setMotion(x, y, z)
    }
    server.scheduleInTicks(15, () => {
    PlayerPersistentData.MoveAttackDamage = false;
    server.scheduleInTicks(45, () => {
    PlayerPersistentData.MoveAttackDamageCd = false
    })
    })
}