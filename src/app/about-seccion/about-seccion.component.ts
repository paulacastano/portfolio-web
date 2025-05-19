import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-seccion',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about-seccion.component.html',
  styleUrl: './about-seccion.component.css',
})
export class AboutSeccionComponent {}
