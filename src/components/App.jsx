import {React, useState, useEffect} from 'react';

import SearchMenu from './SearchMenu/SearchMenu.jsx';
import MainScreen from './MainScreen/MainScreen.jsx';

import $ from 'jquery';
import placeholder from 'lib/placeholder';

import api from 'lib/api';

function App() {
    const [list, setList] = useState(placeholder.gradeList);
    const [kanji, setKanji] = useState(placeholder.kanji);

    useEffect( _ => {
        $("#kanji-view, .kanji-list").hide();

        $("#loading-screen").fadeIn("fast", _ => {
            api.list("grade-1", data => {
                setList([{name: "grade-1", value: data}]);

                $("#loading-screen, #kanji-view").hide();
                $(".kanji-list").fadeIn("fast");
            });
        });
    }, []);

    return (
        <div id="app">
            <SearchMenu setKanji={setKanji} list={list} setList={setList}/>
            <MainScreen kanjiBundle={{kanji, setKanji}} listBundle={{list, setList}}/>
        </div>
    );
}

export default App;