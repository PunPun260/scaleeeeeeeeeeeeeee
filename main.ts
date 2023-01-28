input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    HX711.power_up()
    basic.pause(1000)
    HX711.tare(10)
    basic.showIcon(IconNames.Yes)
    HX711.power_down()
    basic.showIcon(IconNames.Asleep)
})
function doSomething (v: number, num: number) {
    return Math.round(v * 10) / 10
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        # # # # #
        `)
    HX711.power_up()
    basic.pause(1000)
    v = HX711.get_units(10)
    v = doSomething(v / 1000, 1)
    serial.writeValue("v", v)
    basic.showNumber(v)
    HX711.power_down()
    basic.showIcon(IconNames.Asleep)
})
let v = 0
basic.showIcon(IconNames.Asleep)
serial.redirectToUSB()
HX711.SetPIN_DOUT(DigitalPin.P1)
HX711.SetPIN_SCK(DigitalPin.P2)
HX711.begin()
HX711.set_scale(23.637)
HX711.tare(10)
HX711.power_down()
basic.forever(function () {
	
})
