let apiLink = 'http://newsapi.org/v2/top-headlines?country=za&apiKey=d1a0c239730a4db5bcdb3c9084c57de2';

/*eslint no-undef:0 */
export const getHeadlines = ({ commit }) => {
    /**
     * 
     * Method to get data from the api
     */
    axios.get(apiLink).then((data) => {
        console.log(data);
        commit('GET_HEADLINES', data.data.articles)
    })
}

export const search = ({ commit }, keywords) => {
    commit('SEARCH', keywords)
}

export const dateFilter = ({ commit }, date) => {
    commit('DATE_FILTER', date)
}