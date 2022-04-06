import React, {Component} from "react";

class RightComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            chat : this.props.msg
        }
    }

    render(){
        return(
            <div className="chatBox" id="rightChat">
                <p id="rightChat"> {this.state.chat} </p>
            </div>
        );
    }
}

export default RightComponent;