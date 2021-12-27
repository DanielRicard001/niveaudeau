function Version2 () {
    OLED.writeNumNewLine(Environment.ReadWaterLevel(AnalogPin.P1))
    basic.pause(2000)
    while (!(Environment.ReadWaterLevel(AnalogPin.P1) >= 50)) {
        pins.analogWritePin(AnalogPin.P2, 1023)
        OLED.writeStringNewLine("Ça marche!")
        OLED.newLine()
        basic.pause(1000)
    }
    OLED.clear()
    pins.analogWritePin(AnalogPin.P2, 0)
    OLED.writeStringNewLine("Stop")
    OLED.newLine()
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P2, 1023)
})
function Version1 () {
    OLED.writeNumNewLine(Environment.ReadWaterLevel(AnalogPin.P1))
    basic.pause(2000)
    if (Environment.ReadWaterLevel(AnalogPin.P1) >= 50) {
        pins.analogWritePin(AnalogPin.P2, 1023)
        OLED.writeStringNewLine("Ça marche!")
        OLED.newLine()
        basic.pause(1000)
    }
    if (Environment.ReadWaterLevel(AnalogPin.P1) < 25) {
        pins.analogWritePin(AnalogPin.P2, 0)
        OLED.writeStringNewLine("Stop")
        OLED.newLine()
        basic.pause(1000)
    }
}
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
})
OLED.init(128, 64)
OLED.clear()
let water_level = Environment.ReadWaterLevel(AnalogPin.P1)
basic.forever(function () {
    OLED.clear()
    Version2()
})
