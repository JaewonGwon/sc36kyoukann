import React, { Component } from 'react';
import RequestButton from './RequestButton';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CustomExample from './InputTag/custom';
import Carousel from './Carousel';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }

    callBackList = (dataFromChild) => {
        let booklist = dataFromChild;
        for (var i = 0; i < booklist.length; i++) {
            booklist[i].book_index = i;
        }
        this.setState({properties : booklist,
                       property : booklist[0]
        });
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
                    <CustomExample callbackFromParent = {this.callBackList}/>
                </div>
                <div className="recommand">
                    <Carousel bookData = {this.state}/>
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
        
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        //여기에서 Modal Call 해서 Render하기
        return nextState.properties.length !== 0;
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