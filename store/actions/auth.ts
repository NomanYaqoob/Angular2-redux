import { Injectable } from "@angular/core"
import { NgRedux } from "ng2-redux"
import { IAppState } from "../"

@Injectable()
export class AuthActions {

    static LOGIN_REQUEST: string = "LOGIN_REQUEST";
    static LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
    constructor(private ngRedux: NgRedux<IAppState>) {

    }

    requestLogin(user: Object) {
        return this.ngRedux.dispatch({
            type: AuthActions.LOGIN_REQUEST
        })
    }
}