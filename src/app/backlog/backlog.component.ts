import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allSampleTasks = [
    {
      title: "build crm", 
      description: "salesforce", 
      category: "in progress", 
      dueDate: 506080, 
      urgency: "high",
      assignedTo: "max", 
      userID: "none"
     }
  ]

}
