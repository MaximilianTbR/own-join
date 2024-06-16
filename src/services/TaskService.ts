import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksCollection = this.firestore.collection('tasks');

  constructor(private firestore: AngularFirestore) { }

  getTask(taskId: string): Observable<any> {
    return this.tasksCollection.doc(taskId).valueChanges();
  }

  getTasks(): Observable<any[]> {
    return this.tasksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  updateTask(taskId: string, task: any): Promise<void> {
    return this.tasksCollection.doc(taskId).update(task);
  }

  replaceTask(taskId: string, task: any): Promise<void> {
    return this.tasksCollection.doc(taskId).set(task);
  }
}
