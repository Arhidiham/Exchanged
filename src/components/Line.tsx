import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

interface LineProps {
  currency: string
  rate: number
}

function Line({ currency, rate }: LineProps) {
  return (
    <TableRow>
      <TableCell>{currency}</TableCell>
      <TableCell>{rate}</TableCell>
    </TableRow>
  );
}

export default Line;
