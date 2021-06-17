import activitiesTypes from '../types/activitiesTypes';
import { Action } from 'redux';
import { Activity } from '../../utils/typings';

const activitiesActions: IActivitiesActions = {
  initializeStart() {
    return {
      type: activitiesTypes.INITIALIZE_START,
    };
  },
  initializeFinish(activities: Array<Activity>) {
    return {
      type: activitiesTypes.INITIALIZE_FINISH,
      data: { activities }
    };
  },
  performActivities(activitiesIds: Array<number>) {
    return {
      type: activitiesTypes.PERFORM_ACTIVITIES,
      data: { activitiesIds }
    };
  },
}

export default activitiesActions;

export interface IActivitiesActions {
  initializeStart: () => Action;
  initializeFinish: (activities: Array<Activity>) => Action;
  performActivities: (activitiesIds: Array<number>) => Action;
}
