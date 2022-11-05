import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMomentoComponent } from './toolbar-momento/toolbar-momento.component';
import { FooterMomentoComponent } from './footer-momento/footer-momento.component';
import { TranslateModule } from '@ngx-translate/core';
import { CreditsMomentoComponent } from './credits-momento/credits-momento.component';
import { InfographicsMomentoComponent } from './infographics-momento/infographics-momento.component';
import { BiographicsMomentoComponent } from './biographics-momento/biographics-momento.component';
import { MomentosComponent } from './momentos/momentos.component';



@NgModule({
  declarations: [
    ToolbarMomentoComponent,
    FooterMomentoComponent,
    CreditsMomentoComponent,
    InfographicsMomentoComponent,
    BiographicsMomentoComponent,
    MomentosComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ToolbarMomentoComponent,
    FooterMomentoComponent
  ]
})
export class MomentoBrujoModule { }
