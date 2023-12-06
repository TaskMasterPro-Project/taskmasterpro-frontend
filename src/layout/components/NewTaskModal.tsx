import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  TextField,
  Divider,
  useTheme,
  Typography
} from '@mui/material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import CustomDatePicker from './CustomDatePicker';
import PrimaryButton from './PrimaryButton';
import CustomModal from './CustomModal';


function NewTaskModal(){
  const [modalState, setModalState] = useState(true);
  function HandleCloseModal(){
    setModalState(false);
  }
  const theme = useTheme();

  return(
      <CustomModal open={modalState} onClose={HandleCloseModal} title='Create new task' titleFontSize={32}>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          color='secondary'
          defaultValue="Create task"
          variant="outlined" 
          sx={{
            width: '100%', 
            backgroundColor: '#334E68',
            borderRadius: '15px',
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '15px',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#98AEEB', 
              },
            },
          }}
        />
        <Box display="flex" gap={1.5} alignItems="center">
          <LabelOutlinedIcon sx={{color: (theme) => theme.palette.text.secondary}}/>
          <div style={{border: '1px solid white'}}>{'placeholder Label'}</div>
          <IconButton 
            sx={{
              ml: 'auto',
              color: (theme) => theme.palette.text.secondary,
            }}>
            <ControlPointOutlinedIcon />
          </IconButton>
      </Box>
      <Divider sx={{ borderColor: '#486581', marginBlock: (1) }} />
      <Box display="flex" gap={1.5} alignItems="center">
          <PersonAddAltOutlinedIcon sx={{color: (theme) => theme.palette.text.secondary}}/>
          <div style={{border: '1px solid white'}}>{'placeholder user'}</div>
          <IconButton 
            sx={{
              ml: 'auto',
              color: (theme) => theme.palette.text.secondary,
            }}>
            <ControlPointOutlinedIcon />
          </IconButton>
      </Box>
      <Divider sx={{ borderColor: '#486581', marginBlock: (1) }} />
      <Box display="flex" gap={1.5} alignItems="center" mt={2}>
          <CalendarMonthOutlinedIcon sx={{color: (theme) => theme.palette.text.secondary}}/>
          <CustomDatePicker />
      </Box>
      <PrimaryButton text={'Add task'}/>
  </CustomModal>
  )
}

export default NewTaskModal;