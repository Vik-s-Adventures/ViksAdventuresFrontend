import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-performance-sublevel-one',
  templateUrl: './performance-sublevel-one.component.html',
  styleUrl: './performance-sublevel-one.component.css'
})
export class PerformanceSublevelOneComponent implements OnInit {

  // Inicialización de las variables necesarias
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  ballRadius = 15;
  x = 0;
  y = 0;
  dx = 7;
  dy = -7;
  paddleHeight = 20;
  paddleWidth = 155;
  paddleX = 0;
  rightPressed = false;
  leftPressed = false;
  gamePaused = false;

  brickRowCount = 5;
  brickColumnCount = 20;
  brickWidth = 66;  // Tamaño más pequeño para que entren más bloques
  brickHeight = 30;
  brickPadding = 15;
  brickOffsetTop = 10;
  brickOffsetLeft = 10;
  bricks: any[] = [];
  score = 0;
  lives = 7;


  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
    this.initCanvas();
    this.initBricks();
    this.adjustCanvasSize();
    window.addEventListener('resize', this.adjustCanvasSize.bind(this));  // Escuchar cambios de tamaño de la ventan
    this.draw();

    // Ajustar la posición inicial de la paleta
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;

    // Asegurar que la pelota esté justo sobre la paleta al comenzar
    this.x = this.paddleX + this.paddleWidth / 2;  // Centrar la pelota sobre la paleta
    this.y = this.canvas.height - this.paddleHeight - this.ballRadius - 5;  // Colocar la pelota justo encima de la paleta

  }

  initCanvas() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
  }

  initBricks() {
    for (let c = 0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }
// Control del teclado
  @HostListener('window:keydown', ['$event'])
  keyDownHandler(event: KeyboardEvent) {
    // Control con teclas direccionales
    if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
      this.rightPressed = true;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
      this.leftPressed = true;
    }

  }

  @HostListener('window:keyup', ['$event'])
  keyUpHandler(event: KeyboardEvent) {
    // Control con teclas direccionales
    if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
      this.rightPressed = false;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
      this.leftPressed = false;
    }
  }


  adjustCanvasSize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight-50;
      this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
    }
  }

  togglePause() {
    this.gamePaused = !this.gamePaused;
    if (!this.gamePaused) {
      this.draw();
    }
  }

  goToMenu() {
    this.router.navigate(['/menu']);
  }
  goToRuta() {
    this.router.navigate(['/result']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustCanvasSize();  // Ajustar el canvas cada vez que la ventana cambie de tamaño
  }

  drawBall() {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = '#228B22'; // Verde para la bola
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  drawPaddle() {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.rect(this.paddleX, this.canvas!.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
      this.ctx.fillStyle = '#32CD32'; // Verde claro para la paleta
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  drawBricks() {
    if (this.ctx) {
      for (let c = 0; c < this.brickColumnCount; c++) {
        for (let r = 0; r < this.brickRowCount; r++) {
          if (this.bricks[c][r].status === 1) {
            const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
            const brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
            this.bricks[c][r].x = brickX;
            this.bricks[c][r].y = brickY;
            const img = new Image();
            img.src = 'assets/images/manzana.png'; // Ruta a la imagen de fruta
            this.ctx.drawImage(img, brickX, brickY, this.brickWidth, this.brickHeight);
          }
        }
      }
    }
  }

  collisionDetection() {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        const b = this.bricks[c][r];
        if (b.status === 1) {
          if (this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y && this.y < b.y + this.brickHeight) {
            this.dy = -this.dy;
            b.status = 0;
            this.score++;
            if (this.score >= 40) {
              alert('YOU WIN, CONGRATS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  drawScore() {
    if (this.ctx) {
      this.ctx.font = '16px Arial';
    }
  }

  drawLives() {
    if (this.ctx) {
      this.ctx.font = '16px Arial';
    }
  }

  draw() {
    let lifeLost = false;
    if (this.gamePaused) {
      return;
    }

    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
      this.drawBricks();
      this.drawBall();
      this.drawPaddle();
      this.drawScore();
      this.drawLives();
      this.collisionDetection();

      // Verificación de colisiones de la bola con los bordes del canvas
      if (this.x + this.dx > this.canvas!.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
        this.dx = -this.dx;
      }
      if (this.y + this.dy < this.ballRadius) {
        this.dy = -this.dy;
      } else if (this.y + this.dy > this.canvas!.height - this.ballRadius) {
        if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
          this.dy = -this.dy;
          lifeLost = false;  // Resetea el indicador cuando la pelota toca la paleta
        } else {
          this.lives--;
          lifeLost = true;
          if (!this.lives) {
            alert('GAME OVER');
            document.location.reload();
          } else {
            // Ajustar la posición de la pelota sobre la paleta
            this.x = this.paddleX + this.paddleWidth / 2;
            this.y = this.canvas!.height - this.paddleHeight - this.ballRadius - 5;

            // Aumentar la velocidad en +5 cada vez que se pierde una vida
            if (this.dx > 0) {
              this.dx += 1;
            } else {
              this.dx -= 1;
            }

            if (this.dy > 0) {
              this.dy += 1;
            } else {
              this.dy -= 1;
            }

            this.paddleX = (this.canvas!.width - this.paddleWidth) / 2;
          }
        }
      }

      // Movimiento de la paleta según teclas presionadas
      if (this.rightPressed && this.paddleX < this.canvas!.width - this.paddleWidth) {
        this.paddleX += 15;
      } else if (this.leftPressed && this.paddleX > 0) {
        this.paddleX -= 15;
      }

      this.x += this.dx;
      this.y += this.dy;

      requestAnimationFrame(() => this.draw());
    }
  }}
