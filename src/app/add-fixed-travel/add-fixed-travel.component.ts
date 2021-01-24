import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fixed-travel',
  templateUrl: './add-fixed-travel.component.html',
  styleUrls: ['./add-fixed-travel.component.scss']
})
export class AddFixedTravelComponent implements OnInit {

  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit(): void {
  }

}
