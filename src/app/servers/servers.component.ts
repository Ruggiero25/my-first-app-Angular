import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', //normal element <tag>
  //selector: '[app-servers]', //like attribute <div app-servers>
  selector: '.app-servers', //like class <div class="app-servers">
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created!";
  serverName:string = "";

  

  constructor() { 

    

    setTimeout(() => {
      this.allowNewServer= true;      
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created!";
    
  }

  onUpdateServerName(event:Event){//the type is an Event
    //console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
    //cast of HTMLInputElement
  }
}
