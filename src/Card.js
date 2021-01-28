import React from 'react';


function Card() {
    return (
        <div className='bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5'>
            <img alt='robots' src='https://robohash.org/oops?200x200' />
            <div>
                <h2>Jane Doe</h2>
                <p>email@email.com</p>
            </div>
        </div>
    )
}

export default Card;