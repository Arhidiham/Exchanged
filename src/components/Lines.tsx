import React from 'react';
import {
  Table, TableHead, TableCell, TableBody, TableRow,
} from '@material-ui/core';
import Line from './Line';
import data from '../data/default.json';

function Lines() {
  const lines = data.map(
    (line) => <Line currency={line.currency} rate={line.rate} />,
  );
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Currency</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lines}
      </TableBody>
    </Table>
  );
}

export default Lines;
