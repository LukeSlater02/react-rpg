import './App.scss';

window.onload = function () {
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  c.fillRect(0, 0, canvas.width, canvas.height)
  canvas.width = 1024
  canvas.height = 576

  const mapImg = new Image()
  mapImg.src = 'img/testMap.png'

  const playerImage = new Image()
  playerImage.src = 'img/down_walk1.png'

  class Sprite {
    constructor({ position, velocity, image }) {
      this.position = position
      this.image = image
    }

    draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
    }
  }

  const background = new Sprite({
    position: {
      //should match up with the drawImage
      x: 0,
      y: 0
    }, image: mapImg
  })

  //TRACKS MOVEMENT KEY BEING PRESSED / RELEASED
  const keys = {
    w: {
      pressed: false
    },
    a: {
      pressed: false
    },
    s: {
      pressed: false
    },
    d: {
      pressed: false
    }
  }

  let lastKey = ''
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'w':
        keys.w.pressed = true
        lastKey = 'w'
        break;
      case 'a':
        keys.a.pressed = true
        lastKey = 'a'
        break;
      case 's':
        keys.s.pressed = true
        lastKey = 's'
        break;
      case 'd':
        keys.d.pressed = true
        lastKey = 'd'
        break;
    }
  })

  window.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'w':
        keys.w.pressed = false
        break;
      case 'a':
        keys.a.pressed = false
        break;
      case 's':
        keys.s.pressed = false
        break;
      case 'd':
        keys.d.pressed = false
        break;
    }
  })

  const animate = () => {
    window.requestAnimationFrame(animate)
    background.draw()

    c.drawImage(playerImage, canvas.width / 2, canvas.height / 2)

    if (keys.w.pressed && lastKey === 'w') background.position.y += 3
    else if (keys.a.pressed && lastKey === 'a') background.position.x += 3
    else if (keys.s.pressed && lastKey === 's') background.position.y -= 3
    else if (keys.d.pressed && lastKey === 'd') background.position.x -= 3
    
  }

  animate()

}

function App() {
  return (
    <>
      <canvas></canvas>
    </>

  );
}

export default App;
