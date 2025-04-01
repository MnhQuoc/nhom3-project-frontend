import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
    const { onDrawerToggle } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();


    // Kiểm tra trạng thái đăng nhập từ localStorage 
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    // Hàm xử lý đăng nhập
    const handleLogin = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };



    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>

                <Toolbar>
                    {/* <Grid item xs>
                        <img src='/src/components/image/logo.jpg'
                            width={300}
                            height={150}
                            margin={20}
                            padding={-20}>
                        </img>
                    </Grid> */}
                    <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                        <Grid item>
                            <img
                                src="/src/components/image/logo.jpg"
                                alt="Logo"
                                style={{
                                    width: '200px', // Đặt chiều rộng cố định
                                    height: 'auto', // Tự động điều chỉnh chiều cao
                                }}
                            />
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Link
                                href="/"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    color: lightColor,
                                    '&:hover': {
                                        color: 'common.white',
                                    },
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Go to docs
                            </Link>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    {isLoggedIn ? (
                                        <div>
                                            <MenuItem onClick={handleClose}>My Profile</MenuItem>
                                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                        </div>
                                    ) : (
                                        <MenuItem onClick={handleLogin}>Login</MenuItem>
                                    )}
                                </Menu>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >

            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;