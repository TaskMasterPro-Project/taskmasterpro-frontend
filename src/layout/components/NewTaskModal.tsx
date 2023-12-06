import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  TextField,
  Divider,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import CustomDatePicker from './CustomDatePicker';
import PrimaryButton from './PrimaryButton';


function NewTaskModal(){
  const [modalState, setModalState] = useState(true);
  function HandleCloseModal(){
    setModalState(false);
  }

  const theme = useTheme();
  return(
    <Dialog
      open={modalState}
      PaperProps={{
        sx: {
          minWidth: 430,
          border: 1,
          borderColor: '#98AEEB',
          borderRadius: '15px',
          overflow: 'hidden' // This ensures that the content inside follows the border-radius
        },
        elevation: 2
      }}
    >
    <DialogContent
      sx={{
        padding: theme.spacing(3, 4),
        backgroundColor: theme.palette.secondary.dark,
        position: 'relative',
      }}
    >
      <IconButton
      aria-label="close"
      onClick={HandleCloseModal}
      sx={{
        position: 'absolute',
        right: 24,
        top: 16,
        color: (theme) => theme.palette.grey[300],
      }}
    >
      <CloseIcon />
      </IconButton>
      <DialogTitle sx={{ mb: 1, p: 0.5, fontSize: 32 }}>
        Create New Task
      </DialogTitle>
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
  </DialogContent>
</Dialog>
  )
}

export default NewTaskModal;