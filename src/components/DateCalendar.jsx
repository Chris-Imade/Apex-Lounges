import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRangePicker  } from 'react-date-range';

const DateCalendar = () => {

  const handleSelect = (date) => {
    console.log(date); // native Date object
  }
  const handleDateRange = (ranges) => {
    console.log(ranges);
  }

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  return (
    <>
    <div>Calendar</div>
      <Calendar
        date={new Date()}
        onChange={handleSelect}
      />
      <div>Date range picker</div>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleDateRange}
      />
    </>
  )
}

export default DateCalendar;