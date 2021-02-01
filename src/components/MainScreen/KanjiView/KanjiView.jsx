import React from 'react';

import KanjiInfo from './Sections/KanjiInfo.jsx';
import KanjiGrammar from './Sections/KanjiGrammar/KanjiGrammar.jsx';
import KanjiWords from './Sections/KanjiWords/KanjiWords.jsx';

function KanjiView({kanji, setList}) {
    return (
        <div id="kanji-view">
            <KanjiInfo kanji={kanji}/>
            <KanjiGrammar kanji={kanji} setList={setList}/>
            <KanjiWords kanji={kanji}/>
        </div>
    );
}

export default KanjiView;