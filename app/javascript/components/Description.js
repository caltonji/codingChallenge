import React, { Component } from "react";

/**
 * Expandable description.  Maintains state of isExpanded.
 */
export class Description extends Component {
    constructor(props) {
        super(props)
        this.initState();
    }

    initState() {
        this.state = {
            expanded: false
        }
    }

    getPartialText(text) {
        var partialText = text;
        if (partialText.length > 120) {
            partialText = partialText.substring(0, 120);
            partialText += "...";
        }
        return partialText;
    }

    onToggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        var { description } = this.props;
        var { expanded } = this.state;
        var partialDescription = this.getPartialText(description);

        return (
            <div>
                <div className="center-block">{ expanded ? description : partialDescription }</div>
                <button className="btn btn-link center-block" onClick={ this.onToggleExpanded }>{ expanded ? "Read lesss" : "Read more" }</button>
            </div>
        )
    }

}