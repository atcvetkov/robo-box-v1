let heading = input.compassHeading()
let X = input.acceleration(Dimension.X)
let Y = input.acceleration(Dimension.Y)
let Z = input.acceleration(Dimension.Z)
basic.forever(function () {
    serial.writeLine("x:" + input.acceleration(Dimension.X) + " " + X)
    serial.writeLine("y:" + input.acceleration(Dimension.Y) + " " + Y)
    serial.writeLine("z:" + input.acceleration(Dimension.Z) + " " + Y)
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
