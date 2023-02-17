import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverStatus: string = 'Server was not created!';
  allowSetButton: boolean = true;

  constructor() {
    setTimeout(() => {
      this.allowSetButton = false;
    }, 2000);
  }

  onAddServerClick() {
    this.serverStatus = 'Server created';
  }
}
