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

    discover(params) {
        const url = `/discover/movie?api_key=ef00cf5a1cc0ab1356dff9793ace7634&language=en-US`;
        console.log(url)
        return axiosClient.get(url, {params: params});
    }
}

export default moviesApi;