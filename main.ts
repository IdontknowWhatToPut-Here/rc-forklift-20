input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
function Stop_Timer () {
    elapsed = input.runningTime() - Timer
}
input.onButtonPressed(Button.B, function () {
    if (_ == 1) {
        _ = 0
    } else {
        _ = 1
    }
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        if (RECORD == true) {
            StartTimer()
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        if (RECORD == true) {
            StartTimer()
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, SPEED)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, SPEED)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        if (TURN_MODE == true) {
            if (RECORD == true) {
                StartTimer()
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED / 4)
            } else {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED / 4)
            }
        } else {
            if (RECORD == true) {
                StartTimer()
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, SPEED)
            } else {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, SPEED)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        if (TURN_MODE == true) {
            if (RECORD == true) {
                StartTimer()
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED / 4)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED / 4)
            }
        } else {
            if (RECORD == true) {
                StartTimer()
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, SPEED)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, SPEED)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        if (RECORD == true) {
            if (SERVO == 30) {
                SERVO = 0
            } else {
                SERVO = 30
            }
            maqueen.servoRun(maqueen.Servos.S2, SERVO)
        } else {
            if (SERVO == 30) {
                SERVO = 0
            } else {
                SERVO = 30
            }
            maqueen.servoRun(maqueen.Servos.S2, SERVO)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        if (cycle == 1) {
            cycle = 2
        } else if (cycle == 2) {
            cycle = 3
        } else if (cycle == 3) {
            cycle = 1
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        if (cycle == 1) {
            TURN_MODE = !(TURN_MODE)
        } else if (cycle == 2) {
            if (Change_SFX == 1) {
                Change_SFX = 2
            } else if (Change_SFX == 2) {
                Change_SFX = 1
            }
        } else if (cycle == 3) {
            if (RECORD == false) {
                RECORD = true
                cycle = 1
            } else {
                RECORD = false
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        if (cycle == 1) {
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
        } else if (cycle == 2) {
            if (Change_SFX == 1) {
                music.playMelody("C5 C5 C5 - - C5 C5 C5 ", 1000)
            }
            if (Change_SFX == 2) {
                soundExpression.giggle.playUntilDone()
            }
        } else if (cycle == 3) {
        	
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        if (RECORD == true) {
            Stop_Timer()
            text_list.push("Forwards")
            servos.push("")
            list.push(Timer)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        if (RECORD == true) {
            Stop_Timer()
            text_list.push("Backwards")
            servos.push("")
            list.push(Timer)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        if (RECORD == true) {
            Stop_Timer()
            text_list.push("Left")
            servos.push("")
            list.push(Timer)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        if (RECORD == true) {
            Stop_Timer()
            text_list.push("Right")
            servos.push("")
            list.push(Timer)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        if (RECORD == true) {
            servos.push("Servo")
            text_list.push("")
            list.push(-10)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
function StartTimer () {
    Timer = input.runningTime()
}
let Change_SFX = 0
let _ = 0
let Timer = 0
let elapsed = 0
let SPEED = 0
let TURN_MODE = false
let SERVO = 0
let RECORD = false
let cycle = 0
let list: number[] = []
let servos: string[] = []
let text_list: string[] = []
text_list = []
servos = []
list = []
cycle = 1
RECORD = false
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
