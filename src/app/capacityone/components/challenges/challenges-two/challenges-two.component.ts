import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-challenges-two',
  standalone: true,
    imports: [
        MatButtonModule,
        MatCardModule,
        RouterLink
    ],
  templateUrl: './challenges-two.component.html',
  styleUrl: './challenges-two.component.css'
})
export class ChallengesTwoComponent {

}
