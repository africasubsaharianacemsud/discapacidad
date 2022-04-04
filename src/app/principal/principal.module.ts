import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InfografiaComponent } from './infografia/infografia.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent,
    InfografiaComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PrincipalModule { }
