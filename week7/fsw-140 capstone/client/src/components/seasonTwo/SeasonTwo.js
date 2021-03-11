import React, { useContext, useEffect } from 'react';
import {BobContext} from '../../context/Context';
import Episode from '../episode/Episode'

import {map} from 'lodash';

export default function SeasonOne() {
    const {getSeasonTwo, data} = useContext(BobContext);

    useEffect(() => getSeasonTwo(), [])

    return (
        <div className='seasonOne'>
            <h1>Season Two</h1>
            <div className='list'>
                {map(data, seasonTwo => (<Episode data={seasonTwo} />))}
            </div>
        </div>
    )
}