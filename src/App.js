import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <textarea>{"int main(){\n\tcout << \"Hello\"\n}"}</textarea>
        <button>Compile and run</button>
        <textarea>Results...</textarea>
    </div>
  );
}

//Button takes textarea content and passes to a service, that passes to the server, that runs docker in node.

export default App;
