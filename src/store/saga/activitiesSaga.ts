import { call, put, takeLatest } from 'redux-saga/effects'
import moviesTypes from '../types/activitiesTypes'
import ActivitiesService from '../../services/ActivitiesService';
import activitiesActions from '../actions/activitiesActions';
import _ from 'lodash';
import helpers from '../../utils/helpers';
import { Activity } from '../../utils/typings'

export function* initialize() {

    let activities: Array<Activity> = []
    activities = yield call(ActivitiesService.getActivities)

    if (_.isEmpty(activities)) {
        yield call(helpers.handleNetworkError)
    }
    else yield put(activitiesActions.initializeFinish(activities))
}



export default [
    takeLatest(moviesTypes.INITIALIZE_START, initialize),
]