import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormHelperText, Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { register } from "../store/ducks/registration";

const useStyles = makeStyles({
    background:{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,27,121,1) 25%, rgba(0,212,255,1) 97%)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    },
    registerBox: {
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
        justifyContent: 'space-around',
        paddingTop: 8
    }
})

const Register = props => {
    const classes = useStyles();
    const { register, apiErrors } = props;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerScreenWarnings, setRegisterScreenWarnings] = useState('');

    const onRegister = e => {
        if (username.length < 1 || username.length < 1 || email.length < 1){
            setRegisterScreenWarnings("Please, fill all required fields to resgiter an account.");
        }else {
            let user = {
                username,
                email,
                password
            }

            register(user);
        }
    }

    return (
        <div className={classes.background}>
            {apiErrors &&
                        <Alert variant="filled" severity="error">{apiErrors}</Alert>
            }
            {registerScreenWarnings.length > 0 &&
                        <Alert variant="filled" severity="warning">{registerScreenWarnings}</Alert>
            }
            <div className={classes.registerBox}>
                <FormControl>
                    <h1 className={classes.titleLogin}>
                        Registration
                    </h1>
                    <FormHelperText>Just some infomation</FormHelperText>
                
                    <TextField label="name" required={true} value={username} onChange={e => setUsername(e.target.value)}></TextField>
                    <TextField label="email" required={true} value={email} onChange={e => setEmail(e.target.value)}></TextField>
                    <TextField label="password" type="password" required={true} value={password} onChange={e => setPassword(e.target.value)}></TextField>
                    <div className={classes.buttonBox}>
                        <Button color="primary" variant="contained" onClick={onRegister}>
                            Register
                        </Button>
                    </div>
                </FormControl>
            </div>
        </div>
    )
}

const mapsStateToProps = state => ({
    apiErrors: state.reducerRegistration.apiErrors
});
export default connect(
    mapsStateToProps,
    { register }
)(Register);