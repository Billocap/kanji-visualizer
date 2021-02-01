import React from 'react';

import VariantList from './VariantList';
import GlossList from './GlossList';

function Word({word}) {
    const {variants, meanings} = word;

    return (
        <div className="word">
            <VariantList list={variants}/>
            <GlossList list={meanings}/>
        </div>
    );
}

export default Word;