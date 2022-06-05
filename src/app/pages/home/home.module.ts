import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { PlainService } from 'src/app/services/plain.service';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [HomeComponent],
  providers:[PlainService]
})
export class HomeModule { }
