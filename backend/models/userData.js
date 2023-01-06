var mongoose=require('mongoose');

const userdataSchema=mongoose.Schema({
    "user": { "type": "string" },
    "DOB": { "type": "string" },
    "lastacessIP": { "type": "string" },
    "fullname": { "type": "string" },
    "mother_name": { "type": "string" },
    "products": {
        "type": "array",
        "items": { "type": "string" }
    },
    "hobbies": {
        "type": "array",
        "items": { "type": "string" }
    },
    "state": {
        "type": "array",
        "items": { "type": "string" }
    },
    "city": {
        "type": "array",
        "items": { "type": "string" }
    },
    "Postal code": {
        "type": "array",
        "items": { "type": "string" }
    }
},
{
    versionKey:false
})

const UserdataModel=mongoose.model("userData",userdataSchema)