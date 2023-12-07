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
  Typography
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


interface TaskModalProps {
  listName: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ listName }) => {
  const [modalState, setModalState] = useState(true);
  function HandleCloseModal(){
    setModalState(false);
  }

  const theme = useTheme();

  return(
    <StyledModal open={modalState} onClose={HandleCloseModal} title='ProjectsController - Create Project, Delete Project, Edit project' titleFontSize={24}>
      <Box sx={{fontSize: '14px', color: '#BCCCDC' }}>
        {'In List: '}
        <Link href='#' color='inherit' sx={{":hover": {color: '#14919B'}}}>
          { listName}
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1, mb:(3) }} >
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{display: 'flex', gap: 0.5, flexDirection: 'column'}}>
            <Stack direction="row" spacing={1}>
              <PersonAddAltOutlinedIcon sx={{color: '#D9E2ECCC'}}/>
              <Typography variant='h4' fontSize={18} color={'#D9E2EC'} >Members</Typography>
            </Stack>
            <Stack  direction="row" alignItems={'center'}>
              <Stack direction="row" alignItems={'center'} spacing={-1}>
              <StyledAvatar name='Alexander'/>
              <StyledAvatar name='Plexander'/>
              <StyledAvatar name='Gosho Geshev'/>
              <StyledAvatar name='Gosho Geshev'/>
              </Stack>
              <IconButton size='small'
                  sx={{
                    ml: 1.5, 
                    color: (theme) => theme.palette.text.secondary,
                  }}>
                  <ControlPointOutlinedIcon sx={{ fontSize: 30, }}/>
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box sx={{display: 'flex', gap: 0.5, flexDirection: 'column'}}>
            <Stack direction="row" spacing={1}>
              <LabelOutlinedIcon sx={{color: '#D9E2ECCC'}}/>
              <Typography variant='h4' fontSize={18} color={'#D9E2EC'} >Labels</Typography>
            </Stack>
            <Stack  direction="row" alignItems={'center'}>
              <Stack direction="row" alignItems={'center'} spacing={1} flexWrap={'wrap'}>
                <ItemLabel label='Front-end' />
                <ItemLabel label='Back-end' />
              </Stack>
              <IconButton size='small'
                  sx={{
                    ml: 1.5, 
                    color: (theme) => theme.palette.text.secondary,
                  }}>
                  <ControlPointOutlinedIcon sx={{ fontSize: 30, }}/>
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box sx={{display: 'flex', gap: 0.5, flexDirection: 'column'}}>
            <Stack direction="row" spacing={1} mb={1}>
              <CalendarMonthOutlinedIcon sx={{color: '#D9E2ECCC'}}/>
              <Typography variant='h4' fontSize={18} color={'#D9E2EC'}>Due Date</Typography>
            </Stack>
            <CustomDatePicker />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box sx={{display: 'flex', gap: 0.5, flexDirection: 'column'}}>
            <Stack direction="row" spacing={1}>
              <NotificationsOutlinedIcon sx={{color: '#D9E2ECCC'}}/>
              <Typography variant='h4' fontSize={18} color={'#D9E2EC'}>Notifications</Typography>
            </Stack>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="notifications"
                name="notifications"
              >
                <FormControlLabel value="enabled" control={<Radio />} label="Enabled" />
                <FormControlLabel value="disabled" control={<Radio />} label="Disabled" />
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