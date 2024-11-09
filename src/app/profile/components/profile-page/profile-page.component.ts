import { Component } from '@angular/core';
import {Student} from "../../model/Student";
import {StudentService} from "../../services/student.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    birthDate: '',
    sex: '',
    gradeLevel: 0,
    school: '',
    department: '',
    province: '',
    district: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router,
    private snackBar: MatSnackBar // Inyectar MatSnackBar
  ) {}

  onSubmit(): void {
    this.studentService.createStudent(this.student).subscribe({
      next: (response) => {
        console.log('Estudiante guardado exitosamente:', response);

        // Mostrar el snackbar de éxito
        this.snackBar.open('¡El estudiante ha sido registrado correctamente!', 'Cerrar', {
          duration: 8000, // Mostrar durante 3 segundos
          verticalPosition: 'top', // Mostrar en la parte superior
          horizontalPosition: 'center', // Centrar horizontalmente
          panelClass: ['success-snackbar'] // Clase CSS personalizada para el estilo
        });

        // Opcionalmente, redirigir después de guardar
        setTimeout(() => {
          this.router.navigate(['/students']);  // Redirigir a la lista de estudiantes o cualquier otra ruta
        }, 3000);
      },
      error: (error) => {
        console.error('Error al guardar el estudiante:', error);

        // Mostrar el snackbar de error
        this.snackBar.open('Hubo un error al registrar el estudiante. Por favor, inténtalo de nuevo.', 'Cerrar', {
          duration: 3000, // Mostrar durante 3 segundos
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['error-snackbar'] // Clase CSS personalizada para el estilo de error
        });
      }
    });
  }
}
