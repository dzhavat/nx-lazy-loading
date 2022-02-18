import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { dashboardPath } from '@nx-lazy-load/dashboard';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    // path: dashboardPath,
    path: 'dashboard',
    loadChildren: () =>
      import('@nx-lazy-load/dashboard').then((mod) => mod.DashboardModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
