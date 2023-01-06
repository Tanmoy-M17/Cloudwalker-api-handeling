import axios from "axios";
import { GET_CITIES_FAILURE, GET_CITIES_REQUEST, GET_CITIES_SUCCESS, GET_STATES_FAILURE, GET_STATES_REQUEST, GET_STATES_SUCCESS } from "./actionType"

export const getStates=(params)=>(dispatch)=>{
    dispatch({type:GET_STATES_REQUEST});
    axios.get("https://www.universal-tutorial.com/api/states/india",{
        headers:{
        "content_type": "application / json",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ0YW5tb3ltb25kYWwxN2VAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiTENUakhVeFRrdEtrNU1oaVdldko1SnM2dkNaVjVmUjhZM3JkY3NpdWtoZDVuZzJDQ3JyMi1EUWdwOFFEenhtNGlNZyJ9LCJleHAiOjE2NzMwNjkzNTV9.QjRxpAJ59i7jBALZA-qXD0i3OfilWaXk2AevfbPjWm8'
        }
    })
    .then((r)=>dispatch({type:GET_STATES_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_STATES_FAILURE}))
}

export const getCities=(params)=>(dispatch)=>{
    dispatch({type:GET_CITIES_REQUEST});
    axios.get("https://www.universal-tutorial.com/api/cities/West Bengal",{
        headers:{
        "content_type": "application / json",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ0YW5tb3ltb25kYWwxN2VAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiTENUakhVeFRrdEtrNU1oaVdldko1SnM2dkNaVjVmUjhZM3JkY3NpdWtoZDVuZzJDQ3JyMi1EUWdwOFFEenhtNGlNZyJ9LCJleHAiOjE2NzMwNjkzNTV9.QjRxpAJ59i7jBALZA-qXD0i3OfilWaXk2AevfbPjWm8'
        }
    })
    .then((r)=>dispatch({type:GET_CITIES_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_CITIES_FAILURE}))
}
    