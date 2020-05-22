import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { createCard as create } from "../store/ducks/card";
import { FormControl, FormHelperText, Button, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
    background: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    },
    displayFlexCentered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    textField: {
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8
    }

})

const Home = props => {
    const classes = useStyles();
    const [cardName, setCardName] = useState('')
    const [cardDescription, setCardDescription] = useState('')
    const [cardBlocker, setCardBlocker] = useState(undefined) 
    const items = [1, 2, 3, 4];

    const createCard = e => {
        const card = {
            name: cardName,
            description: cardDescription,
            blockerCard: cardBlocker
        }
        props.create(card)
    }
    return (
        <div classes={classes.background}>
            <div className={classes.displayFlexCentered}>
                <div >
                    <TextField
                        className={classes.textField} 
                        label="card name" 
                        required={true}
                        value={cardName}
                        onChange={e => setCardName(e.target.value)}/>
                    
                    <TextField
                        className={classes.textField}
                        label="card description" 
                        required={true}
                        value={cardDescription}
                        onChange={e => setCardDescription(e.target.value)}/>
                    
                    <Autocomplete
                    id="cardBlocker"
                    options={["1","2","3","4","5"]}
                    renderInput={(params) => (
                    <TextField {...params} value={cardBlocker} onChange={e => setCardBlocker(e.target.value)} label="Card Blocker" margin="normal" variant="outlined" />
                    )}/>
                </div>
                <Button 
                    onClick={createCard}
                    color="primary" 
                    variant="contained">
                        Create
                </Button>
            </div>

            {items.map( item => <h1 key={item}>item</h1>)}
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        apiErrors: state.reducerCard.apiErrors
    }
}
export default connect(
    mapsStateToProps,
    {create}
)(Home);