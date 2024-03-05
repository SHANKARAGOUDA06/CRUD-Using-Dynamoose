import Common from "../../Model/Common.js/common.js"
import dynamoose from "../../Dbconfig.js"



const Insert = async (value) =>{
    try{
                
        await Common.Insert(value)
        //   res.send({status:"success",message:'inserted'})
          
      }catch(error){
          throw error
        //   res.send({status:"error",message:{'not inserted':error}})
      }
}

const update = async (value) =>{
    try{
        let data = await Common.update(value)
        return data

    }
    catch(error){
        throw error
    }

}
const deleteItem = async (value) =>{
    try{

    let  status = await Common.Delete(value,request)
    return status
    }catch(error){
        throw error
    }
    
}
const scan = async () =>{
    try{
        let data = await Common.Scan()
        return data
    }catch(error){
        throw error
    }
}
const query = async (value) =>{
    try{
        let condition = new dynamoose.Condition(value.keyColumn).eq(value.keyValue)
        let data = await Common.Fetch(condition)
        return data
    }catch(error){
        throw error
    }
    
}



const commonservice = {
    Insert,update,deleteItem,scan,query
}

export default commonservice