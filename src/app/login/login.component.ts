import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, public firestore: AngularFirestore, private router: Router) { }

  email: string = "";
  password: string = "";

  ngOnInit(): void {

  }


  login() {
    console.log("logging in")
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        // Handle successful login here
        console.log('Login successful', result);
        this.router.navigate(["/app/board"])
      })
      .catch((error) => {
        // Handle errors here, such as displaying error messages
        console.log('Login failed', error);
      });
  }

}
