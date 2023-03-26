import {createStore} from 'redux';
import { rootReducer } from './Reducers/RootRuducer';
const store = createStore(rootReducer);
export {store};