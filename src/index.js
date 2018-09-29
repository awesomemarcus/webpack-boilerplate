import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import './scss/main.scss';
console.log(process.env.NODE_ENV);

class App extends React.Component {
  render() {
    return (
      <div><h1>Hello, React World!</h1></div>
    );
  }
}

const Root = hot(module)(App);

ReactDOM.render(<Root />, document.getElementById('root'));