import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [MatIconModule, NgForOf, MatCardModule, CommonModule],
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent {
  tools = [
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Angular', icon: 'devicon-angularjs-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Figma', icon: 'devicon-figma-plain' },
    { name: 'Visual Studio Code', icon: 'devicon-vscode-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
  ];
}
