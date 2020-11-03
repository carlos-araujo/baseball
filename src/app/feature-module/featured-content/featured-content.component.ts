import { Component, Input, OnInit } from '@angular/core';
import {Feature} from '../../interfaces/feature'

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.scss']
})
export class FeaturedContentComponent implements OnInit {

  @Input() feature: Feature = {} as Feature;
  constructor() { }

  ngOnInit(): void {
    console.log(this.feature)
  }

}
