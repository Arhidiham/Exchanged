import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import currencies from '../data/currencies.json';

function CurrencySelect() {
  const items = currencies.map(
    (currency) => <MenuItem value={currency}>{currency}</MenuItem>,
  );
  return (
    <div style={{ display: 'inline-block' }}>
      <InputLabel id="currencyLabel">Currency</InputLabel>
      <Select labelId="currencyLabel" id="currencySelect" defaultValue="NZD">
        {items}
      </Select>
    </div>
  );
}

export default CurrencySelect;
