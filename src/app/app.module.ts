import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BoardComponent } from './board/board.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { BacklogComponent } from './backlog/backlog.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HelpDocsComponent } from './help-docs/help-docs.component';
import { SettingsComponent } from './settings/settings.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    BoardComponent,
    AppWrapperComponent,
    BacklogComponent,
    AddTaskComponent,
    HelpDocsComponent,
    SettingsComponent,
    SingleTaskComponent,
    EditTaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
