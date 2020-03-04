import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Compile} from "./compileService";

export class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            toRun: "print(\"Hello World\")"
        };
    }
    render(){
        return (
          <div>
              <textarea className={"runText"} defaultValue={this.state.toRun} onChange={this.setToRun}/>
              <button onClick={this.run}>Compile!</button>
              <textarea disabled={true}/>
          </div>
        );
    }

    setToRun = (event) => {
        this.setState({toRun: event.target.value});
    };

    run = () => {
        Compile.runPython(this.state.toCompile, () => {
            console.log("React callback");
        });
    }
}

//Button takes textarea content and passes to a service, that passes to the server, that runs docker in node.

export default App;
