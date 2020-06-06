import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CreateOrUpdateCard from "../components/createOrUpdateCard";
import AppBarTodolist from "../components/appBar";
import { Button, CardActions, Card, CardContent, Typography } from '@material-ui/core';
import { 
    createCard as create, 
    listUserCards,
    deleteCard,
    updateCard,
    updateSelectedCard } from "../store/ducks/card";

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
    const { deleteCard, updateCard, updateSelectedCard } = props;
    const { cards } = props;
    
    const findCardById = id => {
        var pickedCard;
        cards.filter( card => {
            if (card.id == id) pickedCard = card; 
        })
        return pickedCard;
    }

    const markAsDone = id => {
        let card = findCardById(id);
        card.cardStatus = "DONE";
        updateCard(card);
    }

    const fillEditCard = id => {
        const card = findCardById(id);
        updateSelectedCard(card);
    }

    useEffect( () => {
        props.listUserCards();
      }, [])
    
    return (
        <div classes={classes.background}>
            <AppBarTodolist/>
            <CreateOrUpdateCard/>

            {cards.map( card => (
            <Card className={ classes.card } variant="outlined" key={card.id}>
            <CardContent>
                <Typography variant="h5" component="h2">{`#${card.id} - ${card.name}`}</Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>{card.description}</Typography>
                <Typography className={classes.pos} color="textSecondary">{card.status}</Typography>
                <Typography variant="body2" component="p">
                blocked by: {card.blockerCard ? `#${card.blockerCard.id} - ${card.blockerCard.name}` : ""}</Typography>
                <Typography variant="body2" component="p">
                status: {card.status ? card.status : "TO DO"}</Typography>
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
        selectedCard: state.reducerCard.selectedCard,
        apiErrors: state.reducerCard.apiErrors
    }
}
export default connect(
    mapsStateToProps,
    { create, listUserCards, updateCard, deleteCard, updateSelectedCard}
)(Home);