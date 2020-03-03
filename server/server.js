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

    shell.exec("docker build -t my-python-app .");

    console.log("Request to run python");
    let runCommand = "docker run --env CONTENT=\"" + request.body.toRun + "\"" +
        /*" -a STDOUT -a STDERR " +
        " --rm --name=python_runner" +*/
        " my-python-app env";
    console.log(runCommand);
    let output = shell.exec(runCommand);
    console.log(output);
    if (output.stderr === '' && output.code === 0){
        response.status(200);
        response.json({result: output});
    }
    else{
        response.status(406);
        response.json({error: output.stderr, output: output.stdout});
    }

    console.log("Result sent back.");
});

app.listen(8080);
console.log("Server running on 8080");

