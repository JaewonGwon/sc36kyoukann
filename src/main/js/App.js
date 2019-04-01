import React, { Component } from 'react';
import RequestButton from './RequestButton';
import axios from 'axios';
import ReactDOM from 'react-dom';
import data from './data/data';/* o */
import data_reco from './data/data_reco';/* o */
import { Button } from 'reactstrap';/* o */
import Card_reco from './Card_reco';/* o */
import Card from './Card';
import CustomExample from './InputTag/custom';
import { Backwards } from 'react-bytesize-icons';
import { Forwards } from 'react-bytesize-icons';
import { Header, Icon, Image, Modal } from 'semantic-ui-react';


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0],
            properties_reco: data_reco.properties_reco,
            property_reco: data_reco.properties_reco[0]
        }
    }
    //버튼
    nextProperty = () => {
        const newBOOK_NUM = this.state.property.BOOK_NUM + 1;
        this.setState({
            property: data.properties[newBOOK_NUM]
        })
    }

    prevProperty = () => {
        const newBOOK_NUM = this.state.property.BOOK_NUM - 1;
        this.setState({
            property: data.properties[newBOOK_NUM]
        })
    }

    //버튼reco
    nextProperty_reco = () => {
        const newBOOK_NUM = this.state.property_reco.BOOK_NUM + 1;
        this.setState({
            property_reco: data_reco.properties_reco[newBOOK_NUM]
        })
    }

    prevProperty_reco = () => {
        const newBOOK_NUM = this.state.property_reco.BOOK_NUM - 1;
        this.setState({
            property_reco: data_reco.properties_reco[newBOOK_NUM]
        })
    }

    //값 받아서 render
    render() {
        const { properties, property, properties_reco, property_reco } = this.state;
        return (
            <div className="wrapper">
                <div className="tagInput">
                    <br /><br />
                    <CustomExample />
                </div>
                
                <div className="recommand">
                    <div className="user_reco">
                        {/* 버튼_reco */}

                        <div className="button_reco">
                            <Button
                                className="button_left"
                                onClick={() => this.nextProperty_reco()}
                                disabled={property_reco.BOOK_NUM === data_reco.properties_reco.length - 1}>
                                <Backwards
                                    width={60} height={60} color="#DB8E00" />
                            </Button>


                            <Button
                                className="button_right"
                                onClick={() => this.prevProperty_reco()}
                                disabled={property_reco.BOOK_NUM === 0}>
                                <Forwards
                                    width={60} height={60} color="#DB8E00" />
                            </Button>
                       </div>
                       
                        {/* reco 페이지 */}
                        <div className="page">
                            <div className="col">
                            <div>취향(처음 가입시 입력)추천222</div>
                                <div className={`cards-slider active-slide-${property_reco.BOOK_NUM}`}>
                                    <div className="cards-slider-wrapper" style={{
                                        'transform': `translateX(-${property_reco.BOOK_NUM * (100 / properties_reco.length)}%)`
                                    }}>
                                        {
                                            properties_reco.map(property_reco => <Card_reco key={property_reco.BOOK_INDEX} property_reco={property_reco} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br /><br />
                        <div className="tag_reco">
                            {/* 버튼 */}
                            <div className="button">
                               <Button
                                className="button_left_bottom"
                                onClick={() => this.nextProperty()}
                                disabled={property.BOOK_NUM === data.properties.length - 1}>
                                <Backwards
                                    width={60} height={60} color="#DB8E00" />
                            </Button>


                            <Button
                                className="button_right_bottom"
                                onClick={() => this.prevProperty()}
                                disabled={property.BOOK_NUM === 0}>
                                <Forwards
                                    width={60} height={60} color="#DB8E00" />
                            </Button>
                            
                            </div>
                            {/* 페이지 */}
                            <div className="page">
                                <div className="col">
                                <div className="test123">Tag추천222</div>
                                    <div className={`cards-slider active-slide-${property.BOOK_NUM}`}>
                                        <div className="cards-slider-wrapper" style={{
                                            'transform': `translateX(-${property.BOOK_NUM * (100 / properties.length)}%)`
                                        }}>
                                            {
                                                properties.map(property => <Card key={property.BOOK_INDEX} property={property} />)
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
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default App;