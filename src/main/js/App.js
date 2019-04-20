import React, { Component } from 'react';
import RequestButton from './RequestButton';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CustomExample from './InputTag/custom';
import Carousel from './Carousel';
import ReactRotatingText from './ReactRotatingText';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }

    callBackList = (dataFromChild) => {
        console.log("callBackList")
        let booklist = dataFromChild;
        for (var i = 0; i < booklist.length; i++) {
            booklist[i].book_index = i;
        }
        this.setState({properties : booklist,
                       property : booklist[0]
        });
        console.log(this.state)
    }

    _loadingSpinner = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            </View>
        );
    }

    _renderingCards = () => {
        console.log("rendered")
        return (
            <div className="wrapper">
                <div className="tagInput">
                    <CustomExample callbackFromParent = {this.callBackList}/>
                </div>
                
                <div className="recommand_search">
                <div className="titleText1"><ReactRotatingText /></div>
                
                    <Carousel bookData = {this.state}/>
                </div>
                
                <div className="recommand_tag">
               <div className="titleText2"><ReactRotatingText /></div>
                    <Carousel bookData = {this.state}/>
                </div>
            </div>
        );
    }

    //값 받아서 render
    render() {
        return (
            this.state.properties ? this._renderingCards() : 'Loading...'
        );
    }
        
    shouldComponentUpdate(nextProps, nextState) {
        //여기에서 Modal Call 해서 Render하기
        return true;
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