let channel = 0
channel = 0
radio.setGroup(channel)
basic.showNumber(channel)
basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("Pitch", input.rotation(Rotation.Pitch))
        radio.sendValue("Roll", input.rotation(Rotation.Roll))
    } else {
        radio.sendValue("Pitch", 0)
        radio.sendValue("Roll", 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("cut", 180)
        channel += 1
        if (channel >= 10) {
            channel = 0
        }
        radio.setGroup(channel)
        basic.showNumber(channel)
    } else {
        radio.sendValue("cut", 0)
    }
})
