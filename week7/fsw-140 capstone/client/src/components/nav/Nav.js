import React from 'react';
import {Link} from 'react-router-dom';

import './nav.css'

export default function Nav() {
    return (
        <nav>
            <Link className='link' to='/Home'>Home</Link>
            <Link className='link' to='/Season1'>Season One</Link>
            <Link className='link' to='/Season2'>Season Two</Link>
        </nav>
    );
}
