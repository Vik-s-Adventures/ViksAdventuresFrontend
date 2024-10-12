import {Component, OnInit} from '@angular/core';
import {AppModule} from "../../../../app.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-level-seven-instruction',
  templateUrl: './level-seven-instruction.component.html',
  styleUrl: './level-seven-instruction.component.css'
})
export class LevelSevenInstructionComponent implements OnInit{

  phaserGame!: Phaser.Game;
  config!: Phaser.Types.Core.GameConfig;
  private load: any;
  private anims: any;
  private add: any;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.config = {
      type: Phaser.AUTO,
      width: 500,
      height: 500,
      parent: 'phaser-container', // Div donde se renderiza el canvas
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
    // Cargar el sprite (ajusta la ruta a tu imagen de sprites)
    this.load.spritesheet('character', 'assets/images/adelantesprite.png', {
      frameWidth: 500,
      frameHeight: 500
    });
  }

  create() {
    // Crear la animación del sprite
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1 // Repetir la animación indefinidamente
    });

    // Añadir el sprite al canvas
    const sprite = this.add.sprite(250, 250, 'character').setScale(1);
    sprite.play('walk');
  }

  update() {
    // Actualizaciones de frame si es necesario
  }

  continueAction(): void {
    // Redirige a otro componente usando el Router
    this.router.navigate(['/sevenInstruction']); // Cambia '/another' por la ruta deseada
  }
}
