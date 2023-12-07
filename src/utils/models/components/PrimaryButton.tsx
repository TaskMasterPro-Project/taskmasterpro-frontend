import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

type PrimaryButtonProps = {
  text: string; 
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  const theme = useTheme();
  return (
    <Button
    variant="contained"
    sx={{
      backgroundColor: theme.palette.primary.main,
      borderRadius: 1, 
      textTransform: 'none', 
      fontSize: '1rem', 
      mt: theme.spacing(2),
      width: '100%',
      padding: theme.spacing(1, 4), 
      boxShadow: 'none', 
      '&:hover': {
        backgroundColor: theme.palette.primary.dark, 
        boxShadow: 'none', 
      },
    }}
  >
    {text}
  </Button>
);
}

export default PrimaryButton;
