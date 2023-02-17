import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowSetButton: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowSetButton = true;
    }, 2000);
  }
}
