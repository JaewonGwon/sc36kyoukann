import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MyProfile from './MyProfile'


class MyProfileApp extends Component {
    state = {}
    _callJson = () => {
        axios.get('/test/testProfile')
		  .then((response) => 
            this.setState(response.data)
		  ).catch(function (error) {
		    console.log(error)
          })
    }

    loadingSpinner = () => {
        return (
            <div className="spinner-border">
                <span className="sr-only">Loading...</span>
            </div>
        )
    } 

    render() {
        return (
                <div className="ProfileApp">
                {this.state ? <MyProfile id = {this.state.id} name = {this.state.name} display_name = {this.state.display_name} email = {this.state.email} gender = {this.state.gender} address = {this.state.address} phone = {this.state.phone} /> : this.loadingSpinner()}
                </div>
         )
    }


    componentDidMount() {
        this._callJson();
    }
}

export default MyProfileApp;