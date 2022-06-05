import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plataforma } from 'src/app/models/plataformas.model';
import { PlainService } from 'src/app/services/plain.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.scss']
})
export class PlataformasComponent implements OnInit {
  plataformas: Plataforma[] = [];

  constructor(
    private plainService: PlainService,
    private router: Router ) { }

  ngOnInit(): void {
    this.initializer();
  }


  initializer(){
    this.plainService.getPlataformas().subscribe((res: Plataforma[]) => {
      this.plataformas = res;
    })
  }

  selecionarPlataforma(plataforma: Plataforma){
    const navigationExtras = {
      state: {
        plataforma
      }
    }

    this.router.navigate(['planos'], {state: navigationExtras})
  }
}
