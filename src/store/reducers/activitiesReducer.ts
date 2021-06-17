import { Activity } from '../../utils/typings';
import activitiesTypes from '../types/activitiesTypes';

export interface IActivitiesReducerState {
  activities: Array<Activity>;
  listLoaded: boolean
}

export const initialState: IActivitiesReducerState = {
  activities: [],
  listLoaded: false
};

const activitiesReducer = (state: IActivitiesReducerState = initialState, action: any) => {
  switch (action.type) {
    case activitiesTypes.INITIALIZE_FINISH:
      return {
        ...state,
        activities: action.data.activities,
        listLoaded: true
      }
    case activitiesTypes.PERFORM_ACTIVITIES:
      return {
        ...state,
        activities: state.activities.map(activity => action.data.activitiesIds.includes(activity.id)
          ? { ...activity, timesPerformed: activity.timesPerformed + 1 } : activity)
      }
    default:
      return state
  }
};

export default activitiesReducer;


