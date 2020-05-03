// From Open Source project https://www.npmjs.com/package/react-calendar
// En standard kalender for React
// Den blir lastet ned med en npm kommando, for så å importere den inn her.

import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MyApp extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}