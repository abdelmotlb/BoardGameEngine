import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TicTacToe from "../Games/TicTacToe";
import ConnectFour from "../Games/ConnectFour";
import Checkers from "../Games/Checkers";
import Chess from "../Games/Chess";
import Sudoku from "../Games/Sudoku";
import EightQueens from "../Games/EightQueens";
import 'bootstrap/dist/css/bootstrap.min.css';
import UI from "../UI";

function App() {

    const appStyle = {
        width: "101%"
    };

    return (
        <Router>
            <div className="App" style={appStyle}>
                <Switch>
                    <Route exact path="/" component={UI}/>
                    <Route exact path="/Tic-Tac-Toe" component={TicTacToe}/>
                    <Route exact path="/Connect-4" component={ConnectFour}/>
                    <Route exact path="/Checkers" component={Checkers}/>
                    <Route exact path="/Chess" component={Chess}/>
                    <Route exact path="/Sudoku" component={Sudoku}/>
                    <Route exact path="/8-Queens" component={EightQueens}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
