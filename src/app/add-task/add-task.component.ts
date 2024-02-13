import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from '../models/user';
import { Task } from '../models/task';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'; // Import firebase
import { Firestore, arrayUnion } from 'firebase/firestore'; // Import Firestore and arrayUnion




@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  user = new User();
  task = new Task();
  title: string = "";
  currentUserUID: string = "";

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('User is signed in:', user);
        console.log(user.uid)
        this.currentUserUID = user.uid;

      } else {
        // No user is signed in.
        console.log('No user is signed in.');
      }
    });
  }

  addTaskToUserService() {
    this.addTask()
      .then(() => console.log('Task added successfully'))
      .catch(error => console.error('Error adding task: ', error));
  }

  addTask() {
    console.log(this.task);

    const userRef = this.firestore.collection('users').doc(this.currentUserUID);

    return userRef.update({
      allTasks: arrayUnion(this.task.toJSON()) // Use arrayUnion directly from Firestore
    });

  }

  addDocumentWithCustomID() {

    const customDocumentID = 'hROuiWcjMjhAZLwcV7KjOSiXvFu1';

    this.user.userUID = customDocumentID;
    this.user.email = "maximilian.tauber@icloud.com";
    this.user.name = "Maximilian Tauber";
    this.user.password = "Mata1324";

    this.firestore.collection('users').doc(customDocumentID).set(this.user.toJSON())
      .then(() => {
        console.log('Document successfully written with custom ID!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }



}
