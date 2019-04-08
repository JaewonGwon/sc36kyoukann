import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyProfile extends Component {

    state={}

    _renderProfileCard = () => {
        return (
        <div className = "col-12 text-white">
            <div className = "row profileContainer">
                <div className = "col-4">
                    <img src="http://imgnews.naver.net/image/5079/2013/01/17/755326_3-550734_44202_59_20130117104522.jpg" className="img-thumbnail col-s12"/>
                    <div className="profileID">
                        <h4>{this.props.id}</h4>
                    </div>
                    <div className="profileName">
                        <h5>{this.props.display_name}</h5>
                    </div>
                </div>
                <div className = "col-8">
                    <div className="card col-12">
                        <div className="card-body text-black">
                        <h5 className="card-title">Profile</h5>
                           L:asdafqw sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
        <div className = "col-12 text-white">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://i.ytimg.com/vi/rmTg-qHcGs4/maxresdefault.jpg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                <img src="https://i.ytimg.com/vi/rmTg-qHcGs4/maxresdefault.jpg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                <img src="https://i.ytimg.com/vi/rmTg-qHcGs4/maxresdefault.jpg" className="d-block w-100"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
        )
    }

    render() {
        return (
                <div className = "row">
                    <div className = "col-12 text-white">
                        {this._renderProfileCard()}
                        {this._renderReviewCard()}
                    </div>
                </div>
        )
    }
}

export default MyProfile;