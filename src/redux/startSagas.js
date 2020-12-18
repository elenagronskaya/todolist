import {todosSaga} from './todo/sagas'

export const startSagas = (sagaMiddleware) => {
    [todosSaga].forEach(sagaMiddleware.run);
}