import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = new User();

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private afAuth: AngularFireAuth, public firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('User is signed in:', user);
      } else {
        // No user is signed in.
        console.log('No user is signed in.');
      }
    });
  }

  createUser() {
    console.log("creating user")
    return this.afAuth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((result) => {
        // Handle successful registration here (e.g., routing or setting user data)
        console.log('Registration successful', result);
        if (result.user) {
          this.user.userUID = result.user.uid;
          console.log("userUID was available")
        } else {
          this.user.userUID = "no userUID was available at signup";
        }
        this.firestore
          .collection('users')
          .add(this.user.toJSON())
          .then((result: any) => {
            console.log(result)
          })
        this.router.navigate(['/app/board'])
        console.log("user added to db");
      })
      .catch((error) => {
        // Handle errors here, such as displaying error messages
        console.error('Registration failed', error);
      });
  }

}
