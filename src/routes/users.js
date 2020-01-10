module.exports = app =>{
    const Users = app.db.models.Users;

    app.get('/users/:id', async (req, res)=>{
       try {
           const users = await Users.findOne({where: req.params})
           res.json(users)
       }catch(e){
           console.log(e)
       }
    })
    app.post('/users', async(req, res)=>{
       try{
        const getUsers = await Users.create(req.body)
        res.json(getUsers);
       }catch(e){
           console.log(e)
       }
    })

    app.delete('/users/:id', async(req, res)=>{
        try{
        const Delete = await Users.destroy({where: req.params})
        res.json(Delete)

        }catch(e){
            console.log(e)
        }
    })


    
    
}


