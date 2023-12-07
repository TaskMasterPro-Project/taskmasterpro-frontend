import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';

function CustomDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        label="Set a due date"
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