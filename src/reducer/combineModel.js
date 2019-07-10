import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import common from '_p/./Home/common.model';
import {connectLoading} from './loadingMiddleware'
export default (history) => combineReducers({
        router: connectRouter(history),
        loading:connectLoading,
        common,
    }
)