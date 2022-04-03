import React, {Component} from "react";

class LeftComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            chat : this.props.msg
        }
    }

    render(){
        return(
            <div className="chatBox" id="leftChat">
                <p id="leftChat"> {this.state.chat} </p>
            </div>
        );
    }
}

export default LeftComponent;