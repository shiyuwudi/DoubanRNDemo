/**
 * Created by apple12 on 2016/12/4.
 */

export default (initialState, getData) => {
    return (state) => {
        const object = {};
        Object.keys(initialState).forEach((key)=>{
            object[key] = getData(state)[key];
        });
        return object;
    };
};