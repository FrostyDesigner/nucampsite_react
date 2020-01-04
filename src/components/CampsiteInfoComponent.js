import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderCampsite(campsite) {
        return (
            <div className = "col-md-5 m-1"></div>
        );
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="row"></div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

}

export default CampsiteInfo;