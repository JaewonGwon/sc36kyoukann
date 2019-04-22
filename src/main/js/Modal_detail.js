import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import BadgePage from './BadgePage';


class ModalExample extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._LikeCount = this._LikeCount.bind(this);


        this.state = {
            modal: false,
            book_tags: [],
            book_viewcount: this.props.book_viewcount,
            book_likecount: this.props.book_likecount,
            book_title: this.props.book_title,
            likeFlag: false,
            buttonViewFlag: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {

        this.setState(prevState => ({
            modal: !prevState.modal
        }));



        let book_name = this.state.book_title;
        let url = "/test/request_modalTag?book_title=" + book_name;



        if (this.state.book_tags.length == 0) {
            axios.get(url)
                .then(tags => {
                    this.setState({
                        book_tags: tags.data

                    });

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        console.log(this.state.book_tags);


        let hitUrl = "/test/request_hitAdd?book_title=" + book_name;

        if (this.state.buttonViewFlag) {
            
            axios.get(hitUrl)
                .then(viewCount => {
                    this.setState({
                        book_viewcount: viewCount.data.book_viewcount,
                        buttonViewFlag: !this.state.buttonViewFlag
                    })
                console.log(this.state.book_viewcount+"viewCount");

                });

        }

    }

    _LikeCount() {
        
        console.log(this.state.likeFlag);
        if (this.state.likeFlag) { //+
            let hitLike = "/test/request_likeMinus?book_title=" + this.state.book_title;
            axios.get(hitLike)
                .then(thisBook => {
                    
                    this.setState({
                        book_likecount: thisBook.data.book_likecount,
                        likeFlag: !this.state.likeFlag
                    })
                    console.log(this.state.book_likecount);
                })

        } else {
            //-
            let hitLike = "/test/request_likeAdd?book_title=" + this.state.book_title;
            axios.get(hitLike)
                .then(thisBook => {
                    console.log(thisBook);
                    this.setState({
                        book_likecount: thisBook.data.book_likecount,
                        likeFlag: !this.state.likeFlag
                    })
                    console.log(this.state.book_likecount);
                })
        }


    }

  




    render() {
        return (
            <div>
                <div className="ModalButton">



                    <Button variant="contained" color="primary" onClick={this.toggle}>
                        {this.props.buttonLabel}Read More
                    </Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="modalheader" toggle={this.toggle}>{this.props.book_title}</ModalHeader>
                    <ModalBody>
                        <div className="imgandtag">
                            <img className="modalImage" src={this.props.book_image} />
                            <div className="modalTagsContent">
                                <BadgePage tags={this.state.book_tags} />
                            </div>
                        </div>
                        <p className="modalContent"><b>{this.props.book_content}</b></p>

                        <hr />
                        <a className="writer">{this.props.book_writer}</a>
                        <a className="publisher">{this.props.book_publisher}</a>
                        <a className="date">{this.props.book_date}</a>
                    </ModalBody>
                    <ModalFooter className="modalFooter">




                        <Button className="btn btn-primary btn-icon btn-round" type="button" id="rev_like" onClick={this._LikeCount}>
                            <i className="now-ui-icons ui-2_favourite-28" id="revlike"></i>
                        </Button><div className="heartCount">{this.state.book_likecount}</div>




                        <div className="modalButtonsClose">
                            <Button variant="contained" color="secondary" onClick={this.toggle}>Close</Button>
                        </div>
                    </ModalFooter>

                </Modal>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.book_likecount != this.state.book_likecount) {

            this.setState({
                book_likecount: this.state.book_likecount,
            })
        }
     
        
    }
}



export default ModalExample;