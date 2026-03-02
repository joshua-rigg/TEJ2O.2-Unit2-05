/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joshua
 * Created on: feb 2026
 * This program will change the temperature to Kelvin
*/

let temperatureCelsius: number
let temperatureKelvin: number

// clear screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// coverts the temperature into kelvin
input.onButtonPressed(Button.A, function () {
    temperatureCelsius = input.temperature()
    temperatureKelvin = Math.round(temperatureCelsius + 273.15)
    basic.showString("temperature is: " + temperatureKelvin + " K")
    pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
}) 
