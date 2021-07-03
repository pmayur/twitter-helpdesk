import { Profile } from '../../models/user';
import * as actions from './actions';

export type UsersAction = { [key: string]: actions.UsersActionType | any };

function gettingUserProfile(): UsersAction {
    return {
        type: actions.GETTING_PROFILE_DETAILS,
    };
}

function gettingUserProfileSuccess(
    user: Profile
): UsersAction & { user: Profile } {
    return {
        type: actions.GETTING_PROFILE_DETAILS_SUCCESS,
        user,
    };
}

function gettingUserProfileFailure(
    error: string
): UsersAction & { error: string } {
    return {
        type: actions.GETTING_PROFILE_DETAILS_FAILURE,
        error,
    };
}

export {
    gettingUserProfile,
    gettingUserProfileSuccess,
    gettingUserProfileFailure,
};
