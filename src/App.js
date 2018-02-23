import React from 'react';
import moment from 'moment';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './services/store';
import Countdown from './scenes/Countdown';
import LiveApp from './scenes/LiveApp';

import './widgets';

import './styles/normalize.css';
import './styles/skeleton.css';

const store = createStore(reducer);

const App = () => {
  const targetDate = moment(process.env.REACT_APP_DATE);
  const live = (process.env.REACT_APP_LIVE === '1') ||
    (targetDate.diff(Date.now()) < 0);

  if (live) {
    return (
      <Provider store={store}>
        <HashRouter>
          <LiveApp />
        </HashRouter>
      </Provider>
    );
  } else {
    return <Countdown />;
  }
}

export default App;
