import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  enviarCorreo() {
    const destinatario = 'paulacastano19@gmail.com';
    const asunto = 'Hola';
    const cuerpo = 'Escribe tu mensaje aquí';
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;
    window.open(url, '_blank');
  }
}
