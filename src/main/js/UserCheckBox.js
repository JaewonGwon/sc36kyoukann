import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class UserCheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isChecked: false };

        this.handleChecked = this.handleChecked.bind(this);

    }




    handleChecked(event) {
        this.setState({ isChecked: !this.state.isChecked });
        // console.info(event.target.checked);
        let sendData = {
            tag: this.props.tag,
            checked: !this.state.isChecked
        }
        this.props.callbackFromParent(sendData);
    }



    render() {
        var txt;
        var tag = this.props.tag;
        let checkedList = [];

        if (this.state.isChecked) {
            txt = 'checked'


        } else {
            txt = 'unchecked'
        }


        return (

            <div >
                <Checkbox

                    onChange={this.handleChecked}

                />

            </div>




        );




    }
}



export default UserCheckBox;