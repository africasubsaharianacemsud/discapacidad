import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { InfographicsComponent } from './infographics/infographics.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfographicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PrincipalModule { }
