// The API calls are assyncronous
// What can lead to some issues
// So a placeholder object is needed

const placeholder = {
    kanji: {
        kanji: "雨",
        grade: 1,
        stroke_count: 8,
        meanings: [
        "rain"
        ],
        kun_readings: [
        "あめ",
        "あま-",
        "-さめ"
        ],
        on_readings: [
        "ウ"
        ],
        name_readings: [],
        jlpt: 4,
        unicode: "96e8",
        heisig_en: "rain"
    },
    gradeList: [
        {
            name: "loading...",
            value: []
        }
    ]
};

export default placeholder;