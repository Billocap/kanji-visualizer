import React from 'react'

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function slide(to) {
    $("#search-modes").animate({
        left: `${to}px`
    }, "fast");
}

function ModeButton({dir}) {
    return (
        <button 
            className={`${dir} mode-button`}
            onClick={_ => slide(dir === "right" ? -300 : 0)}
        >
            <FontAwesomeIcon icon={dir === "right" ? faAngleRight : faAngleLeft}/>
        </button>
    )
}

export default ModeButton;
