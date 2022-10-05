import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // >> app.component에서 <div app-servers> 이렇게 사용해야 함
  // selector: '.app-servers', // >> <div class="app-servers>" 이렇게
  selector: 'app-servers', // 일반적인 방법
  templateUrl: './servers.component.html',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
