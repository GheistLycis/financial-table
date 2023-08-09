import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomeComponent } from './home.component';
import { PipesModule } from '@pipes/pipes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ExpensesModule } from './components/expenses/expenses.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NgbCarouselModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '@components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    AnalyticsComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ExpensesModule,
    NgSelectModule,
    FormsModule,
    NgbCarouselModule,
    NgbTooltip,
    ComponentsModule,
  ]
})
export class HomeModule { }
