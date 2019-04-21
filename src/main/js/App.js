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
        this.state = {
            item: ['"공감"에 방문 하신것을 환영합니다!','상단의 검색창에 원하는 태그를 입력해보세요~','태그에 해당하는 책을 볼 수 있습니다'],
            item2:['인공지능을 활용한 책 추천 시스템 입니다','회원님이 좋아하실만한 책을 모아봤습니다.^^']
        }
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

    _renderingCards = () => {
        console.log("rendered")
        return (
            <div className="wrapper">
                <div className="tagInput">
                    <CustomExample callbackFromParent = {this.callBackList}/>
                </div>
                
                <div className="recommand_search">
                <div className="titleText1"><ReactRotatingText items={this.state.item}/></div>
                
                    <Carousel bookData = {this.state}/>
                </div>
                
                <div className="recommand_tag">
               <div className="titleText2"><ReactRotatingText items={this.state.item2} /></div>
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