import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, public firestore: AngularFirestore, private router: Router) { }

  allTasks: Task[] = [];
  task = new Task();
  taskTitle = this.task.title;
  userUID: string = "";
  allSortedTasks: Task[] = [];


  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('User is signed in:', user);
        console.log(user.uid)
        this.userUID = user.uid;
      } else {
        // No user is signed in.
        console.log('No user is signed in.');
      }
    });
    this.loadAllTasks();
  }

  loadAllTasks() {
    console.log("loading all tasks")
    this.firestore
      .collection('tasks')
      .valueChanges()
      .subscribe((changes: any) => {
        this.allTasks = changes;
        console.log(this.allTasks);
        console.log("All tasks loaded")
        //this.sortTasks();
      })
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
