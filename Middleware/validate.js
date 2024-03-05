import Joi from "joi" ;


const InsertValidate = (req,res,next) =>{
    // console.log('jhfbuyfyb');
    const request = req.body
    const InsertSchema =Joi.object( {
    id:Joi.number().required(),
    exp:Joi.number().required(),
    name:Joi.string().required(),
    salary:Joi.number().required(),
    dep:Joi.string().required()
    })
    const {error ,value} = InsertSchema.validate(request)
    if(error){
        res.send('InvaliRequestd-')
        // res.status(400).json('InvaliRequestd-')
    }else{
        console.log(value)
        next()
    }
}
const Update_delete_validator =  (req,res,next) =>{
    const request = req.body

    const update_schema= Joi.object({
        conditionColumn:Joi.string().required(),
        rangeCol:Joi.string().required(),
        conditionValue:Joi.number().required(),
        rangeVal:Joi.number().required(),
        updateColumn:Joi.string().required(),
        updateValue:Joi.string().required()
    })
    const {error ,value} = update_schema.validate(request)
if(error){
    res.send('InvaliRequestd-')
    // res.status(400).json('InvaliRequestd-')
}else{
    console.log({value})
    next()
}
}
const Delete_validation = (req,res,next) =>{
    const request = req.body
    const delete_schema= Joi.object(
        {
            keyColumn:Joi.string().required(),
            keyvalue:Joi.number().required(),
            secCol:Joi.string().required(),
            secVal:Joi.number().required()     
})
const {error ,value} = delete_schema.validate(request)
if(error){
    res.send('InvaliRequestd-')
    // res.status(400).json('InvaliRequestd-')
}else{
    console.log({value})
    next()
}
}

const FetchValidate = (req,res,next) =>{
  let request = req.body 
  const fetchSchema = Joi.object({
    keyColumn:Joi.string().required(),
    keyValue:Joi.number().required()

})
const {error,data} = fetchSchema.validate(request)
if(error){
    res.send('Invalid Request..')
}else{
    console.log(data);
    next()
}
}
// const FetchGsiValidator = (req,res) =>{
//     let request = req.body
//     let GsiValidator = Joi.object({
//         Index_name =
//     })
// }

const GsiValidator = async (req,res,next) =>{
    let request = req.body 
    const fetchSchema = Joi.object({
      keyColumn:Joi.string().required(),
      keyValue:Joi.string().required()
  
  })
  const {error,data} = fetchSchema.validate(request)
  if(error){
      res.send('Invalid Request..')
  }else{
      console.log(data);
      next()
  }
}
const DataValidator = {
    InsertValidate,Update_delete_validator,FetchValidate,Delete_validation,GsiValidator}
export default DataValidator