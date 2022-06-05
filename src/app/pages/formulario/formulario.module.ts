import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from "ngx-mask";


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ]
})
export class FormularioModule { }
