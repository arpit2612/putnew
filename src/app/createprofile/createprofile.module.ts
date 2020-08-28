import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateprofilePageRoutingModule } from './createprofile-routing.module';

import { CreateprofilePage } from './createprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateprofilePageRoutingModule
  ],
  declarations: [CreateprofilePage]
})
export class CreateprofilePageModule {}
