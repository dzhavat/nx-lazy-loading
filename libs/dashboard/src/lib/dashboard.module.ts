import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const route: Route = {
  path: '',
  component: DashboardComponent,
};

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild([route])],
})
export class DashboardModule {}
