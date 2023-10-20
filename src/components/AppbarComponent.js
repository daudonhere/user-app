import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { removeToken } from '../utils/checkToken';

const settings = ['Logout'];

function AppbarComponent(props) {
  const { window } = props;
  const router = useRouter();
  const { id } = router.query;
  const [settingOpen, setSettingOpen] = useState(null);

  const handleBackClick = () => {
      router.push('/users');
  };

  const handleLogout = () => {
    removeToken();
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  const handleOpenSetting = (event) => {
    setSettingOpen(event.currentTarget);
  };

  const handleCloseSetting = () => {
    setSettingOpen(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: 'space-between' }}> {/* Menggunakan justifyContent: 'space-between' */}
          <Box>
            {id && ( // Menampilkan tombol kembali hanya jika id ada
              <IconButton size="small" color="inherit" onClick={handleBackClick}>
                <ArrowBackIosIcon />
              </IconButton>
            )}
          </Box>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenSetting} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" sx={{ width: 25, height: 25, marginLeft: 2 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '55px' }}
              id="menu-appbar"
              anchorEl={settingOpen}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(settingOpen)}
              onClose={handleCloseSetting}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleLogout}>
                  {setting && <ArrowRightIcon sx={{ mt: -0.2, ml: -1, size: '2px' }} />}
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

AppbarComponent.propTypes = {
  window: PropTypes.func,
  id: PropTypes.string, // Tambahkan prop id
};

export default AppbarComponent;
