import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangeComponent } from './operators/range/range.component';
import { OfComponent } from './operators/of/of.component';
import { FromComponent } from './operators/from/from.component';
import { IntervalComponent } from './operators/interval/interval.component';
import { EmptyComponent } from './operators/empty/empty.component';
import { MaptoComponent } from './operators/mapto/mapto.component';
import { FilterComponent } from './operators/filter/filter.component';
import { DoComponent } from './operators/do/do.component';
import { PluckComponent } from './operators/pluck/pluck.component';
import { FirstComponent } from './operators/first/first.component';
import { StartWithComponent } from './operators/start-with/start-with.component';

const routes: Routes = [
  { path: 'range', component: RangeComponent},
  { path: 'of', component: OfComponent},
  { path: 'from', component: FromComponent},
  { path: 'interval', component: IntervalComponent},
  { path: 'empty', component: EmptyComponent},
  { path: 'mapto', component: MaptoComponent},
  { path: 'filter', component: FilterComponent},
  { path: 'do', component: DoComponent},
  { path: 'pluck', component: PluckComponent},
  { path: 'first', component: FirstComponent},
  { path: 'start-with', component: StartWithComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
