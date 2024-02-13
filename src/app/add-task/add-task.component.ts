import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from '../models/user';
import { Task } from '../models/task';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  user = new User();
  task = new Task();
  title: string = "";

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  addTask() {
    console.log(this.task);
    this.firestore
      .collection('tasks')
      .add(this.task.toJSON())
      .then((result: any) => {
        console.log(result)
      })
    console.log("task added to db");
  }



}
