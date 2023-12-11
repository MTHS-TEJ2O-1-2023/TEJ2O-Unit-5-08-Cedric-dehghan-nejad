/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Nov 2023
 * This program measures the distance between objectss
*/

let distanceToObject: number = 0
let distanceFromObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    // find distance from sonar
    basic.clearScreen()
    while (true) {
      distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
      )

      basic.showNumber(distanceToObject)
      basic.showIcon(IconNames.Happy)

      robotbit.StpCarMove(10, 48)
      
      if (distanceToObject < 10) {
        robotbit.StpCarMove(-10, 48)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
        robotbit.StpCarMove(10, 48)
        basic.pause(500)
      } else {
        robotbit.StpCarMove(10, 48)
      }
      basic.pause(1000)

            // if distanceFromObject is less then or equal to 10 display to close if not dislay ok
            if (distanceFromObject <= 10) {
                basic.showString('To close.')
            } else {
                basic.showString('Good.')
            }
            basic.pause(500)
            basic.showIcon(IconNames.Happy)

            // waiting for string from other microbit
            radio.onReceivedNumber(function (receivedNumber) {
                basic.clearScreen()
                basic.showString(receivedNumber.toString() + ('cm'))
                distanceFromObject = receivedNumber
        })
    }
  }
}
