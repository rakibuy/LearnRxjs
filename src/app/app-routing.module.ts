import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './includes/promise/promise.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path:'promis', component:PromiseComponent},
  {path:'', component:PromiseComponent},
  {path:'observable', component:ObservableComponent, children:[
    {path:'', component:ListComponent},
    {path:'form-event', component:FromEventComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
