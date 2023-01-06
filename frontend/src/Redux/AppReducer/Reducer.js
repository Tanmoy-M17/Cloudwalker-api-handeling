import { GET_CITIES_FAILURE, GET_CITIES_REQUEST, GET_CITIES_SUCCESS, GET_STATES_FAILURE, GET_STATES_REQUEST, GET_STATES_SUCCESS } from "./actionType"

const intialState={
    States:[],
    Cities:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case GET_STATES_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_STATES_SUCCESS:{
            return {
                ...state,
                States:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_STATES_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case GET_CITIES_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_CITIES_SUCCESS:{
            return {
                ...state,
                Cities:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_CITIES_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }   
    
        default:
            return {...state}
    }
}