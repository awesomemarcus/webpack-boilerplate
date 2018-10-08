import React from 'react';
import { hot } from 'react-hot-loader';
import CogSVG from './svg/CogSVG';
import Routes from './routes';


class App extends React.Component {
    render() {
      return (
        <div className="">
          <Routes />
        </div>
      );
    }
  }
  
  const Root = hot(module)(App);

  export default Root;