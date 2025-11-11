import { Injectable } from "@angular/core";
import { Professor } from "../models/cadastro-disciplina.model";

@Injectable({
    providedIn: 'root',
})
export class ProfessorService{

    private Professores: Professor [] = [];

    adicionardisciplina(Professor: Professor) : void {

        this.Professores.push(Professor);
    }

    getAlunos(): Professor[]{

     return this.Professores;
     
    }

}