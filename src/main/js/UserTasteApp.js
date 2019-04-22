import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageGridList from './imageGridList';



class UserTasteApp extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="tagRecommend">
                <ImageGridList tagData = {this.state}/> 
            </div>
         )
    }
       
    componentDidMount() {
        axios.get('/test/showTags')
            .then(tags => {
                let taglist = tags.data

                this.setState({
                    tagProperties: taglist,
                    tagProperty : taglist[0]
                });
                 
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default UserTasteApp;