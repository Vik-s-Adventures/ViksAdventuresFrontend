import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent implements OnInit{
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']); // Cambia '/login' al path de tu componente de inicio de sesión
  }

  navigateToSignUp(): void {
    this.router.navigate(['/signup']); // Cambia '/signup' al path de tu componente de registro
  }

  phaserGame!: Phaser.Game;
  config!: Phaser.Types.Core.GameConfig;


  sprite!: Phaser.GameObjects.Sprite;
  private load: any;
  private anims: any;
  private add: any;


  ngOnInit(): void {
    this.config = {
      type: Phaser.AUTO,
      width: 500,
      height: 500,
      parent: 'phaser-container',
      transparent: true,
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    };

    this.phaserGame = new Phaser.Game(this.config);
  }

  preload() {
    this.load.spritesheet('character', 'assets/images/vick250ad.png', {
      frameWidth: 250,
      frameHeight: 250
    });
  }

  create() {
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('character', {start: 0, end: 3}),
      frameRate: 8,
      repeat: -1
    });

    this.sprite = this.add.sprite(250, 250, 'character').setScale(1);
    this.sprite.play('walk');
  }

  update() {
    // Lógica de actualización
  }
}
