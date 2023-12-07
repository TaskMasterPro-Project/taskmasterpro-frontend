import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from '../../redux/store';

type PrimaryButtonProps = {
  text: string; 
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  const colorMode = useAppSelector((state) => state.users.colorMode);
  
  return (
    <Button
    variant="contained"
    sx={{
      backgroundColor: (theme) => theme.palette.primary.main,
      borderRadius: 1, 
      textTransform: 'none', 
      fontSize: '1rem', 
      color: '#fff',
      mt: (theme) => theme.spacing(3),
      width: '100%',
      padding: (theme) => theme.spacing(1, 4), 
      boxShadow: 'none', 
      '&:hover': {
        backgroundColor: (theme) => theme.palette.primary.dark, 
        boxShadow: 'none', 
      },
    }}
  >
    {text}
  </Button>
);
}

export default PrimaryButton;
