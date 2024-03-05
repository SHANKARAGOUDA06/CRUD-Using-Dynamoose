import dynamoose from "../../Dbconfig.js";
import Db_emp from "../mainModel.js";

const Insert =async (value)=>{
    try{
        await Db_emp.create(value)
        return {status:true}
     
     
    }catch(error){
        throw error
        return {status:false,error:error}

    }
}

const Fetch = async(value) =>{
    try{
        // console.log(value, 'from common');
   let data = await Db_emp.query(value).exec()
     return data
    }
    catch(error){
        throw error
    }
}

const Scan = async () => {
    try {
      const data = await Db_emp.scan().exec();
      return data;
    } catch (error) {
      return error 
    }
  };
  

const update = async (value) => {
    
        const condition = {};
        condition[value.condition.column] = value.condition.value;
        condition[value.condition.rangeCol]=value.condition.rangeVal

        const updateData = {};
        updateData[value.up_date.column] = value.up_date.value;
        let UpdateCheck ={
            keyColumn:value.condition.column,
            keyvalue :value.condition.value,
            secCol:value.condition.rangeCol,
            secVal:value.condition.rangeVal
        }
        
      console.log(UpdateCheck);

    try {
        const upCheck = await CheckFetch(UpdateCheck)
        
        if(upCheck.length>0){
            
            await Db_emp.update(condition, updateData,{ overwrite: false });
            return true

        }else{
            return false
        }
       
    } catch (error) {
        return error
    }
}

const Delete  = async (value,request) =>{
    try{
        let keyColumn=Object.keys(value)[0]
        
        const upCheck = await CheckFetch(request)
        console.log(upCheck);
        
    if(upCheck.length>0){

        Db_emp.delete(value)  
        return true

    }else{
        return false
    }
    }
    catch(error){
       throw error ;  
    }
}

const CheckFetch = async(value) =>{
    try{    
        console.log(value.keyColumn,value.keyvalue,value.secCol,value.secVal);
          let data = await Db_emp.query(value.keyColumn).eq(value.keyvalue).where(value.secCol).eq(value.secVal).exec()
          console.log(data);
          return data

    }catch(error){
         throw error
    }
}





const Common = {
    Insert,update,Delete,Fetch,Scan}

export default Common