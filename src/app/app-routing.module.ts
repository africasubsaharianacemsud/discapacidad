import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './principal/home/home.component';

const routes: Routes = [
  // {
  //   path: 'conf',
  //   redirectTo: 'configuraciones'
  // },
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
  // {
  //   path: 'home',
  //   component: PrincipalComponent
  // },
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
