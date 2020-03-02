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

let initCPP = "#include <iostream> \n int main(){std::cout << \"Hello World!\" << std::endl; return 0;}";


shell.exec('docker build --build-arg CONTENT=\"' + initCPP + '\" -t my-gcc-app .');

app.post("/compilecpp", (request, response) => {

    console.log("Request to compile C++");
    console.log(request.body.toCompile);
    let output = shell.exec("docker run --rm --name=compiler -a STDOUT -a STDERR --env CONTENT=\"" + request.body.toCompile + "\" my-gcc-app");
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

