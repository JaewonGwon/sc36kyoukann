import React, { Component } from 'react';
import RequestButton from './RequestButton';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';/* o */
import Card from './Card';
import CustomExample from './InputTag/custom';
import { Backwards } from 'react-bytesize-icons';
import { Forwards } from 'react-bytesize-icons';
import { Header, Icon, Image, Modal } from 'semantic-ui-react';


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            property: null

        }
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


    //값 받아서 render
    render() {
        const { properties, property } = this.state;
        return (
            <div className="wrapper">
                <div className="tagInput">
                    
                    <CustomExample />
                </div>

                <div className="recommand">
                    <div className="user_reco">

                        <br /><br />
                        <div className="tag_reco">
                            {/* 버튼 */}
                            <div className="button">
                                <Button
                                    className="button_left_bottom"
                                    onClick={() => this.nextProperty()}
                                    disabled={property.book_index === properties.length - 1}>
                                    <Backwards
                                        width={60} height={60} color="#DB8E00" />
                                </Button>


                                <Button
                                    className="button_right_bottom"
                                    onClick={() => this.prevProperty()}
                                    disabled={property.book_index === 0}>
                                    <Forwards
                                        width={60} height={60} color="#DB8E00" />
                                </Button>

                            </div>
                            {/* 페이지 */}
                            <div className="page">
                                <div className="col">
                                    <div className="test123">Tag추천222</div>
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

    componentDidMount() {
        axios.get('/test/search')
            .then(books => {
                let book_list = books.data
                console.log(book_list)
                for (var i = 0; i < book_list.length; i++) {
                    //delete below line after modify the db
                    delete book_list[i].book_index;
                    book_list[i].book_index = i;
                    console.log(book_list[i])
                }
                this.setState({
                    properties: book_list,
                    property: book_list[0],
                    properties_reco: book_list,
                    property_reco: book_list[0],
                    isLoading: false
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default App;