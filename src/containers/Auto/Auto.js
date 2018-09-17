import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as action from '../../store/actions/index';

class Auto extends Component {

  linkHandler = index => {
    this.props.changeCurrentItem(index);
    this.props.history.push(`/auto/${index}`);
  };

  render() {
    console.log(this.props);
    const {root,link} = this.props.classes;
    const {autoList} = this.props;
    const items = autoList.map((item,index) =>(
      <ListItem button key={item.Name}>
        <a className={link} onClick={() => this.linkHandler(index)} >{item.Name}</a>
      </ListItem>
    ));
    return (
      <div className={root}>
        <List >
          {items}
        </List>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '30px auto'
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  }
});

const mapStateToProps = ({auto}) => { return {autoList: auto.autoList} };

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentItem : (id) => dispatch(action.changeCurrentItem(id)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(withRouter(Auto)));
