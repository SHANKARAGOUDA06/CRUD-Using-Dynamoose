import { error, log } from 'console';
import dynamoose from 'dynamoose'
import AWS from 'aws-sdk'

// Create new DynamoDB instance
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": "fakeMyKeyId",
        "secretAccessKey": "fakeSecretAccessKey"
    },
    "region": "ap-south-1"
});
dynamoose.aws.ddb.set(ddb) ;
dynamoose.aws.ddb.local()  // becoz my db is running over the 8000 port..



//-------------------------------Creating a Schema----------------------------------------------------

 

//---------------------------------------Creating a Table or Model------------------------------
//  const Emp_model = dynamoose.model('Employee',EmpSchema)

//---------------------------Inserting the item to the Model or Table --------------------------------

const create =async (value)=>{
    try{
        await Db_emp.create(value)
        console.log('Inserted');
        Scan()
    }catch(error){
        console.log('error',error);
    }
}
    

      


//--------------------------Reading Data From Database--------------------------------------




//--------------------------Fetching-------------------------------


// Fetching({
//     keyColumn:"Emp_name",
//     KeyValue:'Aathavan'
// })
function Scan(){
    Db_emp.scan().exec().then(data=>console.log(data)).catch(error=>console.log(error));

}

//-----------------------------update Item--------------------------------------

const update =async () =>{
    // const condition = new dynamoose.Condition().where('Emp_salary').eq(5324)

    
        Db_emp.update({'Emp_id':100},{'Emp_name':'Wolfiee'},(err,data)=>{
            if(!err){
                console.log("Data Updated");
                
            }else{
                console.log("Error in updating data",err);
        }
    })
    
}
// update();


//--------------------------------------Deleting Item -----------------------------

const Delete  = async () =>{
    try{
    await Db_emp.delete({'Emp_id':110,"Experience":3})   
    console.log('deleted..');    

    }catch(error){
        console.log("Error in deleting item",error);
        return false;
    }
};

//----------------------------------------------New All---------------------------

const New_EmpSchema = new dynamoose.Schema({
    Emp_id:Number,
    Experience:{type:'Number',rangeKey:true},
   
    Emp_name:String,
    Emp_salary:Number,
    Emp_dep:{type:"String",index:true}
 })
 console.log(New_EmpSchema.hashKey);

 const Db_emp = dynamoose.model('New_empDB',New_EmpSchema)

 let value = {Emp_id:101,
    Experience:2,
    Emp_name:"IronMan",
    Emp_salary:450000,
    Emp_dep:'IT'
}

// Delete()

// create(value)


// update()
const Fetching = async(value) =>{
    // let condition = new dynamoose.Condition('Emp_name').contains('God')
 
     try{
 
      
     
 //    let data =await Db_emp.query(value.keyColumn).eq(value.KeyValue).exec()
 let data = await Db_emp.query(value).exec()
    console.log(data,'helol0 moto ');
     }
     catch(error){
         console.log('error in fetching', error);
     }
 }

let condition = new dynamoose.Condition('Emp_dep').eq('Arts')
// console.log(condition);
//  Fetching(condition)
// Scan()


// Db_emp.update({
//     Emp_id:100,Experience:2
// },{Emp_salary:'gvf'})

// Db_emp.delete(2)
let data = await Db_emp.batchGet([{'Emp_id':46,'Experience':1},{'Emp_id':22,'Experience':1}])
console.log(data);

