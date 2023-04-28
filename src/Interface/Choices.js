import React from 'react';
import {Link} from "react-router-dom";

const Choices = () => {

    const listOfGames = [
        {id: 1, gameName: 'Tic-Tac-Toe'},
        {id: 2, gameName: 'Connect-4'},
        {id: 3, gameName: 'Checkers'},
        {id: 4, gameName: 'Chess'},
        {id: 5, gameName: 'Sudoku'},
        {id: 6, gameName: '8-Queens'}];
    const listItems = listOfGames.map(game =>
        <button
            className="btn btn-primary fs-1 my-5 d-block"
            key={ game.id }
            style={{width: "20%"}}>
            <Link className="text-white text-decoration-none" to={`/${game.gameName}`}>{ game.gameName }</Link>
        </button>
    );

    return ( <div className="col-12"> {listItems} </div>  );
};

export default Choices;
