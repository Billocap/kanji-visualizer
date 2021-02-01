import React from 'react';

import $ from 'jquery';
import md5 from 'md5';

import api from 'lib/api';

function GrammarBlock({header, list, notclickable, setList}) {
    const getReading = value => {
        $("#kanji-view, .kanji-list").hide();

        $("#loading-screen").fadeIn("fast", _ => {
            if (!notclickable) {
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
            }
        });
    };

    const listItems = list.map((item, index) => {
        const key = md5(`${index}${item}`);

        return (
            <li key={key}>
                {
                    notclickable ? 
                        item : 
                        <button className="kana" onClick={_ => getReading(item)}>
                            {item}
                        </button>
                }
            </li>);
    });

    return (
        <div className="grammar-block">
            <span>{header}</span>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default GrammarBlock;