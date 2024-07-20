import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

   private users=[
        {
         "id":1,
         "name":"Leanne graham",
         "email":"Sincere@april.biz",
         "role":"INTERN"   
        },{
            "id":2,
            "name":"Erivin Howell",
            "email":"Shanna@melissa.tv",
            "role":"INTERN",
        },{
            "id":3,
            "name":"Clementine Bauch",
            "email":"antenhe@gmail.com",
           "role":"ENGINEER",
        },{
            "id":4,
            "name":"Patricia Lensack",
            "email":"Julianne.OConner@Kory.org",
            "role":"ENGINEER",
        },{
            "id":5,
            "name":"Chelsey Dietrich",
            "email":"Lucio_Hettinger@annie.ca",
            "role":"ADMIN",
        }
    ]

findAll(role?: 'ADMIN'| 'ENINEER'|'INTERN'){
    if(role){
        return this.users.filter(user=>user.role===role);
    }
    return this.users;
}
findOne(id:number){
    const user=this.users.find(user=>user.id===id);
    return user;
}
create(user:{name:string,email:string,role:'ADMIN'| 'ENINEER'|'INTERN'}){
const userByHiId=[...this.users].sort((a,b) => b.id-a.id)
const newUser={
    id:userByHiId[0].id + 1,
    ...user
}
this.users.push(newUser)
return newUser
}
update(id:number,updatedUser:{ name?:string,email?:string,
role?:'ADMIN'| 'ENINEER'|'INTERN'}){
this.users=this.users.map(user=>{
    if(user.id === id){
        return {...user,...updatedUser}
}
return user
})
return this.findOne(id);
}
delete(id:number){
    const removedById=this.findOne(id);
    this.users=this.users.filter(user=>user.id !== id)
    return removedById;
}












}
