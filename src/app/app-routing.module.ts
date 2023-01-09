import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './includes/promise/promise.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { TimerComponent } from './observable/timer/timer.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

const routes: Routes = [
  {path:'promis', component:PromiseComponent},
  {path:'', component:ObservableComponent},
  {path:'observable', component:ObservableComponent, children:[
    {path:'', component:ListComponent},
    {path:'form-event', component:FromEventComponent},
    {path:'interval', component:IntervalComponent},
    {path:'timer', component:TimerComponent},
    {path:'of-from', component:OfFromComponent},
    {path:'to-array', component:ToArrayComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
