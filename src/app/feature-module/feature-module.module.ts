import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedListComponent } from './featured-list/featured-list.component'
import { FeaturedContentComponent } from './featured-content/featured-content.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FeaturedListComponent,
    FeaturedContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeaturedListComponent }]),
  ]
})
export class FeatureModule { }
