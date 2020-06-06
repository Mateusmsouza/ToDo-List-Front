import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { logout } from "../store/ducks/authentication";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const  ButtonAppBar = props => {
    const classes = useStyles();
    const { logout } = props;
    const goToGithub = e => {
        window.open('https://github.com/Mateusmsouza/ToDo-List-Front', '_blank').focus();
    }

    return (
    <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Simple ToDoList
            </Typography>
            <Button color="inherit" onClick={e => logout()}>Logout</Button>
            <Button color="inherit" onClick={goToGithub}>Github</Button>
        </Toolbar>
        </AppBar>
    </div>
  );
}

const mapsStateToProps = state => {
    return {
        apiErrors: state.reducerCard.apiErrors
    }
}

export default connect(
    mapsStateToProps,
    { logout }
)(ButtonAppBar);