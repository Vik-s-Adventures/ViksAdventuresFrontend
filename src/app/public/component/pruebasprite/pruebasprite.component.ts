import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-pruebasprite',
  templateUrl: './pruebasprite.component.html',
  styleUrl: './pruebasprite.component.css'
})
export class PruebaspriteComponent implements OnInit {
  @ViewChild('gameContainer', { static: true }) gameContainer!: ElementRef;

  private game!: Phaser.Game;
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
        arcade: { // Sin gravedad para que el personaje se mueva libremente
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
    // Cargar el nuevo spritesheet que subiste (spritevick.png)
    this.load.spritesheet('player', '/assets/images/spritevick.png', { frameWidth: 500, frameHeight: 500 });
  }

  private create(this: Phaser.Scene): void {
    // Crear las animaciones para caminar
    this.anims.create({
      key: 'walk-right',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }), // Animación caminando hacia la derecha
      frameRate: 5,
      repeat: -1
    });


    // Crear el sprite del jugador
    this.player = this.physics.add.sprite(0, window.innerHeight / 2, 'player'); // Posición inicial en el lado izquierdo

    // Configurar el sprite para que no salga de los límites del mundo
    this.player.setCollideWorldBounds(true);

    // Iniciar la animación de caminar y el movimiento hacia la derecha
    this.player.anims.play('walk-right');
    this.player.setVelocityX(100); // Mover el sprite a la derecha a velocidad constante
  }

  private update(this: Phaser.Scene): void {
    // Detectar cuando el sprite llega al borde derecho del mundo
    if (this.player.x >= window.innerWidth) {
      // Reiniciar la posición del sprite al borde izquierdo
      this.player.setPosition(0, this.player.y);  // Resetear la posición del sprite al lado izquierdo
      this.player.setVelocityX(100); // Restablecer la velocidad hacia la derecha
    }
  }
}
