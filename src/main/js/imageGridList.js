import React, { Component } from 'react';
import UserCheckBox from './UserCheckBox';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';


class ImageGridList extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {

            tagProperties: [],
            tagProperty: null,
            tagFinal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            memberInfo: [],
            sendDataToFython: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            


        }
         this._submit = this._submit.bind(this);
    }

    _submit = () => {

         
        let age = this.state.sendAge
        if(this.state.sendDataToFython[0]==0){
            this.setState({
                sendDataToFython: [age, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            });
        }


        //place that sending Data to python
        
        console.log(this.state.sendDataToFython);   

        axios.get('/test/joinUsFinal')
            .then(res => {
                
                if(res.data == true)
                {
                     
                     
                     window.location = '/test/index';
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            



        // console.log(this.state.tagFinal);
        // console.log(this.state.memberInfo.age);


    }


    callBackList = (dataFromChild) => {
        let tagSemiFinal = this.state.tagFinal;
        const data_dictionary = [
            '과학,기술,컴퓨터',
            '장르소설',
            '취미,오락,여행,건강',
            '철학,사상,종교',
            '자기계발',
            '경제,경영',
            '가정,육아,요리',
            '정치,사회,시사',
            '예술,문화',
            '역사,지리',
            '제태크,부동산',
            '어학,외국어',
            '문학']
        let temp_index = 0;

        for (var i = 0; i < data_dictionary.length; i++) {
            if (data_dictionary[i] == dataFromChild.tag) {
                for (var j = 0; j < tagSemiFinal.length; j++) {
                    if (j == i) {
                        if (dataFromChild.checked) {
                            tagSemiFinal[j] = 1;
                        } else {
                            tagSemiFinal[j] = 0;
                        }
                    }
                }
            }
        }
        let age = this.state.sendAge
        
        this.setState({
            tagFinal: tagSemiFinal,
            sendDataToFython:[age, ...tagSemiFinal]
        })
        // console.log(this.state.tagFinal);
        // console.log(this.state.sendDataToFython);
    }

    _renderingImages = ({ tagProperties, tagProperty, } = this.state) => {
        var root = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'

        }

        var gridList = {
            width: '55%',
            height: 965,

        }

        var icon = {
            color: 'rgba(255, 255, 255, 0.54)'
        }


        return (
            <div>
                <div>
                    <div className="title" >선호하는 태그를 선택하세요!</div>
                    <div className="root" style={root}>

                        <GridList cellHeight={350} className="gridList" style={gridList}>
                            {tagProperties.map(tagProperty => (
                                <GridListTile key={tagProperty.tag}>
                                    <img src={tagProperty.tag_image} />
                                    <GridListTileBar
                                        title={tagProperty.tag}
                                        actionIcon={
                                            <IconButton className="icon" style={icon}>

                                                <UserCheckBox
                                                    tag={tagProperty.tag}
                                                    callbackFromParent={this.callBackList} />

                                            </IconButton>
                                        }

                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div>
                        <div className="JoinFinalButton">
                            <input type="button" className="btn btn-login btn-round btn-lg" value="회원가입 완료"
                                onClick={this._submit} />
                        </div>



                    </div>
                </div>
            </div>
        );

    }

    render() {
        return (
            this.state.tagProperty ? this._renderingImages() : 'Loading'

        );


    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            this.setState({
                tagProperties: this.props.tagData.tagProperties,
                tagProperty: this.props.tagData.tagProperty
            })
        }

        // let sendDataToFython = this.state.sendDataToFython;
        // if(prevState != this.state.sendDataToFython) { 
        //     this.setState({ sendDataToFython })
        // }

    }


    
    componentDidMount() {
        axios.get('/test/getUserInfo')
            .then(res => {
                let memberInfo = res.data
                let sendAge = memberInfo.age
                let ageData = 0;
                
                if(sendAge == '10' || sendAge == '20'){
                    ageData = 1; 
                }else if(sendAge == '30'){
                    ageData = 2; 
                }else if(sendAge == '40'){
                    ageData = 3;
                }else if(sendAge == '50'){
                    ageData = 4;
                }else if(sendAge == '60'){
                    ageData = 5;
                };

                console.log(sendAge);
                console.log(ageData);

                this.setState({

                    memberInfo: memberInfo,
                    sendAge: ageData,
                    sendDataToFython: [ageData, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                });
            

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}




export default ImageGridList;