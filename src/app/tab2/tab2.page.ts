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
    this.todos = {};
    this.todos.campo2 = { campo21 : 3343 };
    console.debug;
    trenesService.getTrenes().subscribe(res => {
      this.todos = res;
      console.debug;
    });

    trenesService.createData().then(() => {
      console.debug;
    }, (error) => {
      console.error(error);
    });
  }



}
