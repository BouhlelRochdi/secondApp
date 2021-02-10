import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'parent',
    pathMatch:"full"
  },
  {
    path : 'parent',
    component : ParentComponent
  },
  {
    path : 'children',
    component : ChildrenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
