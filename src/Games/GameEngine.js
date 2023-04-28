import {Component} from 'react';
import {Col, Row} from "react-bootstrap";


class GameEngine extends Component {

    singlePlayer = false;

    board = {
        rows: 0,
        cols: 0
    }

    cell = {
        height: 0,
        width: 0,
        default_color: null,
        alternating_color: null,
        shape: null,
        piece: null
    }

    piece = {
        name: '',
        source: null,
        id: null
    }

    controller() {}

    instantiateBoard(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        return Array.from(Array(rows), () => new Array(cols).fill(null));
    }

    drawer() {

        const data = this.state.grid;

        return <div className="grid-container">
            {data.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    <Row>
                        {row.map((cell, cellIndex) => (
                            <Col>
                                <div key={cellIndex} className="grid-cell">{cell}</div>
                            </Col>
                    ))}
                    </Row>
                </div>
            ))}
        </div>
    }

    render() {
        return this.drawer();
    }

}

export default GameEngine;
