import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormHelperText, Button, TextField } from '@material-ui/core';

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
        justifyContent: 'space-between',
        paddingTop: 8
    }
})

const Register = props => {
    const classes = useStyles();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classes.background}>
            <div1 className={classes.registerBox}>
                <FormControl>
                    <h1 className={classes.titleLogin}>
                        Registration
                    </h1>
                    <FormHelperText>Just some infomation</FormHelperText>
                
                    <TextField label="name" required={true}></TextField>
                    <TextField label="email" required={true}></TextField>
                    <TextField label="password" type="password" required={true}></TextField>
                    <div className={classes.buttonBox}>
                        <Button color="primary" variant="contained">
                            Apply
                        </Button>
                    </div>
                </FormControl>
            </div1>
        </div>
    )
}

export default Register;