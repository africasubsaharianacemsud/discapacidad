import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CardComponent,
    FooterComponent,
    TranslateModule,
    ToolbarComponent
  ]
})
export class SharedModule { }
