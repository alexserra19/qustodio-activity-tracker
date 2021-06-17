import mediaTypes from '../types/activitiesTypes';
import { Action } from 'redux';
import { Activity } from '../../utils/typings';

const activitiesActions: IActivitiesActions = {
  initializeStart() {
    return {
      type: mediaTypes.INITIALIZE_START,
    };
  },
  initializeFinish(
    activities: Array<Activity>,
  ) {
    return {
      type: mediaTypes.INITIALIZE_FINISH,
      data: { activities }
    };
  },
}

export default activitiesActions;

export interface IActivitiesActions {
  initializeStart: () => Action;
  initializeFinish: (
    activities: Array<Activity>,
  ) => Action;
}
