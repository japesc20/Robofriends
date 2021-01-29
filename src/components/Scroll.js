import React from 'react';


function Scroll(props) {
    return (
        <div style={{overflowY: 'Scroll', border: '3px solid black', height: '700px'}} >
            {props.children}
        </div>
    )
}


export default Scroll;