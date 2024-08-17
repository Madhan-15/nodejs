
// creating server in nodejs & sending request , getting response...



// const https = require('http');
// const { type } = require('os');
//function reqlistener((req,res)=>{
    //console.log(req);
//     const url=req.url;
//     if(url==='/'){
//         res.SetHeader(Content-type , 'Text/html')
// res.write('<html></html>')
// res.write('<head><title>Its server</title></head>')
// res.write('<body><h1>helloo vro iam server</h1></body>')
//     }

// res.SetHeader(Content-type , 'Text/html')
// res.write('<html><head><title>server box</title></head></html>')
// res.write('<body><h1>its server box</h1><input placeholder= "enter_something"> its a box </input> <button>click here</button> </body>')
//})
//const server = https.createServer(reqlistener)
const https = require('http');
const fs=require('fs');
//const { log } = require('console');
//const { type } = require('os');
const server = https.createServer((req,res)=>{ 
    const url=req.url;
    const method= req.method;

    if(url==='/'){

        res.setHeader('Content-type' , 'text/html')
res.write('<html>')
res.write('<head><title>server box</title></head>')
res.write('<body><h1>its server box</h1> <form enctype="multipart/form-data" action="/message" action="/message" method="POST" > <input type= "text" name="message"> <input type="file",name="chfile"> <button type="submit" value ="send" > submit </button> </form> </body>')
res.write('</html>')
return res.end();
}
//PARSING REQUEST BODY ----BUFFER,PUSH


//server routing
if(url==='/message' && method === 'POST') {
    const body=[];
    req.on('data',(op)=>{
        body.push(op);
        //console.log('oop is :');
         //console.log(op);
    })
    req.on('end',()=>{
        const bufferans = Buffer.concat(body).toString();
        console.log(bufferans);
        
    })

    fs.writeFileSync('hello.txt','hello text file created successfully')
    fs.writeFileSync('hii.txt','hii text file created ')
    res.setHeader('Location','/') 
    res.statusCode=302;
    return res.end();
}
    res.setHeader('Content-type' , 'Text/html')
    res.write('<html>')
    res.write('<head><title>Its server</title></head>')
    res.write('<body><h1>helloo vro iam server</h1></body>')
    res.write('</html>')
    res.end();

})
server.listen(8080);