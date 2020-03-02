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

    shell.exec('docker build -t my-gcc-app .');

    console.log("Request to compile C++");

    const createError = shell.touch('toCompile.cpp').stderr;
    if (createError){
        console.log("Could not create file: " + createError);
    }

    const copyError = shell.exec( "echo \"" + request.body.toCompile + "\"" + " >| toCompile.cpp").stderr;
    if (copyError){
        console.log("Could not add content to file: " + copyError);
    }

    shell.exec("cat toCompile.cpp");

    if (!copyError && ! createError){
        let output = shell.exec("docker run --rm --name=compiler -a STDOUT -a STDERR my-gcc-app");
        if (output.stderr === '' && output.code === 0){
            response.status(200);
            response.json({result: output});
        }
        else{
            response.status(406);
            response.json({error: output.stderr});
        }
    }
    else{
        response.status(501);
        response.json({error: {createError: createError, copyError: copyError}});
    }
    console.log("Result sent back.");
});

app.listen(8080);
console.log("Server running on 8080");

