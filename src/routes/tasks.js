module.exports = app => {
  const Tasks = app.db.models.Tasks;
  app.route("/tasks")
        .post( async (req,res)   => {
           const newTasks = await Tasks.create(req.body)
                res.json(newTasks);
                //or .then(result => res.json(result))
                // .catch(error=>console.log(error));
        })
        .get((req, res) => {
        Tasks.findAll({})
        .then(result => res.json(result))
        .catch(error => {
        res.status(412).json({ msg: error.message });
         });
    });
    
    app.route('/tasks/:id')
        .get(async (req, res)=>{
            try {
            const finById =  await Tasks.findOne({where: req.params})
            res.json(finById);
            res.status({status: 200});
            } catch(e){
                console.log(e);
            }
        })
        .put(async(req,res)=>{
            try{
               const Update =  await Tasks.update(req.body, {where:req.params})
               res.json(Update)
            }catch(e){
            console.log(e);
            }
        })
        .delete(async(req, res)=>{
           try{
            const Delete = await Tasks.destroy({where: req.params})
            res.json(Delete)
           } catch(e){
               console.log(e);
           }
            
            
        })
 
};
