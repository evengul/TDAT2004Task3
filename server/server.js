const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let shell = require('shelljs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

shell.cd('dockers');

app.get("/test", (request, response) => {
   response.json({status: "Good"});
   response.status(200);
});


app.post("/run-python", (request, response) => {

    console.log(request.body.toRun);

    shell.exec("echo \"" + request.body.toRun + "\" >| runfile.py");

    shell.exec("docker build --build-arg CONTENT=\"" + request.body.toRun + "\" -t my-python-app .");

    console.log("Request to run python");
    let runCommand = "docker run -e CONTENT=\"" + request.body.toRun + "\"" +
        " --rm --name=python_runner" +
        " my-python-app";
    console.log(runCommand);
    let output = shell.exec(runCommand);
    console.log(output);
    if (output.stderr === '' && output.code === 0){
        response.status(200);
        response.json({result: output});
    }
    else{
        response.status(200);
        response.json({error: output.stderr, output: output.stdout});
    }

    console.log("Result sent back.");
});

app.listen(8080);
console.log("Server running on 8080");

