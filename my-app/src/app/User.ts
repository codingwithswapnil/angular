export class User {
    id: string;
    name: string;
    password: string;
    userName: string;
    email: string;
    user: any[];
    registeredUsers: any[];

    constructor() {
        this.registeredUsers = [{
            id: 1,
            name: "Swapnil Waman",
            userName: "swapnil",
            email: "swap.waman@gmail.com",
            password: '123456'
          }, {
            id: 2,
            name: "Prashant Shingote",
            userName: "prashant",
            email: "prashant.shingote10@gmail.com",
            password: '123456'
          }
        ];
    }
}