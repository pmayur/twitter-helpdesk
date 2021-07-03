import { ReduxUtils } from '../../util/ReduxUtil';
import { UsersAction } from './actionCreators';
import * as actions from './actions';
import states, { UsersState } from './states';

function users(state: UsersState = states, action: UsersAction): UsersState {
    switch (action.type as actions.UsersActionType) {
        case actions.GETTING_PROFILE_DETAILS:
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isFetchingUser'),
            };
        case actions.GETTING_PROFILE_DETAILS_SUCCESS:
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isFetchingUser', true),
                isAuthenticated: true,
                user: { ...state.user, ...action.user },
            };
        case actions.GETTING_PROFILE_DETAILS_FAILURE:
            return {
                ...state,
                ...ReduxUtils.reportEventStatus('isFetchingUser', false),
                error: action.error,
            };
        default:
            return state;
    }
}

export default users;
