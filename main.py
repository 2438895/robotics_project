@namespace
class SpriteKind:
    Health = SpriteKind.create()
    myenemyu = SpriteKind.create()
    en = SpriteKind.create()
    yo = SpriteKind.create()
    enya = SpriteKind.create()
    on = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    if True:
        info.change_life_by(1)
        sprites.destroy(myenemy3)
sprites.on_overlap(SpriteKind.player, SpriteKind.en, on_on_overlap)

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        mySprite,
        200,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    mySprite.x += 0
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap2(sprite3, otherSprite3):
    sprites.destroy(myEnemy)
    if True:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

def on_right_pressed():
    mySprite.x += 0
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap3(sprite2, otherSprite2):
    if True:
        info.change_life_by(1)
        sprites.destroy(mySprite3)
sprites.on_overlap(SpriteKind.player, SpriteKind.Health, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    if True:
        info.change_life_by(-1)
        sprites.destroy(mySprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.yo, on_on_overlap4)

def on_on_overlap5(sprite22, otherSprite22):
    sprites.destroy(myEnemy)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap5)

def on_on_overlap6(sprite5, otherSprite5):
    if True:
        info.change_life_by(-1)
        sprites.destroy(myenemy2)
sprites.on_overlap(SpriteKind.player, SpriteKind.myenemyu, on_on_overlap6)

myenemy5: Sprite = None
MyEnemy4: Sprite = None
myenemy2: Sprite = None
mySprite3: Sprite = None
myEnemy: Sprite = None
projectile: Sprite = None
myenemy3: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    Ship
"""), SpriteKind.player)
controller.move_sprite(mySprite, 200, 200)
mySprite.set_stay_in_screen(True)
info.set_life(2)
tiles.set_current_tilemap(tilemap("""
    level3
"""))

def on_update_interval():
    global MyEnemy4
    MyEnemy4 = sprites.create(img("""
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
        """),
        SpriteKind.on)
    MyEnemy4.set_velocity(-100, 0)
    MyEnemy4.set_position(160, randint(5, 115))
    MyEnemy4.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(2600, on_update_interval)

def on_update_interval2():
    global myenemy3
    myenemy3 = sprites.create(img("""
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
        """),
        SpriteKind.en)
    myenemy3.set_velocity(-100, 0)
    myenemy3.set_position(160, randint(5, 115))
    myenemy3.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(2200, on_update_interval2)

def on_update_interval3():
    global mySprite3
    mySprite3 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 9 . . . . . . . . 
                    . . . . . . 9 1 9 . . . . . . . 
                    . . . . . 9 9 9 1 9 . . . . . . 
                    . . . . 9 9 9 9 9 9 9 . . . . . 
                    . . . . . 9 9 9 9 9 . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . . 9 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.Health)
    mySprite3.set_velocity(-75, 0)
    mySprite3.set_position(160, randint(5, 115))
game.on_update_interval(150000, on_update_interval3)

def on_update_interval4():
    global myenemy2
    myenemy2 = sprites.create(img("""
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
        """),
        SpriteKind.yo)
    myenemy2.set_velocity(-100, 0)
    myenemy2.set_position(160, randint(5, 115))
    myenemy2.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(2000, on_update_interval4)

def on_forever():
    info.change_score_by(5)
forever(on_forever)

def on_update_interval5():
    global myEnemy
    myEnemy = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    myEnemy.set_velocity(-100, 0)
    myEnemy.set_position(160, randint(5, 115))
    myEnemy.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(1800, on_update_interval5)

def on_update_interval6():
    if info.life() < 0:
        game.game_over(False)
game.on_update_interval(500, on_update_interval6)

def on_update_interval7():
    global myenemy5
    myenemy5 = sprites.create(img("""
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
        """),
        SpriteKind.myenemyu)
    myenemy5.set_velocity(-100, 0)
    myenemy5.set_position(160, randint(5, 115))
    myenemy5.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(3000, on_update_interval7)
