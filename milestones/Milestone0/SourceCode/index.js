const http = require('http')

const fs = require('fs')

const path = require('path')


const app = http.createServer((request,response) =>
{
    response.writeHead(200,
    {
        'Content-Type' : 'text/html'
    })

  
    let filePath =path.join(__dirname,'public', request.url === '/' ? 'index.html' : request.url)

    let ext = path.extname(filePath)

    if(!ext){
        filePath+='.html'
    }

    

    switch(ext){
        case '.html':
            contentType= 'text/css'
            break
        case '.js':
            contentType= 'text/javascript'
            break
        default:
            contentType= 'text/html'

    }

    fs.readFile(filePath,(err,content)=>{
        if(err)
        {
            fs.readFile(path.join(__dirname,'public','error.html'),(err,data)=> 
                {
                    if(err)
                    {
                        response.writeHead(500)
                        response.end("Error!!!")
                    }
                    else
                    {
                    response.writeHead(404, contentType)
                    response.end(data)
                    }
                }
            )
            
        }
        else
        {
            response.writeHead(200, contentType)
            response.end(content)
        }
    })


})

const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log('Listening on port:' + PORT)
})