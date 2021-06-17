import { Activity } from '../../utils/typings';
import mediaTypes from '../types/activitiesTypes';

export interface IMediaReducerState {
  activities: Array<Activity>;
  listLoaded: boolean
}

export const initialState: IMediaReducerState = {
  activities: [],
  listLoaded: false
};

const mediaReducer = (state: IMediaReducerState = initialState, action: any) => {
  switch (action.type) {
    case mediaTypes.INITIALIZE_FINISH:
      return {
        ...state,
        activities: action.data.activities,
        listLoaded: true
      }
    case mediaTypes.PERFORM_ACTIVITIES:
      return {
        ...state,
        activities: state.activities.map(activity => action.data.activitiesIds.includes(activity.id)
          ? { ...activity, timesPerformed: activity.timesPerformed + 1 } : activity)
      }
    default:
      return state
  }
};

export default mediaReducer;


