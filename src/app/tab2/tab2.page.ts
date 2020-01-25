import { Component } from '@angular/core';

import { TrenesService } from "../services/trenes.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public todos;

  constructor(private trenesService : TrenesService) {
    console.debug;
    trenesService.getTrenes().subscribe(res => {
      this.todos = res;
      console.debug;
    });
  }



}
