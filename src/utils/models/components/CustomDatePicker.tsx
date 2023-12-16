import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

interface CustomDatePickerProps {
  formatDate: (newValue: Dayjs | null) => void;
}

function CustomDatePicker({formatDate}: CustomDatePickerProps) {
  const [dateValue, setDateValue] = useState<Dayjs | null>(null)

  function dateValueHandler(newValue: Dayjs | null){
    setDateValue(newValue);
    formatDate(newValue);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        label="Set a due date"
        value={dateValue}
        onChange={(newValue) => dateValueHandler(newValue)}
        slots={{
          openPickerIcon: KeyboardArrowDownIcon,
          
        }}
        slotProps={{
          textField: {
            variant: 'outlined',
            size: 'small',
          },
        }}
        sx={{
          width: '170px',
          boderRadius: '15px',
          ':hover': { outline: 'red'}
        }}
        />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;