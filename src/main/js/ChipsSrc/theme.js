import { Placeholder } from "semantic-ui-react";

const theme = {
    chipsContainer: {
      display: "flex",
      position: "relative",
      border: "1px solid #191919",
      backgroundColor: 'transparent',
      font: "18px Arial",
      fontWeight: "bold",
      minHeight: 24,
      alignItems: "center",
      flexWrap: "wrap",
      padding: "2.5px",
      borderRadius: 5,
      ':focus': {
          border: "1px solid #191919",
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
      fontcolor : '#191919',
      fontWeight: "bold"
     
      
    },
  

    suggestionsContainer: {
  
    },
    suggestionsList: {
      position: 'absolute',
      border: '1px solid #ccc',
      zIndex: 10,
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
      background: '#2d0c00'
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
        color: 'red',
      }
    }
  }
  