import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormHelperText, Button } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";

import { actions as authenticationActions } from "../store/ducks/authentication";

const useStyles = makeStyles({
    background:{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,27,121,1) 25%, rgba(0,212,255,1) 97%)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    loginBox: {
        paddingTop: 64,
        paddingBottom: 64,
        paddingLeft: 64,
        paddingRight: 64,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titleLogin: {
        textAligns: 'center',
        marginBottom: 10,
        textShadow: '0px 1px 1px black'
    },
    buttonBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8
    }
})

const Login = props => {
    const classes = useStyles();
    const { login, logout } = props;
    const { user, key} = props; 

    return (
        <div className={classes.background} >
            <div className={classes.loginBox}>
                <h1 className={classes.titleLogin}>Faire</h1>
                <FormControl>
                    <FormHelperText variant="filled"  id="welcome-text">Simple ToDoList App</FormHelperText>
                    <TextField label="User"/>
                    <TextField label="Password" type="password"/>
                    <div className={classes.buttonBox}>
                        <Button className={classes.buttonLogin} variant="contained" color="primary" onClick={(e) => login({username: "mateus", email:"mateus_msouza@outlook.com"}, console.log(user))}>Submit</Button>
                        <Button className={classes.buttonLogin} variant="outlined" color="primary">Register</Button>
                    </div>                    
                </FormControl>                
            </div>
        </div>
    );
};

const mapsStateToProps = state => ({
        key: state.key,
        user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(authenticationActions, dispatch);

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(Login);