import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import './scss/main.scss';
import Html5 from './assets/images/html-5.svg';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text-danger text-center">
          <Html5 width={200} id="html-5"/>
          <h1>Hello, React World!</h1>
        </div>
      </div>
    );
  }
}

const Root = hot(module)(App);

ReactDOM.render(<Root />, document.getElementById('root'));