import { LoginDTO } from '../../../dtos/user';

function login(dto: LoginDTO) {
    return async (dispatch: any, getState?: any) => {
        // dispatch(actionCreators.loggingIn());
        // const result = await userAuthService.loginUser(authDto);
        // if (result.isLeft()) {
        //     const error: string = result.value;
        //     dispatch(actionCreators.loggingInFailure(error));
        // } else {
        //     dispatch(actionCreators.loggingInSuccess(result.value.getValue()));
        // }
    };
}

export { login };
