import React from 'react';

import GrammarBlock from './GrammarBlock.jsx';

function KanjiGrammar({kanji, setList}) {
    return (
        <div id="kanji-grammar">
            <GrammarBlock header="Meanings" list={kanji.meanings} notclickable="true"/>
            <GrammarBlock header="Onyomis" list={kanji.on_readings} setList={setList}/>
            <GrammarBlock header="Names" list={kanji.name_readings} setList={setList}/>
            <GrammarBlock header="Kunyomis" list={kanji.kun_readings} setList={setList}/>
        </div>
    );
}

export default KanjiGrammar;