import {React, Fragment} from 'react';

import md5 from 'md5';

function GlossList({list}) {
    const lists = list.map((item, index) => {
        const listItems = item.glosses.map((gloss, index) => {
            const key = md5(`${index}${item}`);

            return <li className="gloss" key={key}>{gloss}</li>}
        );

        const key = md5(`${index}${item}`);

        return (
            <ul key={key} className="glosses-list">
                {listItems}
            </ul>
        );
    });

    return (
        <Fragment>
            {lists}
        </Fragment>
    );
}

export default GlossList;