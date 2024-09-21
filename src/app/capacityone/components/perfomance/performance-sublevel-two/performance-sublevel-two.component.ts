import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import * as Phaser from 'phaser';

@Component({
  selector: 'app-performance-sublevel-two',
  templateUrl: './performance-sublevel-two.component.html',
  styleUrl: './performance-sublevel-two.component.css'
})
export class PerformanceSublevelTwoComponent implements OnInit {
  @ViewChild('gameContainer', { static: true }) gameContainer!: ElementRef;

  private game!: Phaser.Game;
  public score: number = 0;
  public lives: number = 3;
  public paused: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializePhaser();
  }

  private initializePhaser(): void {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: this.gameContainer.nativeElement,
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,  // Hacer que el canvas sea transparente
      physics: {
        default: 'arcade',
        arcade: { debug: false }
      },
      scene: [new PacmanScene(this)]
    };

    this.game = new Phaser.Game(config);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.game.scale.resize(window.innerWidth, window.innerHeight);
  }

  pauseGame(): void {
    this.paused = !this.paused;
    if (this.paused) {
      this.game.scene.pause('pacmanScene');
    } else {
      this.game.scene.resume('pacmanScene');
    }
  }

  goToMenu(): void {
    this.router.navigate(['/menu']);
  }
  goToRuta(): void {
    this.router.navigate(['/result']);
  }

  updateScore(amount: number): void {
    this.score += amount;
    if (this.score >= 40) {
      alert('¡Has ganado!');
      this.game.scene.stop('pacmanScene');
    }
  }

  updateLives(amount: number): void {
    this.lives += amount;
    if (this.lives <= 0) {
      alert('Game Over');
      this.game.scene.stop('pacmanScene');
    }
  }

}

// Clase personalizada para la escena de Pacman
// @ts-ignore
class PacmanScene extends Phaser.Scene {
  private pacman!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private override keyW!: Phaser.Input.Keyboard.Key;
  private override keyA!: Phaser.Input.Keyboard.Key;
  private override keyS!: Phaser.Input.Keyboard.Key;
  private override keyD!: Phaser.Input.Keyboard.Key;
  private enemies!: Phaser.Physics.Arcade.Group;
  private walls!: Phaser.Physics.Arcade.StaticGroup;
  private dots!: Phaser.Physics.Arcade.Group; // Círculos para acumular puntos
  private gameComponent: PerformanceSublevelTwoComponent;  // Guardar la referencia al componente Angular

  constructor(gameComponent: PerformanceSublevelTwoComponent) {
    super({ key: 'pacmanScene' });
    this.gameComponent = gameComponent;
  }

  preload(): void {
    // Cargar sprites personalizados
    this.load.spritesheet('pacman', '/assets/images/vick256x256.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('ghost', '/assets/images/fantasmab2.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('wall', '/assets/images/b2.png'); // Sprite para los obstáculos
    this.load.image('dot', '/assets/images/perab2.png');   // Sprite para los círculos
  }

  create(): void {

    // Crear Pacman
    this.pacman = this.physics.add.sprite(800, 300, 'pacman');
    this.pacman.setCollideWorldBounds(true);

    // Crear enemigos (fantasmas)
    this.enemies = this.physics.add.group({
      key: 'ghost',
      repeat: 10,
      setXY: { x: 100, y: 100, stepX: 100 }
    });

    // @ts-ignore
    this.enemies.children.iterate((enemy: Phaser.Physics.Arcade.Sprite) => {
      enemy.setCollideWorldBounds(true);
      enemy.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(-100, 100));
      enemy.setBounce(1);
    });

    // Crear el laberinto con los obstáculos (paredes)
    this.walls = this.physics.add.staticGroup();
    this.createMaze();

    // Crear círculos (dots) de color naranja
    this.dots = this.physics.add.group();
    this.createDots();

    // Colisiones entre Pacman y las paredes
    this.physics.add.collider(this.pacman, this.walls);

    // Colisiones entre enemigos y las paredes
    this.physics.add.collider(this.enemies, this.walls);

    // Colisiones entre Pacman y los enemigos
    // @ts-ignore
    this.physics.add.overlap(this.pacman, this.enemies, this.hitEnemy, undefined, this);

    // Colisiones entre Pacman y los círculos (dots)
    // @ts-ignore
    this.physics.add.overlap(this.pacman, this.dots, this.collectDot, undefined, this);

    // Control de teclas WASD y flechas direccionales
    // @ts-ignore
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    // @ts-ignore
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    // @ts-ignore
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    // @ts-ignore
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    // @ts-ignore
    this.cursors = this.input.keyboard.createCursorKeys(); // Flechas direccionales
  }

