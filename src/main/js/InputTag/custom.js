import React, { Component } from 'react';
import Chips from '../ChipsSrc/Chips';
import CustomChip from '../ChipsSrc/CustomChip';

const data = [
  {name: 'SF', image: 'http://i.stack.imgur.com/Mmww2.png'},
  {name: '호러', image: 'https://www.codementor.io/assets/tutorial_icon/ruby-on-rails.png' },
  {name: '로맨스', image: 'http://www.iconarchive.com/download/i73027/cornmanthe3rd/plex/Other-python.ico' },
  {name: 'Love', image: 'https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/Java.png' },
  {name: 'Fantasy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNaPStsM3XwWDAgvjFfT5RFcDxuynJUJmY4lH5PSMyhphA9hA' },
  {name: 'aaaaaaaaaaaaaaaaa++', image: 'http://www.freeiconspng.com/uploads/c--logo-icon-0.png' },
  {name: 'aaaaaaaaaaaaaaaaa', image: 'http://www.compindiatechnologies.com/images/icon/c.gif' },
  {name: 'aaaaaaaaaaaaaaaaa C', image: 'http://2.bp.blogspot.com/-BuR1DpqQprU/U5CQ_0w2L7I/AAAAAAAABZY/H9wbfbO-kew/s1600/iOS_Objective_C.png' },
  {name: 'aaaaaaaaaaaaaaaaa', image: 'https://www.codemate.com/wp-content/uploads/2015/11/go-lang-icon-180x180.png' },
  {name: 'aaaaaaaaaaaaaaaaa++', image: 'http://www.freeiconspng.com/uploads/c--logo-icon-0.png' },
  {name: 'aaaaaaaaaaaaaaaaa', image: 'http://www.compindiatechnologies.com/images/icon/c.gif' },
  {name: 'aaaaaaaaaaaaaaaaa C', image: 'http://2.bp.blogspot.com/-BuR1DpqQprU/U5CQ_0w2L7I/AAAAAAAABZY/H9wbfbO-kew/s1600/iOS_Objective_C.png' },
  {name: 'aaaaaaaaaaaaaaaaa', image: 'https://www.codemate.com/wp-content/uploads/2015/11/go-lang-icon-180x180.png' },
];

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
      	suggestions={data}
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
}

const style = {
  display: "flex",
  alignItems: "center",
  padding: '2px 6px',
  cursor: 'default'
}

export default CustomExample;
