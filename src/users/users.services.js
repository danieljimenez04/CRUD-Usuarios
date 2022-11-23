//? File imports
const userControllers=require('./users.controllers')

const getAllUsers=(req,res)=>{
    const users=userControllers.findAllUsers()
    res.status(200).json(users)
}

const getUserById=(req,res)=>{
    const id=req.params.id 
    const filteredUser=userControllers.findUserById(id)
    if (filteredUser){
        res.status(200).json(filteredUser)
    } else {
        res.status(404).json({message:'Invalid ID'})
    }
}


const postNewUser=(req,res)=>{
    const {first_name,last_name,email,password,birthday}=req.body

    if (first_name && email && password && birthday){
        const newUser=userControllers.createNewUser({first_name,last_name,email,password,birthday})
        res.status(201).json(newUser)
    }else{
        res.status(400).json({
            message:'Invalid Data',
            fields:{
                first_name:'string*',
                last_name:'string',
                email:'string*',
                password:'string*',
                birthday:'YYYY/MM/DD*'
            }
        })
    }
}

const deleteUserById=(req,res)=>{
    const id=req.params.id 
    const response=userControllers.removeUserById(id)
    if (response) {
        res.status(200).json({message:`The user with id ${id} was eliminated`})
    } else {
        res.status(404).json({message:"These ID doesn't exist"})
    }
}

const putUserById=(req,res)=>{
    const id=req.params.id 
    const user=req.body
    //const response=userControllers.updateUserById(id,user)

    if (user.first_name && user.email && user.password && user.birthday){
        const response=userControllers.updateUserById(id,user)
        if (response){
            res.status(200).json(response)
        } else {
            res.status(404).json({message:"These ID doesn't exist"})
        }
    } else {
        res.status(400).json({
            message:'Invalid Data',
            fields:{
                first_name:'string*',
                last_name:'string',
                email:'string*',
                password:'string*',
                birthday:'YYYY/MM/DD*'
            }
        })
    }
        
    
}

module.exports={
    getAllUsers,
    getUserById,
    postNewUser,
    putUserById,
    deleteUserById   
}