  override update(): void {
    this.pacman.setVelocity(0);

    // Movimiento con teclas WASD
    if (this.keyA.isDown) {
      this.pacman.setVelocityX(-160);
    } else if (this.keyD.isDown) {
      this.pacman.setVelocityX(160);
    }

    if (this.keyW.isDown) {
      this.pacman.setVelocityY(-160);
    } else if (this.keyS.isDown) {
      this.pacman.setVelocityY(160);
    }

    // Movimiento con flechas direccionales
    if (this.cursors.left.isDown) {
      this.pacman.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.pacman.setVelocityX(160);
    }

    if (this.cursors.up.isDown) {
      this.pacman.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
      this.pacman.setVelocityY(160);
    }
  }

  // Función para crear el laberinto
  private createMaze(): void {
    const wallPositions = [
      // Coordenadas X, Y para formar un laberinto
      { x: 150, y: 130 },{ x: 200, y: 130 },{ x: 450, y: 130 },{ x: 600, y: 130 },{ x: 650, y: 130 },{ x: 700, y: 130 },{ x: 850, y: 130 },{ x: 900, y: 130 },{ x: 1050, y: 130 },{ x: 1100, y: 130 },{ x: 1150, y: 130 },{ x: 1200, y: 130 },{ x: 1250, y: 130 },{ x: 1300, y: 130 },{ x: 1350, y: 130 },
      { x: 150, y: 310 },{ x: 200, y: 310 },{ x: 450, y: 310 },{ x: 600, y: 310 },{ x: 650, y: 310 },{ x: 700, y: 310 },{ x: 850, y: 310 },{ x: 900, y: 310 },{ x: 1050, y: 310 },{ x: 1100, y: 310 },{ x: 1150, y: 310 },{ x: 1200, y: 310 },{ x: 1250, y: 310 },{ x: 1300, y: 310 },{ x: 1350, y: 310 },
      { x: 150, y: 490 },{ x: 200, y: 490 },{ x: 450, y: 490 },{ x: 600, y: 490 },{ x: 650, y: 490 },{ x: 700, y: 490 },{ x: 850, y: 490 },{ x: 900, y: 490 },{ x: 1050, y: 490 },{ x: 1100, y: 490 },{ x: 1150, y: 490 },{ x: 1200, y: 490 },{ x: 1250, y: 490 },{ x: 1300, y: 490 },{ x: 1350, y: 490 },
      // Añade más posiciones para completar el laberinto
    ];

    wallPositions.forEach(pos => {
      const wall = this.walls.create(pos.x, pos.y, 'wall');
      //wall.setTint(0x8B4513); // Asignar color café a los obstáculos
    });
  }

  // Función para crear los puntos (círculos)
  private createDots(): void {
    const dotPositions = [
      { x: 150, y: 80 },{ x: 200, y: 80 },{ x: 450, y: 80 },{ x: 600, y: 80 },{ x: 650, y: 80 },{ x: 700, y: 80 },{ x: 850, y: 80 },{ x: 900, y: 80 },{ x: 1050, y: 80 },{ x: 1100, y: 80 },{ x: 1150, y: 80 },{ x: 1200, y: 80 },{ x: 1250, y: 80 },{ x: 1300, y: 80 },{ x: 1350, y: 80 },
      { x: 150, y: 260 },{ x: 200, y: 260 },{ x: 450, y: 260 },{ x: 600, y: 260 },{ x: 650, y: 260 },{ x: 700, y: 260 },{ x: 850, y: 260 },{ x: 900, y: 260 },{ x: 1050, y: 260 },{ x: 1100, y: 260 },{ x: 1150, y: 260 },{ x: 1200, y: 260 },{ x: 1250, y: 260 },{ x: 1300, y: 260 },{ x: 1350, y: 260 },
      { x: 150, y: 440 },{ x: 200, y: 440 },{ x: 450, y: 440 },{ x: 600, y: 440 },{ x: 650, y: 440 },{ x: 700, y: 440 },{ x: 850, y: 440 },{ x: 900, y: 440 },{ x: 1050, y: 440 },{ x: 1100, y: 440 },{ x: 1150, y: 440 },{ x: 1200, y: 440 },{ x: 1250, y: 440 },{ x: 1300, y: 440 },{ x: 1350, y: 440 },
    ];

    dotPositions.forEach(pos => {
      const dot = this.dots.create(pos.x, pos.y, 'dot');
      dot.setTint(0xFFA500); // Asignar color naranja a los círculos
    });
  }

  private hitEnemy(pacman: Phaser.Physics.Arcade.Sprite, enemy: Phaser.Physics.Arcade.Sprite): void {
    this.gameComponent.updateLives(-1); // Acceder al componente Angular para restar vidas
    enemy.disableBody(true, true); // Desaparecer el enemigo tras la colisión
  }

  private collectDot(pacman: Phaser.Physics.Arcade.Sprite, dot: Phaser.Physics.Arcade.Sprite): void {
    dot.disableBody(true, true); // Desaparecer el círculo tras la colisión
    this.gameComponent.updateScore(1); // Sumar 10 puntos
  }
}


