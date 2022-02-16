input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    if (_ == 1) {
        _ = 0
    } else {
        _ = 1
    }
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, SPEED)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        if (TURN_MODE == true) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED / 4)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, SPEED)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        if (TURN_MODE == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED / 4)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, SPEED)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        if (SERVO == 30) {
            SERVO = 0
        } else {
            SERVO = 30
        }
        maqueen.servoRun(maqueen.Servos.S2, SERVO)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        Change_SFX += 1
        if (_ == 0) {
            music.playMelody("C5 C5 C5 - - C5 C5 C5 ", 1000)
        }
        if (_ == 1) {
            soundExpression.giggle.playUntilDone()
        }
        Change_SFX = 0
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        if (SPEED == 100) {
            SPEED = 200
            basic.showLeds(`
                . # # . .
                . . . # .
                . . # . .
                . # . . .
                . # # # .
                `)
        } else {
            SPEED = 100
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        TURN_MODE = !(TURN_MODE)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let Change_SFX = 0
let SPEED = 0
let TURN_MODE = false
let SERVO = 0
let _ = 0
_ = 0
SERVO = 30
TURN_MODE = true
SPEED = 100
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
