import GameEngine from "./GameEngine";

class TicTacToe extends GameEngine{

    constructor(props) {
        super(props);
        this.state = {grid: this.instantiateBoard(3,3)};
        this.controller();
    }

    controller(){

    }

    drawer(){
        return super.drawer();
    }

    render() {return super.render()}

}

export default TicTacToe;


