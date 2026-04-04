
import React, { useState } from "react"
import { DatePicker, Button, Portal } from "@chakra-ui/react";
// import {TimePicker} from 'chakra-ui-time-picker';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { LuCalendar } from "react-icons/lu";

// import "react-day-picker/dist/style.css"





export default function MyDatePicker({onChange}) {

  return (
      <DatePicker.Root maxWidth="20rem">
      <DatePicker.Label>Date</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input pl={4} color={'#613101fe'}/>
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            <LuCalendar color="#613101fe"/>
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              <DatePicker.Header />
              <DatePicker.DayTable />
              <DatePicker.Context>
                {(api) => (
                  <Button
                    variant="subtle"
                    size="sm"
                    onClick={() => api.selectToday()}
                  >
                    Today
                  </Button>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}

export const MyTimePicker = ({onChange}) => {
  const [time, setTime] = useState('10:00');
  const handleChange = (value) => {
    setTime(value);
    // onChange({ target: { name: 'time', value } });
  };
  return (

    <TimePicker
      // key={time?.toISOString()}
      value={time}
      hourAriaLabel="Hour"
      clockIcon={null}
      maxTime="22:15:00"
      minTime="05:59:00"
      onChange={onChange ? onChange : handleChange }
      // onChange={(value) => setTime(value)}
      label="Select Time"
    />
  )
}