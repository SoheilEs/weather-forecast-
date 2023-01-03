const intialState = {
    loading : false,
    cites : [],
    error :"",
}

const citesReducer = (state = intialState , action) => {
    switch(action.type){
        case "FETCH_CITES_REQ":
            return{
                ...state,
                loading : true
            }
        case "FETCH_CITES_SUCCESS":
            return{
                cites :  action.payload,
                loading : false,
                error : ""

            }
        case "FETCH_CITES_FAIL":
            return{
                ...state,
                error: action.payload,
                loading : false
            }
        default: return state
    }
}

export default citesReducer;