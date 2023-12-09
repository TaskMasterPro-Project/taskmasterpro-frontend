import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import StyledAvatar from '../../../widgets/StyledAvatar';
import { Popover,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  ListItemText,
  ListItemButton
} from '@mui/material'
import { useTheme } from "@mui/material/styles";

interface Props{
  projectMembers: string[],
  marginLeft? : string | number,
}

const AddUsersPopover: React.FC<Props> = ({projectMembers, marginLeft}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
          <IconButton 
            onClick={handleClick}
            sx={{
              ml: marginLeft ? marginLeft : 'auto',
              color: theme.palette.text.secondary,
            }}>
            <ControlPointOutlinedIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List disablePadding>
            {projectMembers.map((member, index) => (
              <>
                <ListItem key={index}  disablePadding >
                <ListItemButton sx={{paddingInline: 1}}>
                  <ListItemAvatar  sx={{ minWidth: '46px' }}>
                    <StyledAvatar name={member} width='36px' colorful/>
                  </ListItemAvatar>
                  <ListItemText primary={member} />
                </ListItemButton>
                </ListItem>
                <Divider component="li" />
              </>
            ))}
          </List>
        </Popover>
    </>
  );
}

export default AddUsersPopover;