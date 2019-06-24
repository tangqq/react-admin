import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import common from '_p/Home/common.model';
export default (history) => combineReducers({
        router: connectRouter(history),
        common,
    }
)