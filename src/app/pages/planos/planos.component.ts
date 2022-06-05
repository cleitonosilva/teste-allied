import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Plataforma } from 'src/app/models/plataformas.model';
import { Plano } from 'src/app/models/plano.model';
import { PlainService } from 'src/app/services/plain.service';

@Component({
  selector: 'app-plains',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})

export class PlanosComponent implements OnInit {
  navigation: NavigationExtras;
  plataforma: Plataforma;
  planos: Plano[] = [];

  constructor(
    private router: Router,
    private plainService: PlainService
    ) { }

  ngOnInit(): void {
    if(history.state.state){
      this.initialize();
    }else {
      this.router.navigate(['']);
    }
  }

  initialize(){
    this.plataforma = history.state.state.plataforma;

    this.plainService.getPlanos(this.plataforma.sku).subscribe((res) => {
      this.planos = res;
    })
  }

  selecionarPlano(plano: Plano){
    if(plano.ativo){
      const navigationExtras = {
        state: {
          plataforma: this.plataforma,
          plano
        }
      }

      this.router.navigate(['formulario'], {state: navigationExtras})
    }
  }

}
