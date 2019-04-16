import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Segment, Icon, Label } from 'semantic-ui-react';
import axios from 'axios';



class ModalExample extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._ScrapCount = this._ScrapCount.bind(this);
        this._LikeCount = this._LikeCount.bind(this);


        this.state = {
            modal: false,
            book_title: this.props.book_title,
            book_tags: [],
            book_viewcount: this.props.book_viewcount,
            book_scrapcount: this.props.book_scrapcount,
            book_likecount: this.props.book_likecount,
            scrapFlag: false,
            likeFlag: false,
            buttonViewFlag: false
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
        let hitUrl = "/test/request_hitAdd?book_title=" + book_name;

        if (this.state.buttonViewFlag == false) {
            axios.get(hitUrl)
                .then(viewCount => {
                    this.setState({
                        book_viewcount: viewCount.data.book_viewcount,
                        buttonViewFlag: true
                    })

                });
        }

    }

    _LikeCount() {

        if (this.state.likeFlag == false) { //+
            
            let hitLike = "/test/request_likeAdd?book_title=" + this.state.book_title;
            axios.get(hitLike)
                .then(viewCount => {
                    this.setState({
                        book_likecount: viewCount.data.book_likecount,
                        likeFlag: true
                    })
                })
                
        } else {
            //-
            let hitLike = "/test/request_likeMinus?book_title=" + this.state.book_title;
            axios.get(hitLike)
                .then(viewCount => {
                    this.setState({
                        book_likecount: viewCount.data.book_likecount,
                        likeFlag: false
                    })
                })
        }


    }

    _ScrapCount() {


        if (this.state.scrapFlag == false) { //+
            let hitScrap = "/test/request_scrapAdd?book_title=" + this.state.book_title;
            axios.get(hitScrap)
                .then(viewCount => {
                    this.setState({
                        book_scrapcount: viewCount.data.book_scrapcount,
                        scrapFlag: true
                    })
                })
        } else {
            //-
            let hitScrap = "/test/request_scrapMinus?book_title=" + this.state.book_title;
            axios.get(hitScrap)
                .then(viewCount => {
                    this.setState({
                        book_scrapcount: viewCount.data.book_scrapcount,
                        scrapFlag: false
                    })
                })
        }

    }




    render() {
        return (
            <div>
                <div className="ModalButton">
                    <Button inverted color='orange' onClick={this.toggle}>
                        {this.props.buttonLabel}Read More
                    </Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.book_title}</ModalHeader>
                    <ModalBody>
                        <img src={this.props.book_image} />
                        <b>{this.state.book_tags}</b>
                        <b>{this.props.book_date}</b>
                        <b>{this.props.book_publisher}</b>
                        <b>{this.props.book_writer}</b>
                        <p>{this.props.book_content}</p>
                    </ModalBody>
                    <ModalFooter>


                        <Button as='div' labelPosition='right'>
                            <Button basic color='blue' onClick={this._ScrapCount}>
                                <Icon name='save' />
                                Scrap
                            </Button>
                            <Label as='a' basic color='blue' pointing='left'>
                                {this.state.book_scrapcount}
                            </Label>
                        </Button>



                        <Button as='div' labelPosition='right'>
                            <Button color='red' onClick={this._LikeCount}>
                                <Icon name='heart' />
                                Like
                            </Button>
                            <Label as='a' basic color='red' pointing='left'>
                                {this.state.book_likecount}
                            </Label>
                        </Button>



                        <div className="modalButtonsClose">
                            <Button color="orange" onClick={this.toggle}>Close</Button>
                        </div>
                    </ModalFooter>

                </Modal>
            </div>
        );
    }


}

export default ModalExample;