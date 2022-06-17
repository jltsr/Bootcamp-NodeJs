import dotenv from 'dotenv'
import  express from 'express'
dotenv.config()

const app = express()
const port = process.env.PORT || 303

app.listen(port,()=>console.log('Server listening port '+port))
app.get('/', responseText);
app.get('/json',responseJson)
app.use('*',responseNotFound)

function responseText(req,res){
    res.setHeader('Content-Type','text/plain')
    res.end('Hello NodeJs Batch 15')
}

function responseJson(req,res) {
    res.json(
        {
            employee:{
                empId : 100,
                firstName : "John",
                lastName : "Doe"
            }
        }
    )
}

function responseNotFound(req,res) {
    res.writeHead(404,{'Content-Type' : 'text/plain'})
    res.end('Page Not Found')
}