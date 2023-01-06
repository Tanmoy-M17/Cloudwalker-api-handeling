import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "./ActionType"

const initialState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case USER_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case USER_LOGIN_SUCCESS:{
            console.log(payload);
            return {
                ...state,
                isAuth:true,
                isLoading:false,
                isError:false,
                token:payload.token
            }
        }
        case USER_LOGIN_FAILURE:{
            console.log(payload);
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true,
                token:""
            }
        }
        case USER_SIGNUP_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case USER_SIGNUP_SUCCESS:{
            console.log(payload);
            return {
                ...state,
                isLoading:false,
                isError:false,
            }
        }
        case USER_SIGNUP_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true,
            }
        }
        default:{
            return {...state}
        }
    }
}