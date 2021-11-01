import { combineReducers } from 'redux';
import PointReducers from './Reducers/PointReducer';

const Reducers = combineReducers({

    point:PointReducer

});


export default Reducers;