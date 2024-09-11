import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Principal/principal/principal.component';
import { HalloweenComponent } from './Extra/halloween/halloween.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'principal', component: PrincipalComponent },
   // Ruta que acepta un parámetro 'name' desde la URL
   { path: 'DisfrazFest/:name', component: HalloweenComponent },
   // Ruta que redirige a 'Fiesta' con un nombre por defecto si no se proporciona uno
   { path: 'DisfrazFest', redirectTo: 'Fiesta/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
