import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  userName: string = '';
  allowSetButton: boolean = true;
  inputValue: string = '';

  onUpdateServerName(event: any) {
    this.userName = event.target.value;
    if (this.userName != '') this.allowSetButton = false;
  }

  onResetUserName() {
    this.allowSetButton = true;
    if (this.userName != '') this.userName = '';
    this.inputValue = '';
  }
}
