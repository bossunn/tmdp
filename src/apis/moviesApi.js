import axiosClient from "./axiosClient";

const moviesApi = {
    getTrending(params) {
        const url = `/trending/movie/day?api_key=ef00cf5a1cc0ab1356dff9793ace7634`
        return axiosClient.get(url, { params: params })
    },

    getGenre(params) {
        const url = `/genre/movie/list?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US`
        return axiosClient.get(url, {params: params})
    },

    getMovieSearch(params) {
        const url = `/search/movie?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US`;
        return axiosClient.get(url, {params: params})
    },

    getTvPopular(params) {
        const url = `/tv/popular?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US`;
        return axiosClient.get(url, {params: params});
    },

    getMoviePopular(params) {
        const url = `/movie/top_rated?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US`;
        return axiosClient.get(url, {params: params});
    },

    discover(params) {
        const url = `/discover/movie?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US`;
        console.log(url)
        return axiosClient.get(url, {params: params});
    },

    get(id) {
        const url = `/movie/${id}?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US`;
        return axiosClient.get(url);
    }
}

export default moviesApi;