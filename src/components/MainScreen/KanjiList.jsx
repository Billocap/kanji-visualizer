import React from 'react';

import $ from 'jquery';
import api from 'lib/api';
import md5 from 'md5';

function KanjiList({list, setKanji}) {
    const getKanji = value => {
        $("#kanji-view, .kanji-list").hide();

        $("#loading-screen").fadeIn("fast", _ => {
            api.kanji(value, data => {
                setKanji(data);

                $("#loading-screen, .kanji-list").hide();
                $("#kanji-view").fadeIn("fast");
            });
        })
    };

    const listItems = list.value.map((item, index) => {
        const key = md5(`${index}${item}`);

        return (
            <li key={key}>
                <button onClick={ _ => getKanji(item)}>
                    {item}
                </button>
            </li>
        );
    });

    return (
        <div className="kanji-list">
            <h1>{list.name} ({list.value.length} results)</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default KanjiList;