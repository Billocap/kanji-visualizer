import React from 'react';

function KanjiInfo({kanji}) {
    return (
        <div id="kanji-info">
            <div id="kanji">
                <span>{kanji.kanji}</span>
                <span id="code">{kanji.unicode.toUpperCase()}</span>
            </div>
            <div id="info">
                <span className="header">{(kanji.heisig_en || kanji.meanings[0] || "").toUpperCase()}</span>
                <span className="info-text">STROKE COUNT {kanji.stroke_count}</span>
                <span className="info-text">GRADE {kanji.grade || "-/-"}</span>
                <span className="info-text">JLPT {kanji.jlpt || "-/-"}</span>
            </div>
        </div>
    );
}

export default KanjiInfo;