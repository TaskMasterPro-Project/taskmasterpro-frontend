import {useState} from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  TextField,
  Typography,
  Button,
  Stack,
  Box,
  Menu,
  MenuItem
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material';

import { secondary } from '../../theme/theme';
import StyledAvatar from '../../../widgets/StyledAvatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

const comments: Comment[] = [
  {
    id: '1',
    author: 'Patricia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2 days ago',
  },
  {
    id: '2',
    author: 'James',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '1 day ago',
  },
  {
    id: '3',
    author: 'Louise',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '1 hour ago',
  },
  {
    id: '4',
    author: 'Yorick',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Just now',
  },
];


const CommentsSection: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const [buttonExpanded, setButtonExpanded] = useState(false);

  function handleExpandButton(){
    setButtonExpanded((prevState) => !prevState);
  }

  // Comments options logic
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openCommentOptions = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // TO DO Handle edit action
    handleClose();
  };

  const handleDelete = () => {
    // TO DO Handle delete action
    handleClose();
  };

  return (
    <Card sx={{  bgcolor: mode === 'dark' ? secondary.secondary900 : secondary.secondary50}}>
      <CardContent>
        <TextField
            multiline
            color='secondary'
            placeholder="Add a comment..."
            variant="outlined" 
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
        {comments.map((comment) => (
          <CardHeader
            key={comment.id}
            avatar={
              <StyledAvatar name={comment.author} colorful></StyledAvatar>
            }
            action={
              <Box>
                <IconButton
                  aria-label="more"
                  id="options-button"
                  aria-controls={openCommentOptions ? 'options-menu' : undefined}
                  aria-expanded={openCommentOptions ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ml: '5px'}}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="options-menu"
                  elevation={2}
                  anchorEl={anchorEl}
                  keepMounted
                  open={openCommentOptions}
                  onClose={handleClose}>
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem style={{ color: 'red' }} onClick={handleDelete}>Delete</MenuItem>
                </Menu>
              </Box>
            }
            title={comment.text}
            subheader={comment.date}
            sx={{alignItems: 'flex-start'}}
          />
        ))}
      </CardContent>
      <Stack alignItems={'center'} mb={1}>
        <Button 
          endIcon={!buttonExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon /> } 
          onClick={handleExpandButton}>
          {!buttonExpanded ? 'Expand more' : 'Expand less'}
        </Button>
      </Stack>
    </Card>
  );
};

export default CommentsSection;
