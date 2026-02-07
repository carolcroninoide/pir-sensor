let reading = 0
basic.forever(function () {
    reading = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(reading)
    if (reading == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
