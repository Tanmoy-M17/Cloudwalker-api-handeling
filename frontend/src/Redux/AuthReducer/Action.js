import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "./ActionType"

export const login=(payload)=>(dispatch)=>{
dispatch({type:USER_LOGIN_REQUEST});
return axios({
    method:"post",
    url:"http://localhost:4500/login",
    data:payload
}).then((r)=>dispatch({type:USER_LOGIN_SUCCESS,payload:r.data}))
.catch((err)=>dispatch({type:USER_LOGIN_FAILURE}))
}

export const signup=(payload)=>(dispatch)=>{
    dispatch({type:USER_SIGNUP_REQUEST});
    return axios({
        method:"post",
        url:"http://localhost:4500/register",
        data:payload
    }).then((r)=>dispatch({type:USER_SIGNUP_SUCCESS,payload:r.data}))
    .catch((r)=>dispatch({type:USER_SIGNUP_FAILURE,payload:r.json}))
    }

