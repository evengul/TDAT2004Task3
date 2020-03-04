import React, {Component} from 'react';
import './App.css';
import {Compile} from "./compileService";

export class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            toRun: "print(\"Some message\")",
            result: ""
        };
    }
    render(){
        return (
          <div>

              <textarea className={"runText"} defaultValue={this.state.toRun} onChange={this.setToRun}/>
              <button onClick={this.run}>Compile!</button>
              <textarea disabled={true} value={this.state.result}/>
          </div>
        );
    }

    setToRun = (event) => {
        this.setState({toRun: event.target.value});
    };

    run = () => {
        Compile.runPython(this.state.toRun, (data) => {
            if (data.data.error){
                this.setState({result: "Error: " + data.data.error});
            }
            else{
                this.setState({result: data.data.result})
            }

        });
    }
}

//Button takes textarea content and passes to a service, that passes to the server, that runs docker in node.

export default App;
