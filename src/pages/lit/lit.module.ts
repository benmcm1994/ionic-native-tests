import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LitPage } from './lit';

@NgModule({
  declarations: [
    LitPage,
  ],
  imports: [
    IonicPageModule.forChild(LitPage),
  ],
  exports: [
    LitPage
  ]
})
export class LitPageModule {}
