import {React, useState, useEffect} from 'react';

import SearchMenu from './SearchMenu/SearchMenu.jsx';
import MainScreen from './MainScreen/MainScreen.jsx';

import $ from 'jquery';
import placeholder from 'lib/placeholder';

import api from 'lib/api';

import Logo from 'assets/logo-github.svg';

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
            <a id="repo" rel="noreferer" href="https://github.com/Billocap/kanji-visualizer" target="_blank">
                <img src={Logo} alt="GitHub Logo" width="30" height="30"/>
            </a>
        </div>
    );
}

export default App;