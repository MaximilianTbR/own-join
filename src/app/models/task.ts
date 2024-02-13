export class Task {
    title: string;
    description: string;
    category: string;
    dueDate: Date;
    urgency: string;
    assignedTo: string;

    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.category = obj ? obj.category : '';
        this.dueDate = obj ? obj.dueDate : new Date();
        this.urgency = obj ? obj.urgency : '';
        this.assignedTo = obj ? obj.assignedTo : '';
    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
            category: this.category,
            dueDate: this.dueDate,
            urgency: this.urgency,
            assignedTo: this.assignedTo
        }
    }
}