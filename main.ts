input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() <= 90) {
        basic.showString("EAST")
    }
    if (input.compassHeading() <= 180) {
        if (input.compassHeading() <= 90) {
            basic.showString("EAST")
        } else {
            basic.showString("SOUTH")
        }
    }
})
input.calibrateCompass()
