export const GET_SOME = 'GET_SOME';

export const getSome = some => dispatch => {

    dispatch({
        type: GET_SOME,
        payload: some,
    })

}