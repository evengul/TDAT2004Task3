import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Compile} from "./compileService";

export class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            toCompile: "int main(){\n" +
                "\tcout << \"Hello World\";\n" +
                "\treturn 0;\n" +
                "}"
        };
    }
    render(){
        return (
          <div>
              <textarea className={"compileText"} defaultValue={this.state.toCompile} onChange={this.setToCompile}/>
              <button onClick={this.compile}>Compile!</button>
              <textarea disabled={true}/>
          </div>
        );
    }

    setToCompile(event) {
        this.setState({toCompile: event.target.value});
    };

    compile = () => {
        Compile.compileCPP(this.state.toCompile, () => {
            console.log("React callback");
        });
    }
}

//Button takes textarea content and passes to a service, that passes to the server, that runs docker in node.

export default App;
