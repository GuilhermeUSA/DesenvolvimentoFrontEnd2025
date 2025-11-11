import { Routes } from '@angular/router';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroDisciplinaComponent } from './cadastro-disciplina/cadastro-disciplina.component';
import { AlunoComponent } from './aluno/aluno.component';


export const routes: Routes = [

{path:'professor', component: CadastroProfessorComponent},
{path:'disciplina', component: CadastroDisciplinaComponent},
{path:'aluno', component: AlunoComponent},

    
];
