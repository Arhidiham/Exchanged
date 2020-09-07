import React from 'react'
import moment from "moment"
import MomentUtils from '@date-io/moment'
import {
    DatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers'

moment.locale('nz')

function CurrencyDate() {
  const locale = 'nz'
  const currentDate = new Date();
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
      <DatePicker
        label="Date"
        value={currentDate}
        /* onChange={handleDateChange(date)} */
      />
    </MuiPickersUtilsProvider>
  )
}

export default CurrencyDate
