def on_forever():
    pins.analog_write_pin(AnalogPin.P0, 429)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
basic.forever(on_forever)
