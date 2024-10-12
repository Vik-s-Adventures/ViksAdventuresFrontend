import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-three-instruction',
  templateUrl: './three-instruction.component.html',
  styleUrl: './three-instruction.component.css'
})
export class ThreeInstructionComponent  implements OnInit {

  phaserGame!: Phaser.Game;
  config!: Phaser.Types.Core.GameConfig;

  currentCard = 0; // Inicialmente, el sprite presenta el tema

  sprite!: Phaser.GameObjects.Sprite;
  private load: any;
  private anims: any;
  private add: any;

  constructor(private router: Router) {
  }

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
    this.load.spritesheet('character', 'assets/images/spritederecha.png', {
      frameWidth: 500,
      frameHeight: 500
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

  nextCard() {
    if (this.currentCard < 10) {
      this.currentCard += 1;
    }
  }

  previousCard() {
    if (this.currentCard > 0) {
      this.currentCard -= 1;
    }
  }

  goToRemember() {
    this.router.navigate(['/challengeTwo']);
  }

  navigateToComponent1() {
    this.router.navigate(['/menu']);
  }

  navigateToComponent2() {
    this.router.navigate(['/result']);
  }
}
