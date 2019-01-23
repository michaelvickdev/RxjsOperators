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
import { ConcatmapComponent } from './operators2/concatmap/concatmap.component';
import { SingleComponent } from './operators2/single/single.component';
import { IgnoreComponent } from './operators2/ignore/ignore.component';
import { SampleComponent } from './operators2/sample/sample.component';
import { ScanComponent } from './operators2/scan/scan.component';
import { GrupbyComponent } from './operators2/grupby/grupby.component';
import { TimeoutComponent } from './operators2/timeout/timeout.component';
import { MergeComponent } from './operators2/merge/merge.component';
import { BufferComponent } from './operators2/buffer/buffer.component';
import { ThrottleComponent } from './operators2/throttle/throttle.component';
import { ZipComponent } from './operators3/zip/zip.component';
import { CombineleastComponent } from './operators3/combineleast/combineleast.component';
import { ForkjoinComponent } from './operators3/forkjoin/forkjoin.component';
import { RaceComponent } from './operators3/race/race.component';
import { RetryComponent } from './operators3/retry/retry.component';
import { LatestfromComponent } from './operators3/latestfrom/latestfrom.component';
import { WindowComponent } from './operators3/window/window.component';
import { LetComponent } from './operators3/let/let.component';
import { DebounceComponent } from './operators3/debounce/debounce.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorComponent } from './subjects/behavior/behavior.component';
import { ReplaysubjectComponent } from './subjects/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './subjects/asyncsubject/asyncsubject.component';
import { SwitchmapComponent } from './operators2/switchmap/switchmap.component';
import { AuditComponent } from './operators2/audit/audit.component';

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
  { path: 'concatmap', component: ConcatmapComponent },
  { path: 'single', component: SingleComponent },
  { path: 'ignore', component: IgnoreComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'group', component: GrupbyComponent },
  { path: 'timeout', component: TimeoutComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'throttle', component: ThrottleComponent },
  { path: 'zip', component: ZipComponent },
  { path: 'combinelatest', component: CombineleastComponent },
  { path: 'forkjoin', component: ForkjoinComponent },
  { path: 'race', component: RaceComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'latestfrom', component: LatestfromComponent },
  { path: 'window', component: WindowComponent },
  { path: 'let', component: LetComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behaviorsubject', component: BehaviorComponent },
  { path: 'replysubject', component: ReplaysubjectComponent },
  { path: 'asyncsubject', component: AsyncsubjectComponent },
  { path: 'switchmap', component: SwitchmapComponent },
  { path: 'audit', component: AuditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
