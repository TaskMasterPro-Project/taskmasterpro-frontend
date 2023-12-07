import { useState } from 'react';
import {
  IconButton,
  Box,
  TextField,
  Divider,
  Typography
} from '@mui/material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import CustomDatePicker from './CustomDatePicker';
import PrimaryButton from './PrimaryButton';
import CustomModal from './CustomModal';
import ItemLabel from '../../../widgets/ItemLabel';
import StyledAvatar from '../../../widgets/StyledAvatar';
import { styled, useTheme } from "@mui/material/styles";
import { secondary } from '../../theme/theme';


function NewTaskModal(){
  const [modalState, setModalState] = useState(true);
  function HandleCloseModal(){
    setModalState(false);
  }

  const MyThemeComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));

  // Check for the theme
  const theme = useTheme();
  const mode = theme.palette.mode;

  return(
      <CustomModal open={modalState} onClose={HandleCloseModal} title='Create new task' titleFontSize={32}>
        <TextField
          multiline
          color='secondary'
          rows={4}
          defaultValue="Create task"
          variant="outlined" 
          sx={{
            width: '100%', 
            backgroundColor: mode === 'dark' ? secondary.secondary700 : '#FAFAFA',
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
          <ItemLabel label='Front-end'/>
          <ItemLabel label='Front-end'/>
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
          <StyledAvatar name='Pesho Petrov'/>
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