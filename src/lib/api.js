import {get} from 'jquery';

/**
 * Returns a api url string.
 * @param {string} path 
 * @param {string} info 
 */
const url = (path, info) => `https://kanjiapi.dev/v1/${path}/${info}`;

/**
 * Api wrapper
 */
const api = {
    /**
     * Gets the information about the kanji.
     * @param {string} kanji 
     * @param {(data: object, status: string) => void} fn
     */
    kanji(kanji, fn) {
        get(url("kanji", kanji), fn);
    },
    /**
     * Gets the specified list.
     * @param {string} list 
     * @param {(data: object, status: string) => void} fn 
     */
    list(list, fn) {
        get(url("kanji", list), fn);
    },
    /**
     * Gets the words that use specified kanji.
     * @param {string} kanji 
     * @param {(data: object, status: string) => void} fn 
     */
    words(kanji, fn) {
        get(url("words", kanji), fn);
    },
    /**
     * Gets the kanjis he have the specified reading.
     * @param {string} kana 
     * @param {(data: object, status: string) => void} fn 
     */
    readings(kana, fn) {
        get(url("reading", kana), fn);
    }
};

export default api;