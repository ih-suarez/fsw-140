import React, { useContext, useEffect } from 'react';
import {BobContext} from '../../context/Context';
import Episode from '../episode/Episode'

import './seasonOne.css'

import {map} from 'lodash';

export default function SeasonOne() {
    const {getSeasonOne, data} = useContext(BobContext);

    useEffect(() => getSeasonOne(), [])

    return (
        <div className='seasonOne'>
            <h1>Season One</h1>
            <div className='list'>
                {map(data, seasonOne => (<Episode data={seasonOne} />))}
            </div>
        </div>
    )
}
