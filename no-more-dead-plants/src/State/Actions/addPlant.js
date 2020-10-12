export const ADD_PLANT = "ADD_PLANT"

export const addPlant = plantInfo => {
    return {
        type: ADD_PLANT,
        payload: plantInfo
    }
}