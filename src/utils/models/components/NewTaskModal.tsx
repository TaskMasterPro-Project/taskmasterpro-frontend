import { useState } from 'react';
import {
  IconButton,
  Box,
  TextField,
  Divider,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  AvatarGroup
} from '@mui/material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ListIcon from '@mui/icons-material/List';
import CustomDatePicker from './CustomDatePicker';
import PrimaryButton from './PrimaryButton';
import CustomModal from './CustomModal';
import ItemLabel from '../../../widgets/ItemLabel';
import StyledAvatar from '../../../widgets/StyledAvatar';
import { styled, useTheme } from "@mui/material/styles";
import { secondary } from '../../theme/theme';

//Dummy data
const taskContributors = [
  'Pesho Petrov'
]
interface ContributorsProps {
  taskContributors: string[]; 
}
function Contributors({ taskContributors }: ContributorsProps) {
  if (taskContributors.length === 1) {
    return (
      <Stack direction="row" gap={0.5} alignItems="center">
        <StyledAvatar name={taskContributors[0]} colorful />
        <Typography variant="body1" fontSize={14}>{taskContributors[0]}</Typography>
      </Stack>
    );
  }
  return (
    <AvatarGroup max={5}>
      {taskContributors.map((contributor, index) => (
        <StyledAvatar key={index + contributor} name={contributor} colorful />
      ))}
    </AvatarGroup>
  );
}


function NewTaskModal(){
  const [modalState, setModalState] = useState(true);
  function HandleCloseModal(){
    setModalState(false);
  }

  // Check for the theme
  const theme = useTheme();
  const mode = theme.palette.mode;

  const StyledDivider = styled(Divider)(() => ({
    borderColor: mode === 'dark' ? secondary.secondary600 : '#76767680', 
    marginBlock: (8)
  }));

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
        <Stack direction={'row'} gap={1.5} alignItems="center">
          <LabelOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
          <Stack direction={'row'} gap={1} >
              <ItemLabel label='Front-end'/>
              <ItemLabel label='Design'/>
          </Stack>
          <IconButton 
            sx={{
              ml: 'auto',
              color: theme.palette.text.secondary,
            }}>
            <ControlPointOutlinedIcon />
          </IconButton>
        </Stack>
        <StyledDivider/>
        <Stack direction={'row'} gap={1.5} alignItems="center">
          <PersonAddAltOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
            <Contributors taskContributors={taskContributors}/>
          <IconButton 
            sx={{
              ml: 'auto',
              color: theme.palette.text.secondary,
            }}>
            <ControlPointOutlinedIcon />
          </IconButton>
        </Stack>
        <StyledDivider/>
        <Stack direction={{sm: 'row', xs: 'column'}} gap={{sm: 1.5, xs: 2}} alignItems={{sm: 'flex-end', xs: 'flex-start'}} mt={2} justifyContent={'space-between'}>
          <Stack direction='row' spacing={1} alignItems={'center'}>
            <CalendarMonthOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
            <CustomDatePicker />
          </Stack>
          <Stack direction='row' spacing={1} alignItems={'center'}>
            <ListIcon sx={{color: theme.palette.text.secondary}}/>
            <FormControl sx={{minWidth: 120}} variant='outlined' size='small'>
              <InputLabel>Add to list</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Add to list"
              >
                <MenuItem>None</MenuItem>
                <MenuItem value={'Todo'}>{'Todo'}</MenuItem>
                <MenuItem value={'Doing'}>{'Doing'}</MenuItem>
                <MenuItem value={'Testing'}>{'Testing'}</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <PrimaryButton text={'Add task'}/>
  </CustomModal>
  )
}

export default NewTaskModal;