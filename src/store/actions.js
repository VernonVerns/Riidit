// let apiLink = 'http://newsapi.org/v2/top-headlines?country=za&apiKey=d1a0c239730a4db5bcdb3c9084c57de2';

//TEMPORARY STORAGE FOR TEST

import db from '../db'
// getHeadline(form)
/*eslint no-undef:0 */
export const getHeadlines = ({ commit }) => {

    commit('GET_HEADLINES', db)
    /**
     * 
     * Method we'll use to get data from the api
     */
    // axios.get(apiLink).then((data) => {
    //     console.log(data);
    //     commit('GET_HEADLINES', data.data.articles)
    // })
}

export const search = ({ commit }, keywords) => {
    commit('SEARCH', keywords)
}

export const dateFilter = ({ commit }, date) => {
    commit('DATE_FILTER', date)
}