import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../lists.service';
// import * as data from 'assets/json/featured.json';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {

  list = [] //data.default.data;

  selectedFeature = null;

  constructor(private LS: ListsService) {
    this.LS.getFeaturedJSON().subscribe(data => {
      console.log(data.data)
      this.list = data.data;
  });
   }

  ngOnInit(): void {
    console.log(this.list)
  }

  setSelectedFeature(team) {
    this.selectedFeature = team;
    console.log(this.selectedFeature)
  }


}
