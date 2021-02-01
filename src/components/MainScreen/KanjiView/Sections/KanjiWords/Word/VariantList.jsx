import React from 'react';

import md5 from 'md5';

function VariantList({list}) {
    const listItems = list.map((item, index) => {
        const {written, pronounced, priorities} = item;
        
        const key = md5(`${index}${item}`);;

        return (
            <li key={key}>
                <span className="info">{pronounced}</span>
                <span className="variant">{written}</span>
                <span className="info">{priorities.map(item => `${item} ` )}</span>
            </li>
        );
    });

    return (
        <ul className="variant-list">
            {listItems}
        </ul>
    );
}

export default VariantList;