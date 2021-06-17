import { Activity } from '../../utils/typings';
import mediaTypes from '../types/activitiesTypes';

export interface IMediaReducerState {
  activities: Array<Activity>;
  listsLoaded: boolean
}

export const initialState: IMediaReducerState = {
  activities: [],
  listsLoaded: false
};

const mediaReducer = (state: IMediaReducerState = initialState, action: any) => {
  switch (action.type) {
    case mediaTypes.INITIALIZE_FINISH:
      return {
        ...state,
        activities: action.data.activities,
        listsLoaded: true
      }
    default:
      return state
  }
};

export default mediaReducer;


