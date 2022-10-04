import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompassPageRoutingModule } from './compass-routing.module';

import { CompassPage } from './compass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompassPageRoutingModule
  ],
  declarations: [CompassPage]
})
export class CompassPageModule {}
