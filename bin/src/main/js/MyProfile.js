import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyProfile extends Component {

    state={}

    _renderProfileCard = () => {
        return (
        <div className = "col-12 bg-secondary text-white">
            <div className = "row profileContainer">
                <div className = "col-6">
                    <img src="https://i.pinimg.com/originals/b9/da/9f/b9da9f3d691e707fe9a1b76c928caed4.jpg" className="img-thumbnail col-s12"/>
                    <div className="profileID">
                        <h1>{this.props.id}</h1>
                    </div>
                    <div className="profileName">
                        <h4>{this.props.name}</h4>
                    </div>
                </div>
                <div className = "col-6">
                
                    <div className="card col-12">
                        <div className="card-body text-black">
                        <h5 className="card-title">Profile Summary</h5>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </div>
                    </div>
                
                <div className = "col-12">
                <div className = "row">
                </div>
                </div>
                </div>
            </div>
        </div>
        )
    }

    _renderReviewCard = () => {
        return (
        <div className = "col-12 bg-warning text-white">
        Review Frame
        </div>
        )
    }

    _renderBookshelf = () => {
        return (
            <div className = "col-5 bg-success text-white">
                bookshelf
            </div>
        )
    }


    render() {
        return (
                <div className = "row">
                    <div className = "col-7 bg-primary text-white">
                        {this._renderProfileCard()}
                        {this._renderReviewCard()}
                    </div>
                    {this._renderBookshelf()}
                </div>
        )
    }
}

export default MyProfile;