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
}