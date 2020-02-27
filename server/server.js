const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let shell = require('shelljs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

console.log("Test");
shell.exec('docker build -t my-gcc-app ./dockers');

app.get("/test", (request, response) => {
    response.status(200);
    response.json({test: "Test"});
});

app.post("/compilecpp", (request, response) => {
    console.log("Request to compile C++");

    shell.cd("dockers");

    const createError = shell.touch('toCompile.cpp').stderr;
    if (createError){
        console.log("Could not create file: " + createError);
    }

    const copyError = shell.exec( "\"" + response.data.toCompile + "\"" + " > toCompile.cpp", {silent: true}).stderr;
    if (copyError){
        console.log("Could not add content to file: " + copyError);
    }

    shell.cd("..");

    if (!copyError && ! createError){
        const {output, error, code} = shell.exec("docker run -it --rm --name compiling my-gcc-app", {silent: true});
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

    shell.cd("dockers");
    shell.rm('toCompile.cpp');
    shell.cd("..");


    /*let compilation;
    let run;

    let _container;

    const docker = new Docker({socketPath:'var/run/docker.sock'});

    docker.container.create({
        Image: 'archlinux',
        name: 'test'
    })
        .then(container => container.start())
        .then(container => {
            _container = container;
            return container.exec.create({
                AttachStdout: true,
                AttachStderr: true,
                Cmd: ['touch', 'toCompile.cpp']
            })
        })
        .then(exec => exec.start({Detach: false}))
        .then(() => _container.exec.create({
                AttachStdout: true,
                AttachStderr: true,
                Cmd: [request.body.toCompile, '>', 'toCompile.cpp']
            }))
        .then(exec => exec.start({Detach: false}))
        .then(() => _container.exec.create({
            AttachStdout: true,
            AttachStderr: true,
            Cmd: ['clang++', '-o', 'compiled', 'toCompile.cpp']
        }))
        .then(exec => exec.start({Detach: false}))
        .then(stream => {
            stream.on('data', data => compilation = data);
            stream.on('error', data => compilation = data);
        })
        .then(() => _container.exec.create({
            AttachStdout: true,
            AttachStderr: true,
            Cmd: ['./compiled']
        }))
        .then(exec => exec.start({Detach: false}))
        .then(stream => {
            stream.on('data', data => run = data);
            stream.on('error', data => run = data);
        })
        .then(() => _container.status())
        .then(container => container.stop())
        .then(container => container.delete({force: true}))
        .then(() => {
            response.status(200);
            response.json({compilation: compilation, run: run});
        })
        .catch(err => {
            console.log(err);
            response.status(500);
            response.json({error: err});
        });*/
});

app.listen(8080);
console.log("Server running on 8080");

