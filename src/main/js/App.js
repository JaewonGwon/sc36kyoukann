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


class App extends Component {
    

    constructor(props) {
        super(props);
        this.state = {}
    }

    //버튼
    nextProperty = () => {
        const newBook_num = this.state.property.book_index + 1;
        this.setState({
            property: this.state.properties[newBook_num]
        })
    }

    prevProperty = () => {
        const newBook_num = this.state.property.book_index - 1;
        this.setState({
            property: this.state.properties[newBook_num]
        })
    }


    _renderingCards = ({ properties, property } = this.state) => {
       
    
         
    
        return (
            <div className="wrapper">
                <div className="tagInput">

                    <CustomExample />
                </div>

                <div className="recommand">
                    <div className="user_reco">

                        <br /><br />
                        <div className="tag_reco">

                            {/* 페이지 */}
                            <div className="page">
                                <div className="col">
                                    <div className="tagListName">태그 검색</div>
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
                </div>
            </div>
        );
    }

    //값 받아서 render
    render() {
        return (
            this.state.properties ? this._renderingCards() : 'no'
        );
    }

    componentDidMount() {
        axios.get('/test/search')
            .then(books => {
                let book_list = books.data

                for (var i = 0; i < book_list.length; i++) {
                    book_list[i].book_index = i;

                }
                this.setState({
                    properties: book_list,
                    property: book_list[0]
                });

                console.log(book_list);
            })
            .catch(function (error) {
                console.log(error);
            });

       

    
        
    }

}
export default App;