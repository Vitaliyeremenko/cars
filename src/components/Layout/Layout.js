import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const styles = {
  flex: {
    flex: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

const Layout = ({classes,children}) => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          React & Material-UI Sample Application
        </Typography>
        <NavLink to='/' className={classes.link}><Button color="inherit">Автомобили</Button></NavLink>
        <NavLink to='/info' className={classes.link}><Button color="inherit">Информация</Button></NavLink>
      </Toolbar>
    </AppBar>
    <main>{children}</main>
  </React.Fragment>
);

export default  withStyles(styles)(Layout);