import React from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';

const styles = {
  rowColumn: {
    overflow: "scroll",
    textOverflow: "none",
    cursor: "pointer"
  }
}

const Event = (props) => {
  return (
    <TableRow onClick={ () => { props.delete(props.event.id) } }>
      <TableRowColumn style={ styles.rowColumn }>{ props.event.name }</TableRowColumn>
      <TableRowColumn style={ styles.rowColumn }>{ props.event.date }</TableRowColumn>
      <TableRowColumn style={ styles.rowColumn }>{ props.event.duration }</TableRowColumn>
      <TableRowColumn style={ styles.rowColumn }>{ props.event.location }</TableRowColumn>
      <TableRowColumn style={ styles.rowColumn }>{ props.event.recipients }</TableRowColumn>
      <TableRowColumn style={ styles.rowColumn }>Delete</TableRowColumn>
    </TableRow>
  )
}

export default Event;
