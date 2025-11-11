import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { aluno } from '../models/aluno.model';
import { Viacep } from '../models/viacep.model';
import { ViacepService } from '../services/viacep.service';

@Component({
  selector: 'app-aluno',
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  novoAluno: aluno = {ra: ' ', nome: ' ', dtNascimento: ' ', curso: ' ',cep:' ',logradouro:' ',bairro:' ',municipio:' ',uf:' '};
  listaAlunos: aluno [] = [];

  constructor(private alunoservice: AlunoService, private ViacepService: ViacepService){
    this.listaAlunos = this.alunoservice.getAlunos();
  }
  adicionarAluno(){
    this.alunoservice.adicionarAluno({...this.novoAluno});
    this.novoAluno = {ra: ' ', nome: ' ', dtNascimento: ' ', curso: ' ',cep:' ',logradouro:' ',bairro:' ',municipio:' ',uf:' '};


  }
  buscarcep():void{
    if(this.novoAluno.cep){
      this.ViacepService.getEndereco(this.novoAluno.cep).subscribe((endereco:Viacep)=>{

       if(endereco){

        this.novoAluno.logradouro = endereco.logradouro;
        this.novoAluno.bairro = endereco.bairro;
        this.novoAluno.municipio = endereco.localidade;
        this.novoAluno.uf = endereco.uf;

       }
      


      });
      
    }
  }

}
