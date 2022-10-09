import React from 'react'
import { useParams } from 'react-router-dom';
const ParamComp = (props) =>{
    const {word, col, backCol} = useParams();

    return(
        isNaN(word)?
        <p style={col ?
            {color: col, backgroundColor: backCol}:null
        }>
        This is a word: {word}</p> :
        <p> this is a number: {word}</p>
    )
}
export default ParamComp;