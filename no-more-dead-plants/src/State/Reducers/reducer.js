//import actions
import {WATER_PLANT} from '../Actions/waterPlant'
import { ADD_PLANT } from '../Actions/addPlant'
import { TOGGLE_EDITING } from '../Actions/toggleEditing'
import { TOGGLE_ADDING } from '../Actions/toggleAdding'
//need some dates to calculate last watered dates for our plant friends :)
const plant1Date = new Date();
const plant2Date = new Date()
const defaultState = {
    adding: false,
    editing: false,
    next_id: 3,
    plants: [
        {
            id: 1,
            name: 'Happy Little Fern',
            watering_history: plant1Date.setDate(plant1Date.getDate() - 6),
            picture_url: 'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202040/0048/faux-potted-green-fern-plant-o.jpg',
            location: 'Bookshelf',
            watering_goal_in_days: 5},
        {
            id: 2,
            name: 'Fiddly Fig',
            watering_history: plant2Date.setDate(plant2Date.getDate() - 1),
            picture_url: 'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/LBE-14-LBE-CYL-14-WHT_Fiddle-Leaf-Fig-Tree-14.jpg?v=1590448760',
            location: 'porch',
            watering_goal_in_days: 3
        }
    ]
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case WATER_PLANT:
            const newStatePlants = state.plants.map(plant => {
                if (plant.id === action.payload.plantId) {
                    return {
                        ...plant,
                        watering_history: action.payload.wateringDate
                    } 
                }
                else return plant
            })
            return {
                ...state,
                plants: newStatePlants
            }
        case ADD_PLANT:
            const newPlantArray = state.plants
            newPlantArray.push(action.payload)
            return {
                ...state,
                plants: newPlantArray,
                next_id: state.next_id + 1
            }
        case TOGGLE_ADDING:
            return {
                ...state,
                adding: !state.adding
            }
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            }
        
        //switch statement goes here, if action is taken
        default: return state
    }
}