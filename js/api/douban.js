//返回一个Promise
export default {
    getMoviesFromApi: async () => {
        let response = await fetch('https://api.douban.com/v2/movie/in_theaters');
        return await response.json();
    },
    getMovieDetails: async (id) => {
        let response = await fetch(`https://api.douban.com/v2/movie/subject/${id}`);
        return await response.json();
    }
}
