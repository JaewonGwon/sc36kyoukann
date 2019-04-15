import React, { Component } from 'react';
import RequestButton from './RequestButton';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import Card from './Card';
import CustomExample from './InputTag/custom';
import { CaretLeft } from 'react-bytesize-icons';
import { CaretRight } from 'react-bytesize-icons';
import { Header, Icon, Image, Modal } from 'semantic-ui-react';


class Carousel extends Component {
    
    constructor(props) {
        super(props);
    }

    //버튼
    nextProperty = () => {
        const newBook_num = this.props.bookData.property.book_index + 1;
        this.setState({
            property: this.props.bookData.properties[newBook_num]
        })
    }

    prevProperty = () => {
        const newBook_num = this.props.bookData.property.book_index - 1;
        this.setState({
            property: this.props.bookData.properties[newBook_num]
        })
    }

    _renderingCards = ({ properties, property } = this.props.bookData) => {      
        return (
                    <div className="user_reco">

                        <br /><br />
                        <div className="tag_reco">

                            {/* 페이지 */}
                            <div className="page">
                                <div className="col">
                                    <div className="test123">Tag추천</div>
                                        <div className="line">
                                        {/* 버튼 */}
                                            <div className="button">

                                                <Button
                                                    className="button_right_bottom"
                                                    onClick={() => this.nextProperty()}
                                                    disabled={property.book_index === properties.length - 1}>

                                                    <CaretRight
                                                        width={80} height={80} color="#708090" />
                                                </Button>


                                                <Button
                                                    className="button_left_bottom"
                                                    onClick={() => this.prevProperty()}
                                                    disabled={property.book_index === 0}>
                                                    <CaretLeft
                                                        width={80} height={80} color="#708090" />
                                                </Button>
                                        <div className={`cards-slider active-slide-${property.book_index}`}>
                                            <div className="cards-slider-wrapper" style={{
                                                'transform': `translateX(-${property.book_index * (100 / properties.length)}%)`
                                            }}>
                                                {
                                                    properties.map(property => <Card key={property.book_num} property={property} />)
                                                }

                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }

    componentDidUpdate() {

    }

    //값 받아서 render
    render() {
        return (
            this.props.bookData.properties ? this._renderingCards() : 'no'
        );
    }
}
export default Carousel;