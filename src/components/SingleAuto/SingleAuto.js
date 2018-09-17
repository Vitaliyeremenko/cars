import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '30px auto'
  }
});

const SingleAuto = ({classes,currentAuto}) => {
  console.log(currentAuto);
  if(!currentAuto){
    return (<Redirect to="/"/>);
  }
  const {root} = classes;
  const items = Object.entries(currentAuto).map((item) =>(
    <ListItem key={item[0]}>
     {item[0]} : {item[1]}
    </ListItem>
  ));
  return (
    <div className={root}>
      <List >
        {items}
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentAuto : state.auto.currentAuto
  }
};

export default connect(mapStateToProps)(withStyles(styles)(SingleAuto));
