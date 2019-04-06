import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MyProfile from './MyProfile';
import MyBookshelf from './MyBookshelf';


class MyProfileApp extends Component {
    state = {}
    _callJson = () => {
        axios.get('/test/request_profile')
		  .then((response) => {
            console.log(response);
            this.setState(response.data)
            
          }
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
            <div className = "row profileFrame">
                <div className="col-7 ProfileApp">
                {this.state ? <MyProfile id = {this.state.id} name = {this.state.name} display_name = {this.state.display_name} email = {this.state.email} gender = {this.state.gender} address = {this.state.address} phone = {this.state.phone} /> : this.loadingSpinner()}
                </div>
                <div className="col-5">
                {this.state ? <MyBookshelf id = {this.state.id}/> : this.loadingSpinner()}
                </div>
            </div>
         )
    }


    componentDidMount() {
        this._callJson();
    }
}

export default MyProfileApp;