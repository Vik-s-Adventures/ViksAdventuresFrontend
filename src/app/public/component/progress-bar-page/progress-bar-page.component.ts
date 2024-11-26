import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar-page',
  templateUrl: './progress-bar-page.component.html',
  styleUrl: './progress-bar-page.component.css'
})
export class ProgressBarPageComponent {
  levels: number[] = Array(10).fill(0); // 10 niveles, inicializados en 0
  maxPointsPerLevel: number = 100; // Puntos necesarios para completar un nivel

  increaseProgress() {
    // Encuentra el primer nivel incompleto
    const currentLevelIndex = this.levels.findIndex(
      (points) => points < this.maxPointsPerLevel
    );

    // Si hay un nivel incompleto, incrementa sus puntos
    if (currentLevelIndex !== -1) {
      this.levels[currentLevelIndex] += 10; // Incrementa 10 puntos
      if (this.levels[currentLevelIndex] > this.maxPointsPerLevel) {
        this.levels[currentLevelIndex] = this.maxPointsPerLevel; // No excede el máximo
      }
    }
  }

  resetProgress() {
    this.levels = Array(10).fill(0); // Reinicia todos los niveles
  }

  getLevelProgress(levelIndex: number): number {
    // Retorna el porcentaje de progreso del nivel (0-100%)
    return (this.levels[levelIndex - 1] / this.maxPointsPerLevel) * 100;
  }

  isLevelUnlocked(levelIndex: number): boolean {
    // Verifica si el nivel está desbloqueado
    if (levelIndex === 1) return true; // El primer nivel siempre está desbloqueado
    return this.levels[levelIndex - 2] >= this.maxPointsPerLevel; // El anterior debe estar completo
  }

  canUnlockReward(levelIndex: number): boolean {
    // La recompensa solo se desbloquea si el nivel está completo
    return this.levels[levelIndex - 1] >= this.maxPointsPerLevel;
  }
}
