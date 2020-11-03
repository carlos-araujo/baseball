import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { CardContentComponent } from './card-content/card-content.component';
import { ListsService } from '../lists.service';



@NgModule({
  declarations: [TeamsListComponent, CardContentComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: TeamsListComponent }]),
    CommonModule
  ],
  providers: [
    ListsService
  ]
})
export class HomeModule { }
