import React from "react"
import { DatePicker, Button, Portal, Box, Text } from "@chakra-ui/react";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { parseDate } from "@chakra-ui/react";





export default function MyDatePicker({onChange, name, value}) {
  // Convert YY:MM:DD format back to YYYY-MM-DD for parseDate
  const isoDate = React.useMemo(() => {
    if (!value) return '';
    try {
      const parts = value.split(':');
      if (parts.length !== 3) return '';
      const [yy, mm, dd] = parts;
      const yyyy = `20${yy}`; // Convert YY to 20YY
      return `${yyyy}-${mm}-${dd}`;
    } catch {
      return '';
    }
  }, [value]);
  
  const dateValue = React.useMemo(() => {
    if (!isoDate) return [];
    try {
      return [parseDate(isoDate)];
    } catch (e) {
      console.error('Failed to parse date:', isoDate, e);
      return [];
    }
  }, [isoDate]);

  const handleValueChange = (details) => {
    // Convert DateValue back to string for the app state in YY:MM:DD format
    let dateString = '';
    if (details.value && details.value.length > 0) {
      try {
        const isoDate = details.value[0].toDate("UTC").toISOString().split('T')[0];
        const [year, month, day] = isoDate.split('-');
        dateString = `${year.slice(-2)}:${month}:${day}`;
        console.log('Date updated to:', dateString);
      } catch (e) {
        console.error('Failed to convert date:', e);
      }
    }
    // Call onChange with just the string value (not an event object)
    onChange(dateString);
  };

  return (
    <Box>
      <Text fontSize="sm" color="#613101fe" mb={1}>Date</Text>
      <DatePicker.Root
        value={dateValue}
        onValueChange={handleValueChange}
        selectionMode="single"
      >
        <DatePicker.Control>
          <DatePicker.Input />
        </DatePicker.Control>
        <Portal>
          <DatePicker.Positioner>
            <DatePicker.Content>
              <DatePicker.Header>
                <DatePicker.ViewTrigger>
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
              </DatePicker.Header>
              <DatePicker.View view="day">
                <DatePicker.DayTable />
              </DatePicker.View>
              <DatePicker.View view="month">
                <DatePicker.MonthTable />
              </DatePicker.View>
              <DatePicker.View view="year">
                <DatePicker.YearTable />
              </DatePicker.View>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </Portal>
      </DatePicker.Root>
    </Box>
  )
}

export const MyTimePicker = ({onChange, name, value}) => {
  return (

    <Box display={'flex'} flexDirection={'column'} mt={4} justifyContent={'center'} css={{'.react-time-picker': {innerHeight: '40px'}}}>
      <Text fontSize="sm" color="#613101fe" mb={1}>Time</Text>
      <TimePicker
        onChange={(time) => onChange(time)}
        value={value}
        disableClock
        clearIcon={null}
        clockIcon={null}
        
      />
    </Box>
  )
}