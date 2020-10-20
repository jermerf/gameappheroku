var appDiv = document.getElementById('app')

var game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 500,
  height: 500,
  scene: [],
  render: { pixelArt: true, antialias: false },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: -9.81
      }
    }
  }
})