import './root.scss';

import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import EventTable from './components/table';
import NewForm from './components/newForm';

import { formatTime, formatDate, uid } from '../../helpers';

export default class Root extends React.Component {
  constructor() {
    super();

    this.setDateStart = this.setDateStart.bind(this);
    this.setDateEnd = this.setDateEnd.bind(this);

    this.timeStart = this.setTimeStart.bind(this);
    this.timeEnd = this.setTimeEnd.bind(this);

    this.addEvent = this.addEvent.bind(this);
    this.delete = this.delete.bind(this);

    const getMoment = moment();

    this.state = {
      events: [],
      displayAddEvent: false,
      startDate: getMoment,
      endDate: getMoment,
      timeStart: getMoment,
      timeEnd: getMoment
    }
  }

  delete(id) {
    const events = this.state.events;

    for (var index in events) {
      if (events[index].id === id) {
        delete events[index];
      }
    }

    this.setState({ events: _.without(events, undefined) });

  }

  addEvent(event) {
    const curEvents = this.state.events;

    event.date = `From ${formatDate(this.state.startDate)} till ${formatDate(this.state.endDate)}`;
    event.duration = `From ${formatTime(this.state.timeStart)} till ${formatTime(this.state.timeEnd)}`
    event.id = uid();

    curEvents.push(event)

    this.setState({
      events: curEvents,
      displayAddEvent: false
    });
  }

  setTimeStart(time) {
    this.setState({ timeStart: time });
  }

  setTimeEnd(time) {
    this.setState({ timeEnd: time });
  }

  setDateStart(date) {
    this.setState({ startDate: date });
  }

  setDateEnd(date) {
    this.setState({ endDate: date });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="root">
          <div style={{ display: this.state.displayAddEvent ? 'none' : 'block' }}>
            <RaisedButton
              label="Add Event"
              primary={true}
              fullWidth={true}
              onClick={ () => { this.setState({ displayAddEvent: true }) } } />
            <EventTable
              events={ this.state.events }
              delete={ this.delete } />
          </div>
          <div style={{ display: this.state.displayAddEvent ? 'block' : 'none' }} >
            <NewForm
              submit={ this.addEvent }

              dateStartState={ this.state.startDate }
              dateEndState={ this.state.endDate }
              setDateStart={ this.setDateStart }
              setDateEnd={ this.setDateEnd }

              timeStartState={ this.state.timeStart }
              timeEndState={ this.state.timeEnd }
              setTimeStart={ this.setTimeStart }
              setTimeEnd={ this.setTimeEnd } />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
