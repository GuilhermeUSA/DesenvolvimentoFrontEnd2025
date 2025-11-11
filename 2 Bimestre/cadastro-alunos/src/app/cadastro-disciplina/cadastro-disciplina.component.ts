import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-disciplina',
  imports: [CommonModule,FormsModule],
  templateUrl: './cadastro-disciplina.component.html',
  styleUrl: './cadastro-disciplina.component.css',
})
export class CadastroDisciplinaComponent {

novadisciplina ={

Nome: '',
Professor:'',
Curso: '',

}

disciplinas: any [] = [];

adicionardisciplina(){


  if (this.novadisciplina.Nome && this.novadisciplina.Curso && this.novadisciplina.Professor)


  this.disciplinas.push({...this.adicionardisciplina});


}

}
