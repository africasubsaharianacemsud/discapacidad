import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './principal/home/home.component';
import { InfographicsComponent } from './principal/infographics/infographics.component';

const routes: Routes = [
  {
    path: 'inf',
    redirectTo: 'infographics'
  },
  // {
  //   path: 'sec',
  //   redirectTo: 'configuraciones/seguridad'
  // },
  // {
  //   path: 'configuraciones',
  //   loadChildren: () => import('./configuraciones/configuraciones.module')
  //   .then(m => m.ConfiguracionesModule)
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'infographics',
    component: InfographicsComponent
  },
  // {
  //   path: 'oldevents',
  //   component: PastEventsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
