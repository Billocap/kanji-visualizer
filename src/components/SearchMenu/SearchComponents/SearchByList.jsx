import React from 'react';

import $ from 'jquery';

import api from 'lib/api';

import ModeButton from "./ModeButton.jsx";

const lists = [
    "joyo",
    "jinmeiyo",
    "grade-1",
    "grade-2",
    "grade-3",
    "grade-4",
    "grade-5",
    "grade-6",
    "grade-8",
    "all"
];

function SearchByList({list, setList}) {
    const clickHandle = value => {
        $("#kanji-view, .kanji-list").hide();

        $("#loading-screen").fadeIn("fast", _ => {
            api.list(value, data => {
                setList([{name: value, value: data}]);

                $("#loading-screen, #kanji-view").hide();
                $(".kanji-list").fadeIn("fast");
            });
        });
    };

    const listItems = lists.map(item => {
        return (
            <li key={item}>
                <button 
                    id={list[0].name===item ? "selected" : ""}
                    className="bold"
                    onClick={ _ => clickHandle(item)}
                >
                    {item[0].toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
            </li>
        );
    });
    
    return (
        <div className="search-mode">
            <h2>List</h2>
            <ul className="full-size">
                {listItems}
            </ul>
            <ModeButton dir="right"/>
        </div>
    );
}

export default SearchByList;