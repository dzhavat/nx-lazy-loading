import { Component, NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'nx-lazy-load-component-two',
  template: '<h2>Lazy-loaded second</h2>',
})
export class LazyLoadedTwoComponent {}

export const lazyLoadedTwoPath = 'lazy-loaded-two';

const route: Route = {
  path: '',
  component: LazyLoadedTwoComponent,
};

@NgModule({
  declarations: [LazyLoadedTwoComponent],
  exports: [LazyLoadedTwoComponent],
  imports: [RouterModule.forChild([route])],
})
export class LazyLoadedTwoModule {}
