// priority: 1000

NativeEvents.onEvent($MaidBaubleChangeEvent$PutOn, event => {
    let maid = event.maid
    MaidUpdateEnderBonusEvent(maid)
})

NativeEvents.onEvent($MaidBaubleChangeEvent$TakeOff, event => {
    let maid = event.maid
    MaidUpdateEnderBonusEvent(maid)
})