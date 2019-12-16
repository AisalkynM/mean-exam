import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [

  {path: '', redirectTo: '/products',pathMatch: 'full'},
  {path:"products", component:HomeComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/:id', component: ShowComponent},
  {path: 'products/:id/edit', component: EditComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
