import {combineReducers, compose, createStore} from 'redux';
import {UsersAction} from './users/actionCreators';
import usersReducer from './users/reducers';
import initialUserState, {UsersState} from './users/states';

export interface RootState {
    users: (state: UsersState | undefined, action: UsersAction) => UsersState;
}

const appReducers = combineReducers({
    users: usersReducer,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'USER_LOGGED_OUT') {
        state = {
            users: initialUserState,
        };
    }

    return appReducers(state, action);
};

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        compose((window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f)
    );
}
