import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddressFormSchemematicComponent} from './address-form-schemematic/address-form-schemematic.component';

const route: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'f-address'},
  {path: 'f-address', component: AddressFormSchemematicComponent}];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class FormExperienceRoutingModule {
}
