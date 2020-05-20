import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { createCard as create } from "../store/ducks/card";

const useStyles = makeStyles({
    background:{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        
    }

})

const Home = props => {
    var classes = useStyles();
    const items = [1, 2, 3, 4];

    const createCard = e => {
        const card = {
            name: "fazer delete",
            description: "necessario fazer o resto do car",
            blockerCard: undefined
        }
        props.create(card)
    }
    return (
        <div classes={classes.background}>
            <div>
                <input placeholder="card name"></input>
                <input placeholder="card description"></input>
                <input placeholder="card blocker"></input>
                <button onClick={createCard}>Create</button>
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