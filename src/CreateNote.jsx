import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import  './createNote.css';

const  CreateNote = (props) => {

  const [note,setnote] = useState(
   { 
    title : "",
    content : "",
  }
  );
  
  const ip = (e) => {
    const {name,value} = e.target;

      
      setnote( (preval) => {

        return{
            ...preval,
            [name] : value,


        };

      })

    }

    const add = () =>{
      props.passNote(note);
      setnote({
        title : "",
        content : "",
      })

    }
  return (
<>
<center>
<div className = "main_div shadow p-3 mb-5">
    <input
     type="text" 
     value={note.title} 
     name= "title" 
     placeholder = "Title" 
     className = "in"
     onChange = {ip}
     />
     <br/><br/>
    <textarea  
    value={note.content}
    name= "content" 
    placeholder = "write a note" 
    className = "in"
    onChange = {ip}
      >
        </textarea>
        <br/><br/>
    {/* <button className= "add" ><AddIcon/></button> */}
    <button className="add shadow p-3 mb-5" onClick = {add} ><AddIcon /></button>
   
</div>
</center>
</>
  );
}

export default CreateNote;