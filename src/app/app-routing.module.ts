import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { toylistComponent } from './pages/toylist/toylist.component';
import { ToypageComponent } from './pages/toypage/toypage.component';

const routes: Routes = [
   {path:'',component:HomeComponent},
  {path:'toylist',component:toylistComponent},
  {path:'toypage',component:ToypageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
