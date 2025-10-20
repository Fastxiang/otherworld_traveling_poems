
function getSpellBySpellId(spellId) {
    return $SpellRegistry["getSpell(net.minecraft.resources.ResourceLocation)"](new ResourceLocation(spellId));
}

function overLimitSpellCast(spellId, amplifier, ctx, consume) {
    const spell = getSpellBySpellId(spellId)
    if (spell) {
       const success = spell.attemptInitiateCast(Item.of('air'), amplifier, ctx.level, ctx, $CastSource.NONE, consume, "main_hand");
       return success
    }
    return null
}

let TeleportSpellList = [
"irons_spellbooks:frost_step",
"irons_spellbooks:blood_step",
]

function overLimitSpellOnCast(spellId, SpellLevel, ctx, entity) {
    const spell = getSpellBySpellId(spellId)
    if (!spell) return
    let MagicData = $MagicData.getPlayerMagicData(ctx)
    let level = ctx.level
    if (entity && !TeleportSpellList.includes(spellId)) {
    MagicData.setAdditionalCastData(new $TargetEntityCastData(entity))
    }
    spell.onCast(level, SpellLevel, ctx, $CastSource.MOB, MagicData)
    spell.onServerCastComplete(level, SpellLevel, ctx, MagicData, false)
}

function MoboverLimitSpellCast(spellId, entity, level) {
    const spell = getSpellBySpellId(spellId)
    if (!spell) return
    entity.initiateCastSpell(spell, level);
}

function checkPlayerMana(player, spell, spellLevel) {
    const magicData = $MagicData.getPlayerMagicData(player);
    const manaCost = spell.getManaCost(spellLevel);
    if (magicData.getMana() >= manaCost) {
        magicData.setMana(magicData.getMana() - manaCost);
        $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
        return true;
    } else {
        player.displayClientMessage("法力值不足", true)
        return false;
    }
};

function checkPlayerManaCost(player, manaCost, zero) {
    const magicData = $MagicData.getPlayerMagicData(player);
    if (magicData.getMana() >= manaCost) {
        magicData.setMana(magicData.getMana() - manaCost);
        $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
        return true;
    } else {
        if (zero) {
        magicData.setMana(0);
        $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
        }
        return false;
    }
};

function addPlayerManaCost(player, manaCost) {
    const magicData = $MagicData.getPlayerMagicData(player);
    let MaxMana = player.getAttribute(`irons_spellbooks:max_mana`).getValue();
    if ((magicData.getMana() + manaCost) < MaxMana) {
        magicData.setMana(magicData.getMana() + manaCost);
        $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
    } else {
    magicData.setMana(MaxMana);
    $Messages.sendToPlayer(new $ClientboundSyncMana(magicData), player);
    }
}

function getSpellPowerId(damageType) {
  if (damageType.endsWith('_magic')) {
    return `irons_spellbooks:${damageType.replace('_magic', '_spell_power')}`;
  }
  return null; // 非魔法类型返回 null 或默认值
}

function getMaxSpellDamageType(player) {
    const damageTypes = ['fire', 'ice', 'nature', 'lightning', 'evocation', 'holy', 'ender', 'blood'];
    let maxPower = 0;
    let maxDamageType = null;

    for (let type of damageTypes) {
        let power = player.getAttribute(`irons_spellbooks:${type}_spell_power`).getValue();
        if (power > maxPower) {
            maxPower = power;
            maxDamageType = `${type}_magic`;
        } else if (power === maxPower) {
            maxDamageType = null;
        }
    }
    return maxDamageType
}