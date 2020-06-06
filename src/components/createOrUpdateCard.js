import React, { useState, useEffect } from "react";
import { Autocomplete } from '@material-ui/lab';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { 
    createCard, 
    updateCard,
    updateSelectedCard} from "../store/ducks/card";

const useStyles = makeStyles({
    background: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 8
    },
    textField: {
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8
    }
})

const CreateOrUpdateCard = props => {
    const classes = useStyles();
    const { 
        createCard,
        updateCard, 
        cards,
        selectedCard,
        updateSelectedCard
    } = props;
    
    const { 
        name, 
        description, 
        cardBlocker 
    } = selectedCard;

    const createOrUpdate = id => {
        if (id) updateCard(selectedCard)
        else createCard(selectedCard)
    }

    const typeUpdates = {
        name: "name",
        description: "description",
        blockerCard: "blockerCard"
    }

    const updateCardState = (typeUpdate, value) => {
        switch (typeUpdate) {
            case typeUpdates.name:
                updateSelectedCard(
                    {
                        ...selectedCard,
                        name: value
                    }
                )
                break;
            case typeUpdates.description:
                updateSelectedCard(
                    {
                        ...selectedCard,
                        description: value
                    }
                )
                break;
            case typeUpdates.blockerCard:
                updateSelectedCard(
                    {
                        ...selectedCard,
                        blockerCard: value
                    }
                )
            default:
                break;
        }
    }

    return (
    <div className={classes.background}>
        <div >
                <TextField
                    className={classes.textField} 
                    label="card name" 
                    required={true}
                    value={name}
                    onChange={e => updateCardState(typeUpdates.name, e.target.value)}
                    />
                
                <TextField
                    className={classes.textField}
                    label="card description" 
                    required={true}
                    value={description}
                    onChange={e => updateCardState(typeUpdates.description, e.target.value)}
                    />
                                
                <Autocomplete
                id="cardBlocker"
                value={cardBlocker}
                options={cards}
                getOptionLabel={option => `#${option.id} - ${option.name}`}
                getOptionSelected={(option, value) => {return option.id == value.id}}
                onChange={(event, value) => updateCardState(typeUpdates.blockerCard, value)}
                renderInput={(params) => (
                <TextField value={cardBlocker ? cardBlocker.name : ""} {...params} label="Card Blocker" margin="normal" variant="outlined" />
                )}/>
        </div>

        <Button 
            onClick={(e) => createOrUpdate(selectedCard.id)}
            color="primary" 
            variant="contained">
                Create/Update
        </Button>
    </div>
)}

const mapsStateToProps = state => {
    return {
        cards: state.reducerCard.cards,
        selectedCard: state.reducerCard.selectedCard,
        apiErrors: state.reducerCard.apiErrors
    }
}
export default connect(
    mapsStateToProps,
    { createCard, updateCard, updateSelectedCard}
)(CreateOrUpdateCard);