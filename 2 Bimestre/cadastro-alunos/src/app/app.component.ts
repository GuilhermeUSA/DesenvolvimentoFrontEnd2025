import { Component } from '@angular/core';
import {AlunoComponent } from './aluno/aluno.component';

@Component({
  selector: 'app-root',
  imports: [AlunoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro-alunos';
}
