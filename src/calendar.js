// From the Open Source project https://www.npmjs.com/package/react-calendar
// A standard calendar for React
// It is downloaded by a npm command, and then imported here.

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