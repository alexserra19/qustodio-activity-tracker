import { all } from 'redux-saga/effects'
import mediaSaga from './activitiesSaga';


export default function* rootSaga() {
    yield all([
        ...mediaSaga,
    ])
}