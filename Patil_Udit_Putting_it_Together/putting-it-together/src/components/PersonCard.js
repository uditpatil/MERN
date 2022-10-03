import React, {useState} from 'react';

const PersonCard = (props) => {
    const [ inAge, setInAge ] = useState(props.inAge);
    return (
        <div>
            <h1>
                { props.firstName }, { props.lastName }
            </h1>
            <p>Age: { inAge }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ (event) => setInAge(inAge + 1)}>
                Birthday Button for { props.firstName } { props.lastName }
            </button>
        </div>
    );
}


export default PersonCard;