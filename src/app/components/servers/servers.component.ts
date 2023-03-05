import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverName: string = 'Default Name';
  allowSetButton: boolean = true;
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowSetButton = false;
    }, 2000);
  }

  onAddServerClick() {
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
