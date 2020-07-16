import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './src/reducers/index';
import rootSaga from './src/Saga';

const sagaMiddleware = createSagaMiddleware()

export default function store() {
    const store = createStore(
        rootreducer,
        applyMiddleware(
            sagaMiddleware,
        )
    )
    sagaMiddleware.run(rootSaga)
    return store;
}