import { NgModule } from '@angular/core';
import { NgRedux, DevToolsExtension, select } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';
export { Observable } from 'rxjs';
import { combineReducers, bindActionCreators } from 'redux';
export { select, NgRedux } from 'ng2-redux';
export { AuthActions } from "./actions"
import { AuthActions } from "./actions"
import { AuthEpic } from "./epics"
import { authReducer } from "./reducers"

export interface IAppState {
    auth?: Object,
}

export const AppReducer = combineReducers<IAppState>({
    auth: authReducer
})

@NgModule({
    providers: [
        // Your Actions
        AuthActions,
        // Your Epics
        AuthEpic
    ]
})

export class ReduxStoreModule {
    constructor(private ngRedux: NgRedux<IAppState>, private ae: AuthEpic, private devTool: DevToolsExtension, ) {
        const middleware = [
            createEpicMiddleware(this.ae.requestLogin)
        ]

        this.ngRedux.configureStore(
            AppReducer,
            {},
            middleware,
            [devTool.isEnabled() ? devTool.enhancer() : f => f]
        )
    }



}