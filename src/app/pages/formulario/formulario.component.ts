import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { Plataforma } from 'src/app/models/plataformas.model';
import { Plano } from 'src/app/models/plano.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']

})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  plano: Plano;
  plataforma: Plataforma;


  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(history.state.state){
      this.initialize();
    }else {
      this.router.navigate(['']);
    }
  }

  initialize() {
    this.plataforma = history.state.state.plataforma;
    this.plano = history.state.state.plano;

    this.formulario = this.fb.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
    })
  }

  enviarFormulario() {
    console.log('Plataforma selecionada:', this.plataforma);
    console.log('Plano selecionada', this.plano);
    console.log('Dados do cliente:', this.formulario.value)
  }



}
