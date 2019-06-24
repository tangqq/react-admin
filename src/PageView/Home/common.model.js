export const SET_COMMON = Symbol();


export const setCommonStore = (data)=>{
    return {type:SET_COMMON,data}
};
export const requireUserInfo = (data)=>(dispatch)=>{
    dispatch(setCommonStore({loading:true}));
    setTimeout(()=>{
        dispatch(setCommonStore({dataSource:{list:[1,2,3,4]}}))
        dispatch(setCommonStore({loading:false}))
    },1000)
};


export const commonInitialState = {
    status: {
        init: true,
        loading: false,
    },
    dataSource: {list: []}
};
export default (state=commonInitialState,action)=>{
    switch (action.type) {
        case SET_COMMON:
            return {...state,...action.data};
        default:
            return state;

    }
}