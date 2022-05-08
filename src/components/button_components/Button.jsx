import React from 'react';
import './Button.css'


class Button extends React.Component {

    state = {
        headerText: "This is the default data stored in header Text"
    }

    render() {
        return (

            <div>
                <h1>This is an example of how state works. First button is an eg of this.state and second is an
                    example of this.setState
                </h1>

                <div className='datadisplayclass'>
                    <h1>{this.state.headerText}</h1>
                </div>

                <div className='btnclass'>
                    <button onClick={() => {
                        this.state = {
                            headerText: "You changed the state and this is it"

                        }
                        console.log(this.state.headerText)

                    }}>Just Change State and See console</button>
                </div>


                <div className='btnclass'>
                    <button onClick={() => {
                        this.setState({
                            headerText: " Now Data is I am invincible"
                        })
                    }}>Change State and Rerender</button>
                </div>





            </div>



        )


    }
}
export default Button
