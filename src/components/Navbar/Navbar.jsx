import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import Logo from '../../Assets/Logo.jpg'
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
           <AppBar position="fixxed" className={CallMissedSharp.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="commerce.js" height="25px" className={classes.image} />
                        WEBSHOP BY GOVINDA
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname==='/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="show cart item" color="inherit">
                                <Badge badgeContent={ totalItems } color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>

                        </div>)}
                </Toolbar>
           </AppBar>
        </>
    )
}

export default Navbar;
