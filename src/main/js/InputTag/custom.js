import React, { Component } from 'react';
import Chips from '../ChipsSrc/Chips';
import CustomChip from '../ChipsSrc/CustomChip';
import axios from 'axios';


class CustomExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  onChange = value => {
    this.setState({ value });
  }

  render() {
    return (
      <Chips
        className = "chipsStyle"
        value={this.state.value}
        onChange={this.onChange}
        placeholder="태그로 책을 찾아보세요!"
      	suggestions={this.state.data}
        renderChip={(item) => (
          <CustomChip image={item.image}>{item.name}</CustomChip>
        )}
        fromSuggestionsOnly={true}
        renderSuggestion={(item, { query }) => (
          <div
            style={style}
            key={item.name}>
            <img src={item.image} width={24} height={24} style={{margin: 5}}/>{item.name}
          </div>
        )}
        suggestionsFilter={(opt, val) => (
          opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
        )}
        getSuggestionValue={suggestion => suggestion.name}
      	/>
    );
  }
  componentDidMount() {
 axios.get('/test/search_tag')
        .then(res => {
            let tag_list = res.data
            let result = []
            for(var i = 0 ; i < tag_list.length ; i++) {
                let obj = tag_list[i];
                obj.name = obj.tag;
                delete obj.tag;
                obj.image = obj.tag_image;
                delete obj.tag_image;
                console.log(i);
                result.push(obj);
            }
            console.log(result);
            return result;
        }).then(tag_list => {
        this.setState({
                   data: tag_list
                });

        })
    }
}

const style = {
  display: "flex",
  alignItems: "center",
  padding: '2px 6px',
  cursor: 'default'
}




export default CustomExample;
