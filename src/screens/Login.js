import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField";
import Switch from '@material-ui/core/Switch';

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
    }
})

const Login = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        hasAccount: true,
    });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <div className={classes.background} >
            <div className={classes.loginBox}>
                <h1>Simple ToDo List =)</h1>
                <TextField label="Usuário"/>
                {state.hasAccount ? null : <TextField label="Email"/>}
                <TextField label="Senha"/>
                <Switch
                checked={state.hasAccount}
                onChange={handleChange}
                color="primary"
                name="hasAccount"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
        </div>
    );
};

export default Login;