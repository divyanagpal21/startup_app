import { CHANGE_AVATAR,CHANGE_INDUSTRY,CHANGE_DESIGN,CHANGE_STARTUPDESC,CHANGE_USP } from "./types";

export const changeAvatar = avatar => {
    return{
        type: CHANGE_AVATAR,
        payload: avatar,
    }
}

export const changeIndustry = industry => {
    return{
        type: CHANGE_INDUSTRY,
        payload: industry
    }
}

export const changeDesign = design => {
    return{
        type: CHANGE_DESIGN,
        payload: design
    }
}

export const changeStartUpDesc = desc => {
    return{
        type: CHANGE_STARTUPDESC,
        payload: desc
    }
}

export const changeUsp = usp => {
    return{
        type: CHANGE_USP,
        payload: usp
    }
}