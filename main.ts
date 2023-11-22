/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program make a 28BYJ-48 DC 5V stepper motor move
 * Also, using the new standard of using a while (true) statement
*/

// setup
basic.showIcon(IconNames.Happy)
let distanceToObject: number = 0

// loop forever
while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
  // find distance from sonar
      input.onButtonPressed(Button.A, function () {
          basic.clearScreen()
          distanceToObject = sonar.ping(
              DigitalPin.P1,
              DigitalPin.P2,
              PingUnit.Centimeters
          )
          basic.showNumber(distanceToObject)
          basic.showIcon(IconNames.Happy)
      })

  }
}
