const express = require ('express');
const router = express.Router();


const{ Employee } =require('../model/employee');


router.get("/api/employees",(req,res) =>{
    Employee.find({}, (err ,data) =>{
        if(!err){
            res.send(data);

        }else{
            console.log(err);
        }
    });
});

router.post("/api/employees/add", (req,res) => {
    const emp =new Employee({
        name: req.body.name,
        email: req.body.email,
        mobno: req.body.mobno
    });
    emp.save((err ,data)=> {
        res.status(200).json({code:200, message :'Employee added',
    addEmployee:data })
    });

    router.put('/api/employees/update/id', (req, res)=>{

        const index = employees.findIndex(e => e.id === req.body.id);
        if(index !== -1){
    
          employees.splice(index, 1);
          employees.push(req.body);
          res.status(200).json({msg: "updated success"});
        }
        else{
          res.status(400).json({msg: "NO Employee found with given id.!"});
        }
    
    });
    
    app.delete('/:id', (req, res) => {
      
      // const id = req.body.id;
      const id = req.params.id;
      console.log('delete id : ')
      console.log(id)
      // const index = employees.findIndex(e => e.id === id);
      const index = employees.findIndex(e => e.id === parseInt(id));
      console.log(index)
      if (index === -1) {
        console.log('not found')
      res.status(400).json({msg: "delete failed"});
       
      }
      else{
        console.log('found')
        employees.splice(index, 1);
        res.status(200).json({msg: "deleted success"});
      }
    });
});
// // router.get("/:registerId");
// // router.put("/:registerId");
// // router.delete("/:registerId");

module.exports= router;
  