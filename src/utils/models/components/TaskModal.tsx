import { useState } from 'react';
import {
  Link,
  Grid,
  Stack,
  Avatar, 
  IconButton,
  FormControl,
  RadioGroup,
  Radio,
  Box,
  FormControlLabel,
  FormLabel,
  TextField,
  Divider,
  useTheme,
  Typography,
  styled,
  AvatarGroup
} from '@mui/material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import StyledModal from './StyledModal';
import CustomDatePicker from './CustomDatePicker';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CommentsSection from './CommentsSection';
import ItemLabel from '../../../widgets/ItemLabel';
import StyledAvatar from '../../../widgets/StyledAvatar';
import AddUsersPopover from './AddUsersPopover';
import AddLabelButton from './AddLabelButton';
import { closeTaskModal } from '../../redux/taskModal';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';


//Dummy data
const taskContributors = [
  'Pesho Petrov', 'Marto Petrov', 'Gerogi Petrov', 'Yasuo', 'Spas', 'Milenkov', 'Yorick', 'Martin Bozhilov'
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



interface TaskModalProps {
  listName: string;
}

const StyledSubHeading = styled(Typography)(({theme}) => ({
  variant: 'h4',
  fontSize: 18,
  color: theme.palette.text.secondary,
}))

const TaskModal: React.FC<TaskModalProps> = ({ listName }) => {
  const dispatch = useDispatch();
  const isTaskModalOpen = useAppSelector((state) => state.taskModal.isTaskModalOpen);
  function HandleCloseModal(){
    dispatch(closeTaskModal())
  }

  // Check for the theme
  const theme = useTheme();
  const mode = theme.palette.mode;

  return(
    <StyledModal open={isTaskModalOpen} onClose={HandleCloseModal} title='ProjectsController - Create Project, Delete Project, Edit project' titleFontSize={24} minWidth={630}>
      <Box sx={{fontSize: '14px', color: theme.palette.text.secondary }}>
        {'In List: '}
        <Link href='#' color='inherit' sx={{":hover": {color: '#14919B', fontWeight: 'bold'}}}>
          { listName}
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1, mb:(3) }} >
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <Stack direction={'column'} gap={0.5}>
              <Stack direction="row" spacing={1}>
                <PersonAddAltOutlinedIcon sx={{color: theme.palette.text.secondary}}/>
                <StyledSubHeading>Members</StyledSubHeading>
              </Stack>
              <Stack  direction="row" alignItems={'center'}>
                <Contributors taskContributors={taskContributors}/>
                <AddUsersPopover marginLeft='10px' projectMembers={taskContributors}/>
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
              <CustomDatePicker />
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
      </Box>
    <CommentsSection />
    </StyledModal>
  )
}

export default TaskModal