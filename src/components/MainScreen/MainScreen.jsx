import React from 'react';

import md5 from 'md5';

import KanjiList from './KanjiList.jsx';
import KanjiView from './KanjiView/KanjiView.jsx';
import LoadingScreen from './LoadingScreen.jsx';

function MainScreen({kanjiBundle, listBundle}) {
    const {list, setList} = listBundle;
    const {kanji, setKanji} = kanjiBundle;

    const readings = list.map((item, index) => {
        const key = md5(`${index}${item}`);

        return <KanjiList key={key} list={item} setKanji={setKanji}/>;
    });

    return (
        <main>
            {readings}
            <KanjiView kanji={kanji} setList={setList}/>
            <LoadingScreen/>
        </main>
    );
}

export default MainScreen;