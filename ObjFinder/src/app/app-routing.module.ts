import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MapsComponent } from './components/maps/maps.component';
import { ObjetosComponent } from './components/objetos/objetos.component';

const routes: Routes = [
  {path:'', pathMatch: 'full',component:LoginComponent},
  {path:'map', component:MapsComponent},
  {path:'objetos',component: ObjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
