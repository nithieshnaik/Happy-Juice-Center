import express from 'express' 
import cors from 'cors' 




//app config 
const app = express() ;

const port= 3800 


// middlware 

app.use(express.json()) 
app.use(cors()) 


app.get("/" , (req ,res)=>{
       res.send('api working')
}) 


app.listen(port, ()=>{
 console.log(`server started on http://localhost:${port}`)  

 //mongodb+srv://Nithiesh:<db_password>@cluster0.ok3hb.mongodb.net/?

})