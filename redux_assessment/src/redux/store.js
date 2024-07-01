import { createStore } from 'redux';
import formReducer from './reducer';
import { createStoreHook } from 'react-redux';

const store = createStore(formReducer);

export default store;