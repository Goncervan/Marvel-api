import axios from 'axios'

export default function getCharacters(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&offset=${page}`)
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: result.data.data
        })
    }
}

export function searchByName(name, page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=20&nameStartsWith=${name}&offset=${page}`)
        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: result.data.data
        })
    }
}
export function searchByStory(story, page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=20&nameStartsWith=${story}&offset=${page}`)
        return dispatch({
            type: 'SEARCH_BY_STORY',
            payload: result.data.data
        })
    }
}
export function searchByComic(comic, page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=20&nameStartsWith=${comic}&offset=${page}`)
        return dispatch({
            type: 'SEARCH_BY_COMIC',
            payload: result.data.data
        })
    }
}
export function searchBySerie(serie, page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=20&nameStartsWith=${serie}&offset=${page}`)
        return dispatch({
            type: 'SEARCH_BY_SERIE',
            payload: result.data.data
        })
    }
}