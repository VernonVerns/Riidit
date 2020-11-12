
export const GET_HEADLINES = (state, headlines) => {
    state.headlines = headlines
    state.tempState = headlines
}

export const SEARCH = (state, keywords) => {
    state.headlines = state.tempState
    if (keywords != null) {
        keywords = keywords.toLowerCase()
        state.headlines = state.headlines.filter((headline) => {
            var title = headline.title.toLowerCase();
            var description = headline.description.toLowerCase();
            return title.includes(keywords) || description.includes(keywords)
        })
    }


}

export const DATE_FILTER = (state, date) => {
    state.headlines = state.tempState
    if (date != null) {
        state.headlines = state.headlines.filter((headline) => {
            return getFormattedDate(headline.publishedAt) == getFormattedDate(date)
        })
    }

}

function getFormattedDate(date) {
    let processedDate = new Date(date);
    let dd = processedDate.getDate();
    let mm = processedDate.getMonth() + 1;
    let yyyy = processedDate.getFullYear();

    if (dd < 10) {
        dd = `0${dd}`
    }

    if (mm < 10) {
        mm = `0${mm}`
    }

    return `${yyyy}-${mm}-${dd}`
}