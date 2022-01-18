const http = require('http');
const PORT = 8000;
require("./db/conn");
const AppForm = require("./model/formSchema");

const server = http.createServer((req,res)=>{
    if(req.url === "/") {
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        });
        req.on('end', ()=>{
            res.end(body);
            const p = JSON.parse(body);
            console.log(p);
            let {name, email, phoneNo, date} = p;
            const appForm = new AppForm({name, email, phoneNo, date});
            appForm.save();
        })
    }
});

server.listen(PORT, (err)=>{
    if(err){
        console.log(`there is an error ${err}`);
    }else {
        console.log(`Server is Listen at Port No: ${PORT}`);
    }
})