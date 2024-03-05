import express from 'express' ;
import bodyParser from 'body-parser';
import controller from './Controller/controller.js';
import InsertValidate from './Middleware/validate.js';
import DataValidator from './Middleware/validate.js';



const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>res.send('its working.. Table Name id Emp_model'))
app.post('/Insert',DataValidator.InsertValidate,controller.Insert)
app.post('/Delete',DataValidator.Delete_validation,controller.Delete)

app.post('/FetchAll',controller.Scan)

app.post('/Update',DataValidator.Update_delete_validator,controller.Update)

app.post('/Fetch',DataValidator.FetchValidate,controller.Query)
app.post('/FetchWithGsi',DataValidator.GsiValidator,controller.Query)
// app.post('/Fetch',)


app.listen(3200,console.log('Running on 32000'))