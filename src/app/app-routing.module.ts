import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynamicComponent} from './views/dynamic/dynamic.component';

const routes: Routes = [
  {path: 'form', loadChildren: () => import('./views/form-experience/form-experience.module').then(module => module.FormExperienceModule)},
  {path: 'dynamic-cp', component: DynamicComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
