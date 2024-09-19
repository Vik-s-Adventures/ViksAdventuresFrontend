import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-welcome-questionnaire-page',
  templateUrl: './welcome-questionnaire-page.component.html',
  styleUrls: ['./welcome-questionnaire-page.component.css']
})
export class WelcomeQuestionnairePageComponent implements OnInit {
  @ViewChild('spriteContainer', { static: true }) spriteContainer!: ElementRef;

  private game!: Phaser.Game;
  private player!: Phaser.Physics.Arcade.Sprite;

  constructor() {}

  ngOnInit(): void {
    this.initializePhaser();
  }

  private initializePhaser(): void {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'sprite-container',  // Referencia al contenedor del sprite
      width: 500,  // Ajuste al tamaño del contenedor
      height: 500, // Ajuste al tamaño del contenedor
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

    this.game = new Phaser.Game(config);  // Crear la instancia de Phaser
  }

  private preload(this: Phaser.Scene): void {
    // Cargar el nuevo spritesheet que subiste (spritevick.png)
    this.load.spritesheet('player', '/assets/images/spritevick.png', { frameWidth: 500, frameHeight: 500 });
  }

  private create(this: Phaser.Scene): void {
    // Crear las animaciones para caminar
    this.anims.create({
      key: 'walk-right',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }), // Animación caminando en su lugar
      frameRate: 5,
      repeat: -1
    });

    // Crear el sprite del jugador en el centro del contenedor
    this.player = this.physics.add.sprite(160, 160, 'player');

    // Iniciar la animación de caminar en su lugar
    this.player.anims.play('walk-right');
  }

  private update(this: Phaser.Scene): void {
    // No se necesita lógica de movimiento, el sprite solo animará en su lugar
  }
}
