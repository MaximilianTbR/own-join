import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit {

  @Input() i!: any;

  index: string | undefined;
  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  openTodoInfo(i: string) {
    if (this.open == true) {
      document.getElementById('new-task-details-' + i)?.classList.remove('hide');
      document.getElementById('new-task-urgency-color-' + i)?.classList.remove('new-task-urgency-color');
      document.getElementById('new-task-urgency-color-' + i)?.classList.add('new-task-urgency-color-open-menu');
      this.open = false;
    } else {
      document.getElementById('new-task-details-' + i)?.classList.add('hide');
      document.getElementById('new-task-urgency-color-' + i)?.classList.remove('new-task-urgency-color-open-menu');
      document.getElementById('new-task-urgency-color-' + i)?.classList.add('new-task-urgency-color')
      this.open = true;
    };
  }

}
