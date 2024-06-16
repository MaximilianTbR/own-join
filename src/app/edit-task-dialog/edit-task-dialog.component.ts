import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {
  
  @Input() isVisible: boolean = false;
  @Input() task : any; 
  @Output() close = new EventEmitter<void>();
  @Output() open = new EventEmitter<void>();

  ngOnInit(): void {
    // Initialization logic here
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      console.log('Selected task:', this.task);
    }
  }

  closeDialog() {
    this.close.emit(); // Emit the close event
  }

}
