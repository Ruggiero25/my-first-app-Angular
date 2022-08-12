import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', //normal element <tag>
  //selector: '[app-servers]', //like attribute <div app-servers>
  selector: '.app-servers', //like class <div class="app-servers">
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
