import React, { Component } from "react";
import MetricConverter from './components/metricConverter'
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <MetricConverter />
      </div>
    );
  }
}

export default App;
