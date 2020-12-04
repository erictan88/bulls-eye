input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
let Target = game.createSprite(0, 0)
basic.forever(function () {
    Target.set(LedSpriteProperty.Y, 0)
    for (let index = 0; index < 5; index++) {
        Target.set(LedSpriteProperty.X, 0)
        for (let index = 0; index < 5; index++) {
            basic.pause(100)
            if (input.buttonIsPressed(Button.A)) {
                if (Target.get(LedSpriteProperty.X) == 2 && Target.get(LedSpriteProperty.Y) == 2) {
                    basic.pause(2000)
                    game.addScore(1)
                } else {
                    basic.pause(1000)
                }
            }
            Target.change(LedSpriteProperty.X, 1)
        }
        Target.change(LedSpriteProperty.Y, 1)
    }
})
