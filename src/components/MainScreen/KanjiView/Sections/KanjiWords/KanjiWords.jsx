import {React, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faDotCircle } from '@fortawesome/free-solid-svg-icons'

import api from 'lib/api';

import Word from './Word/Word.jsx';
import md5 from 'md5';

async function buildWords(data) {
    return data.map((item, index) => {
        const key = md5(`${index}${item}`);

        return <Word key={key} word={item}/>
    });
}

function KanjiWords({kanji}) {
    const [words, setWords] = useState([]);
    const [page, setPage] = useState(10);

    useEffect( _ => {
        setWords([]);
        setPage(10);

        api.words(kanji.kanji, data => {
            buildWords(data)
            .then(wordList => {
                setWords(wordList);
            });
        });
    }, [kanji]);

    return (
        <div id="kanji-words">
            <span>Words</span>
            {words.slice(0, page)}
            <button onClick={ _ => {setPage(page => page + 10)} }>
                <FontAwesomeIcon icon={page<words.length?faAngleDoubleDown:faDotCircle}/>
            </button>
        </div>
    ); 
}

export default KanjiWords;