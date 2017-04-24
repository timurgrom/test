import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

import React from 'react';
import TimePicker from 'rc-time-picker';
import DatePicker from 'react-datepicker';
import { RaisedButton } from 'material-ui';

const NewForm = (props) => {
  return (
    <form style={{ backgroundColor: "#FFF" }}>
      <div className="form-left">
        <div className="form-left-container">
          <label>Name</label>
          <div><input placeholder="Event Name" type="text"
            ref={ (input) => { this.name = input } }
          /></div>
        </div>
        <div className="form-left-container">
          <label>Location</label>
          <div><input placeholder="Location" type="text"
            ref={ (input) => { this.location = input } }
          /></div>
        </div>
        <div className="form-left-container">
          <label>Email</label>
          <div><input placeholder="Email" type="email"
            ref={ (input) => { this.email = input } }
          /></div>
        </div>
      </div>
      <div className="form-right">
        <div className="datepicker-container">
          <h4>Pick a Date</h4>
          <DatePicker className="my-datepicker"
            selected={ props.dateStartState }
            selectsStart
            startDate={ props.dateStartState }
            onChange={ props.setDateStart }
          />
          <DatePicker className="my-datepicker"
            selected={ props.dateEndState }
            selectsEnd
            startDate={ props.dateStartState }
            onChange={ props.setDateEnd }
          />
        </div>
        <div className="timepicker-container">
          <h4>Pick the Time</h4>
          <TimePicker className="my-timepicker"
            defaultValue={ props.timeStartState }
            showSecond={ false }
            onChange={ props.setTimeStart }
          />
          <TimePicker className="my-timepicker"
            defaultValue={ props.timeEndState }
            showSecond={ false }
            onChange={ props.setTimeEnd }
          />
        </div>
      </div>
      <div className="button">
        <RaisedButton label="Submit" primary={ true } fullWidth={ true } style={{ display: "block" }} onClick={
          () => {
            const values = {
              name: this.name.value,
              location: this.location.value,
              recipients: this.email.value,
            }

            if (values.name === '' || values.location === '' || values.recipients === '') {
              return alert('Please fill all the inputs');
            }

            if (values.recipients.indexOf('@') === -1) {
              return alert('Please fill a valid Email');
            }

            props.submit(values);
          }
        } />
      </div>
    </form>
  );
}

export default NewForm;
