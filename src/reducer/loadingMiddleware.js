const loadingInitialState = {
    status: false,
    msg: {},
};
let time;
export default store => next => action => {
    if (action.constructor === Promise) {
        if (time) {
            time = clearTimeout(time);
        }
        const _status = store.getState().loading.status;
        if (!_status) {
            store.dispatch({type: '@LOADING', payload: {status: true}});
        }
        action.then(() => {
            if (time) {
                time = clearTimeout(time);
            }
            time = setTimeout(() => {
                next({type: '@LOADING', payload: {status: false}})
            }, 200)
        }).catch(err => {
            time = setTimeout(() => {
                next({type: '@LOADING', payload: {status: false, msg: err}})
            }, 200)
        })
    } else {
        return next(action);
    }
};
export const connectLoading = (state = loadingInitialState, action) => {
    switch (action.type) {
        case "@LOADING":
            return {...state, ...action.payload};
        default:
            return state;

    }
};