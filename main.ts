function Set_Arrays (List: number, Text_List: string, Servo: string) {
    servos.push(Servo)
    list.push(List)
    text_list.push(Text_List)
}
function Stop_Timer () {
    elapsed = input.runningTime() - Timer
}
function bob () {
    // Playback loop
    while (Playback == true) {
        for (let index = 0; index <= list.length; index++) {
            if (servos[index] == "Servo") {
                if (SERVO == 30) {
                    SERVO = 0
                } else {
                    SERVO = 30
                }
            }
            if (text_list[index] == "Forwards") {
                Time = list[index]
                while (!(Time == 0 || Time < 0)) {
                    Time = Time - 0.001
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
                    basic.pause(1)
                }
            }
            if (text_list[index] == "Backwards") {
                Time = list[index]
                while (!(Time == 0 || Time < 0)) {
                    Time = Time - 0.001
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
                    basic.pause(1)
                }
            }
            if (text_list[index] == "Left") {
                Time = list[index]
                while (!(Time == 0 || Time < 0)) {
                    Time = Time - 0.001
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                    basic.pause(1)
                }
            }
            if (text_list[index] == "Right") {
                Time = list[index]
                while (!(Time == 0 || Time < 0)) {
                    Time = Time - 0.001
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                    basic.pause(1)
                }
            }
        }
    }
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        // Forwards
        if (!(Playback)) {
            if (RECORD == true) {
                StartTimer()
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
            } else {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        // Backwards
        if (!(Playback)) {
            if (RECORD == true) {
                StartTimer()
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, SPEED)
            } else {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, SPEED)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        // Left
        if (!(Playback)) {
            if (TURN_MODE == true) {
                if (RECORD == true) {
                    StartTimer()
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED)
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                } else {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SPEED)
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
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
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        // Right
        if (!(Playback)) {
            if (TURN_MODE == true) {
                if (RECORD == true) {
                    StartTimer()
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                } else {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SPEED)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
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
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        // Fork Up / Down
        if (!(Playback)) {
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
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        // Change Cycle
        if (cycle == 1) {
            cycle = 2
        } else if (cycle == 2) {
            cycle = 3
        } else if (cycle == 3) {
            cycle = 1
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        // Button 3 Functions
        if (cycle == 1) {
            if (!(Playback)) {
                TURN_MODE = !(TURN_MODE)
            }
        } else if (cycle == 2) {
            if (!(Playback)) {
                if (Change_SFX == 1) {
                    Change_SFX = 2
                } else if (Change_SFX == 2) {
                    Change_SFX = 1
                }
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
        // Change Cycle
        if (cycle == 1) {
            if (!(Playback)) {
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
            }
        } else if (cycle == 2) {
            if (!(Playback)) {
                if (Change_SFX == 1) {
                    music.playMelody("C5 C5 C5 - - C5 C5 C5 ", 1000)
                }
                if (Change_SFX == 2) {
                    soundExpression.giggle.playUntilDone()
                }
            }
        } else if (cycle == 3) {
            Playback = !(Playback)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        if (RECORD == true) {
            Stop_Timer()
            Set_Arrays(elapsed, "Forwards", "")
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        if (RECORD == true) {
            Stop_Timer()
            Set_Arrays(elapsed, "Backwards", "")
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        if (RECORD == true) {
            Stop_Timer()
            Set_Arrays(elapsed, "Left", "")
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        if (RECORD == true) {
            Stop_Timer()
            Set_Arrays(elapsed, "Right", "")
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        if (RECORD == true) {
            Set_Arrays(-10, "Servo", "")
        }
    } else {
        if (!(Playback)) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
function StartTimer () {
    Timer = input.runningTime()
}
let Change_SFX = 0
let Timer = 0
let elapsed = 0
let Playback = false
let SPEED = 0
let TURN_MODE = false
let SERVO = 0
let RECORD = false
let cycle = 0
let list: number[] = []
let servos: string[] = []
let text_list: string[] = []
let Time = 0
Time = 0
text_list = []
servos = []
list = []
cycle = 1
RECORD = false
SERVO = 30
TURN_MODE = true
SPEED = 100
Playback = false
