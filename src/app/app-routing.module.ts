import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'plataformas',
    pathMatch: 'full'
  },
  {
    path: 'plataformas',
    loadChildren: () => import('./pages/plataformas/plataformas.module').then(m => m.PlataformasModule)
  },
  {
    path: 'planos',
    loadChildren: () => import('./pages/planos/planos.module').then(m => m.PlanosModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then(m => m.FormularioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
