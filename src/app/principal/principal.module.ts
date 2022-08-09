import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { InfographicsComponent } from './infographics/infographics.component';
import { CreditsComponent } from './credits/credits.component';
import { CapsulesComponent } from './capsules/capsules.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { NewsComponent } from './news/news.component';
import { ToolsComponent } from './tools/tools.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfographicsComponent,
    CreditsComponent,
    CapsulesComponent,
    DiscussionsComponent,
    NewsComponent,
    ToolsComponent
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
