import {useEffect, useState} from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  Button,
  Stack,
  Box,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material';
import { secondary } from '../../theme/theme';
import StyledAvatar from '../../../widgets/StyledAvatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Comment } from '../Comment';
import { createComment, getCommentsForTask } from '../../axios/apiClient';
import { Project } from '../Project';
import { NewComment } from '../NewComment';

interface commentSectionProps {
  selectedProject: Project;
  taskId: number;
}

const CommentsSection: React.FC<commentSectionProps> = ({selectedProject, taskId}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  //Comments local state
  const [comments, setComments] = useState<Comment[]>([]);

  // Getting the comments
  useEffect(() => {
    if(!selectedProject && taskId){
      return
    }
    getCommentsForTask(selectedProject.id, taskId).then((comments: Comment[]) => {
      setComments(comments)
    })
  }, [comments]) 

  const [buttonExpanded, setButtonExpanded] = useState(false);
  function handleExpandButton(){
    setButtonExpanded((prevState) => !prevState);
  }

  //Creating a comment
  const handleCreateComment = async () => {
      const commentContent: NewComment = {
        content: newCommentText
      }

      await createComment(selectedProject.id, taskId, commentContent);
      setNewCommentText('');
      setIsTyping(false);
  }
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  const handleCancelTyping = () => {
    setNewCommentText('');
      setIsTyping(false);
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
        <Box sx={{mb: 2}}>
          <TextField
              multiline
              color='secondary'
              placeholder="Add a comment..."
              variant="outlined" 
              value={newCommentText}
              onChange={(e) => {
                if (e.target.value !== '') {
                  setIsTyping(true);
                } else {
                  setIsTyping(false);
                }
                setNewCommentText(e.target.value)
              }}
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
          <Stack direction={'row'} gap={1} sx={{display: isTyping ? 'flex' : 'none'}}>
            <Button variant='outlined' onClick={handleCreateComment} >Save</Button>
            <Button variant='text' color='error' onClick={handleCancelTyping}>Cancel</Button>
          </Stack>
        </Box>
        {comments.map((comment) => (
            <CardHeader
            key={comment.id}
            avatar={
              <StyledAvatar name={comment.commentOwner.firstName + ' ' + comment.commentOwner.lastName} colorful></StyledAvatar>
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
            title={comment.commentOwner.firstName + ' ' + comment.commentOwner.lastName}
            titleTypographyProps={{color: (theme) => theme.palette.text.secondary}}
            subheader={comment.content}
            subheaderTypographyProps={{color: (theme) => theme.palette.text.primary}}
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
