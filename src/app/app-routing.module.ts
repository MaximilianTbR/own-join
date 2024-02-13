import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { BoardComponent } from './board/board.component';
import { BacklogComponent } from './backlog/backlog.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpDocsComponent } from './help-docs/help-docs.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  {
    path: "app",
    component: AppWrapperComponent,
    children: [
      {
        path: "board",
        component: BoardComponent,
      },
      {
        path: "backlog",
        component: BacklogComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "help",
        component: HelpDocsComponent,
      },
      {
        path: "add-task",
        component: AddTaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
