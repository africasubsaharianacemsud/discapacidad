import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InfografiaComponent } from './infografia/infografia.component';
import { TranslateModule } from '@ngx-translate/core';
import { CreditsComponent } from './credits/credits.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfografiaComponent,
    CreditsComponent
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
