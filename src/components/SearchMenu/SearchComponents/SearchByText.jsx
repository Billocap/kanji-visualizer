import {React, useRef} from 'react';
import {toHiragana, toKatakana} from 'wanakana';

import $ from 'jquery';
import api from 'lib/api';

import ModeButton from "./ModeButton.jsx";

function SearchByText({setList, setKanji}) {
    const getKanji = value => {
        $("#kanji-view, .kanji-list").hide();

        $("#loading-screen").fadeIn("fast", _ => {
            api.kanji(value, data => {
                setKanji(data);
    
                $("#loading-screen, .kanji-list").hide();
                $("#kanji-view").fadeIn("fast");
            });
        });
    };

    const getReading = value => {
        $("#kanji-view, .kanji-list").hide();

        $("#loading-screen").fadeIn("fast", _ => {
            api.readings(value, data => {
                setList([{
                    name: data.reading,
                    value: data.main_kanji
                },{
                    name: `Name Kanjis for ${data.reading}`,
                    value: data.name_kanji
                }]);
    
                $("#loading-screen, #kanji-view").hide();
                $(".kanji-list").fadeIn("fast");
            });
        });
    };

    const kanjiInput = useRef(null);
    const readingInput = useRef(null);

    return (
        <div className="search-mode">
            <h2>Reading</h2>
            <input type="text" ref={readingInput} placeholder="Reading"/>
            <div id="search-cont" className="horizontal flex-box">
                <button
                    className="half left search-button"
                    onClick={_ => getReading(toKatakana(readingInput.current.value))}
                >Onyomi</button>
                <button
                    className="half right search-button"
                    onClick={_ => getReading(toHiragana(readingInput.current.value))}
                >Kunyomi</button>
            </div>
            <h2>Kanji</h2>
            <input type="text" ref={kanjiInput} placeholder="Kanji"/>
            <button
                className="search-button"
                onClick={_ => getKanji(kanjiInput.current.value)}
            >Search Kanji</button>
            <ModeButton dir="left"/>
        </div>
    );
}

export default SearchByText;