radio.setGroup(1)
basic.forever(function () {
    // 8上升
    // 2下降
    // 4向左轉
    // 6向右轉
    // 1上升C
    // 3下降E
    // 7向左轉F
    // 9向右轉D
    // 
    if (KSB045.getJoystickValue(KSB045.valueType.X) < 500 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) < 500 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(8)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.X) > 540 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(6)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) > 520 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.X) < 600) {
        radio.sendNumber(2)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.F)) {
        radio.sendNumber(7)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . #
            . # . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.D)) {
        radio.sendNumber(9)
        basic.showLeds(`
            . . # . .
            . . . # .
            # . . . #
            . . . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.E)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.C)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else {
        radio.sendNumber(0)
    }
})
