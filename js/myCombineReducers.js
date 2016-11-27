/**
 * Created by apple12 on 2016/11/27.
 */
export default myCombineReducers = (reducers) => {

    const bigReducer = (state = {}, action) => {
        //大的reducer负责把任务交给小的reducer们
        /*
         * 要达到的效果就是:
         * reducers = {
         *   film: film,
         *   actors: actors,
         * }
         * 合并之后:
         * store = {
         *   film:  film(state.film, action),
         *   actors: actors(state.actors, action),
         *   ......
         * }
         *
         * */

        return Object.keys(reducers).reduce(
            (nextStore, key) => {
                nextStore[key] = reducers[key](state[key], action);
                return nextStore;
            }, {}
        );
    };
    return bigReducer;
};