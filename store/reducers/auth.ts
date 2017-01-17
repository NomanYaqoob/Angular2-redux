import { AuthActions } from "../actions";

interface IInitialState {
    status: boolean,
    user: Object
}

const initialState: IInitialState = {
    status: false,
    user: {}
}

export const authReducer = function (state: IInitialState = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case AuthActions.LOGIN_SUCCESS:
            return Object.assign(state, { user: { firstName: "Noman", lastName: "Yaqoob" } });
        default:
            return state;
    }
}

