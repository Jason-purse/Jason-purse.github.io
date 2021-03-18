import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormExperienceRoutingModule} from './form-experience-routing.module';
import {AddressFormSchemematicComponent} from './address-form-schemematic/address-form-schemematic.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddressFormSchemematicComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormExperienceRoutingModule,
  ]
})
export class FormExperienceModule { }
