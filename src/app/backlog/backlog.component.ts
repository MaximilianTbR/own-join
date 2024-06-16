import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Task } from '../models/task';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';

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
  isDialogVisible = false;

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

  selectedTaskIndex!: number;


  openDialog(index: number) {
    this.selectedTaskIndex = index;
    this.isDialogVisible = true;
    console.log('Dialog opened');
  }

  closeDialog() {
    this.isDialogVisible = false;
    console.log('Dialog closed');
  }
}
