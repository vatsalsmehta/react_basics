import React from "react";


import Header from '../header_component/Header';


class data extends React.Component {


    state = {
        data: "This data is stored in a state and loaded via a prop"
    }

    render() {

        return (
            <div>
                <Header headTitle={this.state.data} />

            </div>
        );
    }
}


export default data