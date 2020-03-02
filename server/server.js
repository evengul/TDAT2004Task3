const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let shell = require('shelljs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

shell.cd('dockers');

app.get("/test", (request, response) => {
    response.status(200);
    response.json({test: "Test"});
});


app.post("/compilecpp", (request, response) => {

    console.log(request.body.toCompile);

    shell.exec("CONTENT=\"" + request.body.toCompile + "\"");

    shell.exec("docker build -t my-gcc-app .");

    console.log("Request to compile C++");
    let output = shell.exec("docker run --rm --name=compiler -a STDOUT -a STDERR my-gcc-app $CONTENT");
    console.log(output);
    if (output.stderr === '' && output.code === 0){
        response.status(200);
        response.json({result: output});
    }
    else{
        response.status(406);
        response.json({error: output.stderr});
    }

    console.log("Result sent back.");
});

app.listen(8080);
console.log("Server running on 8080");

