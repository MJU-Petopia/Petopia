import { startLoading, finishLoading } from "../modules/Loading";

export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    
    return (params=[]) => async dispatch => {
        dispatch({type});
        dispatch(startLoading(type))
        try{
            const response = await request(...params);
            dispatch({
                type: SUCCESS,
                payload: response
            })
            dispatch(finishLoading(type))
        } catch (e) {
            console.log(e)
            dispatch({
                type: FAILURE,
                payload: e.response.error,
                error: true
            })
            dispatch(finishLoading(type))
            throw e;
        }
    }
}