import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../lists.service';
import { Title } from '@angular/platform-browser';
// import * as data from 'assets/json/teams.json';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  list = [] // data.default.data;

  selectedTeam = null;

  constructor(private LS: ListsService,
    private titleService: Title
    ) {
    this.LS.getJSON().subscribe(data => {
      console.log(data.data)
      this.list = data.data;
  });
   }

  ngOnInit(): void {
    this.titleService.setTitle( 'Equipos' );
    console.log(this.list);
    
  }

  setSelectedTeam(team) {
    this.selectedTeam = team;
    console.log(this.selectedTeam)
  }

}
