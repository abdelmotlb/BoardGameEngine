import React from 'react';
import Choices from "./Interface/Choices";

const Ui = () => {
    return (
        <div className="container">
            <div className="row" style={{marginLeft: "33%", width: "50%"}}>
                <div className="col">
                    <button className="btn btn-info fs-3 disabled" style={{  width: "50%" }}>
                        Board Games <i className="fa fa-chess-board"></i>
                    </button>
                </div>
            </div>
            <div className="row" style={{marginLeft: "40%"}}>
                <Choices />
            </div>
        </div>
    );
};

export default Ui;
