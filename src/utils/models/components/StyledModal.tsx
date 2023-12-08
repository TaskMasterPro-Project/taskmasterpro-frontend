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
  minWidth?: number
}

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, title, titleFontSize, minWidth, children }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          minWidth: {sm: minWidth ? minWidth : 430, xs: 300},
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
          backgroundColor: theme.palette.background.default,
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
            color: theme.palette.text.primary,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle sx={{ mb: 1, p: 0, maxWidth: '90%', fontWeight: 'bold', fontSize: titleFontSize }}>
          <Typography variant='h2' fontSize={'inherit'} fontWeight={'bold'}>{title}</Typography>
        </DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};
//n200 n600

export default CustomModal;