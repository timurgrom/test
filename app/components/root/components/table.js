import React from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import Event from './event';

const EventTable = (props) => {
  return (
    <Table
      selectable={ true }
      multiSelectable={ false }
    >
      <TableHeader
        displaySelectAll={ false }
        adjustForCheckbox={ false }
        enableSelectAll={ false }
      >
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Duration</TableHeaderColumn>
          <TableHeaderColumn>Location</TableHeaderColumn>
          <TableHeaderColumn>Recipients</TableHeaderColumn>
          <TableHeaderColumn>Action</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={ false }
        showRowHover={ true }
      >
        {
          props.events.map((event, index) => {
            return <Event key={ index } event={ event } delete={ props.delete } />
          })
        }
      </TableBody>
    </Table>
  )
}

export default EventTable;
