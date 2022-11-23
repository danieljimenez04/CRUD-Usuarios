//? database users

const usersDB=[]

//* {
//*     id,
//*     first_name,
//*     last_name,
//*     email,
//*     password,
//*     birthday
//* }

let id=1


const findAllUsers=()=>{
    return usersDB
}


const findUserById=(id)=>{
    const filteredUser=usersDB.find(user=>user.id==id)
    return filteredUser
}


const createNewUser=(obj)=>{
    const newUser={
        id:id++, 
        first_name: obj.first_name, //required field
        last_name: obj.last_name  || 'none', //optional field
        email: obj.email, //required field
        password: obj.password, //required field
        birthday: obj.birthday //required field
    }
    usersDB.push(newUser)
    return newUser
}

const removeUserById=(id)=>{
    const index=usersDB.findIndex(user=>user.id==id)
    if (index!=-1) {
        usersDB.splice(index,1)
        return true
    } else {
        return false
    }
}

const updateUserById=(id,obj)=>{
    const index=usersDB.findIndex(user=>user.id==id)
    if (index!=-1){
        usersDB[index].first_name=obj.first_name
        usersDB[index].last_name=obj.last_name
        usersDB[index].email=obj.email
        usersDB[index].password=obj.password 
        usersDB[index].birthday=obj.birthday 
        return usersDB[index]
    } else {
        return false
    }
}

module.exports={
    findAllUsers,
    findUserById,
    createNewUser,
    removeUserById,
    updateUserById
}
