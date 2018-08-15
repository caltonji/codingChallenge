import React, { Component } from "react"
import { getName, getDescription, getScore, getImageUrl, getColor } from "../utils/qualities"
import { Description, Score } from "../components";

/**
 * This is passed a quality object and displays details related to that Quality
 */
export class Quality extends Component {

    getPanelStyles(quality) {
        return {
            borderColor: getColor(quality),
            borderWidth: "4px" 
        }
    }

    getHeadingStyles(quality) {
        return {
            backgroundColor: getColor(quality),
            borderRadius: 0,
            color: "#fff",
            fontSize: "22px"
        }
    }

    render() {
        var { quality } = this.props;
        return (
            <div className="panel panel-default" style={ this.getPanelStyles(quality) }>
                <div className="panel-heading text-center" style={ this.getHeadingStyles(quality) }>{ getName(quality) }</div>
                <div className="panel-body">
                    <img className="center-block" style={ styles.imageStyle } src={ getImageUrl(quality) }/>
                    <Score score={ getScore(quality) } color={ getColor(quality) }/>
                    <Description description={ getDescription(quality) }/>
                </div>
            </div>
        );
    }
}

var styles = {
    imageStyle: {
        width: "125px",
        height: "125px"
    }
}
