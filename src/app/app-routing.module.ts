import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
