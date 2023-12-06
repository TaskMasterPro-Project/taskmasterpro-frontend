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
import CustomModal from './CustomModal';
import CustomDatePicker from './CustomDatePicker';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CommentsSection from './CommentsSection';


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
    <CustomModal open={modalState} onClose={HandleCloseModal} title='ProjectsController - Create Project, Delete Project, Edit project' titleFontSize={24}>
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
                <Avatar sx={{ width: '30px', height: '30px'}}>H</Avatar>
                <Avatar sx={{ bgcolor: '#FCEFC7', width: '30px', height: '30px' }}>N</Avatar>
                <Avatar sx={{ bgcolor: '#BED0F7', width: '30px', height: '30px' }}>OP</Avatar>
                <Avatar sx={{ bgcolor: '#BED0F7', width: '30px', height: '30px' }}>K</Avatar>
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
                <div style={{border: '1px solid white'}}>{'placeholder Label'}</div>
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
    </CustomModal>
  )
}

export default TaskModal