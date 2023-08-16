basic.forever(function () {
    if (input.temperature() > 15) {
        basic.showString("its hot hot hot")
    } else {
        basic.showString("its chili today")
    }
})
