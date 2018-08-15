import React from "react";

/**
 * Show the score of the user with a colored bar.
 * For negative scores, fill the width of a bar that starts in the middle and goes left.
 * for positive scores, fill the width of a bar that starts in the middle and goes right.
 */
export function ScoreBar(props) {
    var { score, color } = props;
    return (
        <div style={ styles.container }>
            <div style={ styles.dottedLine }>
                <div style={ getBarStyle(score, color, true /* forLeft */) }/>
            </div>
            <div style={ getBarStyle(score, color, false /* forLeft */) }/>
        </div>
    );
}

function getBarStyle(score, color, forLeft) {
    // if this is the left bar (the negative direction) and the score is positive, display none
    // if right bar and score is negative, display none
    if (forLeft ? score >= 0 : score <= 0) {
        return { display: "none" }
    } else {
        return {
            width: Math.abs(score) / 2 + "%",
            height: "5px",
            backgroundColor: color,
        }
    }
}

var styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "20px"
    },
    dottedLine: {
        height: "20px",
        borderRight: "2px dashed lightgrey",
        width: "50%",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center"
    }
  }