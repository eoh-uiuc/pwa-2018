import React, { Component } from 'react';
import moment from 'moment';

import './App.css';
import './normalize.css';
import './skeleton.css';

class App extends Component {
  constructor() {
    super();
    this.open = moment('9 Mar 2018 00:00:00 CST');
    const now = moment(Date.now());
    this.state = {
      d: this.open.diff(now, 'days'),
      h: this.open.diff(now, 'hours') % 24,
      m: this.open.diff(now, 'minutes') % 60,
      s: this.open.diff(now, 'seconds') % 60
    };
  }

  componentWillMount() {
    const interval = window.setInterval(() => {
      const now = moment(Date.now());
      this.setState({
        d: this.open.diff(now, 'days'),
        h: this.open.diff(now, 'hours') % 24,
        m: this.open.diff(now, 'minutes') % 60,
        s: this.open.diff(now, 'seconds') % 60
      });
    }, 1000);

    this.intervalID = interval;
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID);
  }

  render() {
    const format = (num, size) => {
      let s = num + '';
      while (s.length < size) {
        s = '0' + s;
      }
      return s;
    };

    const d = format(this.state.d, 2);
    const h = format(this.state.h, 2);
    const m = format(this.state.m, 2);
    const s = format(this.state.s, 2);

    const count = `${d}:${h}:${m}:${s}`

    return (
      <div className="app container">
        <div className="heading">
          <img
            className="logo"
            src={require('./assets/eoh-logo.png')}
            alt="EOH Logo"
          />
          <img
            className="draft-text"
            src={require('./assets/draft-text.png')}
            alt="Drafting the future"
          />
        </div>

        <div className="countdown">
          <p>{count}</p>
        </div>
      </div>
    );
  }
}

export default App;
