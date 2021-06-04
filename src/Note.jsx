import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './note.css';


const Note = (props) => {
  const del = () =>{
    props.deleteItem(props.id);
  }
    return (
  <>
 
    <div className = "note_div shadow p-3 mb-5 col-sm-3  " >
        <h1 className = "text-center title"> {props.title}</h1><br/>
        <p> {props.content}</p>
        <button className = "text-right"  onClick={del}>< DeleteOutlineIcon/></button>
        <a href ="https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button">
        {/* <Link to="/www.google.com"> */}
     <button type="button">
          Click Me!
     </button>
      {/* </Link> */}
      </a>
    </div>
    
  </>
    );
  }
  
  export default Note;