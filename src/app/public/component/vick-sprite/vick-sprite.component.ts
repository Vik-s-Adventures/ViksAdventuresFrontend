import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Phaser from 'phaser';


@Component({
  selector: 'app-vick-sprite',
  templateUrl: './vick-sprite.component.html',
  styleUrls: ['./vick-sprite.component.css']
})
export class VickSpriteComponent implements OnInit{
  @ViewChild('gameContainer', { static: true }) gameContainer!: ElementRef;

  private game!:Phaser.Game;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private keyW!: Phaser.Input.Keyboard.Key;
  private keyA!: Phaser.Input.Keyboard.Key;
  private keyS!: Phaser.Input.Keyboard.Key;
  private keyD!: Phaser.Input.Keyboard.Key;
  private player!: Phaser.Physics.Arcade.Sprite;

  constructor() {}

  ngOnInit(): void {
    this.initializePhaser();
  }

  private initializePhaser(): void {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: this.gameContainer.nativeElement,
      width: window.innerWidth, // Ajusta el tamaño según sea necesario
      height: window.innerHeight, // Ajusta el tamaño según sea necesario
      transparent: true,  // Hacer que el canvas sea transparente
      physics: {
        default: 'arcade',
        arcade: {// Sin gravedad para que el personaje se mueva libremente
          debug: false
        }
      },
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    };

    this.game = new Phaser.Game(config);  // Crea una nueva instancia de Phaser con la configuración dada
  }

  private preload(this: Phaser.Scene): void {
    // Cargar el spritesheet, asumiendo que cada frame tiene 32x32 píxeles
    this.load.spritesheet('player', '/assets/images/4x4.jpg', { frameWidth: 64, frameHeight: 64 });

    // Cargar la imagen de fondo (ajusta la ruta según la ubicación de tu imagen de fondo)
    // this.load.image('background', '/assets/images/fondo1.png');  // Cambia la ruta a tu imagen de fondo
  }

  private create(this: Phaser.Scene): void {
    // Añadir la imagen de fondo (ajusta el tamaño si es necesario)
    // this.add.image(400, 300, 'background').setOrigin(0.5, 0.5);

    // Crear las animaciones para caminar
    this.anims.create({
      key: 'walk-down',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }), // Animación caminando hacia abajo
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'walk-left',
      frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }), // Animación caminando hacia la izquierda
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'walk-right',
      frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }), // Animación caminando hacia la derecha
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'walk-up',
      frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }), // Animación caminando hacia arriba
      frameRate: 10,
      repeat: -1
    });

    // Crear el sprite del jugador
    this.player = this.physics.add.sprite(600, 300, 'player');

    // Configurar el sprite para que no salga de los límites del mundo
    this.player.setCollideWorldBounds(true);

    // Habilitar las teclas WASD
    // @ts-ignore
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    // @ts-ignore
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    // @ts-ignore
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    // @ts-ignore
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    // Configurar el mundo para que coincida con el tamaño del fondo
    this.physics.world.setBounds(0, 0, 1520, 680);  // Ajusta según el tamaño de tu imagen de fondo
  }

  private update(this: Phaser.Scene): void {
    // Restablecer la velocidad antes de procesar la entrada del teclado
    this.player.setVelocity(0);

    // Detectar teclas WASD y mover al jugador
    if (this.keyA.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('walk-left', true);
    } else if (this.keyD.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('walk-right', true);
    } else if (this.keyW.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play('walk-up', true);
    } else if (this.keyS.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play('walk-down', true);
    } else {
      // Si no hay teclas presionadas, detener la animación
      this.player.anims.stop();
      this.player.setFrame(0);  // Restablecer al frame inicial estático
    }
  }

}
