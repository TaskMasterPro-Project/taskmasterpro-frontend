import { useEffect, useState } from 'react';
import {
  Link,
  Grid,
  Stack,
  FormControl,
  RadioGroup,
  Radio,
  Box,
  FormControlLabel,
  useTheme,
  Typography,
  styled,
  TextField,
  Button,
} from '@mui/material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StyledModal from './StyledModal';
import { secondary } from '../../theme/theme';
import CustomDatePicker from './CustomDatePicker';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CommentsSection from './CommentsSection';
import ItemLabel from '../../../widgets/ItemLabel';
import AddUsersPopover from './AddUsersPopover';
import AddLabelButton from './AddLabelButton';
import { closeTaskModal, editTask } from '../../redux/taskModal';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import TaskAssignees from './TaskAssignees';
import { Assignees } from '../Assignees';
import { ProjectCategory } from '../ProjectCategory';
import { ProjectMember } from '../ProjectMember';
import { getProjectCategories } from '../../axios/apiClient';
import dayjs, { Dayjs } from 'dayjs';
import { NewTask } from '../NewTask';
import PrimaryButton from './PrimaryButton';

const StyledSubHeading = styled(Typography)(({theme}) => ({
  variant: 'h4',
  fontSize: 18,
  color: theme.palette.text.secondary,
}))

const TaskModal = () => {
  const dispatch = useAppDispatch();
  //task state
  const { isTaskModalOpen, taskId, taskTitle, taskDesc, taskDueDate, taskAssignees, taskCategoryId } = useAppSelector((state) => state.taskModal);
  // closing the modal
  function HandleCloseModal(){
    setTitle('');
    setDescription('');
    setDueDate('');
    setAssignees([]);
    setCategoryId(null);
    setCategoryName('');
    dispatch(closeTaskModal())
  }

  // Get selected project
  const selectedProject = useAppSelector(
    (state) => state.projects.selectedProject
  );

  // local states
  const [title, setTitle] = useState(taskTitle);
  const [description, setDescription] = useState(taskDesc);
  const [dueDate, setDueDate] = useState(taskDueDate); 
  const [assignees, setAssignees] = useState<Assignees[]>(taskAssignees); 
  const [projectCategories, setProjectCategories] = useState<ProjectCategory[]>([])
  const [categoryId, setCategoryId] = useState<number | null>(taskCategoryId); 
  const [categoryName, setCategoryName] = useState<string | null>(null)

  useEffect(() => {
    setTitle(taskTitle);
    setDescription(taskDesc);
    setDueDate(taskDueDate);
    setAssignees(taskAssignees);
    setCategoryId(taskCategoryId);
  }, [taskTitle, taskDesc, taskDueDate, taskAssignees, taskCategoryId]);
  //Assignees logic
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

  //Project categories
  useEffect(() => {
    if (!selectedProject) {
      return;
  }
    getProjectCategories(selectedProject.id).then((projectCategories: ProjectCategory[]) => {
      setProjectCategories(projectCategories);
    })
  }, [selectedProject])

  // Setting the category name to display it in the modal
  useEffect(() => {
    const foundCategory = projectCategories.find((category) => category.id === categoryId);
    setCategoryName(foundCategory ? foundCategory.name : '');
  },[projectCategories, categoryId])

  // date picker logic
  function handleDateChange(newDate: Dayjs | null) {
    const formattedDate = newDate ? dayjs(newDate).format('YYYY-MM-DD') : '';
    setDueDate(formattedDate);
  }

  //Description logic
  const [descIsEdited, setDescIsEdited] = useState(false);
  function editTaskDescription(){
    setDescIsEdited((prev) => !prev)
  }

  // Check for the theme
  const theme = useTheme();
  const mode = theme.palette.mode;

  //Put Request
  const handleEditTask = () => {
    // if(!validateForm()){
    //   alert("Please fill in all required fields."); // You can replace this with a more sophisticated feedback mechanism
    //   return;
    // }
    const assigneesUsernames = assignees.map((assignee) => assignee.username);
    const newTask: NewTask = {
      title: title,
      description: description,
      dueDate: dueDate, 
      assignees: assigneesUsernames,
      categoryId: categoryId,
    };

    dispatch(editTask(newTask)); 
    HandleCloseModal(); 
  };

  return(
    <StyledModal open={isTaskModalOpen} onClose={HandleCloseModal} title={title} titleFontSize={24} minWidth={630}>
      <Box sx={{fontSize: '14px', color: theme.palette.text.secondary, mb: 1 }}>
        {'In List: '}
        <Link href='#' color='inherit' sx={{":hover": {color: '#14919B', fontWeight: 'bold'}}}>
          { categoryName }
        </Link>
      </Box>
      <Stack gap={0.5} mt={2}>
        <StyledSubHeading>Description</StyledSubHeading>
        <Stack direction={'row'} gap={1}>
          <TextField multiline
              placeholder="Add task description..."
              variant="outlined" 
              fullWidth
              disabled={!descIsEdited}
              focused={descIsEdited}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                backgroundColor: mode === 'dark' ? secondary.secondary700 : '#FAFAFA',
                borderRadius: '5px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#98AEEB', 
                  },
                },
              }}
            />
          <Button variant="text" onClick={editTaskDescription}>
            {descIsEdited ? 'Save' : 'Edit'}
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ flexGrow: 1, mb:(3) }} >
        <Grid container spacing={2} mt={1} mb={2}>
          <Grid item xs={12} sm={6}>
            <Stack direction={'column'} gap={0.5}>
              <Stack direction="row" spacing={1}>
                <PersonAddAltOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
                <StyledSubHeading>Members</StyledSubHeading>
              </Stack>
              <Stack  direction="row" alignItems={'center'}>
              <TaskAssignees assignees={assignees}/>
              <AddUsersPopover marginLeft='10px' selectedProject={selectedProject} assignMember={handleSetAssignees}/>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box sx={{display: 'flex', gap: 0.5, flexDirection: 'column'}}>
              <Stack direction="row" spacing={1}>
                <LabelOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
                <StyledSubHeading>Labels</StyledSubHeading>
              </Stack>
              <Stack  direction="row" alignItems={'center'}>
                <Stack direction="row" alignItems={'center'} spacing={1} flexWrap={'wrap'} useFlexGap>
                  <ItemLabel label='Front-end' />
                  <ItemLabel label='Back-end' />
                </Stack>
                <AddLabelButton marginLeft='10px'/>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box sx={{display: 'flex', gap: 0.5, flexDirection: 'column'}}>
              <Stack direction="row" spacing={1} mb={1}>
                <CalendarMonthOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
                <StyledSubHeading>Due Date</StyledSubHeading>
              </Stack>
              <CustomDatePicker taskDate={dueDate} formatDate={handleDateChange}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box sx={{display: 'flex', gap: 0.5, flexDirection: 'column'}}>
              <Stack direction="row" spacing={1}>
                <NotificationsOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
                <StyledSubHeading>Notifications</StyledSubHeading>
              </Stack>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="notifications"
                  name="notifications"
                >
                  <FormControlLabel style={{color: theme.palette.text.secondary}} value="enabled" control={<Radio />} label="Enabled"/>
                  <FormControlLabel style={{color: theme.palette.text.secondary}} value="disabled" control={<Radio />} label="Disabled" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <PrimaryButton onClick={handleEditTask} text={'Edit task'}/>
      </Box>
    <CommentsSection />
    </StyledModal>
  )
}

export default TaskModal