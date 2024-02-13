export class User {
    name: string;
    email: string;
    password: string;
    profileImgUrl: number;
    allTasks: Array<any> = [];
    userUID: string;

    constructor(obj?: any) {
        this.name = obj ? obj.firstName : '';
        this.email = obj ? obj.email : '';
        this.password = obj ? obj.password : '';
        this.profileImgUrl = obj ? obj.profileImgUrl : '';
        this.allTasks = obj ? obj.allTasks : [];
        this.userUID = obj ? obj.userUID : '';

    }

    public toJSON() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            profileImgUrl: this.profileImgUrl,
            allTasks: this.allTasks,
            userUID: this.userUID
        }
    }
}