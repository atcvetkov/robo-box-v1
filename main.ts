let heading = input.compassHeading()
basic.forever(function () {
    serial.writeLine("x:" + input.acceleration(Dimension.X))
    serial.writeLine("y:" + input.acceleration(Dimension.Y))
    serial.writeLine("z:" + input.acceleration(Dimension.Z))
    serial.writeLine("")
    basic.pause(2000)
})
basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.Z)) > 60) {
        pins.analogWritePin(AnalogPin.P0, 429)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
