import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, TextField, CardActions, Card, CardContent, Typography } from '@material-ui/core';
import { 
    createCard as create, 
    listUserCards,
    deleteCard,
    updateCard } from "../store/ducks/card";

const useStyles = makeStyles({
    background: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    },
    cardControl: {
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
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 8,
        paddingBottom: 8
    },
    button: {
        margin: 8
    }
    

})

const Home = props => {
    const classes = useStyles();
    const {create, deleteCard, updateCard} = props;
    const { cards } = props;

    const [cardName, setCardName] = useState('')
    const [cardId, setCardId] = useState(null)
    const [cardDescription, setCardDescription] = useState('')
    const [cardStatus, setCardStatus] = useState(null)
    const [cardBlocker, setCardBlocker] = useState(null)

    const createCard = () => {
        const card = {
            name: cardName,
            description: cardDescription,
            blockerCard: cardBlocker,
            cardStatus: cardStatus || "TODO"
        }

        create(card)
    }

    const update = () => {
        if (cardId == null) return;
        const card = {
            id: cardId,
            name: cardName,
            description: cardDescription,
            blockerCard: cardBlocker,
            cardStatus: cardStatus || "TODO"
        }

        updateCard(card);
        setCardId(null);
        setCardStatus(null);
    }

    const createOrUpdate = e => {
        if (cardId == null){
            createCard();
        } else {
            update();
        }
    }

    const markAsDone = id => {
        console.log('here')
        var pickedCard;
        cards.filter( card => {
            if (card.id == id) pickedCard = card; 
        })

        setCardStatus("DONE");
        update();
    }

    const handleBockerChange = blocker => {
        if(blocker) {
            setCardBlocker(blocker)
        } else {
            setCardBlocker(null)
        }
    }

    const fillEditCard = id => {
        var pickedCard;
        cards.filter( card => {
            if (card.id == id) pickedCard = card; 
        })
        setCardId(id);
        setCardName(pickedCard.name);
        setCardDescription(pickedCard.description);
        setCardBlocker(pickedCard.blockerCard);
    }

    useEffect( () => {
        props.listUserCards();
      }, [])
    
    return (
        <div classes={classes.background}>
            <div className={classes.cardControl}>
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
                    value={cardBlocker}
                    options={cards}
                    getOptionLabel={option => option.name}
                    getOptionSelected={(option, value) => {return option.id == value.id}}
                    onChange={(event, value) => handleBockerChange(value)}
                    renderInput={(params) => (
                    <TextField value={cardBlocker ? cardBlocker.name : ""} {...params} label="Card Blocker" margin="normal" variant="outlined" />
                    )}/>
                </div>
                <Button 
                    onClick={createOrUpdate}
                    color="primary" 
                    variant="contained">
                        Create
                </Button>
            </div>
                                
            {cards.map( card => (
            <Card className={ classes.card } variant="outlined" key={card.id}>
            <CardContent>
                <Typography variant="h5" component="h2">{`#${card.id} - ${card.name}`}</Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>{card.description}</Typography>
                <Typography className={classes.pos} color="textSecondary">{card.status}</Typography>
                <Typography variant="body2" component="p">
                blocked by: {card.blockerCard ? `#${card.blockerCard.id} - ${card.blockerCard.name}` : ""}</Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.button} size="small" color="primary" variant="contained" onClick={
                    e => fillEditCard(card.id)
                }>Edit</Button>
                <Button className={classes.button} size="small" onClick={e => deleteCard(card.id)}>Delete</Button>
                <Button className={classes.button} size="small" onClick={e => markAsDone(card.id)}>Mark as Done</Button>
            </CardActions>
            </Card>))}
        </div>
    )
}

const mapsStateToProps = state => {
    return {
        cards: state.reducerCard.cards,
        apiErrors: state.reducerCard.apiErrors
    }
}
export default connect(
    mapsStateToProps,
    { create, listUserCards, updateCard, deleteCard}
)(Home);