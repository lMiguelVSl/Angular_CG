import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  userName: string = '';
  allowSetButton: boolean = true;

  onUpdateServerName(event: any) {
    this.userName = event.target.value;
  }

  onResetUserName() {
    if (this.userName != '') this.userName = '';
  }
}
