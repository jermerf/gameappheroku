var MainGame = new Phaser.Scene({
  preload() {
    this.load.image("kitten", "/img/kit2.png")
  }
})

var kitten = new Phaser.GameObject.Image(MainGame, 100, 100,)