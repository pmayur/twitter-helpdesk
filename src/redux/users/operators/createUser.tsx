import * as actionCreators from '../actionCreators';

function createUser(authBody: any) {
    return async (dispatch: any, getState?: any) => {
        // dispatch(actionCreators.creatingUser());
        // const result = await userAuthService.createUser(authBody);
        // if (result.isLeft()) {
        //     const error: string = result.value;
        //     dispatch(actionCreators.creatingUserFailure(error));
        // } else {
        //     dispatch(actionCreators.creatingUserSuccess(result.value.getValue()));
        // }
    };
}

export { createUser };
