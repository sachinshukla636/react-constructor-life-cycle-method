import React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    console.log('constructor');
  }
  render() {
    console.log('render');
    return <h2>Hello World</h2>;
  }
}
export default App;
