export const TOGGLE_EDITING = "TOGGLE_EDITING"

export const toggleEditing = id => {
    return {
        type: TOGGLE_EDITING,
        payload: id
    }
}