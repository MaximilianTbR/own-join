import { Component, OnInit } from '@angular/core';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

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
    this.firestore
      .collection('tasks')
      .valueChanges()
      .subscribe((changes: any) => {
        this.allTasks = changes;
        console.log(this.allTasks);
        this.sortTasks();
      })
  }

  tasks = [];

  sortTasks() {
    console.log("sort function is triggered")
    this.allTasks.forEach(task => {
      if (task.userID == this.userUID) {
        console.log("this is the task:")
        console.log(task)
        this.allSortedTasks.push(task);
        console.log(this.allSortedTasks)
        // Optionally, you can break out of the loop if your environment supports it
      } else {
        console.log("no task found")
      }
    });
  }

  /**
   * 
   * init function to load the jsons from the backend and insert them in the todo table
   * 
   * @param {none}
   */

  /*async init() {
    await downloadFromServer(); 
    await loadFromBackend();
    await includeHTML();
    menuInit();
    showBoard();
    updateHTML();
  }*/

  /**
   * 
   * function to add all the tasks loaded out of the backend to the todo table
   * 
   * @param {none}
   */

  templateBoard(i: any) {
    new SingleTaskComponent();
  }

  showBoard() {
    let tasksBoard = document.getElementById('todo');
    if (tasksBoard) {
      tasksBoard.innerHTML = '';
      for (let i = 0; i < this.tasks.length; i++) {
        tasksBoard.innerHTML += this.templateBoard(i);
      }
    }
  }

  currentDraggedElement: any;

  /**
   * 
   * function which is initialized when you start dragging a task in the board and this function gives the respective id of the respective task which is being dragged as a value to the variable currentDraggedElement
   * 
   * @param {string} id - id of the respective task which is being dragged
   */

  startDragging(id: any) {
    this.currentDraggedElement = id;
  }

  /**
   * 
   * function which is initialized when you drop a task over a table in the board and it rewrites the settings of the respectful table/div over which the task was dropped in a way, which makes it possible for the respectful task to be placed in the respectful div/table
   * 
   * @param {event} event - which is needed to rewrite the settings of the respectful div/table to place the respectful task in the respectful div/table
   */

  allowDrop(event: any) {
    event.preventDefault();
  }

  /**
   * 
   * function which updates the json line 'processing_state' of the respective task to the id of the respective table to which the task should be moved
   * 
   * @param {id} processingState - id of the respective table to which the respective task should be moved
   */

  MoveTo(processingState: string) {
    (this.tasks as any[])[this.currentDraggedElement].processing_state = processingState;
    this.updateHTML();
  }

  /**
   * 
   * function which renders all tasks after the respective tasks have received their new json lines
   */
  // Remove incorrect JSDoc tag
  updateHTML() {
    const todoElement = document.getElementById('todo');
    if (todoElement) {
      todoElement.innerHTML = '';
    }
    const inprogressElement = document.getElementById('inprogress');
    if (inprogressElement) {
      inprogressElement.innerHTML = '';
    }
    const testingElement = document.getElementById('testing');
    if (testingElement) {
      testingElement.innerHTML = '';
    }
    const doneElement = document.getElementById('inprogress');
    if (doneElement) {
      doneElement.innerHTML = '';
    }
    for (let i = 0; i < this.tasks.length; i++) {
      let element = this.tasks[i]['processing_state'];
      if (element == "todo" || element == "inprogress" || element == "testing" || element == "done") {
        const targetElement = document.getElementById(element);
        if (targetElement) {
          targetElement.innerHTML += this.templateBoard(i);
        }
        this.adjustColors(i);
      }
    }
  }

  /**
   * 
   * function which adjusts the color of the left border of every respective task according to the table in which the respective tasks are in
   * 
   * @param {number} i - respective id of every respective task
   */

  adjustColors(i: any) {
    let element = this.tasks[i]['processing_state'];
    if (element == "todo") {
      const currentTask = document.getElementById('new-task-urgency-color-' + i);
      if (currentTask) {
        currentTask.classList.add('color-1');
      }
    }
    if (element == "inprogress") {
      const currentTask = document.getElementById('new-task-urgency-color-' + i);
      if (currentTask) {
        currentTask.classList.add('color-2');
      }
    }
    if (element == "testing") {
      const currentTask = document.getElementById('new-task-urgency-color-' + i);
      if (currentTask) {
        currentTask.classList.add('color-3');
      }
    }
    if (element == "done") {
      const currentTask = document.getElementById('new-task-urgency-color-' + i);
      if (currentTask) {
        currentTask.classList.add('color-4');
      }
    }
  }

  /**
   * 
   * function to delete a done task from the board
   * 
   * @param {number} i - respective id of every respective task
   */

  markAsDone(i: any) {
    let currentTask = document.getElementById(i);
    if (currentTask) {
      currentTask.remove();
    }
    //this.saveToBackend();
  }
  /**
   * Function to open the info menu for the current task
   * 
   * @param {number}
   */

  open = true;

  openTodoInfo(i: any) {
    if (this.open == true) {
      const taskDetailsElement = document.getElementById('new-task-details-' + i);
      if (taskDetailsElement) {
        taskDetailsElement.classList.remove('hide');
      }
      const urgencyColorElement = document.getElementById('new-task-urgency-color-' + i);
      if (urgencyColorElement) {
        urgencyColorElement.classList.remove('new-task-urgency-color');
        urgencyColorElement.classList.add('new-task-urgency-color-open-menu');
      }
      this.open = false;
    } else {
      const taskDetailsElement = document.getElementById('new-task-details-' + i);
      if (taskDetailsElement) {
        taskDetailsElement.classList.add('hide');
      }
      const urgencyColorElement = document.getElementById('new-task-urgency-color-' + i);
      if (urgencyColorElement) {
        urgencyColorElement.classList.remove('new-task-urgency-color-open-menu');
        urgencyColorElement.classList.add('new-task-urgency-color');
      }
      this.open = true;
    };
  }

}
