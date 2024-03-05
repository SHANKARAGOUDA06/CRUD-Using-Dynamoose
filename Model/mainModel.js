import dynamoose from "../Dbconfig.js";
const New_EmpSchema = new dynamoose.Schema({
    Emp_id:Number,
    Experience:{type:'Number',rangeKey:true},
    Emp_name:String,
    Emp_salary:Number,
    Emp_dep:{type:"String",index:true}
 })

 const Db_emp = dynamoose.model('New_empDB',New_EmpSchema)

 export default Db_emp