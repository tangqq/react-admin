export const commonInitialState = {
    status: {
        init: true,
        loading: false,
    },
    dataSource: {list: []}
};
export default (state = commonInitialState, action) => {
    switch (action.type) {
        case "SET_COMMON":
            return {...state, ...action.data};
        default:
            return state;

    }
}
export const setCommonStore = (data) => {
    return {type: "SET_COMMON", data}
};
export const requireUserInfo = (data) => {
    return async (dispatch) => {
        const pro = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve({code: 1, msg: '成功'})
                dispatch(pro)
            },500)

        });
        dispatch(pro);
        const res = await pro;
        console.log('res', res)
        dispatch(setCommonStore({dataSource: res}))
    }
};