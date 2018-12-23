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
import { CreateComponent } from './operators/create/create.component';
import { EveryComponent } from './operators/every/every.component';
import { DistinctUntilChangedComponent } from './operators/distinct-until-changed/distinct-until-changed.component';
import { DefaultIfEmptyComponent } from './operators/default-if-empty/default-if-empty.component';
import { DelayComponent } from './operators2/delay/delay.component';
import { TakeComponent } from './operators2/take/take.component';
import { ThrowComponent } from './operators2/throw/throw.component';
import { UtilityComponent } from './operators2/utility/utility.component';
import { SkipComponent } from './operators2/skip/skip.component';
import { LastComponent } from './operators2/last/last.component';
import { ConcatComponent } from './operators2/concat/concat.component';
import { ConcatallComponent } from './operators2/concatall/concatall.component';

const routes: Routes = [
  { path: 'range', component: RangeComponent },
  { path: 'of', component: OfComponent },
  { path: 'from', component: FromComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'mapto', component: MaptoComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'do', component: DoComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'first', component: FirstComponent },
  { path: 'start-with', component: StartWithComponent },
  { path: 'create', component: CreateComponent },
  { path: 'every', component: EveryComponent },
  { path: 'distinct', component: DistinctUntilChangedComponent },
  { path: 'default-empty', component: DefaultIfEmptyComponent },
  { path: 'delay', component: DelayComponent },
  { path: 'take', component: TakeComponent },
  { path: 'throw', component: ThrowComponent },
  { path: 'utility', component: UtilityComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'last', component: LastComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'concatall', component: ConcatallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
