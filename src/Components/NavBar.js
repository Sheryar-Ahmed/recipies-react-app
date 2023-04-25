import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SwipeableTemporaryDrawer from './Drawer';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display:'flex',
  alignItems:'center',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {


  return <>

    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ background: '#2F2FA2' }}>
        <Toolbar>
          <SwipeableTemporaryDrawer />
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Recipies
          </Typography>

          <Paper
            component="form"
            sx={{ p: '10px 4px', }}
            onSubmit={props.submitHand}
          >
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                value={props.search}
                onChange={props.searchHand}
                style={{ height: '5px' }}
              />
              <ClearIcon fontSize='2px' onClick={props.clearHand} />
            </Search>
          </Paper>

        </Toolbar>
      </AppBar>
    </Box>
  </>
}
