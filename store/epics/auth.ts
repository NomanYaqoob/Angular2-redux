import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable"
import { AuthActions } from "../actions/auth"
@Injectable()
export class AuthEpic {
    constructor() {

    }
    requestLogin = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_REQUEST)
            .switchMap(({payload}) => {
                return Observable.of({
                    type: AuthActions.LOGIN_SUCCESS,
                    payload: payload
                })
            })

}