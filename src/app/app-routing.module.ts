import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangeComponent } from './operators/range/range.component';
import { OfComponent } from './operators/of/of.component';
import { FromComponent } from './operators/from/from.component';
import { IntervalComponent } from './operators/interval/interval.component';

const routes: Routes = [
  { path: 'range', component: RangeComponent},
  { path: 'of', component: OfComponent},
  { path: 'from', component: FromComponent},
  { path: 'interval', component: IntervalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
