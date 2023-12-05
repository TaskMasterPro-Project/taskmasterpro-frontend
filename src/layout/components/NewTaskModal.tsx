import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { DialogTitle } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Divider from '@mui/material/Divider';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';



function NewTaskModal(){
  function closeButton(){
    console.log('zele')
  }
  const theme = useTheme();
  return(
    <Dialog
      open={true}
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
      onClick={closeButton}
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
    <Box display="flex" gap={1.5} alignItems="center">
        <CalendarMonthOutlinedIcon sx={{color: (theme) => theme.palette.text.secondary}}/>
        <div style={{border: '1px solid white'}}>{'placeholder user'}</div>
        <IconButton 
          sx={{
            ml: 'auto',
            color: (theme) => theme.palette.text.secondary,
          }}>
          <ControlPointOutlinedIcon />
        </IconButton>
    </Box>
  </DialogContent>
</Dialog>
  )
}

export default NewTaskModal;