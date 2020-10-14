export const EDIT_PLANT = "EDIT_PLANT"

export const editPlant = plantInfo => {
    return {
        type: EDIT_PLANT,
        payload: plantInfo
    }
}