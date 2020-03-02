const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let shell = require('shelljs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

shell.cd('dockers');

shell.exec('docker build -t my-gcc-app .');

app.get("/test", (request, response) => {
    response.status(200);
    response.json({test: "Test"});
});

app.post("/compilecpp", (request, response) => {
    console.log("Request to compile C++");

    const createError = shell.touch('toCompile.cpp').stderr;
    if (createError){
        console.log("Could not create file: " + createError);
    }

    const copyError = shell.exec( "echo \"" + request.body.toCompile + "\"" + " >| toCompile.cpp").stderr;
    if (copyError){
        console.log("Could not add content to file: " + copyError);
    }



    if (!copyError && ! createError){
        console.log("Now running the docker file");
        shell.exec("ls");
        const {output, error, code} = shell.exec("docker run --name=compiler -it my-gcc-app");
        console.log("The file has run");
        console.log(output);
        console.log(error);
        console.log(code);
        if (!error && output){
            response.status(200);
            response.json({result: output});
        }
        else{
            response.status(406);
            response.json({error: error});
        }
    }
    else{
        response.status(501);
        response.json({error: {createError: createError, copyError: copyError}});
    }
    shell.exec('ls');
    shell.exec('cat toCompile.cpp');
});

app.listen(8080);
console.log("Server running on 8080");

