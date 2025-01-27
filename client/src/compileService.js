import axios from "axios";

export class Compile{
    static compileCPP(toCompile, callback){
        let body = {
            toCompile: toCompile
        };
        let header = {
            "Content-Type": "application/json"
        };
        console.log(JSON.stringify(body));
        axios.post("http://localhost:8080/compilecpp", body, {headers: header})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    static formatPython(toRun){
        return toRun.replace(/"/g, '\\"');
    }

    static runPython(toRun, callback){
        let body = {
            toRun: this.formatPython(toRun)
        };

        console.log(body.toRun);

        let header = {
            "Content-Type": "application/json"
        };
        axios.post("http://localhost:8080/run-python", body, {headers: header})
            .then(res => callback(res))
            .catch(err => callback(err));
    }
}