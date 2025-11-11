import { Injectable } from "@angular/core";
import { Viacep } from "../models/viacep.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({

    providedIn: 'root',

})
export class ViacepService{

    private baseUrl ="https://viacep.com.br/ws";

    constructor(private http: HttpClient){}

    getEndereco(cep: string): Observable<Viacep>{
    return this.http.get<Viacep>(`${this.baseUrl}/${cep}/json`);
    }


}