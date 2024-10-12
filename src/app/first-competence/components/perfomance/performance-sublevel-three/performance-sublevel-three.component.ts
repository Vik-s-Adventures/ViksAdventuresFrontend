import {Component, OnInit} from '@angular/core';
import * as Phaser from 'phaser';


@Component({
  selector: 'app-performance-sublevel-three',
  templateUrl: './performance-sublevel-three.component.html',
  styleUrl: './performance-sublevel-three.component.css'
})
export class PerformanceSublevelThreeComponent implements  OnInit{
  lives: number = 3;
  score: number = 0;
  level: number = 1;  // Nivel inicial
  game: Phaser.Game | undefined;

  constructor() {}

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame() {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: window.innerWidth,  // Ocupa todo el ancho de la pantalla
      height: window.innerHeight - 50, // Ocupa la altura ajustada, dejando espacio para el header
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 300 },  // Gravedad en el eje Y
          debug: false
        }
      },
      scene: new GameScene(this),
    };

    this.game = new Phaser.Game(config);

    // Ajustar el tamaño del juego cuando la ventana cambia de tamaño
    window.addEventListener('resize', () => {
      // @ts-ignore
      this.game.scale.resize(window.innerWidth, window.innerHeight - 50); // Restar el header
    });
  }

  navigateToMenu() {
    // Lógica para navegar al menú
  }

  navigateToRoute() {
    // Lógica para navegar a otra ruta
  }

  increaseLevel() {
    this.level += 1;  // Aumentar el nivel cuando el jugador complete uno
  }
}

// @ts-ignore
class GameScene extends Phaser.Scene {
  private component: PerformanceSublevelThreeComponent;
  private override player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private override keyW!: Phaser.Input.Keyboard.Key;  // Tecla W para saltar
  private override keyA!: Phaser.Input.Keyboard.Key;  // Tecla A para moverse a la izquierda
  private override keyD!: Phaser.Input.Keyboard.Key;  // Tecla D para moverse a la derecha
  private keySpace!: Phaser.Input.Keyboard.Key; // Tecla Espaciadora para saltar
  private obstacles!: Phaser.Physics.Arcade.Group;
  private platforms!: Phaser.Physics.Arcade.StaticGroup;  // Grupo para plataformas y obstáculos
  private background!: Phaser.GameObjects.Image;

  constructor(component: PerformanceSublevelThreeComponent) {
    super({ key: 'GameScene' });
    this.component = component;
  }

  preload() {
    // Carga de imágenes y sprites desde rutas
    this.load.image('background', '/assets/images/fb2fondo.png');  // Fondo
    this.load.spritesheet('character', '/assets/images/vick256x256.png', {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.image('obstacle', '/assets/images/b2.png');  // Obstáculo
  }

  create() {
    // Añadir el fondo que se ajusta a toda la pantalla
    this.background = this.add.image(0, 0, 'background');
    this.background.setOrigin(0, 0);  // Posicionar el fondo en (0,0)
    this.background.setDisplaySize(this.scale.width, this.scale.height);  // Ajustar el fondo al tamaño de la pantalla

    // Crear el personaje con físicas
    this.player = this.physics.add.sprite(100, 450, 'character').setScale(1.5) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    this.player.setCollideWorldBounds(true);

    // Definir animación de correr
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    // Configurar teclas personalizadas
    // @ts-ignore
    this.cursors = this.input.keyboard.createCursorKeys();
    // @ts-ignore
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);  // Tecla W
    // @ts-ignore
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);  // Tecla A
    // @ts-ignore
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);  // Tecla D
    // @ts-ignore
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);  // Tecla Espaciadora

    // Crear plataformas y obstáculos que el jugador pueda saltar encima
    this.platforms = this.physics.add.staticGroup();

    // Añadir obstáculos como plataformas para cada nivel
    if (this.component.level === 1) {
      // Nivel 1
      this.platforms.create(300, 600, 'obstacle').setScale(1).refreshBody();
      this.platforms.create(600, 600, 'obstacle').setScale(1).refreshBody();
      this.platforms.create(900, 350, 'obstacle').setScale(1).refreshBody();
    } else if (this.component.level === 2) {
      // Nivel 2 (más obstáculos)
      this.platforms.create(200, 400, 'obstacle').setScale(1).refreshBody();
      this.platforms.create(500, 650, 'obstacle').setScale(1).refreshBody();
      this.platforms.create(800, 300, 'obstacle').setScale(1).refreshBody();
      this.platforms.create(1100, 700, 'obstacle').setScale(1).refreshBody();
      this.platforms.create(1300, 600, 'obstacle').setScale(1).refreshBody();
      this.platforms.create(1600, 600, 'obstacle').setScale(1).refreshBody();
    }

    // Colisión entre el personaje y las plataformas
    this.physics.add.collider(this.player, this.platforms);

    // Crear un grupo para los obstáculos que desaparecerán
    this.obstacles = this.physics.add.group({
      key: 'obstacle',
      repeat: 5,
      setXY: { x: 400, y: 500, stepX: 300 }
    });

    // @ts-ignore
    this.obstacles.children.iterate((obstacle: Phaser.GameObjects.GameObject) => {
      const obs = obstacle as Phaser.Physics.Arcade.Sprite;
      obs.setImmovable(true);
      // @ts-ignore
      obs.body.allowGravity = false;
    });

    // @ts-ignore
    this.physics.add.collider(this.player, this.obstacles, this.handleObstacleCollision, null, this);
  }

  override update() {
    // Movimiento del personaje con las teclas W, A y D
    if (this.keyA.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('run', true);
    } else if (this.keyD.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('run', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.stop();
    }

    // Saltar con la tecla W o la tecla espaciadora
    if ((this.keyW.isDown || this.keySpace.isDown) && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  handleObstacleCollision(player: Phaser.Physics.Arcade.Sprite, obstacle: Phaser.Physics.Arcade.Sprite) {
    obstacle.destroy();  // Destruir obstáculo al colisionar
    this.component.score += 1;

    if (this.component.score % 5 === 0) {
      this.component.increaseLevel();  // Cambiar de nivel cada 5 puntos
      this.scene.restart();  // Reiniciar la escena en el nuevo nivel
    }

    if (this.component.score >= 15) {
      this.endGame('¡Ganaste!');
    }
  }

  endGame(message: string) {
    this.physics.pause();
    alert(message);
    this.scene.stop('GameScene');
  }
}
