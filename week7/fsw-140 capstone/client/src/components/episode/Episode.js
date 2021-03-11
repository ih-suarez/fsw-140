import React from 'react';

import './episode.css';

export default function Episode(props) {
    const {episode, title} = props.data;
    return (
        <div className='episode'>
            <p> {episode} </p>
            <p> {title} </p>
        </div>
    );
}
