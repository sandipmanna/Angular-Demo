import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <h1>Custom Template</h1>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
