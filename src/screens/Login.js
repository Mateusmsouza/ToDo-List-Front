import React, { useState } from "react";
import { connect } from "react-redux";
import { Alert } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormHelperText, Button, TextField } from '@material-ui/core';

import { login } from "../store/ducks/authentication";

const useStyles = makeStyles({
    background:{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,27,121,1) 25%, rgba(0,212,255,1) 97%)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    },
    loginBox: {
        marginTop: 16,
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
    const { login, apiErrors } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const onLogin = event => {
        if (username.length < 1 || password.length < 1) {
            setWarningMessage('Please enteder username and password');
        } else {
            try {
                login({username, password})
            } catch (error) {
                console.log(error);
                setWarningMessage(error.message)
            }
        }
    }
    const classes = useStyles();

    return (
        <div className={classes.background} >
            {warningMessage.length > 0 &&
                        <Alert variant="filled" severity="warning">{warningMessage}</Alert>
            }
            {apiErrors &&
                        <Alert variant="filled" severity="error">{apiErrors}</Alert>
            }
            <div className={classes.loginBox}>
                <FormControl>
                    <h1 className={classes.titleLogin}>Faire</h1>

                    <FormHelperText variant="filled"  id="welcome-text">Simple ToDoList App</FormHelperText>
                    <TextField value={username} label="User" onChange={e => setUsername(e.target.value)}/>
                    <TextField value={password} label="Password" type="password" onChange={e => setPassword(e.target.value)}/>
                    <div className={classes.buttonBox}>
                        <Button className={classes.buttonLogin} variant="contained" color="primary" onClick={e => onLogin(e)}>Submit</Button>
                        <Button className={classes.buttonLogin} variant="outlined" color="primary" onClick={e => window.location.href="/register"}>Register</Button>
                    </div>                    
                </FormControl>                
            </div>
        </div>
    );
};

const mapsStateToProps = state => {
    return {
        jwtToken: state.reducerAuthentication.key,
        user: state.reducerAuthentication.user,
        apiErrors: state.reducerAuthentication.apiErrors
    }
}
export default connect(
    mapsStateToProps,
    {login}
)(Login);