import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';

import tasksReducer from './reducers/tasks';
import matomeReducer from './reducers/matome';

import TodoApp from './containers/TodoApp';
import MatomeApp from './containers/MatomeApp';

const reducer = combineReducers({
    tasksReducer,
    matomeReducer
});

const store = createStore(reducer);

render(
    <>
    <Provider store={store}>
        <TodoApp />
        <hr />
        <MatomeApp test="abc" />
    </Provider>
    </>,
    document.getElementById('root')
);