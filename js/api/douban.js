//返回一个Promise
export default {
    getMoviesFromApi: async () => {
        try {
            let response = await fetch('https://api.douban.com/v2/movie/in_theaters');
            return await response.json();
        } catch(error) {
            //网络请求错误
            console.log(error);
        }
    },
    getMovieDetails: async (id) => {
        try {
            let response = await fetch(`https://api.douban.com/v2/movie/subject/${id}`);
            return await response.json();
        } catch(error) {
            //网络请求错误
            console.log(error);
        }
    }
}
