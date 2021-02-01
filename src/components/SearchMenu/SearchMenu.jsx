import {React, memo} from 'react';

import SearchByList from './SearchComponents/SearchByList.jsx';
import SearchByText from './SearchComponents/SearchByText.jsx';

function SearchMenu({list, setList, setKanji}) {
    return (
        <aside id="search-menu">
            <h1>漢字表示</h1>
            <div id="search-modes">
                <SearchByList list={list} setList={setList}/>
                <SearchByText setList={setList} setKanji={setKanji}/>
            </div>
        </aside>
    );
}

export default memo(SearchMenu);