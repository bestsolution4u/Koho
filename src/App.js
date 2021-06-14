import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import creatSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import allReducers from './redux/reducers';
import rootSaga from "./redux/sagas";
import {Root} from 'native-base';
import {LogBox} from 'react-native';
import AppNavigation from "./navigations";

LogBox.ignoreAllLogs();
const sagaMiddleware = creatSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const App = () => {
    return (
        <Provider store={store}>
            <Root>
                <AppNavigation/>
            </Root>
        </Provider>
    );
};

export default App;
