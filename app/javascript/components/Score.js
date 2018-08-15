import React from "react";
import { ScoreBar } from "../components";

/**
 * Show details related to the score of the user
 */
export function Score(props) {
    var { score, color } = props;
    return (
        <div>
            <div className="text-center">Your score:</div>
            <div className="text-center" style={ styles.scoreStyle }>{ score }</div>
            <ScoreBar score={ score } color={ color }/>
        </div>
    )
}

var styles = {
    scoreStyle: {
        fontSize: "55px",
        fontWeight: "800"
    }
}