
import dynamoose from "../Dbconfig.js"
import Common from "../Model/Common.js/common.js"
import commonservice from "../services/common/common.js"
import Db_emp from "../Model/mainModel.js"
const Insert = async(req,res) =>{
    let request = req.body
            let value = {Emp_id:request.id,
                Experience:request.exp,
                Emp_name:request.name,
                Emp_salary:request.salary,
                Emp_dep:request.dep
            }
            try{ 
              await commonservice.Insert(value)
               res.send({status:"success",message:'inserted'})
                
            }catch(error){
                console.log(error);
                res.send({status:"error",message:{'not inserted':error}})
            }  
    }

const Update = async (req,res) =>{
    let request = req.body;
 
       let value ={
        condition:{
            column:request.conditionColumn,
            value:request.conditionValue,
            rangeCol:request.rangeCol,
            rangeVal:request.rangeVal

        },
        up_date:{
            column:request.updateColumn,
            value:request.updateValue
        }
    }
      try{
        let data = await commonservice.update(value)
        if(data){
            res.send('Item has been updated')

        }
        else{
            res.send('There is no item with this id')
        }
        }catch(error){
            console.log(error);
            res.send({status:"error",message:{'not updated':error}})
        }
       }
    





const Delete = async  (req,res) =>{
    let request = req.body;
    
        let value = {}
        value[request.keyColumn]=request.keyvalue
        value[request.secCol] = request.secVal

        try{
            let status = await Common.Delete(value,request)
            console.log(status);
            if(status){
                res.send({status:"success",message:'deleted'});
            }else{
                res.send('There is no item with this id')


            }
        }catch(error){
            res.send({status:"error",message:'not deleted',error:error})
        }
        }
    

        
const Scan = async (req,res) =>{
    try{
         let data = await commonservice.scan()
         res.send(data)
        
    }catch(error){
        res.send({status:"error",message:'Error in scanning..'})

    }
   

}

const Query = async (req,res) =>{
    let request = req.body;
   
        try{
            let data = await commonservice.query(request)
            console.log('From the controller',data);
            res.send({data:data});
        }catch(error){
            res.send({status:"error",message:'Error in querying..',error:error})

        }
    }


const controller = {
    Insert,Update,Delete,Scan,Query
}

export default controller