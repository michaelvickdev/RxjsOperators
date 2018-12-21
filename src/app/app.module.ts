import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeComponent } from './operators/range/range.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
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

@NgModule({
  declarations: [
    AppComponent,
    RangeComponent,
    OfComponent,
    FromComponent,
    IntervalComponent,
    EmptyComponent,
    MaptoComponent,
    FilterComponent,
    DoComponent,
    PluckComponent,
    FirstComponent,
    StartWithComponent,
    CreateComponent,
    EveryComponent,
    DistinctUntilChangedComponent,
    DefaultIfEmptyComponent,
    DelayComponent,
    TakeComponent,
    ThrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
