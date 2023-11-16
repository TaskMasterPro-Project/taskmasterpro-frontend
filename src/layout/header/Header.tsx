import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import theme from '../../utils/theme/theme';

type Props = {}

function Header({}: Props) {
  return (
      <Box
          display="flex"
          padding="10px"
          sx={(theme) => ({
              backgroundColor: theme.palette.secondary.main,
          })}
      >
          <Box>
              <Typography variant="h2">TaskMasterPro</Typography>
          </Box>
      </Box>
  );
}

export default Header