import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue({ dateLabel, setDate, date }) {
  const [value, setValue] = React.useState(dayjs(date));

  function changeDate(newValue) {
    let d = newValue.$D;
    let m = newValue.$M+1;
    let y = newValue.$y;
    if (d < 10) {
      d = "0" + d;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (y < 1000) {
      y = "0" + y;
    }
    if (y < 100) {
      y = "00" + y;
    }
    if (y < 10) {
      y = "000" + y;
    }
    let newDate=y+"-"+m+"-"+d;
    setValue(newValue);
    setDate(newDate);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={dateLabel}
        value={value}
        onChange={(newValue) => changeDate(newValue)}
      />
    </LocalizationProvider>
  );
}
