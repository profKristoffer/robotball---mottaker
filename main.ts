radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 60)
    } else if (receivedNumber == 2) {
        bitbot.go(BBDirection.Forward, 0)
    } else if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    } else if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    } else if (receivedNumber == 5) {
    	
    }
})
radio.setGroup(1)
