import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from './services/services.component';
import { AboutSeccionComponent } from './about-seccion/about-seccion.component';
import { ToolsComponent } from './tools/tools.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ProfileComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ServicesComponent,
    AboutSeccionComponent,
    ToolsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mi-portafolio';
}
