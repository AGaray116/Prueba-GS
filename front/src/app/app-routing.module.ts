import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { PagesappComponent } from './pages/pagesapp/pagesapp.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/usuario', pathMatch: 'full'
  }, 

  {
    path: '',
    component: PagesappComponent,
    children: [
      { path: 'usuario', component: UsuarioComponent},
    ]
  },
  // { path: 'login', component: LoginComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
