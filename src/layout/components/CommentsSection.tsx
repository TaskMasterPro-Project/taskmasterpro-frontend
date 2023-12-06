import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  TextField,
  Typography,
  Button
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

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
    author: 'Manuel',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Just now',
  },
];

const CommentsSection: React.FC = () => {
  return (
    <Card sx={{  bgcolor: 'background.default' }}>
      <CardContent>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Write a comment ..."
          multiline
          minRows={1}
          // Handle change and submit for the TextField
        />
        {/* Loop through comments */}
        {comments.map((comment) => (
          <CardHeader
            key={comment.id}
            avatar={
              <Avatar>{comment.author[0]}</Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={comment.text}
            subheader={comment.date}
          />
        ))}
      </CardContent>
      <Button onClick={() => console.log('Expand all comments')}>
        Expand all
      </Button>
    </Card>
  );
};

export default CommentsSection;
