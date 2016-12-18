/**
 * Created by apple12 on 2016/12/18.
 */

const callAPIMiddleware = (store) => (next) => (action) => {
    const { dispatch, getState} = store;
    const {
        types,
        shouldCallAPI = () => true,
        callAPI,
        payload,
    } = action;

    if (!types) {
        return next(action);
    }

    if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')){
        throw new Error('types中必须是三个类型字符串，代表请求开始、成功和失败')
    }

    if (typeof callAPI !== 'function') {
        throw new Error('callAPI必须为函数');
    }

    if (!shouldCallAPI(getState())) {
        return;
    }

    const [requestType, successType, failureType] = types;

    (async() => {
        //开始加载
        dispatch({
            ...payload,
            type: requestType,
        });

        try {
            //网络请求成功
            const result = await callAPI();
            console.log('请求结果: ', result);
            dispatch({
                ...payload,
                type: successType,
                data: result,
            });
        } catch (e) {
            dispatch({
                payload: payload,
                type: failureType,
                error: e,
            });
        }

    })();
};

export default callAPIMiddleware;