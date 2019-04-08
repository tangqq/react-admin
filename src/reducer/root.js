import {SET_DATA} from "../action";
const initialState={
    isAuth:false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {...state, ...action.data};
        default:
            return state
    }
};