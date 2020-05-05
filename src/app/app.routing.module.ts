import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicChipComponent } from './basic-chip/basic-chip.component';





@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'basic', component: BasicChipComponent },
      { path: 'other', component: BasicChipComponent },
      { path: 'position', component: BasicChipComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}