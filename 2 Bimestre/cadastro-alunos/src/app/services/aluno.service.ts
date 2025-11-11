import { Injectable } from "@angular/core";
import { aluno } from "../models/aluno.model";

@Injectable({
    providedIn: 'root',
})
export class AlunoService{

    private alunos: aluno[] = [];

    adicionarAluno(aluno: aluno) : void {

        this.alunos.push(aluno);
    }

    getAlunos(): aluno[]{

     return this.alunos;
     
    }

}