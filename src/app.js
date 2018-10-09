import React from 'react';
import { hot } from 'react-hot-loader';
import CogSVG from './svg/CogSVG';
import Routes from './routes';
import LocaleProvider from 'antd-mobile/lib/locale-provider';
import enUs from 'antd-mobile/lib/locale-provider/en_US';


class App extends React.Component {
    render() {
      return (
        <LocaleProvider locale={enUs}>
          <div className="">
            <Routes />
          </div>
        </LocaleProvider>
      );
    }
  }
  
  const Root = hot(module)(App);

  export default Root;