import { all } from 'redux-saga/effects'
import activitiesSaga from './activitiesSaga';


export default function* rootSaga() {
    yield all([
        ...activitiesSaga,
    ])
}