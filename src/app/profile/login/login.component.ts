import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router) {}


  navigateMenu() {
    this.router.navigate(['/menu']); // Cambia '/login' al path de tu componente de inicio de sesión
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

  //movile  ---> CSS
  preloadkjh() {
    this.load.spritesheet('character', 'assets/images/vick250ad.png', {
      frameWidth: 20,
      frameHeight: 20
    });
  }

  create() {
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('character', {start: 0, end: 3}),
      frameRate: 8,
      repeat: -1
    });

    this.sprite = this.add.sprite(250, 180, 'character').setScale(1);
    this.sprite.play('walk');
  }

  update() {
    // Lógica de actualización
  }


}
