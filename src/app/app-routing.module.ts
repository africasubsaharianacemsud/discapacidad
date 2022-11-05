import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographicsMomentoComponent } from './momento-brujo/biographics-momento/biographics-momento.component';
import { CreditsMomentoComponent } from './momento-brujo/credits-momento/credits-momento.component';
import { InfographicsMomentoComponent } from './momento-brujo/infographics-momento/infographics-momento.component';
import { MomentoBrujoComponent } from './momento-brujo/momento-brujo.component';
import { MomentosComponent } from './momento-brujo/momentos/momentos.component';
import { CapsulesComponent } from './principal/capsules/capsules.component';
import { CreditsComponent } from './principal/credits/credits.component';
import { DiscussionsComponent } from './principal/discussions/discussions.component';
import { HomeComponent } from './principal/home/home.component';
import { InfographicsComponent } from './principal/infographics/infographics.component';
import { NewsComponent } from './principal/news/news.component';
import { ToolsComponent } from './principal/tools/tools.component';
import { SeeInfoComponent } from './see-info/see-info.component';

const routes: Routes = [
  {
    path: 'inf',
    redirectTo: 'infographics'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: CapsulesComponent
  },
  {
    path: 'discussions',
    component: DiscussionsComponent
  },
  {
    path: 'infographics',
    component: InfographicsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'credits',
    component: CreditsComponent
  },
  {
    path: 'seeinfo',
    component: SeeInfoComponent
  },
  {
    path: 'momento-brujo',
    component: MomentoBrujoComponent
  },
  {
    path: 'momento-brujo/biographics',
    component: BiographicsMomentoComponent
  },
  {
    path: 'momento-brujo/moments',
    component: MomentosComponent
  },
  {
    path: 'momento-brujo/infographics',
    component: InfographicsMomentoComponent
  },
  {
    path: 'momento-brujo/credits',
    component: CreditsMomentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
