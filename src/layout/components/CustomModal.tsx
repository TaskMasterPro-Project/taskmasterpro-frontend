import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  titleFontSize: number;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, title, titleFontSize, children }) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          minWidth: 430,
          border: 1,
          borderColor: '#98AEEB',
          borderRadius: '15px',
          overflow: 'hidden',
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
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 24,
            top: 16,
            color: (theme) => theme.palette.grey[300],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle sx={{ mb: 1, p: 0, maxWidth: '90%', fontWeight: 'bold', fontSize: titleFontSize }}>
          <Typography variant='h2' fontSize={'inherit'} >{title}</Typography>
        </DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;