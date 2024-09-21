import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-challenges-one',
  standalone: true,
    imports: [
        MatButtonModule,
        MatCardModule,
        RouterLink
    ],
  templateUrl: './challenges-one.component.html',
  styleUrl: './challenges-one.component.css'
})
export class ChallengesOneComponent {

}
