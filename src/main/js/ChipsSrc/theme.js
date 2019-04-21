import { Placeholder } from "semantic-ui-react";

const theme = {
    chipsContainer: {
      display: "flex",
      position: "relative",
      border: "solid 2px",
      backgroundColor: 'transparent',
      font: "18px Arial",
      minHeight: 24,
      alignItems: "center",
      flexWrap: "wrap",
      padding: "2.5px",
      borderRadius: 5,
      ':focus': {
          border: "solid 2px",
      }
    },
    container:{
      flex: 1
    },
    containerOpen: {
  
    },
    input: {
      border: 'none',
      outline: 'none',
      boxSizing: 'border-box',
      width: '100%',
      padding: 5,
      margin: 2.5,
      backgroundColor: 'transparent',
      fontcolor : '#333333',
     
      
    },
  

    suggestionsContainer: {
  
    },
    suggestionsList: {
      position: 'absolute',
      border: '2px solid gray',
      zIndex: 10,
      fontcolor : '#000000',
      left: 0,
      top: '100%',
      width: '100%',
      backgroundColor: 'transparnet',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    suggestion: {
      padding: '5px 15px'
    },
    suggestionHighlighted: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
    sectionContainer: {
  
    },
    sectionTitle: {
  
    },
  }
  
  export default theme;
  
  export const chipTheme = {
    chip: {
      padding: 5,
      background: "#ccc",
      margin: "2.5px",
      borderRadius: 3,
      cursor: 'default',
      
    },
    chipSelected: {
      background: '#888',
    },
    chipRemove: {
      fontWeight: "bold",
      cursor: "pointer",
      ':hover': {
        color: 'black',
      }
    }
  }
  