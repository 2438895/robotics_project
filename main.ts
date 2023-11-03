namespace SpriteKind {
    export const Health = SpriteKind.create()
    export const myenemyu = SpriteKind.create()
    export const en = SpriteKind.create()
    export const yo = SpriteKind.create()
    export const enya = SpriteKind.create()
    export const on = SpriteKind.create()
    export const erk = SpriteKind.create()
    export const ab = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enya, function (sprite22, otherSprite22) {
    sprites.destroy(MyEnemy4)
    info.changeScoreBy(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.en, function (sprite, otherSprite) {
    sprites.destroy(myenemy2)
    if (true) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.on, function (sprite3, otherSprite3) {
    sprites.destroy(myenemy5)
    if (true) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite22, otherSprite22) {
    sprites.destroy(myEnemy)
    info.changeScoreBy(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . . . 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . 2 2 2 2 . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.erk, function (sprite, otherSprite) {
    sprites.destroy(myebnemy)
    info.changeScoreBy(5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ab, function (sprite, otherSprite) {
    sprites.destroy(abc)
    if (true) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enya, function (sprite3, otherSprite3) {
    sprites.destroy(MyEnemy4)
    if (true) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite3, otherSprite3) {
    sprites.destroy(myEnemy)
    if (true) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health, function (sprite, otherSprite) {
    sprites.destroy(heaalth)
    if (true) {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.yo, function (sprite, otherSprite) {
    sprites.destroy(myenemy3)
    if (true) {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ab, function (sprite22, otherSprite22) {
    sprites.destroy(abc)
    info.changeScoreBy(1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.en, function (sprite22, otherSprite22) {
    sprites.destroy(myenemy2)
    info.changeScoreBy(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.erk, function (sprite, otherSprite) {
    sprites.destroy(myebnemy)
    if (true) {
        info.changeLifeBy(-3)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.on, function (sprite22, otherSprite22) {
    sprites.destroy(myenemy5)
    info.changeScoreBy(1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.yo, function (sprite22, otherSprite22) {
    sprites.destroy(myenemy3)
    info.changeScoreBy(1000)
})
let myenemy3: Sprite = null
let heaalth: Sprite = null
let abc: Sprite = null
let myebnemy: Sprite = null
let projectile: Sprite = null
let myEnemy: Sprite = null
let myenemy5: Sprite = null
let myenemy2: Sprite = null
let MyEnemy4: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Ship`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 85)
mySprite.setStayInScreen(true)
info.setLife(2)
game.onUpdateInterval(2600, function () {
    MyEnemy4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        7 7 5 5 5 7 5 5 5 . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.enya)
    MyEnemy4.setPosition(0, 0)
    MyEnemy4.setVelocity(-100, 0)
    MyEnemy4.setPosition(160, randint(5, 115))
    MyEnemy4.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2200, function () {
    myenemy5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        7 7 5 5 5 7 5 5 5 5 . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.on)
    myenemy5.setPosition(0, 0)
    myenemy5.setVelocity(-100, 0)
    myenemy5.setPosition(160, randint(5, 115))
    myenemy5.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(150000, function () {
    heaalth = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 9 9 1 9 . . . . . . 
        . . . . . 9 9 9 9 1 9 . . . . . 
        . . . . 9 9 9 9 9 9 1 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Health)
    heaalth.setVelocity(-100, 0)
    heaalth.setPosition(160, randint(5, 115))
    heaalth.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(700, function () {
    info.changeScoreBy(10)
})
game.onUpdateInterval(2000, function () {
    myenemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        7 7 5 5 5 7 5 5 5 . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.en)
    myenemy2.setPosition(0, 0)
    myenemy2.setVelocity(-100, 0)
    myenemy2.setPosition(160, randint(5, 115))
    myenemy2.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1800, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        7 7 5 5 5 7 5 5 5 . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(0, 0)
    myEnemy.setVelocity(-100, 0)
    myEnemy.setPosition(160, randint(5, 115))
    myEnemy.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(500, function () {
    if (info.life() < 0) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(2800, function () {
    myenemy3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        7 7 5 5 5 7 5 5 5 . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yo)
    myenemy3.setPosition(0, 0)
    myenemy3.setVelocity(randint(5, 115), 0)
    myenemy3.setPosition(160, 0)
    myenemy3.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2800, function () {
    abc = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        7 7 5 5 5 7 5 5 5 . . . . . . . 
        . 7 7 5 7 7 . . . . . . . . . . 
        . . 7 5 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.ab)
    abc.setVelocity(-100, 0)
    abc.setPosition(0, 0)
    abc.setPosition(160, randint(5, 115))
    abc.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(8000, function () {
    myebnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 2 5 5 . . . . . . . . . . . 
        . 2 2 5 2 2 . . . . . . . . . . 
        2 2 5 5 5 2 5 5 5 . . . . . . . 
        . 2 2 5 2 2 . . . . . . . . . . 
        . . 2 5 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.erk)
    myebnemy.setVelocity(-100, 0)
    myebnemy.setPosition(0, 0)
    myebnemy.setPosition(160, randint(5, 115))
    myebnemy.setFlag(SpriteFlag.AutoDestroy, true)
})
