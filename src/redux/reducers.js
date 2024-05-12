import { CHANGE_AVATAR,CHANGE_DESIGN,CHANGE_INDUSTRY,CHANGE_STARTUPDESC,CHANGE_USP } from "./types";

const initialState = {
    avatar: '',
    design: '',
    industry: '',
    startupDesc: '',
    usp: ''
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_AVATAR:
            return{
                ...state,
                avatar: action.payload
            }
        case CHANGE_DESIGN:
            return{
                ...state,
                design: action.payload
            }
        case CHANGE_INDUSTRY:
            return{
                ...state,
                industry: action.payload
            }
        case CHANGE_STARTUPDESC:
            return{
                ...state,
                startupDesc: action.payload
            }
        case CHANGE_USP:
            return{
                ...state,
                usp:  action.payload
            }

        default: return state

    }
}

export default reducer;