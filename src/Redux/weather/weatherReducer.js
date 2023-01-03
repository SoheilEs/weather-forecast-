const initalState = {
    weather : [],
    loading:false,
    error:""
}

const weatherReducer = (state=initalState, action) =>{
    switch(action.type){
        case'FETCH_REQ':
            return{
                ...state,
                loading : false
            }
        case'FETCH_SUCC':
            return{
                ...state,
                weather : action.payload,
                loading:true
            }
        case 'FETCH_FAIL':
            return{
                error : action.payload,
                loading: false
            }
        default :return state

    }
}
export default weatherReducer