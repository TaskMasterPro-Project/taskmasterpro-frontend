import { useEffect, useState } from 'react';
import {
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
import { Task } from '../Task';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ListIcon from '@mui/icons-material/List';
import CustomDatePicker from './CustomDatePicker';
import PrimaryButton from './PrimaryButton';
import StyledModal from './StyledModal';
import ItemLabel from '../../../widgets/ItemLabel';
import StyledAvatar from '../../../widgets/StyledAvatar';
import { styled, useTheme } from "@mui/material/styles";
import { secondary } from '../../theme/theme';
import AddLabelButton from './AddLabelButton';
import AddUsersPopover from './AddUsersPopover';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import { closeModal } from '../../redux/createTaskModal';
import { ProjectMember } from '../ProjectMember';
import TaskAssignees from './TaskAssignees';
import { Assignees } from '../Assignees';
import dayjs, { Dayjs } from 'dayjs';
import { log } from 'console';



function NewTaskModal(){
  const dispatch = useDispatch();
  const isNewTaskModalOpen = useAppSelector((state) => state.createTaskModal.isModalOpen);
  const selectedProject = useAppSelector(
    (state) => state.projects.selectedProject
  );

  function handleSetAssignees(member: ProjectMember) {
    const newAssignee = {
      username: member.username,
      firstName: member.firstName,
      lastName: member.lastName,
      email: member.email
    };
  
    setAssignees(prevAssignees => {
      if (prevAssignees.some(assignee => assignee.username === newAssignee.username)) {
        return prevAssignees;
      }
      return [...prevAssignees, newAssignee];
    });
  }

  function handleDateChange(newDate: Dayjs | null) {
    const formattedDate = newDate ? dayjs(newDate).format('YYYY-MM-DD') : '';
    setDueDate(formattedDate);
  }

  function handleCloseModal(){
    dispatch(closeModal());
  }
  // Check for the theme
  const theme = useTheme();
  const mode = theme.palette.mode;

  const StyledDivider = styled(Divider)(() => ({
    borderColor: mode === 'dark' ? secondary.secondary600 : '#76767680', 
    marginBlock: (8)
  }));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(''); 
  const [assignees, setAssignees] = useState<Assignees[]>([]); 
  const [categoryId, setCategoryId] = useState(''); 
  console.log(dueDate)

  return(
      <StyledModal open={isNewTaskModalOpen} onClose={handleCloseModal} title='Create new task' titleFontSize={32}>
        <TextField multiline
            color='secondary'
            placeholder="Create task"
            variant="outlined" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              width: '100%', 
              backgroundColor: mode === 'dark' ? secondary.secondary700 : '#FAFAFA',
              borderRadius: '5px',
              mb: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: '5px',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#98AEEB', 
                },
              },
            }}
          />
        <TextField multiline
          color='secondary'
          rows={4}
          placeholder="Add task description..."
          variant="outlined" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            width: '100%', 
            backgroundColor: mode === 'dark' ? secondary.secondary700 : '#FAFAFA',
            borderRadius: '5px',
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '5px',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#98AEEB', 
              },
            },
          }}
        />
        <Stack direction={'row'} gap={1.5} alignItems="center"> {/* not functional */}
          <LabelOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
          <Stack direction={'row'} gap={1} >
              <ItemLabel label='Front-end'/>
              <ItemLabel label='Design'/>
          </Stack>
          <AddLabelButton />
        </Stack>
        <StyledDivider/>
        <Stack direction={'row'} gap={1.5} alignItems="center">
          <PersonAddAltOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
            <TaskAssignees assignees={assignees}/>
            <AddUsersPopover selectedProject={selectedProject} assignMember={handleSetAssignees}/>
        </Stack>
        <StyledDivider/>
        <Stack direction={{sm: 'row', xs: 'column'}} gap={{sm: 1.5, xs: 2}} alignItems={{sm: 'flex-end', xs: 'flex-start'}} mt={2} justifyContent={'space-between'}>
          <Stack direction='row' spacing={1} alignItems={'center'}>
            <CalendarMonthOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
            <CustomDatePicker formatDate={handleDateChange}/>
          </Stack>
          <Stack direction='row' spacing={1} alignItems={'center'}>
            <ListIcon sx={{color: theme.palette.text.secondary}}/>
            <FormControl sx={{minWidth: 120}} variant='outlined' size='small'>
              <InputLabel>Category</InputLabel>
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
  </StyledModal>
  )
}

export default NewTaskModal;